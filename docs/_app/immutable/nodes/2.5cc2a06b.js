import{s as Qe,n as Ie,f as ut,h as st}from"../chunks/scheduler.e9b79cf6.js";import{S as Xe,i as Ze,g as _,h as y,y as L,k as e,a as qe,f as o,z as m,s as c,m as B,j as f,A as p,c as d,n as V,x as t,B as ft,C as gt,r as Se,u as Le,l as ct,v as Te,d as ze,t as He,w as Pe}from"../chunks/index.8ea6559e.js";function lt(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const dt=!0,Mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:dt},Symbol.toStringTag,{value:"Module"})),vt=""+new URL("../assets/top-logo-full.769ffd6d.svg",import.meta.url).href,mt=""+new URL("../assets/mj-logo.93f99a3f.svg",import.meta.url).href;function pt(a){let i,g=`<div id="logo" class="svelte-1816ttf"><a href="https://www.schoolofcities.utoronto.ca/" class="svelte-1816ttf"><img src="${vt}" alt="School of Cities" class="svelte-1816ttf"/></a> <a href="https://mobilizingjustice.ca/" class="svelte-1816ttf"><img src="${mt}" alt="Mobilizing Justice" class="svelte-1816ttf"/></a></div> <p class="svelte-1816ttf">School of Cities</p>`;return{c(){i=_("div"),i.innerHTML=g,this.h()},l(l){i=y(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),L(i)!=="svelte-y9lzi9"&&(i.innerHTML=g),this.h()},h(){e(i,"id","bar"),e(i,"class","svelte-1816ttf")},m(l,W){qe(l,i,W)},p:Ie,i:Ie,o:Ie,d(l){l&&o(i)}}}class xt extends Xe{constructor(i){super(),Ze(this,i,null,pt,Qe,{})}}const _t=[{title:"Overall",data:[{Name:"All Commuters",Day:88.92,Evening:7.84,Night:3.24}]},{title:"Sex",data:[{Name:"Male",Day:88.78,Evening:7.49,Night:3.73},{Name:"Female",Day:89.06,Evening:8.22,Night:2.72}]},{title:"Low-Income Status",data:[{Name:"Not on a low income",Day:89.37,Evening:7.46,Night:3.17},{Name:"Have a low income",Day:80.44,Evening:14.87,Night:4.68}]},{title:"Visible Minority",data:[{Name:"South Asian",Day:84.31,Evening:10.99,Night:4.7},{Name:"Chinese",Day:90.09,Evening:7.72,Night:2.19},{Name:"Black",Day:79.9,Evening:13.02,Night:7.08},{Name:"Filipino",Day:77.44,Evening:15.22,Night:7.34},{Name:"Latin American",Day:85.97,Evening:10.23,Night:3.8},{Name:"Middle Eastern",Day:86.61,Evening:9.42,Night:3.97},{Name:"Southeast Asian",Day:85.43,Evening:10.74,Night:3.83},{Name:"West Asian",Day:87.54,Evening:9.53,Night:2.93},{Name:"Korean and Japanese",Day:87.5,Evening:10.04,Night:2.46},{Name:"Another group",Day:85.58,Evening:9.89,Night:4.53},{Name:"Indigenous",Day:84.47,Evening:11.07,Night:4.46},{Name:"White",Day:90.25,Evening:6.92,Night:2.83},{Name:"Multiple visible minorities",Day:87.73,Evening:8.52,Night:3.74}]},{title:"Immigrants",data:[{Name:"Not an immigrant",Day:89.98,Evening:7.11,Night:2.92},{Name:"Before 1996",Day:88.01,Evening:8.41,Night:3.58},{Name:"1996-2000",Day:86.83,Evening:9.22,Night:3.95},{Name:"2001-2005",Day:86.34,Evening:9.48,Night:4.18},{Name:"2006-2010",Day:83.71,Evening:11.35,Night:4.94},{Name:"2011-2016",Day:81.56,Evening:13.16,Night:5.28},{Name:"Non-PR",Day:84.17,Evening:11.71,Night:4.12}]},{title:"Employment Sector",data:[{Name:"Management",Day:94.14,Evening:4.18,Night:1.69},{Name:"Business and Finance",Day:95.3,Evening:3.4,Night:1.3},{Name:"Sciences",Day:96.03,Evening:2.7,Night:1.27},{Name:"Health",Day:83.48,Evening:10.85,Night:5.67},{Name:"Education, law, social services and government",Day:93.37,Evening:4.97,Night:1.65},{Name:"Arts, culture, entertainment",Day:84.4,Evening:12.87,Night:2.74},{Name:"Sales and services",Day:79.39,Evening:15.6,Night:5.02},{Name:"Trades and transportation",Day:89.52,Evening:6.41,Night:4.07},{Name:"Natural resources and agriculture",Day:91.99,Evening:3.85,Night:4.16},{Name:"Manufacturing and utilities",Day:81.59,Evening:12.41,Night:5.99}]}];function ot(a,i,g){const l=a.slice();return l[4]=i[g],l}function ht(a){let i,g,l=a[4].Name+"",W,N,u=Oe(a[4].Evening)+"",n,T,v,ie=Oe(a[4].Night)+"",K,O,Z,D,P,z,G,I,A,J,b,re=Oe(a[4].Evening)+"",S,se,j,H=Oe(a[4].Night)+"",le,te,w;return{c(){i=m("svg"),g=m("text"),W=B(l),N=m("text"),n=B(u),T=B("%"),v=m("text"),K=B(ie),O=B("%"),D=m("rect"),z=m("rect"),A=m("rect"),b=m("text"),S=B(re),se=B("%"),j=m("text"),le=B(H),te=B("%"),this.h()},l(E){i=p(E,"svg",{width:!0,height:!0});var x=f(i);g=p(x,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var $=f(g);W=V($,l),$.forEach(o),N=p(x,"text",{x:!0,y:!0,"font-size":!0,fill:!0,stroke:!0,"stroke-width":!0});var oe=f(N);n=V(oe,u),T=V(oe,"%"),oe.forEach(o),v=p(x,"text",{x:!0,y:!0,"font-size":!0,fill:!0,stroke:!0,"stroke-width":!0});var U=f(v);K=V(U,ie),O=V(U,"%"),U.forEach(o),D=p(x,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),f(D).forEach(o),z=p(x,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),f(z).forEach(o),A=p(x,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),f(A).forEach(o),b=p(x,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var Y=f(b);S=V(Y,re),se=V(Y,"%"),Y.forEach(o),j=p(x,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var ae=f(j);le=V(ae,H),te=V(ae,"%"),ae.forEach(o),x.forEach(o),this.h()},h(){e(g,"x","0"),e(g,"y","13"),e(g,"font-size","14"),e(g,"fill","white"),e(N,"x","5"),e(N,"y","35"),e(N,"font-size","14"),e(N,"fill","white"),e(N,"stroke","white"),e(N,"stroke-width","2"),e(v,"x",Z=a[4].Evening/ne*a[0]+5),e(v,"y","35"),e(v,"font-size","14"),e(v,"fill","white"),e(v,"stroke","white"),e(v,"stroke-width","2"),e(D,"id","eveningbar"),e(D,"width",P=a[4].Evening/ne*a[0]),e(D,"height","20"),e(D,"x","0"),e(D,"y","20"),e(D,"class","svelte-1hnhik1"),e(z,"id","nightbar"),e(z,"width",G=a[4].Night/ne*a[0]),e(z,"height","20"),e(z,"x",I=a[4].Evening/ne*a[0]),e(z,"y","20"),e(z,"class","svelte-1hnhik1"),e(A,"id","bardivider"),e(A,"width","2"),e(A,"height","20"),e(A,"x",J=a[4].Evening/ne*a[0]-1),e(A,"y","20"),e(A,"class","svelte-1hnhik1"),e(b,"x","5"),e(b,"y","35"),e(b,"font-size","14"),e(b,"fill","black"),e(j,"x",w=a[4].Evening/ne*a[0]+5),e(j,"y","35"),e(j,"font-size","14"),e(j,"fill","black"),e(i,"width","100%"),e(i,"height","45")},m(E,x){qe(E,i,x),t(i,g),t(g,W),t(i,N),t(N,n),t(N,T),t(i,v),t(v,K),t(v,O),t(i,D),t(i,z),t(i,A),t(i,b),t(b,S),t(b,se),t(i,j),t(j,le),t(j,te)},p(E,x){x&1&&Z!==(Z=E[4].Evening/ne*E[0]+5)&&e(v,"x",Z),x&1&&P!==(P=E[4].Evening/ne*E[0])&&e(D,"width",P),x&1&&G!==(G=E[4].Night/ne*E[0])&&e(z,"width",G),x&1&&I!==(I=E[4].Evening/ne*E[0])&&e(z,"x",I),x&1&&J!==(J=E[4].Evening/ne*E[0]-1)&&e(A,"x",J),x&1&&w!==(w=E[4].Evening/ne*E[0]+5)&&e(j,"x",w)},d(E){E&&o(i)}}}function yt(a){let i,g,l,W,N,u,n,T,v,ie,K,O,Z,D,P,z,G,I,A,J,b,re,S,se,j,H,le,te,w,E,x,$,oe,U,Y,ae,Q,R,pe,X,F,xe,_e,ee=lt(a[1].data),q=[];for(let s=0;s<ee.length;s+=1)q[s]=ht(ot(a,ee,s));return{c(){i=_("div"),g=m("svg"),l=m("line"),W=c();for(let s=0;s<q.length;s+=1)q[s].c();N=c(),u=m("svg"),n=m("line"),T=m("line"),v=m("line"),O=m("line"),P=m("line"),I=m("line"),b=m("text"),re=B("0%"),S=m("text"),se=B("5%"),H=m("text"),le=B("10%"),w=m("text"),E=B("15%"),$=m("text"),oe=B("20%"),U=m("text"),Y=B("Percent of all journey-to-work trips"),Q=m("rect"),R=m("text"),pe=B("Evening Shifts"),X=m("rect"),F=m("text"),xe=B("Night Shifts"),this.h()},l(s){i=y(s,"DIV",{class:!0});var h=f(i);g=p(h,"svg",{width:!0,height:!0});var M=f(g);l=p(M,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(l).forEach(o),M.forEach(o),W=d(h);for(let Ne=0;Ne<q.length;Ne+=1)q[Ne].l(h);N=d(h),u=p(h,"svg",{width:!0,height:!0});var k=f(u);n=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(n).forEach(o),T=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(T).forEach(o),v=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(v).forEach(o),O=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(O).forEach(o),P=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(P).forEach(o),I=p(k,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),f(I).forEach(o),b=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var he=f(b);re=V(he,"0%"),he.forEach(o),S=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ye=f(S);se=V(ye,"5%"),ye.forEach(o),H=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var fe=f(H);le=V(fe,"10%"),fe.forEach(o),w=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var Ae=f(w);E=V(Ae,"15%"),Ae.forEach(o),$=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var we=f($);oe=V(we,"20%"),we.forEach(o),U=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ue=f(U);Y=V(ue,"Percent of all journey-to-work trips"),ue.forEach(o),Q=p(k,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),f(Q).forEach(o),R=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var Ee=f(R);pe=V(Ee,"Evening Shifts"),Ee.forEach(o),X=p(k,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),f(X).forEach(o),F=p(k,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ge=f(F);xe=V(ge,"Night Shifts"),ge.forEach(o),k.forEach(o),h.forEach(o),this.h()},h(){e(l,"id","borderline"),e(l,"x1","0"),e(l,"y1","2"),e(l,"x2",a[0]),e(l,"y2","2"),e(l,"class","svelte-1hnhik1"),e(g,"width","100%"),e(g,"height","7"),e(n,"id","xaxis"),e(n,"x1","0"),e(n,"y1","1"),e(n,"x2",a[0]),e(n,"y2","1"),e(n,"class","svelte-1hnhik1"),e(T,"id","xaxis"),e(T,"x1","1"),e(T,"y1","1"),e(T,"x2","1"),e(T,"y2","8"),e(T,"class","svelte-1hnhik1"),e(v,"id","xaxis"),e(v,"x1",ie=a[0]-1),e(v,"y1","1"),e(v,"x2",K=a[0]-1),e(v,"y2","8"),e(v,"class","svelte-1hnhik1"),e(O,"id","xaxis"),e(O,"x1",Z=a[0]*.25),e(O,"y1","1"),e(O,"x2",D=a[0]*.25),e(O,"y2","8"),e(O,"class","svelte-1hnhik1"),e(P,"id","xaxis"),e(P,"x1",z=a[0]*.5),e(P,"y1","1"),e(P,"x2",G=a[0]*.5),e(P,"y2","8"),e(P,"class","svelte-1hnhik1"),e(I,"id","xaxis"),e(I,"x1",A=a[0]*.75),e(I,"y1","1"),e(I,"x2",J=a[0]*.75),e(I,"y2","8"),e(I,"class","svelte-1hnhik1"),e(b,"x","0"),e(b,"y","21"),e(b,"font-size","14"),e(b,"fill","#D0D1C9"),e(b,"text-anchor","left"),e(S,"x",j=a[0]*.25),e(S,"y","21"),e(S,"font-size","14"),e(S,"fill","#D0D1C9"),e(S,"text-anchor","middle"),e(H,"x",te=a[0]*.5),e(H,"y","21"),e(H,"font-size","14"),e(H,"fill","#D0D1C9"),e(H,"text-anchor","middle"),e(w,"x",x=a[0]*.75),e(w,"y","21"),e(w,"font-size","14"),e(w,"fill","#D0D1C9"),e(w,"text-anchor","middle"),e($,"x",a[0]),e($,"y","21"),e($,"font-size","14"),e($,"fill","#D0D1C9"),e($,"text-anchor","end"),e(U,"x",ae=a[0]/2),e(U,"y","40"),e(U,"font-size","14"),e(U,"fill","#D0D1C9"),e(U,"text-anchor","middle"),e(Q,"id","eveningbar"),e(Q,"width","10"),e(Q,"height","20"),e(Q,"x","0"),e(Q,"y","45"),e(Q,"class","svelte-1hnhik1"),e(R,"x","15"),e(R,"y","60"),e(R,"font-size","14"),e(R,"fill","#D0D1C9"),e(R,"text-anchor","left"),e(X,"id","nightbar"),e(X,"width","10"),e(X,"height","20"),e(X,"x","110"),e(X,"y","45"),e(X,"class","svelte-1hnhik1"),e(F,"x","125"),e(F,"y","60"),e(F,"font-size","14"),e(F,"fill","#D0D1C9"),e(F,"text-anchor","left"),e(u,"width","100%"),e(u,"height","105"),e(i,"class","bar svelte-1hnhik1"),ut(()=>a[3].call(i))},m(s,h){qe(s,i,h),t(i,g),t(g,l),t(i,W);for(let M=0;M<q.length;M+=1)q[M]&&q[M].m(i,null);t(i,N),t(i,u),t(u,n),t(u,T),t(u,v),t(u,O),t(u,P),t(u,I),t(u,b),t(b,re),t(u,S),t(S,se),t(u,H),t(H,le),t(u,w),t(w,E),t(u,$),t($,oe),t(u,U),t(U,Y),t(u,Q),t(u,R),t(R,pe),t(u,X),t(u,F),t(F,xe),_e=ft(i,a[3].bind(i))},p(s,[h]){if(h&1&&e(l,"x2",s[0]),h&3){ee=lt(s[1].data);let M;for(M=0;M<ee.length;M+=1){const k=ot(s,ee,M);q[M]?q[M].p(k,h):(q[M]=ht(k),q[M].c(),q[M].m(i,N))}for(;M<q.length;M+=1)q[M].d(1);q.length=ee.length}h&1&&e(n,"x2",s[0]),h&1&&ie!==(ie=s[0]-1)&&e(v,"x1",ie),h&1&&K!==(K=s[0]-1)&&e(v,"x2",K),h&1&&Z!==(Z=s[0]*.25)&&e(O,"x1",Z),h&1&&D!==(D=s[0]*.25)&&e(O,"x2",D),h&1&&z!==(z=s[0]*.5)&&e(P,"x1",z),h&1&&G!==(G=s[0]*.5)&&e(P,"x2",G),h&1&&A!==(A=s[0]*.75)&&e(I,"x1",A),h&1&&J!==(J=s[0]*.75)&&e(I,"x2",J),h&1&&j!==(j=s[0]*.25)&&e(S,"x",j),h&1&&te!==(te=s[0]*.5)&&e(H,"x",te),h&1&&x!==(x=s[0]*.75)&&e(w,"x",x),h&1&&e($,"x",s[0]),h&1&&ae!==(ae=s[0]/2)&&e(U,"x",ae)},i:Ie,o:Ie,d(s){s&&o(i),gt(q,s),_e()}}}let ne=23;function Oe(a){return Math.round(a*10)/10}function wt(a,i,g){let{variable:l}=i,W=_t.filter(n=>n.title===l)[0],N;function u(){N=this.clientWidth,g(0,N)}return a.$$set=n=>{"variable"in n&&g(2,l=n.variable)},[N,W,l,u]}class je extends Xe{constructor(i){super(),Ze(this,i,wt,yt,Qe,{variable:2})}}const Et=""+new URL("../assets/moon.ee969923.svg",import.meta.url).href,Nt=""+new URL("../assets/sofc-long-city.174d2b42.svg",import.meta.url).href,bt=""+new URL("../assets/clock-am.e750a279.svg",import.meta.url).href,kt=""+new URL("../assets/clock-pm.f4e1bb4b.svg",import.meta.url).href;function Ct(a){let i,g,l,W,N=`<div class="title-columns"><div class="left-title"><h1>Transportation Justice for Night and Evening Shift Workers in Canada</h1> <p><a href="https://planning.unc.edu/faculty/palm/">Matthew Palm</a> &amp; <a href="https://jamaps.github.io">Jeff Allen</a></p> <p>October 2023</p></div> <div class="right-title"><img width="100" height="100" src="${Et}" alt="moon"/></div></div> <img width="100%" height="71" src="${Nt}" alt="sofcLongCity"/>`,u,n,T,v='Night and evening shift workers play pivotal roles in our economy, keeping the lights on in sectors like healthcare, emergency services, public safety, logistics, and infrastructure. Yet, a gap exists in the research dedicated to understanding their transportation needs from a justice standpoint. Our <a href="https://doi.org/10.1016/j.trd.2023.103875">recent study</a> seeks to bridge this discrepancy.',ie,K,O="Why is Transportation Justice Important for Shift Workers?",Z,D,P='<span class="bold">1) Safety:</span> Shift workers face higher chances of <a href="https://doi.org/10.1016/S0001-4575(02)00007-6">vehicle collisions</a>. Offering them alternative commuting options can potentially reduce the number of road injuries or fatalities, reinforcing public health efforts.',z,G,I='<span class="bold">2) Health &amp; Social Integration:</span> Shift work is linked with adverse <a href="https://doi.org/10.1136/bmj.i5210">physical</a> and <a href="https://link.springer.com/article/10.1007/s00420-019-01434-3">mental health</a> consequences and heightened feelings of <a href="https://link.springer.com/article/10.1007/s40675-018-0114-7">social isolation</a>. Enhancing these workers’ access to social and economic opportunities can help address these issues.',A,J,b='<span class="bold">3) Equity and Representation:</span> Global research hints at a trend where shift workers disproportionately belong to equity-deserving communities. Our study is among the first to systematically document this in Canada.',re,S,se="Understanding Shifts?",j,H,le='The Canadian General Social Survey&#39;s <a href="https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&amp;SDDS=4503">Time Use</a> wave asks whether people work day, evening, or night shifts as well as their work arrival time. We use these two data points to create a classification of shifts based on work arrival times.',te,w,E,x,$,oe,U,Y,ae=`<svg width="12" height="12"><rect width="12" height="12" fill="#0D534D"></rect></svg>   
            Day shifts arrive between 4am and noon`,Q,R,pe=`<svg width="12" height="12"><rect width="12" height="12" fill="#6FC7EA"></rect></svg>   
            Evening shifts arrive between noon and 7:30pm`,X,F,xe=`<svg width="12" height="12"><rect width="12" height="12" fill="#F1C500"></rect></svg>   
            Night shifts arrive between 7:30pm and 4am`,_e,ee,q="Demographics of Shift Workers",s,h,M=`We then sought out to analyze how working evening and night shifts varies among different demographic groups. 
            The General Social Survey is a relatively small sample, so we decided to use the Canadian long-form census, a 25% sample of all Canadians. We are able to identify night and evening shift workers in the 2016 Canadian Census using self-reported arrival time and the classification described above. Our findings show that slightly less than 10% of Canadians were engaged in night or evening shifts, but this varies substantially for different demographic groups.`,k,he,ye,fe,Ae='<span class="bold">_ Income &amp; Employment Patterns:</span> Night and evening shift workers often have lower incomes in Canada. Similar trends have been noted in the United States and the United Kingdom.',we,ue,Ee,ge,Ne='<span class="bold">_ Ethnic &amp; Indigenous Representation:</span> Black, Filipino, South Asian, and Indigenous individuals are notably more inclined towards night and evening shifts.',Ue,de,Re,be,et='<span class="bold">_ Immigrant Workers:</span> Newer immigrants have a higher propensity for these shifts as well. Over time, their work patterns begin to mirror that of people born in Canada.',Fe,ve,Be,ke,tt='<span class="bold">_ Sectors of Employment:</span> Evening workers are overrepresented in sales, services, arts, culture, manufacturing, and utilities, while night shift workers are more concentrated in vital areas like health and manufacturing or utilities.',Ve,me,Ge,Ce,nt="Conclusions",Je,De,it="Night and evening shift workers, often from equity-deserving communities, are the backbone of many essential services in Canada.",Ke,$e,at='Now is a good time to advance these conversations, as transit agencies across North America are recognizing the value of providing <a href="https://www.governing.com/transportation/transit-agencies-rethink-schedules-for-fewer-commuters">off-peak service</a> to an off-peak ridership that has recovered faster than peak hour ridership. Further, <a href="https://doi.org/10.1016/j.jtrangeo.2017.08.010">research</a> suggests that many nighttime travelers make trips that could be done on foot or bicycle, if only better street lighting and pedestrian infrastructure were available.',Ye,Me,rt="Addressing the unique needs and challenges of shift workers and other nighttime travelers can pave the way for a more sustainable, equitable, and safe future for all.",We;return i=new xt({}),he=new je({props:{variable:"Overall"}}),ue=new je({props:{variable:"Low-Income Status"}}),de=new je({props:{variable:"Visible Minority"}}),ve=new je({props:{variable:"Immigrants"}}),me=new je({props:{variable:"Employment Sector"}}),{c(){Se(i.$$.fragment),g=c(),l=_("main"),W=_("div"),W.innerHTML=N,u=c(),n=_("div"),T=_("p"),T.innerHTML=v,ie=c(),K=_("h2"),K.textContent=O,Z=c(),D=_("p"),D.innerHTML=P,z=c(),G=_("p"),G.innerHTML=I,A=c(),J=_("p"),J.innerHTML=b,re=c(),S=_("h2"),S.textContent=se,j=c(),H=_("p"),H.innerHTML=le,te=c(),w=_("img"),x=c(),$=_("img"),U=c(),Y=_("p"),Y.innerHTML=ae,Q=c(),R=_("p"),R.innerHTML=pe,X=c(),F=_("p"),F.innerHTML=xe,_e=c(),ee=_("h2"),ee.textContent=q,s=c(),h=_("p"),h.textContent=M,k=c(),Se(he.$$.fragment),ye=c(),fe=_("p"),fe.innerHTML=Ae,we=c(),Se(ue.$$.fragment),Ee=c(),ge=_("p"),ge.innerHTML=Ne,Ue=c(),Se(de.$$.fragment),Re=c(),be=_("p"),be.innerHTML=et,Fe=c(),Se(ve.$$.fragment),Be=c(),ke=_("p"),ke.innerHTML=tt,Ve=c(),Se(me.$$.fragment),Ge=c(),Ce=_("h2"),Ce.textContent=nt,Je=c(),De=_("p"),De.textContent=it,Ke=c(),$e=_("p"),$e.innerHTML=at,Ye=c(),Me=_("p"),Me.textContent=rt,this.h()},l(C){Le(i.$$.fragment,C),g=d(C),l=y(C,"MAIN",{});var ce=f(l);W=y(ce,"DIV",{class:!0,"data-svelte-h":!0}),L(W)!=="svelte-1ulxwo3"&&(W.innerHTML=N),u=d(ce),n=y(ce,"DIV",{class:!0});var r=f(n);T=y(r,"P",{"data-svelte-h":!0}),L(T)!=="svelte-1t2pz9b"&&(T.innerHTML=v),ie=d(r),K=y(r,"H2",{"data-svelte-h":!0}),L(K)!=="svelte-1qa7rxy"&&(K.textContent=O),Z=d(r),D=y(r,"P",{"data-svelte-h":!0}),L(D)!=="svelte-qr35e1"&&(D.innerHTML=P),z=d(r),G=y(r,"P",{"data-svelte-h":!0}),L(G)!=="svelte-1kf9w6x"&&(G.innerHTML=I),A=d(r),J=y(r,"P",{"data-svelte-h":!0}),L(J)!=="svelte-uyid0r"&&(J.innerHTML=b),re=d(r),S=y(r,"H2",{"data-svelte-h":!0}),L(S)!=="svelte-1laxulu"&&(S.textContent=se),j=d(r),H=y(r,"P",{"data-svelte-h":!0}),L(H)!=="svelte-axbwqv"&&(H.innerHTML=le),te=d(r),w=y(r,"IMG",{width:!0,height:!0,src:!0,alt:!0,style:!0}),x=d(r),$=y(r,"IMG",{width:!0,height:!0,src:!0,alt:!0}),U=d(r),Y=y(r,"P",{"data-svelte-h":!0}),L(Y)!=="svelte-1k5fk8c"&&(Y.innerHTML=ae),Q=d(r),R=y(r,"P",{"data-svelte-h":!0}),L(R)!=="svelte-1fnyv19"&&(R.innerHTML=pe),X=d(r),F=y(r,"P",{"data-svelte-h":!0}),L(F)!=="svelte-1es4tha"&&(F.innerHTML=xe),_e=d(r),ee=y(r,"H2",{"data-svelte-h":!0}),L(ee)!=="svelte-cfr3xu"&&(ee.textContent=q),s=d(r),h=y(r,"P",{"data-svelte-h":!0}),L(h)!=="svelte-v01qhs"&&(h.textContent=M),k=d(r),Le(he.$$.fragment,r),ye=d(r),fe=y(r,"P",{"data-svelte-h":!0}),L(fe)!=="svelte-1shlahq"&&(fe.innerHTML=Ae),we=d(r),Le(ue.$$.fragment,r),Ee=d(r),ge=y(r,"P",{"data-svelte-h":!0}),L(ge)!=="svelte-milktt"&&(ge.innerHTML=Ne),Ue=d(r),Le(de.$$.fragment,r),Re=d(r),be=y(r,"P",{"data-svelte-h":!0}),L(be)!=="svelte-1s46y18"&&(be.innerHTML=et),Fe=d(r),Le(ve.$$.fragment,r),Be=d(r),ke=y(r,"P",{"data-svelte-h":!0}),L(ke)!=="svelte-1jzw99x"&&(ke.innerHTML=tt),Ve=d(r),Le(me.$$.fragment,r),Ge=d(r),Ce=y(r,"H2",{"data-svelte-h":!0}),L(Ce)!=="svelte-lmdog2"&&(Ce.textContent=nt),Je=d(r),De=y(r,"P",{"data-svelte-h":!0}),L(De)!=="svelte-1wtd5ib"&&(De.textContent=it),Ke=d(r),$e=y(r,"P",{"data-svelte-h":!0}),L($e)!=="svelte-1pczgn8"&&($e.innerHTML=at),Ye=d(r),Me=y(r,"P",{"data-svelte-h":!0}),L(Me)!=="svelte-1stl845"&&(Me.textContent=rt),r.forEach(o),ce.forEach(o),this.h()},h(){e(W,"class","title"),e(w,"width","150"),e(w,"height","150"),st(w.src,E=bt)||e(w,"src",E),e(w,"alt","clockAM"),ct(w,"margin-right","30px"),e($,"width","150"),e($,"height","150"),st($.src,oe=kt)||e($,"src",oe),e($,"alt","clockPM"),e(n,"class","text")},m(C,ce){Te(i,C,ce),qe(C,g,ce),qe(C,l,ce),t(l,W),t(l,u),t(l,n),t(n,T),t(n,ie),t(n,K),t(n,Z),t(n,D),t(n,z),t(n,G),t(n,A),t(n,J),t(n,re),t(n,S),t(n,j),t(n,H),t(n,te),t(n,w),t(n,x),t(n,$),t(n,U),t(n,Y),t(n,Q),t(n,R),t(n,X),t(n,F),t(n,_e),t(n,ee),t(n,s),t(n,h),t(n,k),Te(he,n,null),t(n,ye),t(n,fe),t(n,we),Te(ue,n,null),t(n,Ee),t(n,ge),t(n,Ue),Te(de,n,null),t(n,Re),t(n,be),t(n,Fe),Te(ve,n,null),t(n,Be),t(n,ke),t(n,Ve),Te(me,n,null),t(n,Ge),t(n,Ce),t(n,Je),t(n,De),t(n,Ke),t(n,$e),t(n,Ye),t(n,Me),We=!0},p:Ie,i(C){We||(ze(i.$$.fragment,C),ze(he.$$.fragment,C),ze(ue.$$.fragment,C),ze(de.$$.fragment,C),ze(ve.$$.fragment,C),ze(me.$$.fragment,C),We=!0)},o(C){He(i.$$.fragment,C),He(he.$$.fragment,C),He(ue.$$.fragment,C),He(de.$$.fragment,C),He(ve.$$.fragment,C),He(me.$$.fragment,C),We=!1},d(C){C&&(o(g),o(l)),Pe(i,C),Pe(he),Pe(ue),Pe(de),Pe(ve),Pe(me)}}}class St extends Xe{constructor(i){super(),Ze(this,i,null,Ct,Qe,{})}}export{St as component,Mt as universal};