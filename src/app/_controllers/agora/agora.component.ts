import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Agora } from 'src/app/_modeles/agora/agora';
import { Conso } from 'src/app/_modeles/agora/conso';
import { Medecin } from 'src/app/_modeles/medecin/Medecin';
import { AgoraService } from 'src/app/_services/agora/agora.service';
import { MedecinService } from 'src/app/_services/medecin/medecin.service';
import { NgxAgoraService, Stream, AgoraClient, ClientEvent, StreamEvent } from 'ngx-agora';

@Component({
  selector: 'app-agora',
  templateUrl: './agora.component.html',
  styleUrls: ['./agora.component.scss'],
  providers: [MessageService, ConfirmationService, DialogService]
})
export class AgoraComponent implements OnInit {

  liste: Agora[];
  virtuelle: Agora[];
  specialite: Agora;
  specialite1: Conso;
  entityDialog: boolean;
  totalRecords: number;
  liste_employe: Medecin[];
  loading: boolean;
  selectedEntity: Agora[];
  submitted: boolean;
  selectAll: boolean = false;
  cols: any[] = [];
  data_create = {
    id: null,
    dateDebut: "",
    dateFin: "",
    assure: {
      id: null,
      user: {
        id: null,
        dateNaissance: "",
        fullName: "",
        nom: "",
      }
    },
    employeTraitant: {
      id: null,
      user: {
        id: null,
        fullName: "",
        nom: "",
      }
    },
    gerant: {
      id: null,
      user: {
        id: null,
        fullName: "",
        nom: "",
      }
    },
    createdAt: "",
    updatedAt: "",
    version: null,
    active: null,

  };
  items: MenuItem[];
  home: MenuItem;
  data_delete = Array();
  //====================
  title = 'angular-video';
  localCallId = 'agora_local';
  remoteCalls: string[] = [];
  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;




  constructor(public dialogService: DialogService, private ngxAgoraService: NgxAgoraService, private employeTraitant: MedecinService, private service: AgoraService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.employeTraitant.getListeEmployeTraitant().then(data => this.liste_employe = data.filter(val => val.active == 0));
    this.uid = Math.floor(Math.random() * 100);
  }
  ngOnInit() {
    this.items = [
      { label: 'Agora' },
      { label: 'Liste des appels en cours', routerLink: '' },

    ];
    this.home = { icon: 'pi pi-home' };

    this.loading = true;
    this.employeTraitant.getListeEmployeTraitant().then(data => this.liste_employe = data.filter(val => val.active == 0));
    this.service.getListe().then(data => { this.liste = data.slice(0, 6).filter(val => val.active == 0 && val.dateFin == null); this.totalRecords = this.liste.length; });
    this.service.getListe().then(data => { this.virtuelle = data.filter(val => val.active == 0 && val.dateFin == null); this.totalRecords = this.virtuelle.length; this.loading = false; });
  }


  lancerCall() {
    this.loading = true;
    setTimeout(() => {

      this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
      this.assignClientHandlers();

      this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });

      this.assignLocalStreamHandlers();
      // Join and publish methods added in this step
      this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
      this.loading = false;
    }, 3000);

  }

  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join(null, 'foo-bar', this.uid, onSuccess, onFailure);
  }


  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  //start method
  private assignClientHandlers(): void {

    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      console.log("hjlekuyelikyhejkeyjek",id);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });

  }//end method

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        this.localStream.play(this.localCallId);
        if (onSuccess) {
          onSuccess();
        }
      },
      err => console.error('getUserMedia failed', err)
    );
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }


  //===========================================
  onSelectAllChange(event) {
    const checked = event.checked;

    if (checked) {
      this.service.getListe().then(res => {
        this.selectedEntity = res;
        this.selectAll = true;
      });
    }
    else {
      this.selectedEntity = [];
      this.selectAll = false;
    }
  }
  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;
    //const filtres : LazyLoadEvent = event ? event:{first:0 , rows: 7, sortOrder:1, filters:{}}
    setTimeout(() => {
      if (this.virtuelle) {
        this.liste = this.virtuelle.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }


    }, 1000);
  }


  editProduct(specialite: Agora) {
    this.specialite = { ...specialite };
    this.specialite1 = this.data_create;
    this.entityDialog = true;
  }



  hideDialog() {
    this.entityDialog = false;
    this.submitted = false;
  }
  saveProduct() {
    this.submitted = true;
    const data = {
      employeTraitant: this.specialite.employeTraitant.id,
      id: this.specialite.id,

    }


    this.liste[this.findIndexById(this.specialite.id)] = this.specialite;

    this.service.setEmployeTraitant(this.specialite.id, this.specialite.employeTraitant.id, 10
    ).subscribe(
      response => {

        this.loading = true;
        setTimeout(() => {

          this.messageService.add({ severity: 'success', summary: 'Successful', detail: "Vous venez d'assigner un employé pour cette reunion", life: 3000 });

          this.loading = false;

        }, 1000);

      }
    )

    this.liste = [...this.liste];
    this.entityDialog = false;
    this.specialite = { ...this.specialite };

  }


  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.liste.length; i++) {
      if (this.liste[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  onSelectionChange(value = []) {
    this.selectAll = value.length === this.totalRecords;
    this.selectedEntity = value;
  }
  //===================================================
}
