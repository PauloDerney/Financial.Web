(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{StaW:function(b,e,t){"use strict";t.r(e);var o=t("ofXK"),i=t("fXoL");function a(b,e){if(1&b&&(i.Tb(0,"tr"),i.Tb(1,"td"),i.Dc(2),i.Sb(),i.Tb(3,"td"),i.Dc(4),i.Sb(),i.Tb(5,"td"),i.Dc(6),i.ic(7,"currency"),i.Sb(),i.Tb(8,"td"),i.Dc(9),i.ic(10,"date"),i.Sb(),i.Tb(11,"td"),i.Dc(12),i.Sb(),i.Tb(13,"td",14),i.Pb(14,"i",16),i.Pb(15,"i",17),i.Sb(),i.Sb()),2&b){const b=e.$implicit;i.Bb(2),i.Fc(" ",b.name," "),i.Bb(2),i.Fc(" ",b.type," "),i.Bb(2),i.Fc(" ",i.jc(7,5,b.amount,"BRL")," "),i.Bb(3),i.Fc(" ",i.jc(10,8,b.entryDate,"dd/MM/yyyy")," "),i.Bb(3),i.Fc(" ",b.invoiceRequired," ")}}const c=[{path:"",component:(()=>{class b{constructor(){this.rows=[]}ngOnInit(){this.loadData()}loadData(){this.rows=[{name:"Pagamento Empresa XPTO",amount:1765.99,entryDate:new Date,invoiceRequired:"Sim",type:"Receita Fixa"}]}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=i.Ib({type:b,selectors:[["app-revenue-list"]],decls:34,vars:1,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-category"],[1,"col-md-4"],[1,"col-md-2"],[1,"form-group"],["type","button","href","#/pages/revenues/add",1,"btn","btn-outline-default","pull-right","button-search"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-primary"],[2,"text-align","right"],[4,"ngFor","ngForOf"],[1,"nc-icon","nc-ruler-pencil",2,"cursor","pointer","padding-right","5px"],[1,"nc-icon","nc-simple-remove",2,"cursor","pointer"]],template:function(b,e){1&b&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"div",3),i.Tb(4,"h4",4),i.Dc(5," Receitas Avulsas Pendentes e Receitas Fixas"),i.Sb(),i.Tb(6,"p",5),i.Dc(7," Exibi\xe7\xe3o das receitas avulsas pendentes e receitas fixas ativas para o m\xeas"),i.Sb(),i.Tb(8,"div",0),i.Pb(9,"div",6),i.Pb(10,"div",7),i.Pb(11,"div",7),i.Tb(12,"div",6),i.Tb(13,"div",8),i.Tb(14,"a",9),i.Dc(15,"Nova Receita"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(16,"div",10),i.Tb(17,"div",11),i.Tb(18,"table",12),i.Tb(19,"thead",13),i.Tb(20,"th"),i.Dc(21," Nome "),i.Sb(),i.Tb(22,"th"),i.Dc(23," Tipo "),i.Sb(),i.Tb(24,"th"),i.Dc(25," Valor "),i.Sb(),i.Tb(26,"th"),i.Dc(27," Data de Entrada "),i.Sb(),i.Tb(28,"th"),i.Dc(29," Emiss\xe3o de Nota "),i.Sb(),i.Tb(30,"th",14),i.Dc(31," A\xe7\xf5es "),i.Sb(),i.Sb(),i.Tb(32,"tbody"),i.Bc(33,a,16,11,"tr",15),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&b&&(i.Bb(33),i.mc("ngForOf",e.rows))},directives:[o.l],pipes:[o.c,o.e],styles:[".button-search[_ngcontent-%COMP%]{margin-top:25px}"]}),b})()},{path:"add",component:(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=i.Ib({type:b,selectors:[["app-revenue-add"]],decls:104,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"card","card-user"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"col-md-4"],[1,"form-group"],["type","text","placeholder","",1,"form-control"],[1,"col-md-3"],["for","exampleInputEmail1"],[1,"form-control"],["value","1"],["value","2"],[1,"col-md-2"],["type","number","placeholder","R$ 0,00",1,"form-control"],[1,"col-md-6"],[1,"form-control","textarea"],["value","0"],["value","3"],["value","4"],["value","5"],["type","date","placeholder","dd/MM/yyyy",1,"form-control"],["type","number","placeholder","R$ 0.00",1,"form-control"],["type","number","min","1","max","31","placeholder","10",1,"form-control"],["type","submit","href","#/pages/revenues",1,"btn","btn-danger","btn-round","pull-left"],["type","submit",1,"btn","btn-success","btn-round","pull-right"]],template:function(b,e){1&b&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"div",2),i.Tb(3,"div",3),i.Tb(4,"h5",4),i.Dc(5,"Cadastro de Receita"),i.Sb(),i.Sb(),i.Tb(6,"div",5),i.Tb(7,"form"),i.Tb(8,"div",0),i.Tb(9,"div",6),i.Tb(10,"div",7),i.Tb(11,"label"),i.Dc(12,"Nome"),i.Sb(),i.Pb(13,"input",8),i.Sb(),i.Sb(),i.Tb(14,"div",9),i.Tb(15,"div",7),i.Tb(16,"label",10),i.Dc(17,"Tipo"),i.Sb(),i.Tb(18,"select",11),i.Tb(19,"option",12),i.Dc(20,"Receita Avulsa"),i.Sb(),i.Tb(21,"option",13),i.Dc(22,"Receita Fixa"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(23,"div",14),i.Tb(24,"div",7),i.Tb(25,"label",10),i.Dc(26,"Valor"),i.Sb(),i.Pb(27,"input",15),i.Sb(),i.Sb(),i.Tb(28,"div",9),i.Tb(29,"div",7),i.Tb(30,"label",10),i.Dc(31,"Emite Nota"),i.Sb(),i.Tb(32,"select",11),i.Tb(33,"option",12),i.Dc(34,"Sim"),i.Sb(),i.Tb(35,"option",13),i.Dc(36,"N\xe3o"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(37,"div",0),i.Tb(38,"div",16),i.Tb(39,"div",7),i.Tb(40,"label"),i.Dc(41,"Descri\xe7\xe3o"),i.Sb(),i.Pb(42,"textarea",17),i.Sb(),i.Sb(),i.Tb(43,"div",16),i.Tb(44,"div",7),i.Tb(45,"label"),i.Dc(46,"E-mail Para Emiss\xe3o de Nota"),i.Sb(),i.Pb(47,"textarea",17),i.Sb(),i.Sb(),i.Sb(),i.Tb(48,"div",0),i.Tb(49,"div",16),i.Tb(50,"div",7),i.Tb(51,"label"),i.Dc(52,"Origem"),i.Sb(),i.Pb(53,"input",8),i.Sb(),i.Sb(),i.Tb(54,"div",9),i.Tb(55,"div",7),i.Tb(56,"label"),i.Dc(57,"Fonte Destino"),i.Sb(),i.Tb(58,"select",11),i.Tb(59,"option",18),i.Dc(60,"Selecione"),i.Sb(),i.Tb(61,"option",12),i.Dc(62,"NuConta PF"),i.Sb(),i.Tb(63,"option",13),i.Dc(64,"NuConta PJ"),i.Sb(),i.Tb(65,"option",19),i.Dc(66,"Meliuz"),i.Sb(),i.Tb(67,"option",20),i.Dc(68,"PicPay"),i.Sb(),i.Tb(69,"option",21),i.Dc(70,"Dinheiro/Bolso"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(71,"div",9),i.Tb(72,"div",7),i.Tb(73,"label"),i.Dc(74,"Data de Entrada"),i.Sb(),i.Pb(75,"input",22),i.Sb(),i.Sb(),i.Sb(),i.Tb(76,"h5",4),i.Dc(77,"Receita Fixa"),i.Sb(),i.Tb(78,"div",0),i.Tb(79,"div",6),i.Tb(80,"div",7),i.Tb(81,"label"),i.Dc(82,"Valor Base"),i.Sb(),i.Pb(83,"input",23),i.Sb(),i.Sb(),i.Tb(84,"div",6),i.Tb(85,"div",7),i.Tb(86,"label"),i.Dc(87,"Confirma\xe7\xe3o Mensal"),i.Sb(),i.Tb(88,"select",11),i.Tb(89,"option",12),i.Dc(90,"Sim"),i.Sb(),i.Tb(91,"option",13),i.Dc(92,"N\xe3o"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(93,"div",6),i.Tb(94,"div",7),i.Tb(95,"label"),i.Dc(96,"Dia de Entrada"),i.Sb(),i.Pb(97,"input",24),i.Sb(),i.Sb(),i.Sb(),i.Tb(98,"div",0),i.Tb(99,"div",1),i.Tb(100,"a",25),i.Dc(101,"Cancelar"),i.Sb(),i.Tb(102,"button",26),i.Dc(103,"Salvar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb())},styles:[""]}),b})()}];var n=t("tyNb");t.d(e,"RevenuesModule",(function(){return r}));let r=(()=>{class b{}return b.\u0275mod=i.Mb({type:b}),b.\u0275inj=i.Lb({factory:function(e){return new(e||b)},imports:[[o.b,n.d.forChild(c)]]}),b})()}}]);