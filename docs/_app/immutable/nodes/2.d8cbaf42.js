import{s as rt,n as Ve,f as Et,h as xt}from"../chunks/scheduler.e9b79cf6.js";import{S as st,i as lt,g as v,h as c,y as E,k as e,a as Ue,f as o,z as x,s as h,m as B,j as d,A as _,c as u,n as G,x as t,B as Nt,C as bt,r as ze,u as Ie,l as kt,v as Pe,d as je,t as Ae,w as qe}from"../chunks/index.8ea6559e.js";function _t(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const Ct=!0,Wt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ct},Symbol.toStringTag,{value:"Module"})),Dt=""+new URL("../assets/top-logo-full.769ffd6d.svg",import.meta.url).href,Mt=""+new URL("../assets/mj-logo.93f99a3f.svg",import.meta.url).href;function $t(a){let i,m=`<div id="logo" class="svelte-1816ttf"><a href="https://www.schoolofcities.utoronto.ca/" class="svelte-1816ttf"><img src="${Dt}" alt="School of Cities" class="svelte-1816ttf"/></a> <a href="https://mobilizingjustice.ca/" class="svelte-1816ttf"><img src="${Mt}" alt="Mobilizing Justice" class="svelte-1816ttf"/></a></div> <p class="svelte-1816ttf">School of Cities</p>`;return{c(){i=v("div"),i.innerHTML=m,this.h()},l(s){i=c(s,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),E(i)!=="svelte-y9lzi9"&&(i.innerHTML=m),this.h()},h(){e(i,"id","bar"),e(i,"class","svelte-1816ttf")},m(s,W){Ue(s,i,W)},p:Ve,i:Ve,o:Ve,d(s){s&&o(i)}}}class Lt extends st{constructor(i){super(),lt(this,i,null,$t,rt,{})}}const Tt=[{title:"Overall",data:[{Name:"All Commuters",Day:88.92,Evening:7.84,Night:3.24}]},{title:"Sex",data:[{Name:"Male",Day:88.78,Evening:7.49,Night:3.73},{Name:"Female",Day:89.06,Evening:8.22,Night:2.72}]},{title:"Low-Income Status",data:[{Name:"Not on a low income",Day:89.37,Evening:7.46,Night:3.17},{Name:"Have a low income",Day:80.44,Evening:14.87,Night:4.68}]},{title:"Visible Minority",data:[{Name:"South Asian",Day:84.31,Evening:10.99,Night:4.7},{Name:"Chinese",Day:90.09,Evening:7.72,Night:2.19},{Name:"Black",Day:79.9,Evening:13.02,Night:7.08},{Name:"Filipino",Day:77.44,Evening:15.22,Night:7.34},{Name:"Latin American",Day:85.97,Evening:10.23,Night:3.8},{Name:"Middle Eastern",Day:86.61,Evening:9.42,Night:3.97},{Name:"Southeast Asian",Day:85.43,Evening:10.74,Night:3.83},{Name:"West Asian",Day:87.54,Evening:9.53,Night:2.93},{Name:"Korean and Japanese",Day:87.5,Evening:10.04,Night:2.46},{Name:"Another group",Day:85.58,Evening:9.89,Night:4.53},{Name:"Indigenous",Day:84.47,Evening:11.07,Night:4.46},{Name:"White",Day:90.25,Evening:6.92,Night:2.83},{Name:"Multiple visible minorities",Day:87.73,Evening:8.52,Night:3.74}]},{title:"Immigrants",data:[{Name:"Not an immigrant",Day:89.98,Evening:7.11,Night:2.92},{Name:"Before 1996",Day:88.01,Evening:8.41,Night:3.58},{Name:"1996-2000",Day:86.83,Evening:9.22,Night:3.95},{Name:"2001-2005",Day:86.34,Evening:9.48,Night:4.18},{Name:"2006-2010",Day:83.71,Evening:11.35,Night:4.94},{Name:"2011-2016",Day:81.56,Evening:13.16,Night:5.28},{Name:"Non-PR",Day:84.17,Evening:11.71,Night:4.12}]},{title:"Employment Sector",data:[{Name:"Management",Day:94.14,Evening:4.18,Night:1.69},{Name:"Business and Finance",Day:95.3,Evening:3.4,Night:1.3},{Name:"Sciences",Day:96.03,Evening:2.7,Night:1.27},{Name:"Health",Day:83.48,Evening:10.85,Night:5.67},{Name:"Education, law, social services and government",Day:93.37,Evening:4.97,Night:1.65},{Name:"Arts, culture, entertainment",Day:84.4,Evening:12.87,Night:2.74},{Name:"Sales and services",Day:79.39,Evening:15.6,Night:5.02},{Name:"Trades and transportation",Day:89.52,Evening:6.41,Night:4.07},{Name:"Natural resources and agriculture",Day:91.99,Evening:3.85,Night:4.16},{Name:"Manufacturing and utilities",Day:81.59,Evening:12.41,Night:5.99}]}];function yt(a,i,m){const s=a.slice();return s[4]=i[m],s}function wt(a){let i,m,s=a[4].Name+"",W,b,g=Fe(a[4].Evening)+"",n,H,p,ae=Fe(a[4].Night)+"",Y,O,ee,M,I,S,J,P,j,K,k,se=Fe(a[4].Evening)+"",T,le,A,z=Fe(a[4].Night)+"",oe,ne,w;return{c(){i=x("svg"),m=x("text"),W=B(s),b=x("text"),n=B(g),H=B("%"),p=x("text"),Y=B(ae),O=B("%"),M=x("rect"),S=x("rect"),j=x("rect"),k=x("text"),T=B(se),le=B("%"),A=x("text"),oe=B(z),ne=B("%"),this.h()},l(N){i=_(N,"svg",{width:!0,height:!0});var y=d(i);m=_(y,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var $=d(m);W=G($,s),$.forEach(o),b=_(y,"text",{x:!0,y:!0,"font-size":!0,fill:!0,stroke:!0,"stroke-width":!0});var he=d(b);n=G(he,g),H=G(he,"%"),he.forEach(o),p=_(y,"text",{x:!0,y:!0,"font-size":!0,fill:!0,stroke:!0,"stroke-width":!0});var U=d(p);Y=G(U,ae),O=G(U,"%"),U.forEach(o),M=_(y,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),d(M).forEach(o),S=_(y,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),d(S).forEach(o),j=_(y,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),d(j).forEach(o),k=_(y,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var Q=d(k);T=G(Q,se),le=G(Q,"%"),Q.forEach(o),A=_(y,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var re=d(A);oe=G(re,z),ne=G(re,"%"),re.forEach(o),y.forEach(o),this.h()},h(){e(m,"x","0"),e(m,"y","13"),e(m,"font-size","14"),e(m,"fill","white"),e(b,"x","5"),e(b,"y","35"),e(b,"font-size","14"),e(b,"fill","white"),e(b,"stroke","white"),e(b,"stroke-width","2"),e(p,"x",ee=a[4].Evening/ie*a[0]+5),e(p,"y","35"),e(p,"font-size","14"),e(p,"fill","white"),e(p,"stroke","white"),e(p,"stroke-width","2"),e(M,"id","eveningbar"),e(M,"width",I=a[4].Evening/ie*a[0]),e(M,"height","20"),e(M,"x","0"),e(M,"y","20"),e(M,"class","svelte-1hnhik1"),e(S,"id","nightbar"),e(S,"width",J=a[4].Night/ie*a[0]),e(S,"height","20"),e(S,"x",P=a[4].Evening/ie*a[0]),e(S,"y","20"),e(S,"class","svelte-1hnhik1"),e(j,"id","bardivider"),e(j,"width","2"),e(j,"height","20"),e(j,"x",K=a[4].Evening/ie*a[0]-1),e(j,"y","20"),e(j,"class","svelte-1hnhik1"),e(k,"x","5"),e(k,"y","35"),e(k,"font-size","14"),e(k,"fill","black"),e(A,"x",w=a[4].Evening/ie*a[0]+5),e(A,"y","35"),e(A,"font-size","14"),e(A,"fill","black"),e(i,"width","100%"),e(i,"height","45")},m(N,y){Ue(N,i,y),t(i,m),t(m,W),t(i,b),t(b,n),t(b,H),t(i,p),t(p,Y),t(p,O),t(i,M),t(i,S),t(i,j),t(i,k),t(k,T),t(k,le),t(i,A),t(A,oe),t(A,ne)},p(N,y){y&1&&ee!==(ee=N[4].Evening/ie*N[0]+5)&&e(p,"x",ee),y&1&&I!==(I=N[4].Evening/ie*N[0])&&e(M,"width",I),y&1&&J!==(J=N[4].Night/ie*N[0])&&e(S,"width",J),y&1&&P!==(P=N[4].Evening/ie*N[0])&&e(S,"x",P),y&1&&K!==(K=N[4].Evening/ie*N[0]-1)&&e(j,"x",K),y&1&&w!==(w=N[4].Evening/ie*N[0]+5)&&e(A,"x",w)},d(N){N&&o(i)}}}function Ht(a){let i,m,s,W,b,g,n,H,p,ae,Y,O,ee,M,I,S,J,P,j,K,k,se,T,le,A,z,oe,ne,w,N,y,$,he,U,Q,re,X,R,Ne,Z,F,be,ke,te=_t(a[1].data),q=[];for(let l=0;l<te.length;l+=1)q[l]=wt(yt(a,te,l));return{c(){i=v("div"),m=x("svg"),s=x("line"),W=h();for(let l=0;l<q.length;l+=1)q[l].c();b=h(),g=x("svg"),n=x("line"),H=x("line"),p=x("line"),O=x("line"),I=x("line"),P=x("line"),k=x("text"),se=B("0%"),T=x("text"),le=B("5%"),z=x("text"),oe=B("10%"),w=x("text"),N=B("15%"),$=x("text"),he=B("20%"),U=x("text"),Q=B("Percent of all journey-to-work trips"),X=x("rect"),R=x("text"),Ne=B("Evening Shifts"),Z=x("rect"),F=x("text"),be=B("Night Shifts"),this.h()},l(l){i=c(l,"DIV",{class:!0});var f=d(i);m=_(f,"svg",{width:!0,height:!0});var L=d(m);s=_(L,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(s).forEach(o),L.forEach(o),W=u(f);for(let $e=0;$e<q.length;$e+=1)q[$e].l(f);b=u(f),g=_(f,"svg",{width:!0,height:!0});var C=d(g);n=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(n).forEach(o),H=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(H).forEach(o),p=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(p).forEach(o),O=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(O).forEach(o),I=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(I).forEach(o),P=_(C,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),d(P).forEach(o),k=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ue=d(k);se=G(ue,"0%"),ue.forEach(o),T=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var Ce=d(T);le=G(Ce,"5%"),Ce.forEach(o),z=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ge=d(z);oe=G(ge,"10%"),ge.forEach(o),w=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var We=d(w);N=G(We,"15%"),We.forEach(o),$=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var De=d($);he=G(De,"20%"),De.forEach(o),U=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var fe=d(U);Q=G(fe,"Percent of all journey-to-work trips"),fe.forEach(o),X=_(C,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),d(X).forEach(o),R=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var Me=d(R);Ne=G(Me,"Evening Shifts"),Me.forEach(o),Z=_(C,"rect",{id:!0,width:!0,height:!0,x:!0,y:!0,class:!0}),d(Z).forEach(o),F=_(C,"text",{x:!0,y:!0,"font-size":!0,fill:!0,"text-anchor":!0});var ve=d(F);be=G(ve,"Night Shifts"),ve.forEach(o),C.forEach(o),f.forEach(o),this.h()},h(){e(s,"id","borderline"),e(s,"x1","0"),e(s,"y1","2"),e(s,"x2",a[0]),e(s,"y2","2"),e(s,"class","svelte-1hnhik1"),e(m,"width","100%"),e(m,"height","7"),e(n,"id","xaxis"),e(n,"x1","0"),e(n,"y1","1"),e(n,"x2",a[0]),e(n,"y2","1"),e(n,"class","svelte-1hnhik1"),e(H,"id","xaxis"),e(H,"x1","1"),e(H,"y1","1"),e(H,"x2","1"),e(H,"y2","8"),e(H,"class","svelte-1hnhik1"),e(p,"id","xaxis"),e(p,"x1",ae=a[0]-1),e(p,"y1","1"),e(p,"x2",Y=a[0]-1),e(p,"y2","8"),e(p,"class","svelte-1hnhik1"),e(O,"id","xaxis"),e(O,"x1",ee=a[0]*.25),e(O,"y1","1"),e(O,"x2",M=a[0]*.25),e(O,"y2","8"),e(O,"class","svelte-1hnhik1"),e(I,"id","xaxis"),e(I,"x1",S=a[0]*.5),e(I,"y1","1"),e(I,"x2",J=a[0]*.5),e(I,"y2","8"),e(I,"class","svelte-1hnhik1"),e(P,"id","xaxis"),e(P,"x1",j=a[0]*.75),e(P,"y1","1"),e(P,"x2",K=a[0]*.75),e(P,"y2","8"),e(P,"class","svelte-1hnhik1"),e(k,"x","0"),e(k,"y","21"),e(k,"font-size","14"),e(k,"fill","#D0D1C9"),e(k,"text-anchor","left"),e(T,"x",A=a[0]*.25),e(T,"y","21"),e(T,"font-size","14"),e(T,"fill","#D0D1C9"),e(T,"text-anchor","middle"),e(z,"x",ne=a[0]*.5),e(z,"y","21"),e(z,"font-size","14"),e(z,"fill","#D0D1C9"),e(z,"text-anchor","middle"),e(w,"x",y=a[0]*.75),e(w,"y","21"),e(w,"font-size","14"),e(w,"fill","#D0D1C9"),e(w,"text-anchor","middle"),e($,"x",a[0]),e($,"y","21"),e($,"font-size","14"),e($,"fill","#D0D1C9"),e($,"text-anchor","end"),e(U,"x",re=a[0]/2),e(U,"y","40"),e(U,"font-size","14"),e(U,"fill","#D0D1C9"),e(U,"text-anchor","middle"),e(X,"id","eveningbar"),e(X,"width","10"),e(X,"height","20"),e(X,"x","0"),e(X,"y","45"),e(X,"class","svelte-1hnhik1"),e(R,"x","15"),e(R,"y","60"),e(R,"font-size","14"),e(R,"fill","#D0D1C9"),e(R,"text-anchor","left"),e(Z,"id","nightbar"),e(Z,"width","10"),e(Z,"height","20"),e(Z,"x","110"),e(Z,"y","45"),e(Z,"class","svelte-1hnhik1"),e(F,"x","125"),e(F,"y","60"),e(F,"font-size","14"),e(F,"fill","#D0D1C9"),e(F,"text-anchor","left"),e(g,"width","100%"),e(g,"height","105"),e(i,"class","bar svelte-1hnhik1"),Et(()=>a[3].call(i))},m(l,f){Ue(l,i,f),t(i,m),t(m,s),t(i,W);for(let L=0;L<q.length;L+=1)q[L]&&q[L].m(i,null);t(i,b),t(i,g),t(g,n),t(g,H),t(g,p),t(g,O),t(g,I),t(g,P),t(g,k),t(k,se),t(g,T),t(T,le),t(g,z),t(z,oe),t(g,w),t(w,N),t(g,$),t($,he),t(g,U),t(U,Q),t(g,X),t(g,R),t(R,Ne),t(g,Z),t(g,F),t(F,be),ke=Nt(i,a[3].bind(i))},p(l,[f]){if(f&1&&e(s,"x2",l[0]),f&3){te=_t(l[1].data);let L;for(L=0;L<te.length;L+=1){const C=yt(l,te,L);q[L]?q[L].p(C,f):(q[L]=wt(C),q[L].c(),q[L].m(i,b))}for(;L<q.length;L+=1)q[L].d(1);q.length=te.length}f&1&&e(n,"x2",l[0]),f&1&&ae!==(ae=l[0]-1)&&e(p,"x1",ae),f&1&&Y!==(Y=l[0]-1)&&e(p,"x2",Y),f&1&&ee!==(ee=l[0]*.25)&&e(O,"x1",ee),f&1&&M!==(M=l[0]*.25)&&e(O,"x2",M),f&1&&S!==(S=l[0]*.5)&&e(I,"x1",S),f&1&&J!==(J=l[0]*.5)&&e(I,"x2",J),f&1&&j!==(j=l[0]*.75)&&e(P,"x1",j),f&1&&K!==(K=l[0]*.75)&&e(P,"x2",K),f&1&&A!==(A=l[0]*.25)&&e(T,"x",A),f&1&&ne!==(ne=l[0]*.5)&&e(z,"x",ne),f&1&&y!==(y=l[0]*.75)&&e(w,"x",y),f&1&&e($,"x",l[0]),f&1&&re!==(re=l[0]/2)&&e(U,"x",re)},i:Ve,o:Ve,d(l){l&&o(i),bt(q,l),ke()}}}let ie=23;function Fe(a){return Math.round(a*10)/10}function St(a,i,m){let{variable:s}=i,W=Tt.filter(n=>n.title===s)[0],b;function g(){b=this.clientWidth,m(0,b)}return a.$$set=n=>{"variable"in n&&m(2,s=n.variable)},[b,W,s,g]}class Oe extends st{constructor(i){super(),lt(this,i,St,Ht,rt,{variable:2})}}const zt=""+new URL("../assets/moon.ee969923.svg",import.meta.url).href,It=""+new URL("../assets/sofc-long-city.dae58a31.svg",import.meta.url).href,Pt=""+new URL("../assets/clock-am.e750a279.svg",import.meta.url).href,jt=""+new URL("../assets/clock-pm.f4e1bb4b.svg",import.meta.url).href;function At(a){let i,m,s,W,b=`<div class="title-columns"><div class="left-title"><h1>Transportation Justice for Night and Evening Shift Workers in Canada</h1> <p><a href="https://planning.unc.edu/faculty/palm/">Matthew Palm</a> &amp; <a href="https://jamaps.github.io">Jeff Allen</a></p> <p>October 2023</p></div> <div class="right-title"><img width="100" height="100" src="${zt}" alt="moon"/></div></div> <img width="100%" height="71" src="${It}" alt="sofcLongCity"/>`,g,n,H,p='Night and evening shift workers play pivotal roles in our economy, keeping the lights on in sectors like healthcare, emergency services, public safety, logistics, and infrastructure. Yet, a gap exists in the research dedicated to understanding their transportation needs from a justice standpoint. Our <a href="https://doi.org/10.1016/j.trd.2023.103875">recent study</a> seeks to bridge this discrepancy.',ae,Y,O="Why is Transportation Justice Important for Shift Workers?",ee,M,I='<span class="bold">1) Safety:</span> Shift workers face higher chances of <a href="https://doi.org/10.1016/S0001-4575(02)00007-6">vehicle collisions</a>. Offering them alternative commuting options can potentially reduce the number of road injuries or fatalities, reinforcing public health efforts.',S,J,P='<span class="bold">2) Health &amp; Social Integration:</span> Shift work is linked with adverse <a href="https://doi.org/10.1136/bmj.i5210">physical</a> and <a href="https://link.springer.com/article/10.1007/s00420-019-01434-3">mental health</a> consequences and heightened feelings of <a href="https://link.springer.com/article/10.1007/s40675-018-0114-7">social isolation</a>. Enhancing these workers’ access to social and economic opportunities can help address these issues.',j,K,k='<span class="bold">3) Equity and Representation:</span> Global research hints at a trend where shift workers disproportionately belong to equity-deserving communities. Our study is among the first to systematically document this in Canada.',se,T,le="Understanding Shifts?",A,z,oe='The Canadian General Social Survey&#39;s <a href="https://www23.statcan.gc.ca/imdb/p2SV.pl?Function=getSurvey&amp;SDDS=4503">Time Use</a> wave asks whether people work day, evening, or night shifts as well as their work arrival time. We use these two data points to create a classification of shifts based on work arrival times.',ne,w,N,y,$,he,U,Q,re=`<svg width="12" height="12"><rect width="12" height="12" fill="#0D534D"></rect></svg>   
            Day shifts arrive between 4am and noon`,X,R,Ne=`<svg width="12" height="12"><rect width="12" height="12" fill="#6FC7EA"></rect></svg>   
            Evening shifts arrive between noon and 7:30pm`,Z,F,be=`<svg width="12" height="12"><rect width="12" height="12" fill="#F1C500"></rect></svg>   
            Night shifts arrive between 7:30pm and 4am`,ke,te,q="Demographics of Shift Workers",l,f,L=`We then sought out to analyze how working evening and night shifts varies among different demographic groups. 
            The General Social Survey is a relatively small sample, so we decided to use the Canadian long-form census, a 25% sample of all Canadians. We are able to identify night and evening shift workers in the 2016 Canadian Census using self-reported arrival time and the classification described above. Our findings show that slightly less than 10% of Canadians were engaged in night or evening shifts, but this varies substantially for different demographic groups.`,C,ue,Ce,ge,We='<span class="bold">_ Income &amp; Employment Patterns:</span> Night and evening shift workers often have lower incomes in Canada. Similar trends have been noted in the United States and the United Kingdom.',De,fe,Me,ve,$e='<span class="bold">_ Ethnic &amp; Indigenous Representation:</span> Black, Filipino, South Asian, and Indigenous individuals are notably more inclined towards night and evening shifts.',Be,ce,Ge,Le,ot='<span class="bold">_ Immigrant Workers:</span> Newer immigrants have a higher propensity for these shifts as well. Over time, their work patterns begin to mirror that of people born in Canada.',Je,de,Ke,Te,ht='<span class="bold">_ Sectors of Employment:</span> Evening workers are overrepresented in sales, services, arts, culture, manufacturing, and utilities, while night shift workers are more concentrated in vital areas like health and manufacturing or utilities.',Ye,me,Qe,He,ut="Mapping the Geography of Shift Workers",Xe,Se,ft="Hello I am a bunch of text about maps",Ze,pe,gt='<img src="./evening-and-night-commuting/map-vancouver.png" alt="Map of Vancouver showing % of commuters that arrive between noon and 4am"/> <p>Click <a href="./evening-and-night-commuting/map-vancouver.png">here</a> to view a high-resolution version of this map</p>',et,xe,vt="<p>Hello I am some text about the maps</p>",tt,_e,ct='<img src="./evening-and-night-commuting/map-montreal.png" alt="Map of Montreal showing % of commuters that arrive between noon and 4am"/> <p>Click <a href="./evening-and-night-commuting/map-montreal.png">here</a> to view a high-resolution version of this map</p>',nt,ye,dt="<p>Hello I am some text about the maps</p>",it,we,mt='<img src="./evening-and-night-commuting/map-toronto.png" alt="Map of Toronto showing % of commuters that arrive between noon and 4am"/> <p>Click <a href="./evening-and-night-commuting/map-toronto.png">here</a> to view a high-resolution version of this map</p>',at,Ee,pt='<h2>Conclusions</h2> <p>Night and evening shift workers, often from equity-deserving communities, are the backbone of many essential services in Canada.</p> <p>Now is a good time to advance these conversations, as transit agencies across North America are recognizing the value of providing <a href="https://www.governing.com/transportation/transit-agencies-rethink-schedules-for-fewer-commuters">off-peak service</a> to an off-peak ridership that has recovered faster than peak hour ridership. Further, <a href="https://doi.org/10.1016/j.jtrangeo.2017.08.010">research</a> suggests that many nighttime travelers make trips that could be done on foot or bicycle, if only better street lighting and pedestrian infrastructure were available.</p> <p>Addressing the unique needs and challenges of shift workers and other nighttime travelers can pave the way for a more sustainable, equitable, and safe future for all.</p>',Re;return i=new Lt({}),ue=new Oe({props:{variable:"Overall"}}),fe=new Oe({props:{variable:"Low-Income Status"}}),ce=new Oe({props:{variable:"Visible Minority"}}),de=new Oe({props:{variable:"Immigrants"}}),me=new Oe({props:{variable:"Employment Sector"}}),{c(){ze(i.$$.fragment),m=h(),s=v("main"),W=v("div"),W.innerHTML=b,g=h(),n=v("div"),H=v("p"),H.innerHTML=p,ae=h(),Y=v("h2"),Y.textContent=O,ee=h(),M=v("p"),M.innerHTML=I,S=h(),J=v("p"),J.innerHTML=P,j=h(),K=v("p"),K.innerHTML=k,se=h(),T=v("h2"),T.textContent=le,A=h(),z=v("p"),z.innerHTML=oe,ne=h(),w=v("img"),y=h(),$=v("img"),U=h(),Q=v("p"),Q.innerHTML=re,X=h(),R=v("p"),R.innerHTML=Ne,Z=h(),F=v("p"),F.innerHTML=be,ke=h(),te=v("h2"),te.textContent=q,l=h(),f=v("p"),f.textContent=L,C=h(),ze(ue.$$.fragment),Ce=h(),ge=v("p"),ge.innerHTML=We,De=h(),ze(fe.$$.fragment),Me=h(),ve=v("p"),ve.innerHTML=$e,Be=h(),ze(ce.$$.fragment),Ge=h(),Le=v("p"),Le.innerHTML=ot,Je=h(),ze(de.$$.fragment),Ke=h(),Te=v("p"),Te.innerHTML=ht,Ye=h(),ze(me.$$.fragment),Qe=h(),He=v("h2"),He.textContent=ut,Xe=h(),Se=v("p"),Se.textContent=ft,Ze=h(),pe=v("div"),pe.innerHTML=gt,et=h(),xe=v("div"),xe.innerHTML=vt,tt=h(),_e=v("div"),_e.innerHTML=ct,nt=h(),ye=v("div"),ye.innerHTML=dt,it=h(),we=v("div"),we.innerHTML=mt,at=h(),Ee=v("div"),Ee.innerHTML=pt,this.h()},l(D){Ie(i.$$.fragment,D),m=u(D),s=c(D,"MAIN",{});var V=d(s);W=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(W)!=="svelte-1ulxwo3"&&(W.innerHTML=b),g=u(V),n=c(V,"DIV",{class:!0});var r=d(n);H=c(r,"P",{"data-svelte-h":!0}),E(H)!=="svelte-1t2pz9b"&&(H.innerHTML=p),ae=u(r),Y=c(r,"H2",{"data-svelte-h":!0}),E(Y)!=="svelte-1qa7rxy"&&(Y.textContent=O),ee=u(r),M=c(r,"P",{"data-svelte-h":!0}),E(M)!=="svelte-qr35e1"&&(M.innerHTML=I),S=u(r),J=c(r,"P",{"data-svelte-h":!0}),E(J)!=="svelte-1kf9w6x"&&(J.innerHTML=P),j=u(r),K=c(r,"P",{"data-svelte-h":!0}),E(K)!=="svelte-uyid0r"&&(K.innerHTML=k),se=u(r),T=c(r,"H2",{"data-svelte-h":!0}),E(T)!=="svelte-1laxulu"&&(T.textContent=le),A=u(r),z=c(r,"P",{"data-svelte-h":!0}),E(z)!=="svelte-axbwqv"&&(z.innerHTML=oe),ne=u(r),w=c(r,"IMG",{width:!0,height:!0,src:!0,alt:!0,style:!0}),y=u(r),$=c(r,"IMG",{width:!0,height:!0,src:!0,alt:!0}),U=u(r),Q=c(r,"P",{"data-svelte-h":!0}),E(Q)!=="svelte-1k5fk8c"&&(Q.innerHTML=re),X=u(r),R=c(r,"P",{"data-svelte-h":!0}),E(R)!=="svelte-1fnyv19"&&(R.innerHTML=Ne),Z=u(r),F=c(r,"P",{"data-svelte-h":!0}),E(F)!=="svelte-1es4tha"&&(F.innerHTML=be),ke=u(r),te=c(r,"H2",{"data-svelte-h":!0}),E(te)!=="svelte-cfr3xu"&&(te.textContent=q),l=u(r),f=c(r,"P",{"data-svelte-h":!0}),E(f)!=="svelte-v01qhs"&&(f.textContent=L),C=u(r),Ie(ue.$$.fragment,r),Ce=u(r),ge=c(r,"P",{"data-svelte-h":!0}),E(ge)!=="svelte-1shlahq"&&(ge.innerHTML=We),De=u(r),Ie(fe.$$.fragment,r),Me=u(r),ve=c(r,"P",{"data-svelte-h":!0}),E(ve)!=="svelte-milktt"&&(ve.innerHTML=$e),Be=u(r),Ie(ce.$$.fragment,r),Ge=u(r),Le=c(r,"P",{"data-svelte-h":!0}),E(Le)!=="svelte-1s46y18"&&(Le.innerHTML=ot),Je=u(r),Ie(de.$$.fragment,r),Ke=u(r),Te=c(r,"P",{"data-svelte-h":!0}),E(Te)!=="svelte-1jzw99x"&&(Te.innerHTML=ht),Ye=u(r),Ie(me.$$.fragment,r),Qe=u(r),He=c(r,"H2",{"data-svelte-h":!0}),E(He)!=="svelte-18h97l9"&&(He.textContent=ut),Xe=u(r),Se=c(r,"P",{"data-svelte-h":!0}),E(Se)!=="svelte-bdxgjq"&&(Se.textContent=ft),r.forEach(o),Ze=u(V),pe=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(pe)!=="svelte-1wdkv5f"&&(pe.innerHTML=gt),et=u(V),xe=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(xe)!=="svelte-487dum"&&(xe.innerHTML=vt),tt=u(V),_e=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(_e)!=="svelte-7q9org"&&(_e.innerHTML=ct),nt=u(V),ye=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(ye)!=="svelte-487dum"&&(ye.innerHTML=dt),it=u(V),we=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(we)!=="svelte-1a4rh2t"&&(we.innerHTML=mt),at=u(V),Ee=c(V,"DIV",{class:!0,"data-svelte-h":!0}),E(Ee)!=="svelte-13krums"&&(Ee.innerHTML=pt),V.forEach(o),this.h()},h(){e(W,"class","title"),e(w,"width","150"),e(w,"height","150"),xt(w.src,N=Pt)||e(w,"src",N),e(w,"alt","clockAM"),kt(w,"margin-right","30px"),e($,"width","150"),e($,"height","150"),xt($.src,he=jt)||e($,"src",he),e($,"alt","clockPM"),e(n,"class","text"),e(pe,"class","map"),e(xe,"class","text"),e(_e,"class","map"),e(ye,"class","text"),e(we,"class","map"),e(Ee,"class","text")},m(D,V){Pe(i,D,V),Ue(D,m,V),Ue(D,s,V),t(s,W),t(s,g),t(s,n),t(n,H),t(n,ae),t(n,Y),t(n,ee),t(n,M),t(n,S),t(n,J),t(n,j),t(n,K),t(n,se),t(n,T),t(n,A),t(n,z),t(n,ne),t(n,w),t(n,y),t(n,$),t(n,U),t(n,Q),t(n,X),t(n,R),t(n,Z),t(n,F),t(n,ke),t(n,te),t(n,l),t(n,f),t(n,C),Pe(ue,n,null),t(n,Ce),t(n,ge),t(n,De),Pe(fe,n,null),t(n,Me),t(n,ve),t(n,Be),Pe(ce,n,null),t(n,Ge),t(n,Le),t(n,Je),Pe(de,n,null),t(n,Ke),t(n,Te),t(n,Ye),Pe(me,n,null),t(n,Qe),t(n,He),t(n,Xe),t(n,Se),t(s,Ze),t(s,pe),t(s,et),t(s,xe),t(s,tt),t(s,_e),t(s,nt),t(s,ye),t(s,it),t(s,we),t(s,at),t(s,Ee),Re=!0},p:Ve,i(D){Re||(je(i.$$.fragment,D),je(ue.$$.fragment,D),je(fe.$$.fragment,D),je(ce.$$.fragment,D),je(de.$$.fragment,D),je(me.$$.fragment,D),Re=!0)},o(D){Ae(i.$$.fragment,D),Ae(ue.$$.fragment,D),Ae(fe.$$.fragment,D),Ae(ce.$$.fragment,D),Ae(de.$$.fragment,D),Ae(me.$$.fragment,D),Re=!1},d(D){D&&(o(m),o(s)),qe(i,D),qe(ue),qe(fe),qe(ce),qe(de),qe(me)}}}class Ot extends st{constructor(i){super(),lt(this,i,null,At,rt,{})}}export{Ot as component,Wt as universal};