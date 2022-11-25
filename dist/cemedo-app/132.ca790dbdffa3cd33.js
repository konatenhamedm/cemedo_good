"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[132],{16132:(M,T,i)=>{i.r(T),i.d(T,{AdminModule:()=>f});var l=i(69808),v=i(44841),n=i(40520),e=i(94829),u=i(20776),h=i(25245),q=i(47423),a=i(91083),Z=i(5e3),U=i(41299),s=i(42115),A=i(53251);const m=function(){return[]},r=[{path:"dashboard",loadChildren:()=>Promise.all([i.e(943),i.e(799)]).then(i.bind(i,48799)).then(t=>t.DashboardModule)},{path:"facture",component:(()=>{class t{constructor(){this.doughnutChartLabels=["consultation","appel t\xe9l\xe9phonique","chat"],this.doughnutChartData=[650,945,8875],this.doughnutChartLegend=!1,this.doughnutChartColors=[{backgroundColor:["#735A84","#E76412","#9BC311"]}],this.doughnutChartType="doughnut",this.doughnutChartOptions={animation:!1,responsive:!0}}ngOnInit(){this.chartOptions={series:[{name:"revenu",data:[44e6,55e5,41e5,67e6,22e6,43000004,55e5,41e5,67e6,22e6,43e6,43e6]}],chart:{type:"bar",height:350,foreColor:"#9aa0ac",stacked:!0,toolbar:{show:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"30%"}},dataLabels:{enabled:!1},xaxis:{type:"category",categories:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","Decembre"]},legend:{show:!1},fill:{opacity:.8,colors:["#01B8AA","#374649","#FD625E","#F2C80F"]},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}}return t.\u0275fac=function(d){return new(d||t)},t.\u0275cmp=Z.Xpm({type:t,selectors:[["app-facture"]],decls:712,vars:18,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"card"],[1,"body"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12"],[1,"col-lg-12","col-md-12","col-sm-12"],[1,"info-box7","l-bg-card1","order-info-box7"],[1,"info-box7-block"],[1,"text-end"],[1,"fas","fa-user-injured","float-start"],[1,"m-b-0","d-flex"],[1,"material-icons","col-green","pr-2"],[1,"col-lg-6","col-md-6","col-sm-6"],[1,"info-box7","l-bg-card2","order-info-box7"],[1,"m-b-15"],[1,"far","fa-calendar-check","float-start"],[1,"material-icons","col-orange","pr-2"],[1,"font-weight-bold","float-end","mb-0"],[1,"info-box7","l-bg-card3","order-info-box7"],[1,"fas","fa-cut","float-start"],[1,"card","card-statistic-2"],[1,"clearfix"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","tooltip","legend","fill"],[1,"info-box7","l-bg-card4","order-info-box7"],[1,"fab","fa-internet-explorer","float-start"],[1,"col-md-12","col-xl-12"],[1,"col-md-4"],[1,"tx-primary","m-b-30"],[1,"progress-list","m-b-10"],[1,"details"],[1,"title"],[1,"status"],[1,"progress-xs","not-rounded","progress"],["role","progressbar","aria-valuenow","6.3","aria-valuemax","100",1,"progress-bar","progress-bar-warning","width-per-40"],[1,"sr-only"],["role","progressbar","aria-valuenow","9","aria-valuemax","100",1,"progress-bar","progress-bar-danger","width-per-49"],["role","progressbar","aria-valuenow","84.7","aria-valuemax","100",1,"progress-bar","progress-bar-blue","width-per-65"],["role","progressbar","aria-valuenow","28","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-success","width-per-28"],[1,"col-md-4","mt-3"],[1,"recent-report__chart"],["baseChart","","chartType","doughnut",1,"chart",3,"data","labels","options","legend","colors"],[1,"country-chart"],[1,"d-flex","justify-content-between","mx-xl-5","mt-3"],[1,"chart-note"],[1,"dot","dot-product","bg-green"],[1,"mb-0"],[1,"dot","dot-product","bg-orange"],[1,"dot","dot-product","bg-purple"],["dynamicHeight",""],["label","Consultations"],[1,"list-unstyled","list-unstyled-border","list-unstyled-noborder"],[1,"app-list"],["alt","image","width","40","src","assets/images/user/usrbig1.jpg",1,"rounded-circle"],[1,"set-flex"],[1,"media-title","font-16"],[1,"text-job","text-muted","mb-0"],[1,"media-title","text-muted","mb-0"],[1,"text-job","font-16"],["alt","image","width","40","src","assets/images/user/usrbig2.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig3.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig4.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig6.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig7.jpg",1,"rounded-circle"],["label","Chats"],["label","Appel T\xe9l\xe9phonique"],[1,"list-unstyled","user-progress","list-unstyled-border","list-unstyled-noborder"],["alt","image","width","40","src","assets/images/user/usrbig8.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig9.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig5.jpg",1,"rounded-circle"],["alt","image","width","40","src","assets/images/user/usrbig10.jpg",1,"rounded-circle"],["label","Appel Vid\xe9o"],[1,"media-cta"]],template:function(d,g){1&d&&(Z.TgZ(0,"section",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z._UZ(3,"app-breadcrumb",3),Z.qZA(),Z.TgZ(4,"div",4),Z.TgZ(5,"div",5),Z.TgZ(6,"div",6),Z.TgZ(7,"div",7),Z.TgZ(8,"div",8),Z.TgZ(9,"div",9),Z.TgZ(10,"div",8),Z.TgZ(11,"div",10),Z.TgZ(12,"div",11),Z.TgZ(13,"div",12),Z.TgZ(14,"h2",13),Z._UZ(15,"i",14),Z.qZA(),Z.TgZ(16,"p",15),Z.TgZ(17,"i",16),Z._uU(18,"trending_up"),Z.qZA(),Z._uU(19,"Revenu Total: 37 000 000 FCFA "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(20,"div",8),Z.TgZ(21,"div",17),Z.TgZ(22,"div",18),Z.TgZ(23,"div",12),Z.TgZ(24,"p",19),Z._uU(25,"Consultations"),Z.qZA(),Z.TgZ(26,"h2",13),Z._UZ(27,"i",20),Z.TgZ(28,"span"),Z._uU(29,"650"),Z.qZA(),Z.qZA(),Z.TgZ(30,"p",15),Z.TgZ(31,"i",21),Z._uU(32,"trending_down"),Z.qZA(),Z._uU(33,"Co\xfbt : 20 000 000 FCFA "),Z.qZA(),Z.TgZ(34,"p",22),Z._uU(35,"Prix unitaire : 30 770 fcfa"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(36,"div",17),Z.TgZ(37,"div",23),Z.TgZ(38,"div",12),Z.TgZ(39,"p",19),Z._uU(40,"Appel Vid\xe9o"),Z.qZA(),Z.TgZ(41,"h2",13),Z._UZ(42,"i",24),Z.TgZ(43,"span"),Z._uU(44,"30"),Z.qZA(),Z.qZA(),Z.TgZ(45,"p",15),Z.TgZ(46,"i",21),Z._uU(47,"trending_down"),Z.qZA(),Z._uU(48,"Co\xfbt : 27 000 000 FCFA "),Z.qZA(),Z.TgZ(49,"p",22),Z._uU(50,"Prix unitaire : 40 770 fcfa"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(51,"div",9),Z.TgZ(52,"div",25),Z.TgZ(53,"div",26),Z._UZ(54,"apx-chart",27),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(55,"div",8),Z.TgZ(56,"div",9),Z.TgZ(57,"div",28),Z.TgZ(58,"div",12),Z.TgZ(59,"p",19),Z._uU(60,"Chats"),Z.qZA(),Z.TgZ(61,"h2",13),Z._UZ(62,"i",29),Z.TgZ(63,"span"),Z._uU(64,"8875"),Z.qZA(),Z.qZA(),Z.TgZ(65,"p",15),Z.TgZ(66,"i",16),Z._uU(67,"trending_up"),Z.qZA(),Z._uU(68,"Co\xfbt : 10 000 000 FCFA "),Z.qZA(),Z.TgZ(69,"p",22),Z._uU(70,"Prix unitaire : 1 127 fcfa"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(71,"div",17),Z.TgZ(72,"div",11),Z.TgZ(73,"div",12),Z.TgZ(74,"p",19),Z._uU(75,"Appel T\xe9l\xe9phonique"),Z.qZA(),Z.TgZ(76,"h2",13),Z._UZ(77,"i",14),Z.TgZ(78,"span"),Z._uU(79,"945"),Z.qZA(),Z.qZA(),Z.TgZ(80,"p",15),Z.TgZ(81,"i",16),Z._uU(82,"trending_up"),Z.qZA(),Z._uU(83,"Co\xfbt : 7 000 000 FCFA "),Z.qZA(),Z.TgZ(84,"p",22),Z._uU(85,"Prix unitaire : 7 407 fcfa"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(86,"div",8),Z.TgZ(87,"div",5),Z.TgZ(88,"div",6),Z.TgZ(89,"div",7),Z.TgZ(90,"div",8),Z.TgZ(91,"div",30),Z.TgZ(92,"div",8),Z.TgZ(93,"div",31),Z.TgZ(94,"h5",32),Z._uU(95,"Services"),Z.qZA(),Z.TgZ(96,"div",33),Z.TgZ(97,"div",34),Z.TgZ(98,"div",35),Z._uU(99,"Consultation"),Z.qZA(),Z.qZA(),Z.TgZ(100,"div",36),Z.TgZ(101,"span"),Z._uU(102,"6.3"),Z.qZA(),Z._uU(103,"% "),Z.qZA(),Z.TgZ(104,"div",37),Z.TgZ(105,"div",38),Z.TgZ(106,"span",39),Z._uU(107,"6.3%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(108,"div",33),Z.TgZ(109,"div",34),Z.TgZ(110,"div",35),Z._uU(111,"Appel T\xe9l\xe9phonique"),Z.qZA(),Z.qZA(),Z.TgZ(112,"div",36),Z.TgZ(113,"span"),Z._uU(114,"9"),Z.qZA(),Z._uU(115,"% "),Z.qZA(),Z.TgZ(116,"div",37),Z.TgZ(117,"div",40),Z.TgZ(118,"span",39),Z._uU(119,"9%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(120,"div",33),Z.TgZ(121,"div",34),Z.TgZ(122,"div",35),Z._uU(123,"Chats"),Z.qZA(),Z.qZA(),Z.TgZ(124,"div",36),Z.TgZ(125,"span"),Z._uU(126,"84.7"),Z.qZA(),Z._uU(127,"% "),Z.qZA(),Z.TgZ(128,"div",37),Z.TgZ(129,"div",41),Z.TgZ(130,"span",39),Z._uU(131,"84.7%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(132,"div",33),Z.TgZ(133,"div",34),Z.TgZ(134,"div",35),Z._uU(135,"Examen"),Z.qZA(),Z.qZA(),Z.TgZ(136,"div",36),Z.TgZ(137,"span"),Z._uU(138,"25"),Z.qZA(),Z._uU(139,"% "),Z.qZA(),Z.TgZ(140,"div",37),Z.TgZ(141,"div",42),Z.TgZ(142,"span",39),Z._uU(143,"25%"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(144,"div",43),Z.TgZ(145,"div",44),Z._UZ(146,"canvas",45),Z.qZA(),Z.qZA(),Z.TgZ(147,"div",43),Z.TgZ(148,"div",46),Z.TgZ(149,"div",47),Z.TgZ(150,"div",48),Z._UZ(151,"span",49),Z.TgZ(152,"span"),Z._uU(153,"Chat"),Z.qZA(),Z.qZA(),Z.TgZ(154,"p",50),Z._uU(155,"10 000 000 FCFA"),Z.qZA(),Z.qZA(),Z.TgZ(156,"div",47),Z.TgZ(157,"div",48),Z._UZ(158,"span",51),Z.TgZ(159,"span"),Z._uU(160,"Appel T\xe9l\xe9phonique"),Z.qZA(),Z.qZA(),Z.TgZ(161,"p",50),Z._uU(162,"7 000 000 FCFA"),Z.qZA(),Z.qZA(),Z.TgZ(163,"div",47),Z.TgZ(164,"div",48),Z._UZ(165,"span",52),Z.TgZ(166,"span"),Z._uU(167,"Consultation"),Z.qZA(),Z.qZA(),Z.TgZ(168,"p",50),Z._uU(169,"20 000 000 FCFA"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(170,"div",4),Z.TgZ(171,"div",5),Z.TgZ(172,"div",6),Z.TgZ(173,"div",7),Z.TgZ(174,"mat-tab-group",53),Z.TgZ(175,"mat-tab",54),Z.TgZ(176,"ul",55),Z.TgZ(177,"li",56),Z._UZ(178,"img",57),Z.TgZ(179,"div",58),Z.TgZ(180,"div",59),Z._uU(181,"Dr.Cara Stevens"),Z.qZA(),Z.TgZ(182,"div",60),Z._uU(183,"Radiologist"),Z.qZA(),Z.qZA(),Z.TgZ(184,"div",58),Z.TgZ(185,"div",59),Z._uU(186,"12 June '20"),Z.qZA(),Z.TgZ(187,"div",60),Z._uU(188,"09:00-10:00"),Z.qZA(),Z.qZA(),Z.TgZ(189,"div",58),Z.TgZ(190,"div",61),Z._uU(191,"Treatement"),Z.qZA(),Z.TgZ(192,"div",62),Z._uU(193,"CT scans"),Z.qZA(),Z.qZA(),Z.TgZ(194,"div",58),Z.TgZ(195,"div",61),Z._uU(196,"Contact Number"),Z.qZA(),Z.TgZ(197,"div",62),Z._uU(198,"+123 676545655"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(199,"li",56),Z._UZ(200,"img",63),Z.TgZ(201,"div",58),Z.TgZ(202,"div",59),Z._uU(203,"Dr.John Doe"),Z.qZA(),Z.TgZ(204,"div",60),Z._uU(205,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(206,"div",58),Z.TgZ(207,"div",59),Z._uU(208,"13 June '20"),Z.qZA(),Z.TgZ(209,"div",60),Z._uU(210,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(211,"div",58),Z.TgZ(212,"div",61),Z._uU(213,"Treatement"),Z.qZA(),Z.TgZ(214,"div",62),Z._uU(215,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(216,"div",58),Z.TgZ(217,"div",61),Z._uU(218,"Contact Number"),Z.qZA(),Z.TgZ(219,"div",62),Z._uU(220,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(221,"li",56),Z._UZ(222,"img",64),Z.TgZ(223,"div",58),Z.TgZ(224,"div",59),Z._uU(225,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(226,"div",60),Z._uU(227,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(228,"div",58),Z.TgZ(229,"div",59),Z._uU(230,"12 June '20"),Z.qZA(),Z.TgZ(231,"div",60),Z._uU(232,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(233,"div",58),Z.TgZ(234,"div",61),Z._uU(235,"Treatement"),Z.qZA(),Z.TgZ(236,"div",62),Z._uU(237,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(238,"div",58),Z.TgZ(239,"div",61),Z._uU(240,"Contact Number"),Z.qZA(),Z.TgZ(241,"div",62),Z._uU(242,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(243,"li",56),Z._UZ(244,"img",65),Z.TgZ(245,"div",58),Z.TgZ(246,"div",59),Z._uU(247,"Dr.Angelica Ramos"),Z.qZA(),Z.TgZ(248,"div",60),Z._uU(249,"Dentist"),Z.qZA(),Z.qZA(),Z.TgZ(250,"div",58),Z.TgZ(251,"div",59),Z._uU(252,"12 June '20"),Z.qZA(),Z.TgZ(253,"div",60),Z._uU(254,"11:00-12:00"),Z.qZA(),Z.qZA(),Z.TgZ(255,"div",58),Z.TgZ(256,"div",61),Z._uU(257,"Treatement"),Z.qZA(),Z.TgZ(258,"div",62),Z._uU(259,"Root Canal"),Z.qZA(),Z.qZA(),Z.TgZ(260,"div",58),Z.TgZ(261,"div",61),Z._uU(262,"Contact Number"),Z.qZA(),Z.TgZ(263,"div",62),Z._uU(264,"+123 87654533"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(265,"li",56),Z._UZ(266,"img",66),Z.TgZ(267,"div",58),Z.TgZ(268,"div",59),Z._uU(269,"Dr.Jens Brincker"),Z.qZA(),Z.TgZ(270,"div",60),Z._uU(271,"Endocrinologist"),Z.qZA(),Z.qZA(),Z.TgZ(272,"div",58),Z.TgZ(273,"div",59),Z._uU(274,"23 June '20"),Z.qZA(),Z.TgZ(275,"div",60),Z._uU(276,"04:00-05:00"),Z.qZA(),Z.qZA(),Z.TgZ(277,"div",58),Z.TgZ(278,"div",61),Z._uU(279,"Treatement"),Z.qZA(),Z.TgZ(280,"div",62),Z._uU(281,"Diabetes"),Z.qZA(),Z.qZA(),Z.TgZ(282,"div",58),Z.TgZ(283,"div",61),Z._uU(284,"Contact Number"),Z.qZA(),Z.TgZ(285,"div",62),Z._uU(286,"+123 45678345"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(287,"li",56),Z._UZ(288,"img",67),Z.TgZ(289,"div",58),Z.TgZ(290,"div",59),Z._uU(291,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(292,"div",60),Z._uU(293,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(294,"div",58),Z.TgZ(295,"div",59),Z._uU(296,"12 June '20"),Z.qZA(),Z.TgZ(297,"div",60),Z._uU(298,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(299,"div",58),Z.TgZ(300,"div",61),Z._uU(301,"Treatement"),Z.qZA(),Z.TgZ(302,"div",62),Z._uU(303,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(304,"div",58),Z.TgZ(305,"div",61),Z._uU(306,"Contact Number"),Z.qZA(),Z.TgZ(307,"div",62),Z._uU(308,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(309,"mat-tab",68),Z.TgZ(310,"ul",55),Z.TgZ(311,"li",56),Z._UZ(312,"img",57),Z.TgZ(313,"div",58),Z.TgZ(314,"div",59),Z._uU(315,"Dr.Cara Stevens"),Z.qZA(),Z.TgZ(316,"div",60),Z._uU(317,"Radiologist"),Z.qZA(),Z.qZA(),Z.TgZ(318,"div",58),Z.TgZ(319,"div",59),Z._uU(320,"12 June '20"),Z.qZA(),Z.TgZ(321,"div",60),Z._uU(322,"09:00-10:00"),Z.qZA(),Z.qZA(),Z.TgZ(323,"div",58),Z.TgZ(324,"div",61),Z._uU(325,"Treatement"),Z.qZA(),Z.TgZ(326,"div",62),Z._uU(327,"CT scans"),Z.qZA(),Z.qZA(),Z.TgZ(328,"div",58),Z.TgZ(329,"div",61),Z._uU(330,"Contact Number"),Z.qZA(),Z.TgZ(331,"div",62),Z._uU(332,"+123 676545655"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(333,"li",56),Z._UZ(334,"img",63),Z.TgZ(335,"div",58),Z.TgZ(336,"div",59),Z._uU(337,"Dr.John Doe"),Z.qZA(),Z.TgZ(338,"div",60),Z._uU(339,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(340,"div",58),Z.TgZ(341,"div",59),Z._uU(342,"13 June '20"),Z.qZA(),Z.TgZ(343,"div",60),Z._uU(344,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(345,"div",58),Z.TgZ(346,"div",61),Z._uU(347,"Treatement"),Z.qZA(),Z.TgZ(348,"div",62),Z._uU(349,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(350,"div",58),Z.TgZ(351,"div",61),Z._uU(352,"Contact Number"),Z.qZA(),Z.TgZ(353,"div",62),Z._uU(354,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(355,"li",56),Z._UZ(356,"img",64),Z.TgZ(357,"div",58),Z.TgZ(358,"div",59),Z._uU(359,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(360,"div",60),Z._uU(361,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(362,"div",58),Z.TgZ(363,"div",59),Z._uU(364,"12 June '20"),Z.qZA(),Z.TgZ(365,"div",60),Z._uU(366,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(367,"div",58),Z.TgZ(368,"div",61),Z._uU(369,"Treatement"),Z.qZA(),Z.TgZ(370,"div",62),Z._uU(371,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(372,"div",58),Z.TgZ(373,"div",61),Z._uU(374,"Contact Number"),Z.qZA(),Z.TgZ(375,"div",62),Z._uU(376,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(377,"li",56),Z._UZ(378,"img",65),Z.TgZ(379,"div",58),Z.TgZ(380,"div",59),Z._uU(381,"Dr.Angelica Ramos"),Z.qZA(),Z.TgZ(382,"div",60),Z._uU(383,"Dentist"),Z.qZA(),Z.qZA(),Z.TgZ(384,"div",58),Z.TgZ(385,"div",59),Z._uU(386,"12 June '20"),Z.qZA(),Z.TgZ(387,"div",60),Z._uU(388,"11:00-12:00"),Z.qZA(),Z.qZA(),Z.TgZ(389,"div",58),Z.TgZ(390,"div",61),Z._uU(391,"Treatement"),Z.qZA(),Z.TgZ(392,"div",62),Z._uU(393,"Root Canal"),Z.qZA(),Z.qZA(),Z.TgZ(394,"div",58),Z.TgZ(395,"div",61),Z._uU(396,"Contact Number"),Z.qZA(),Z.TgZ(397,"div",62),Z._uU(398,"+123 87654533"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(399,"li",56),Z._UZ(400,"img",66),Z.TgZ(401,"div",58),Z.TgZ(402,"div",59),Z._uU(403,"Dr.Jens Brincker"),Z.qZA(),Z.TgZ(404,"div",60),Z._uU(405,"Endocrinologist"),Z.qZA(),Z.qZA(),Z.TgZ(406,"div",58),Z.TgZ(407,"div",59),Z._uU(408,"23 June '20"),Z.qZA(),Z.TgZ(409,"div",60),Z._uU(410,"04:00-05:00"),Z.qZA(),Z.qZA(),Z.TgZ(411,"div",58),Z.TgZ(412,"div",61),Z._uU(413,"Treatement"),Z.qZA(),Z.TgZ(414,"div",62),Z._uU(415,"Diabetes"),Z.qZA(),Z.qZA(),Z.TgZ(416,"div",58),Z.TgZ(417,"div",61),Z._uU(418,"Contact Number"),Z.qZA(),Z.TgZ(419,"div",62),Z._uU(420,"+123 45678345"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(421,"li",56),Z._UZ(422,"img",67),Z.TgZ(423,"div",58),Z.TgZ(424,"div",59),Z._uU(425,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(426,"div",60),Z._uU(427,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(428,"div",58),Z.TgZ(429,"div",59),Z._uU(430,"12 June '20"),Z.qZA(),Z.TgZ(431,"div",60),Z._uU(432,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(433,"div",58),Z.TgZ(434,"div",61),Z._uU(435,"Treatement"),Z.qZA(),Z.TgZ(436,"div",62),Z._uU(437,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(438,"div",58),Z.TgZ(439,"div",61),Z._uU(440,"Contact Number"),Z.qZA(),Z.TgZ(441,"div",62),Z._uU(442,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(443,"mat-tab",69),Z.TgZ(444,"ul",70),Z.TgZ(445,"li",56),Z._UZ(446,"img",67),Z.TgZ(447,"div",58),Z.TgZ(448,"div",59),Z._uU(449,"Dr.Jens Brincker"),Z.qZA(),Z.TgZ(450,"div",60),Z._uU(451,"Endocrinologist"),Z.qZA(),Z.qZA(),Z.TgZ(452,"div",58),Z.TgZ(453,"div",59),Z._uU(454,"23 June '20"),Z.qZA(),Z.TgZ(455,"div",60),Z._uU(456,"04:00-05:00"),Z.qZA(),Z.qZA(),Z.TgZ(457,"div",58),Z.TgZ(458,"div",61),Z._uU(459,"Treatement"),Z.qZA(),Z.TgZ(460,"div",62),Z._uU(461,"Diabetes"),Z.qZA(),Z.qZA(),Z.TgZ(462,"div",58),Z.TgZ(463,"div",61),Z._uU(464,"Contact Number"),Z.qZA(),Z.TgZ(465,"div",62),Z._uU(466,"+123 45678345"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(467,"li",56),Z._UZ(468,"img",66),Z.TgZ(469,"div",58),Z.TgZ(470,"div",59),Z._uU(471,"Dr.John Doe"),Z.qZA(),Z.TgZ(472,"div",60),Z._uU(473,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(474,"div",58),Z.TgZ(475,"div",59),Z._uU(476,"13 June '20"),Z.qZA(),Z.TgZ(477,"div",60),Z._uU(478,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(479,"div",58),Z.TgZ(480,"div",61),Z._uU(481,"Treatement"),Z.qZA(),Z.TgZ(482,"div",62),Z._uU(483,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(484,"div",58),Z.TgZ(485,"div",61),Z._uU(486,"Contact Number"),Z.qZA(),Z.TgZ(487,"div",62),Z._uU(488,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(489,"li",56),Z._UZ(490,"img",71),Z.TgZ(491,"div",58),Z.TgZ(492,"div",59),Z._uU(493,"Dr.Cara Stevens"),Z.qZA(),Z.TgZ(494,"div",60),Z._uU(495,"Radiologist"),Z.qZA(),Z.qZA(),Z.TgZ(496,"div",58),Z.TgZ(497,"div",59),Z._uU(498,"12 June '20"),Z.qZA(),Z.TgZ(499,"div",60),Z._uU(500,"09:00-10:00"),Z.qZA(),Z.qZA(),Z.TgZ(501,"div",58),Z.TgZ(502,"div",61),Z._uU(503,"Treatement"),Z.qZA(),Z.TgZ(504,"div",62),Z._uU(505,"CT scans"),Z.qZA(),Z.qZA(),Z.TgZ(506,"div",58),Z.TgZ(507,"div",61),Z._uU(508,"Contact Number"),Z.qZA(),Z.TgZ(509,"div",62),Z._uU(510,"+123 676545655"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(511,"li",56),Z._UZ(512,"img",72),Z.TgZ(513,"div",58),Z.TgZ(514,"div",59),Z._uU(515,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(516,"div",60),Z._uU(517,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(518,"div",58),Z.TgZ(519,"div",59),Z._uU(520,"12 June '20"),Z.qZA(),Z.TgZ(521,"div",60),Z._uU(522,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(523,"div",58),Z.TgZ(524,"div",61),Z._uU(525,"Treatement"),Z.qZA(),Z.TgZ(526,"div",62),Z._uU(527,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(528,"div",58),Z.TgZ(529,"div",61),Z._uU(530,"Contact Number"),Z.qZA(),Z.TgZ(531,"div",62),Z._uU(532,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(533,"li",56),Z._UZ(534,"img",73),Z.TgZ(535,"div",58),Z.TgZ(536,"div",59),Z._uU(537,"Dr.Angelica Ramos"),Z.qZA(),Z.TgZ(538,"div",60),Z._uU(539,"Dentist"),Z.qZA(),Z.qZA(),Z.TgZ(540,"div",58),Z.TgZ(541,"div",59),Z._uU(542,"12 June '20"),Z.qZA(),Z.TgZ(543,"div",60),Z._uU(544,"11:00-12:00"),Z.qZA(),Z.qZA(),Z.TgZ(545,"div",58),Z.TgZ(546,"div",61),Z._uU(547,"Treatement"),Z.qZA(),Z.TgZ(548,"div",62),Z._uU(549,"Root Canal"),Z.qZA(),Z.qZA(),Z.TgZ(550,"div",58),Z.TgZ(551,"div",61),Z._uU(552,"Contact Number"),Z.qZA(),Z.TgZ(553,"div",62),Z._uU(554,"+123 87654533"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(555,"li",56),Z._UZ(556,"img",74),Z.TgZ(557,"div",58),Z.TgZ(558,"div",59),Z._uU(559,"Dr.John Doe"),Z.qZA(),Z.TgZ(560,"div",60),Z._uU(561,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(562,"div",58),Z.TgZ(563,"div",59),Z._uU(564,"13 June '20"),Z.qZA(),Z.TgZ(565,"div",60),Z._uU(566,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(567,"div",58),Z.TgZ(568,"div",61),Z._uU(569,"Treatement"),Z.qZA(),Z.TgZ(570,"div",62),Z._uU(571,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(572,"div",58),Z.TgZ(573,"div",61),Z._uU(574,"Contact Number"),Z.qZA(),Z.TgZ(575,"div",62),Z._uU(576,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(577,"mat-tab",75),Z.TgZ(578,"ul",70),Z.TgZ(579,"li",56),Z._UZ(580,"img",67),Z.TgZ(581,"div",58),Z.TgZ(582,"div",59),Z._uU(583,"Dr.Jens Brincker"),Z.qZA(),Z.TgZ(584,"div",60),Z._uU(585,"Endocrinologist"),Z.qZA(),Z.qZA(),Z.TgZ(586,"div",58),Z.TgZ(587,"div",59),Z._uU(588,"23 June '20"),Z.qZA(),Z.TgZ(589,"div",60),Z._uU(590,"04:00-05:00"),Z.qZA(),Z.qZA(),Z.TgZ(591,"div",58),Z.TgZ(592,"div",61),Z._uU(593,"Treatement"),Z.qZA(),Z.TgZ(594,"div",62),Z._uU(595,"Diabetes"),Z.qZA(),Z.qZA(),Z.TgZ(596,"div",58),Z.TgZ(597,"div",61),Z._uU(598,"Contact Number"),Z.qZA(),Z.TgZ(599,"div",62),Z._uU(600,"+123 45678345"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(601,"li",56),Z._UZ(602,"img",66),Z.TgZ(603,"div",58),Z.TgZ(604,"div",59),Z._uU(605,"Dr.John Doe"),Z.qZA(),Z.TgZ(606,"div",60),Z._uU(607,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(608,"div",58),Z.TgZ(609,"div",59),Z._uU(610,"13 June '20"),Z.qZA(),Z.TgZ(611,"div",60),Z._uU(612,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(613,"div",58),Z.TgZ(614,"div",61),Z._uU(615,"Treatement"),Z.qZA(),Z.TgZ(616,"div",62),Z._uU(617,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(618,"div",58),Z.TgZ(619,"div",61),Z._uU(620,"Contact Number"),Z.qZA(),Z.TgZ(621,"div",62),Z._uU(622,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(623,"li",56),Z._UZ(624,"img",71),Z.TgZ(625,"div",58),Z.TgZ(626,"div",59),Z._uU(627,"Dr.Cara Stevens"),Z.qZA(),Z.TgZ(628,"div",60),Z._uU(629,"Radiologist"),Z.qZA(),Z.qZA(),Z.TgZ(630,"div",58),Z.TgZ(631,"div",59),Z._uU(632,"12 June '20"),Z.qZA(),Z.TgZ(633,"div",60),Z._uU(634,"09:00-10:00"),Z.qZA(),Z.qZA(),Z.TgZ(635,"div",58),Z.TgZ(636,"div",61),Z._uU(637,"Treatement"),Z.qZA(),Z.TgZ(638,"div",62),Z._uU(639,"CT scans"),Z.qZA(),Z.qZA(),Z.TgZ(640,"div",58),Z.TgZ(641,"div",61),Z._uU(642,"Contact Number"),Z.qZA(),Z.TgZ(643,"div",62),Z._uU(644,"+123 676545655"),Z.qZA(),Z.qZA(),Z._UZ(645,"div",76),Z.qZA(),Z.TgZ(646,"li",56),Z._UZ(647,"img",72),Z.TgZ(648,"div",58),Z.TgZ(649,"div",59),Z._uU(650,"Dr.Airi Satou"),Z.qZA(),Z.TgZ(651,"div",60),Z._uU(652,"Otolaryngologist"),Z.qZA(),Z.qZA(),Z.TgZ(653,"div",58),Z.TgZ(654,"div",59),Z._uU(655,"12 June '20"),Z.qZA(),Z.TgZ(656,"div",60),Z._uU(657,"09:15-10:15 "),Z.qZA(),Z.qZA(),Z.TgZ(658,"div",58),Z.TgZ(659,"div",61),Z._uU(660,"Treatement"),Z.qZA(),Z.TgZ(661,"div",62),Z._uU(662,"Diseases Of The Ear"),Z.qZA(),Z.qZA(),Z.TgZ(663,"div",58),Z.TgZ(664,"div",61),Z._uU(665,"Contact Number"),Z.qZA(),Z.TgZ(666,"div",62),Z._uU(667,"+123 45345673"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(668,"li",56),Z._UZ(669,"img",73),Z.TgZ(670,"div",58),Z.TgZ(671,"div",59),Z._uU(672,"Dr.Angelica Ramos"),Z.qZA(),Z.TgZ(673,"div",60),Z._uU(674,"Dentist"),Z.qZA(),Z.qZA(),Z.TgZ(675,"div",58),Z.TgZ(676,"div",59),Z._uU(677,"12 June '20"),Z.qZA(),Z.TgZ(678,"div",60),Z._uU(679,"11:00-12:00"),Z.qZA(),Z.qZA(),Z.TgZ(680,"div",58),Z.TgZ(681,"div",61),Z._uU(682,"Treatement"),Z.qZA(),Z.TgZ(683,"div",62),Z._uU(684,"Root Canal"),Z.qZA(),Z.qZA(),Z.TgZ(685,"div",58),Z.TgZ(686,"div",61),Z._uU(687,"Contact Number"),Z.qZA(),Z.TgZ(688,"div",62),Z._uU(689,"+123 87654533"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(690,"li",56),Z._UZ(691,"img",74),Z.TgZ(692,"div",58),Z.TgZ(693,"div",59),Z._uU(694,"Dr.John Doe"),Z.qZA(),Z.TgZ(695,"div",60),Z._uU(696,"Cardiologist"),Z.qZA(),Z.qZA(),Z.TgZ(697,"div",58),Z.TgZ(698,"div",59),Z._uU(699,"13 June '20"),Z.qZA(),Z.TgZ(700,"div",60),Z._uU(701,"11:00-11:30"),Z.qZA(),Z.qZA(),Z.TgZ(702,"div",58),Z.TgZ(703,"div",61),Z._uU(704,"Treatement"),Z.qZA(),Z.TgZ(705,"div",62),Z._uU(706,"heart checkup"),Z.qZA(),Z.qZA(),Z.TgZ(707,"div",58),Z.TgZ(708,"div",61),Z._uU(709,"Contact Number"),Z.qZA(),Z.TgZ(710,"div",62),Z._uU(711,"+123 434656764"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&d&&(Z.xp6(3),Z.Q6J("title","Factures")("items",Z.DdM(17,m))("active_item","facture"),Z.xp6(51),Z.Q6J("series",g.chartOptions.series)("chart",g.chartOptions.chart)("dataLabels",g.chartOptions.dataLabels)("plotOptions",g.chartOptions.plotOptions)("responsive",g.chartOptions.responsive)("xaxis",g.chartOptions.xaxis)("tooltip",g.chartOptions.tooltip)("legend",g.chartOptions.legend)("fill",g.chartOptions.fill),Z.xp6(92),Z.Q6J("data",g.doughnutChartData)("labels",g.doughnutChartLabels)("options",g.doughnutChartOptions)("legend",g.doughnutChartLegend)("colors",g.doughnutChartColors))},directives:[U.L,s.x,e.jh,A.SP,A.uX],styles:[""]}),t})()},{path:"specialite",loadChildren:()=>i.e(77).then(i.bind(i,44077)).then(t=>t.SpecialiteModule)},{path:"statut-document",loadChildren:()=>Promise.all([i.e(87),i.e(691),i.e(508)]).then(i.bind(i,94508)).then(t=>t.StatutDocumentModule)},{path:"parameters",loadChildren:()=>Promise.all([i.e(87),i.e(554)]).then(i.bind(i,19554)).then(t=>t.ParametersModule)},{path:"arret-maladie",loadChildren:()=>i.e(507).then(i.bind(i,79507)).then(t=>t.ArretMaladieModule)},{path:"document-identite",loadChildren:()=>Promise.all([i.e(691),i.e(27)]).then(i.bind(i,95027)).then(t=>t.DocumentIdentiteModule)},{path:"service",loadChildren:()=>Promise.all([i.e(574),i.e(987)]).then(i.bind(i,83987)).then(t=>t.ServiceModule)},{path:"agora",loadChildren:()=>Promise.all([i.e(592),i.e(47)]).then(i.bind(i,84047)).then(t=>t.AgoraModule)},{path:"type-employe",loadChildren:()=>Promise.all([i.e(87),i.e(592),i.e(97)]).then(i.bind(i,19097)).then(t=>t.TypeEmployeModule)},{path:"type-medecin",loadChildren:()=>Promise.all([i.e(87),i.e(592),i.e(916)]).then(i.bind(i,51916)).then(t=>t.TypeMedecinModule)},{path:"genre",loadChildren:()=>Promise.all([i.e(114),i.e(128)]).then(i.bind(i,88128)).then(t=>t.GenreModule)},{path:"type-service",loadChildren:()=>Promise.all([i.e(87),i.e(574),i.e(103)]).then(i.bind(i,16103)).then(t=>t.TypeServiceModule)},{path:"assurance",loadChildren:()=>Promise.all([i.e(87),i.e(576)]).then(i.bind(i,46576)).then(t=>t.AssuranceModule)},{path:"comptable",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(786)]).then(i.bind(i,58786)).then(t=>t.ComptableModule)},{path:"infirmier",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(230)]).then(i.bind(i,46230)).then(t=>t.InfirmierModule)},{path:"fichier",loadChildren:()=>Promise.all([i.e(87),i.e(821)]).then(i.bind(i,83821)).then(t=>t.FichierModule)},{path:"gerant",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(737)]).then(i.bind(i,44737)).then(t=>t.GerantModule)},{path:"medecin",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(929)]).then(i.bind(i,75929)).then(t=>t.MedecinModule)},{path:"medicament",loadChildren:()=>Promise.all([i.e(87),i.e(836)]).then(i.bind(i,29836)).then(t=>t.MedicamentModule)},{path:"medicament",loadChildren:()=>Promise.all([i.e(87),i.e(836)]).then(i.bind(i,29836)).then(t=>t.MedicamentModule)},{path:"mode-paiement",loadChildren:()=>Promise.all([i.e(87),i.e(592),i.e(564)]).then(i.bind(i,99564)).then(t=>t.ModePaiementModule)},{path:"patient",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(465)]).then(i.bind(i,15465)).then(t=>t.PatientModule)},{path:"pharmacien",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(766)]).then(i.bind(i,84766)).then(t=>t.PharmacienModule)},{path:"relation",loadChildren:()=>Promise.all([i.e(87),i.e(955)]).then(i.bind(i,74955)).then(t=>t.RelationModule)},{path:"responsable-assurance",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(832)]).then(i.bind(i,49832)).then(t=>t.ResponsableAssuranceModule)},{path:"type-fichier-medical",loadChildren:()=>Promise.all([i.e(87),i.e(801)]).then(i.bind(i,40801)).then(t=>t.TypeFichierMedicalModule)},{path:"role",loadChildren:()=>Promise.all([i.e(592),i.e(742)]).then(i.bind(i,81742)).then(t=>t.RoleModule)},{path:"administrateur",loadChildren:()=>Promise.all([i.e(87),i.e(114),i.e(592),i.e(733)]).then(i.bind(i,2733)).then(t=>t.AdministrateurModule)},{path:"ordonnance",loadChildren:()=>Promise.all([i.e(87),i.e(575),i.e(592),i.e(958)]).then(i.bind(i,94958)).then(t=>t.OrdonnanceModule)},{path:"rendez-vous",loadChildren:()=>Promise.all([i.e(87),i.e(592),i.e(912)]).then(i.bind(i,78912)).then(t=>t.RendezVousModule)},{path:"affection",loadChildren:()=>Promise.all([i.e(87),i.e(71)]).then(i.bind(i,55071)).then(t=>t.AffectionModule)},{path:"facture",loadChildren:()=>Promise.all([i.e(87),i.e(575),i.e(592),i.e(433)]).then(i.bind(i,34433)).then(t=>t.FactureModule)}];let C=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[a.Bz.forChild(r)],a.Bz]}),t})();var c=i(15626);let p=(()=>{class t{constructor(d){this.httpadmin=d,this.config1="https://cemedo-api-java.herokuapp.com/administrateurs",this.config2="https://cemedo-api-java.herokuapp.com/factures"}getAdmin(){return this.httpadmin.get(this.config1,{headers:new n.WM({"Content-Type":"application/json"})})}sendAdmin(d){return this.httpadmin.post(this.config1,d,{headers:new n.WM({"Content-Type":"application/json"})})}getAdminById(d){return this.httpadmin.get(this.config1+"/"+d,{headers:new n.WM({"Content-Type":"application/json"})})}deleteAdmin(d){this.httpadmin.delete(this.config1+"/"+d)}getRdv(){return this.httpadmin.get(this.config2,{headers:new n.WM({"Content-Type":"application/json"})})}sendFacture(d){return this.httpadmin.post(this.config2,d,{headers:new n.WM({"Content-Type":"application/json"})})}getFactureById(d){return this.httpadmin.get(this.config2+"/"+d,{headers:new n.WM({"Content-Type":"application/json"})})}deleteFacture(d){this.httpadmin.delete(this.config2+"/"+d)}}return t.\u0275fac=function(d){return new(d||t)(Z.LFG(n.eN))},t.\u0275prov=Z.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({providers:[p],imports:[[l.ez,n.JF,C,e.m9,u.Ns.forRoot({echarts:()=>i.e(347).then(i.t.bind(i,13347,23))}),v.Xd,h.Ps,s.X,A.Nh,q.ot,c.K]]}),t})()}}]);