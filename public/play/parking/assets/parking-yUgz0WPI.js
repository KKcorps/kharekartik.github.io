import"./theme-BBy8bonS.js";import{c as tf,a as ze,l as ef,e as mo}from"./kit-BAbkoJbM.js";/* empty css               */const pl="186",nf=0,ac=1,rf=2,qs=1,Th=2,Ur=3,Ii=0,He=1,Fe=2,Kn=0,Br=1,oc=2,lc=3,cc=4,sf=5,rr=100,af=101,of=102,lf=103,cf=104,hf=200,uf=201,ff=202,df=203,Ah=204,Rh=205,pf=206,mf=207,gf=208,_f=209,xf=210,vf=211,Mf=212,Sf=213,yf=214,go=0,_o=1,xo=2,qr=3,vo=4,Mo=5,So=6,yo=7,Ch=0,bf=1,Ef=2,Nn=0,Ph=1,Lh=2,Ih=3,ml=4,Dh=5,Nh=6,Uh=7,Fh=300,Di=301,pr=302,wa=303,Ta=304,da=306,ea=1e3,qn=1001,bo=1002,ke=1003,wf=1004,ds=1005,qe=1006,Aa=1007,Ai=1008,on=1009,Oh=1010,Bh=1011,$r=1012,gl=1013,On=1014,Mn=1015,yn=1016,_l=1017,xl=1018,Zr=1020,zh=35902,kh=35899,Hh=1021,Gh=1022,Sn=1023,Qn=1026,Ri=1027,vl=1028,Ml=1029,Ni=1030,Sl=1031,yl=1033,$s=33776,Zs=33777,Ks=33778,Js=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Lo=37488,Io=37489,na=37490,Do=37491,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,ko=37814,Ho=37815,Go=37816,Vo=37817,Wo=37818,Xo=37819,Yo=37820,qo=37821,$o=36492,Zo=36494,Ko=36495,Jo=36283,Qo=36284,ia=36285,jo=36286,Tf=3200,tl=0,Af=1,ui="",Qe="srgb",ra="srgb-linear",sa="linear",_e="srgb",Ra=7680,Rf=519,Cf=512,Pf=513,Lf=514,bl=515,If=516,Df=517,El=518,Nf=519,Uf=35044,hc="300 es",Dn=2e3,Kr=2001;function Ff(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=Jr("canvas");return n.style.display="block",n}const uc={};function fc(...n){const t="THREE."+n.shift();console.log(t,...n)}function Vh(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Vh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Vh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hr(...n){const t=n.join(" ");t in uc||(uc[t]=!0,Wt(...n))}function Bf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const zf={[go]:_o,[xo]:So,[vo]:yo,[qr]:Mo,[_o]:go,[So]:xo,[yo]:vo,[Mo]:qr};class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const zr=Math.PI/180,mr=180/Math.PI;function Oi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function wl(n,t){return(n%t+t)%t}function kf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Hf(n,t,e){return n!==t?(e-n)/(t-n):0}function kr(n,t,e){return(1-e)*n+e*t}function Gf(n,t,e,i){return kr(n,t,1-Math.exp(-e*i))}function Vf(n,t=1){return t-Math.abs(wl(n,t*2)-t)}function Wf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Yf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function qf(n,t){return n+Math.random()*(t-n)}function $f(n){return n*(.5-Math.random())}function Zf(n){n!==void 0&&(dc=n);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kf(n){return n*zr}function Jf(n){return n*mr}function Qf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function td(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ed(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),f=a((t-i)/2),d=s((i-t)/2),m=a((i-t)/2);switch(r){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pc={DEG2RAD:zr,RAD2DEG:mr,generateUUID:Oi,clamp:jt,euclideanModulo:wl,mapLinear:kf,inverseLerp:Hf,lerp:kr,damp:Gf,pingpong:Vf,smoothstep:Wf,smootherstep:Xf,randInt:Yf,randFloat:qf,randFloatSpread:$f,seededRandom:Zf,degToRad:Kf,radToDeg:Jf,isPowerOfTwo:Qf,ceilPowerOfTwo:jf,floorPowerOfTwo:td,setQuaternionFromProperEuler:ed,normalize:Ke,denormalize:sr},Xl=class Xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xl.prototype.isVector2=!0;let ot=Xl;class pi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(u!==v||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*v;g<0&&(f=-f,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+v*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yl=class Yl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yl.prototype.isVector3=!0;let L=Yl;const Ca=new L,mc=new pi,ql=class ql{constructor(t,e,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],v=r[0],g=r[3],p=r[6],x=r[1],y=r[4],M=r[7],E=r[2],b=r[5],A=r[8];return s[0]=a*v+o*x+l*E,s[3]=a*g+o*y+l*b,s[6]=a*p+o*M+l*A,s[1]=c*v+h*x+u*E,s[4]=c*g+h*y+u*b,s[7]=c*p+h*M+u*A,s[2]=f*v+d*x+m*E,s[5]=f*g+d*y+m*b,s[8]=f*p+d*M+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,m=e*u+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(r*c-h*i)*v,t[2]=(o*i-r*a)*v,t[3]=f*v,t[4]=(h*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;let Yt=ql;const Pa=new Yt,gc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){const n={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_e&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ra]:{primaries:t,whitePoint:i,transfer:sa,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),n}const ae=nd();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class id{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hi===void 0&&(Hi=Jr("canvas")),Hi.width=t.width,Hi.height=t.height;const r=Hi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Hi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Jn(e[i]/255)*255):e[i]=Jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class Tl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(La(r[a].image)):s.push(La(r[a]))}else s=La(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let sd=0;const Ia=new L;class $e extends Fi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=qn,r=qn,s=qe,a=Ai,o=Sn,l=on,c=$e.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Oi(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ia).x}get height(){return this.source.getSize(Ia).y}get depth(){return this.source.getSize(Ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Fh;$e.DEFAULT_ANISOTROPY=1;const $l=class $l{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,E=(p+1)/2,b=(h+f)/4,A=(u+v)/4,_=(m+g)/4;return y>M&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=A/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=_/s),this.set(i,r,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$l.prototype.isVector4=!0;let we=$l;class ad extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new $e(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Tl(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends ad{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wh extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const fa=class fa{constructor(t,e,i,r,s,a,o,l,c,h,u,f,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,u,f,d,m,v,g)}set(t,e,i,r,s,a,o,l,c,h,u,f,d,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,i){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(i,rn),ii.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(i,rn)),ii.normalize(),ps.crossVectors(rn,ii),r[0]=ii.x,r[4]=ps.x,r[8]=rn.x,r[1]=ii.y,r[5]=ps.y,r[9]=rn.y,r[2]=ii.z,r[6]=ps.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],x=i[3],y=i[7],M=i[11],E=i[15],b=r[0],A=r[4],_=r[8],T=r[12],R=r[1],P=r[5],U=r[9],k=r[13],N=r[2],B=r[6],X=r[10],Y=r[14],rt=r[3],q=r[7],Q=r[11],it=r[15];return s[0]=a*b+o*R+l*N+c*rt,s[4]=a*A+o*P+l*B+c*q,s[8]=a*_+o*U+l*X+c*Q,s[12]=a*T+o*k+l*Y+c*it,s[1]=h*b+u*R+f*N+d*rt,s[5]=h*A+u*P+f*B+d*q,s[9]=h*_+u*U+f*X+d*Q,s[13]=h*T+u*k+f*Y+d*it,s[2]=m*b+v*R+g*N+p*rt,s[6]=m*A+v*P+g*B+p*q,s[10]=m*_+v*U+g*X+p*Q,s[14]=m*T+v*k+g*Y+p*it,s[3]=x*b+y*R+M*N+E*rt,s[7]=x*A+y*P+M*B+E*q,s[11]=x*_+y*U+M*X+E*Q,s[15]=x*T+y*k+M*Y+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],x=l*d-c*f,y=o*d-c*u,M=o*f-l*u,E=a*d-c*h,b=a*f-l*h,A=a*u-o*h;return e*(v*x-g*y+p*M)-i*(m*x-g*E+p*b)+r*(m*y-v*E+p*A)-s*(m*M-v*b+g*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],x=e*o-i*a,y=e*l-r*a,M=e*c-s*a,E=i*l-r*o,b=i*c-s*o,A=r*c-s*l,_=h*v-u*m,T=h*g-f*m,R=h*p-d*m,P=u*g-f*v,U=u*p-d*v,k=f*p-d*g,N=x*k-y*U+M*P+E*R-b*T+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=(o*k-l*U+c*P)*B,t[1]=(r*U-i*k-s*P)*B,t[2]=(v*A-g*b+p*E)*B,t[3]=(f*b-u*A-d*E)*B,t[4]=(l*R-a*k-c*T)*B,t[5]=(e*k-r*R+s*T)*B,t[6]=(g*M-m*A-p*y)*B,t[7]=(h*A-f*M+d*y)*B,t[8]=(a*U-o*R+c*_)*B,t[9]=(i*R-e*U-s*_)*B,t[10]=(m*b-v*M+p*x)*B,t[11]=(u*M-h*b-d*x)*B,t[12]=(o*T-a*P-l*_)*B,t[13]=(e*P-i*T+r*_)*B,t[14]=(v*y-m*E-g*x)*B,t[15]=(h*E-u*y+f*x)*B,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,m=s*u,v=a*h,g=a*u,p=o*u,x=l*c,y=l*h,M=l*u,E=i.x,b=i.y,A=i.z;return r[0]=(1-(v+p))*E,r[1]=(d+M)*E,r[2]=(m-y)*E,r[3]=0,r[4]=(d-M)*b,r[5]=(1-(f+p))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(m+y)*A,r[9]=(g-x)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),l=Gi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),mn.copy(this);const c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Dn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Dn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Kr)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Dn,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Dn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Kr)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fa.prototype.isMatrix4=!0;let xe=fa;const Gi=new L,mn=new xe,ld=new L(0,0,0),cd=new L(1,1,1),ii=new L,ps=new L,rn=new L,xc=new xe,vc=new pi;class jn{constructor(t=0,e=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const Mc=new L,Vi=new pi,zn=new xe,ms=new L,Sr=new L,ud=new L,fd=new pi,Sc=new L(1,0,0),yc=new L(0,1,0),bc=new L(0,0,1),Ec={type:"added"},dd={type:"removed"},Wi={type:"childadded",child:null},Da={type:"childremoved",child:null};class Ie extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new L,e=new jn,i=new pi,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Sr,ms,this.up):zn.lookAt(ms,Sr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(zn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Re extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ae.workingColorSpace){if(t=wl(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ua(a,s,t+1/3),this.g=Ua(a,s,t),this.b=Ua(a,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=Yh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ae.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(We.copy(this),e);const i=We.r,r=We.g,s=We.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Qe){ae.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,r=We.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(gs);const i=kr(ri.h,gs.h,e),r=kr(ri.s,gs.s,e),s=kr(ri.l,gs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Kt;Kt.NAMES=Yh;class Qr{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new Qr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fa extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new L,kn=new L,Oa=new L,Hn=new L,Xi=new L,Yi=new L,wc=new L,Ba=new L,za=new L,ka=new L,Ha=new we,Ga=new we,Va=new we;class vn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){gn.subVectors(r,e),kn.subVectors(i,e),Oa.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(kn),l=gn.dot(Oa),c=kn.dot(kn),h=kn.dot(Oa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ha.setScalar(0),Ga.setScalar(0),Va.setScalar(0),Ha.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ha,s.x),a.addScaledVector(Ga,s.y),a.addScaledVector(Va,s.z),a}static isFrontFacing(t,e,i,r){return gn.subVectors(i,e),kn.subVectors(t,e),gn.cross(kn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Xi.subVectors(r,i),Yi.subVectors(s,i),Ba.subVectors(t,i);const l=Xi.dot(Ba),c=Yi.dot(Ba);if(l<=0&&c<=0)return e.copy(i);za.subVectors(t,r);const h=Xi.dot(za),u=Yi.dot(za);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Xi,a);ka.subVectors(t,s);const d=Xi.dot(ka),m=Yi.dot(ka);if(m>=0&&d<=m)return e.copy(s);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Yi,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return wc.subVectors(s,r),o=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(wc,o);const p=1/(g+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(Xi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),xs.subVectors(this.max,yr),qi.subVectors(t.a,yr),$i.subVectors(t.b,yr),Zi.subVectors(t.c,yr),si.subVectors($i,qi),ai.subVectors(Zi,$i),_i.subVectors(qi,Zi);let e=[0,-si.z,si.y,0,-ai.z,ai.y,0,-_i.z,_i.y,si.z,0,-si.x,ai.z,0,-ai.x,_i.z,0,-_i.x,-si.y,si.x,0,-ai.y,ai.x,0,-_i.y,_i.x,0];return!Wa(e,qi,$i,Zi,xs)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,qi,$i,Zi,xs))?!1:(vs.crossVectors(si,ai),e=[vs.x,vs.y,vs.z],Wa(e,qi,$i,Zi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,_s=new mi,qi=new L,$i=new L,Zi=new L,si=new L,ai=new L,_i=new L,yr=new L,xs=new L,vs=new L,xi=new L;function Wa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){xi.fromArray(n,s);const o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Le=new L,Ms=new ot;let md=0;class Un extends Fi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Uf,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class qh extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $h extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class te extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}}const gd=new mi,br=new L,Xa=new L;class os{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(br,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Xa)),this.expandByPoint(br.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _d=0;const hn=new xe,Ya=new Ie,Ki=new L,sn=new mi,Er=new mi,Ue=new L;class Ce extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?$h:qh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(sn.min,Er.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,Er.max),sn.expandByPoint(Ue)):(sn.expandByPoint(Er.min),sn.expandByPoint(Er.max))}sn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),Ue.add(Ki)),r=Math.max(r,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,u=new L,f=new ot,d=new ot,m=new ot,v=new L,g=new L;function p(_,T,R){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,R),f.fromBufferAttribute(s,_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,R),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[_].add(v),o[T].add(v),o[R].add(v),l[_].add(g),l[T].add(g),l[R].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,T=x.length;_<T;++_){const R=x[_],P=R.start,U=R.count;for(let k=P,N=P+U;k<N;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new L,M=new L,E=new L,b=new L;function A(_){E.fromBufferAttribute(r,_),b.copy(E);const T=o[_];y.copy(T),y.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(b,T);const P=M.dot(l[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,T=x.length;_<T;++_){const R=x[_],P=R.start,U=R.count;for(let k=P,N=P+U;k<N;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Un(f,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new L,xd=new L,vd=new Yt;class hi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=qa.subVectors(i,e).cross(xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(qa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vd.getNormalMatrix(t),r=this.coplanarPoint(qa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Md=0;class ls extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Br,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new hi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Vn=new L,$a=new L,Ss=new L,ys=new L;class Al{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){$a.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),ys.copy(this.origin).sub($a);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ss),o=ys.dot(this.direction),l=-ys.dot(Ss),c=ys.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=s*h,u>=0)if(f>=-m)if(f<=m){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy($a).addScaledVector(Ss,f),d}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=i.x-a.x,x=i.y-a.y,y=i.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(h);let A,_,T,R,P,U,k,N,B,X,Y,rt;if(M>=E&&M>=b?(T=l,U=u,B=m,rt=p,l>=0?(A=c,_=h,R=f,P=d,k=v,N=g,X=x,Y=y):(A=h,_=c,R=d,P=f,k=g,N=v,X=y,Y=x)):E>=b?(T=c,U=f,B=v,rt=x,c>=0?(A=h,_=l,R=d,P=u,k=g,N=m,X=y,Y=p):(A=l,_=h,R=u,P=d,k=m,N=g,X=p,Y=y)):(T=h,U=d,B=g,rt=y,h>=0?(A=l,_=c,R=u,P=f,k=m,N=v,X=p,Y=x):(A=c,_=l,R=f,P=u,k=v,N=m,X=x,Y=p)),T===0)return null;const q=A/T,Q=_/T,it=1/T,Lt=R-q*U,Tt=P-Q*U,ue=k-q*B,ee=N-Q*B,le=X-q*rt,K=Y-Q*rt,tt=le*ee-K*ue,vt=Lt*K-Tt*le,kt=ue*Tt-ee*Lt;if(r){if(tt<0||vt<0||kt<0)return null}else if((tt<0||vt<0||kt<0)&&(tt>0||vt>0||kt>0))return null;const bt=tt+vt+kt;if(bt===0)return null;const Gt=it*(tt*U+vt*B+kt*rt);return(bt>0?Gt<0:Gt>0)?null:this.at(Gt/bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tc=new xe,vi=new Al,bs=new os,Ac=new L,Es=new L,ws=new L,Ts=new L,Za=new L,As=new L,Rc=new L,Rs=new L;class $t extends Ie{constructor(t=new Ce,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){As.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Za.fromBufferAttribute(u,t),a?As.addScaledVector(Za,h):As.addScaledVector(Za.sub(e),h))}e.add(As)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(bs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(bs,Ac)===null||vi.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Tc),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,E=y;M<E;M+=3){const b=o.getX(M),A=o.getX(M+1),_=o.getX(M+2);r=Cs(this,p,t,i,c,h,u,b,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);r=Cs(this,a,t,i,c,h,u,x,y,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=x,E=y;M<E;M+=3){const b=M,A=M+1,_=M+2;r=Cs(this,p,t,i,c,h,u,b,A,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const x=g,y=g+1,M=g+2;r=Cs(this,a,t,i,c,h,u,x,y,M),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Sd(n,t,e,i,r,s,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Ii,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rs);return c<e.near||c>e.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Es),n.getVertexPosition(l,ws),n.getVertexPosition(c,Ts);const h=Sd(n,t,e,i,Es,ws,Ts,Rc);if(h){const u=new L;vn.getBarycoord(Rc,Es,ws,Ts,u),r&&(h.uv=vn.getInterpolatedAttribute(r,o,l,c,u,new ot)),s&&(h.uv1=vn.getInterpolatedAttribute(s,o,l,c,u,new ot)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(Es,ws,Ts,f.normal),h.face=f,h.barycoord=u}return h}class Zh extends $e{constructor(t=null,e=1,i=1,r,s,a,o,l,c=ke,h=ke,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends Un{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new xe,Pc=new xe,Ps=[],Lc=new mi,yd=new xe,wr=new $t,Tr=new os;class Kh extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ji),Lc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ji),Tr.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ji),Pc.multiplyMatrices(i,Ji),wr.matrixWorld=Pc,wr.raycast(t,Ps);for(let a=0,o=Ps.length;a<o;a++){const l=Ps[a];l.instanceId=s,l.object=this,e.push(l)}Ps.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zh(new Float32Array(r*this.count),r,this.count,vl,Mn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mi=new os,bd=new ot(.5,.5),Ls=new L;class Rl{constructor(t=new hi,e=new hi,i=new hi,r=new hi,s=new hi,a=new hi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],m=s[8],v=s[9],g=s[10],p=s[11],x=s[12],y=s[13],M=s[14],E=s[15];if(r[0].setComponents(c-a,d-h,p-m,E-x).normalize(),r[1].setComponents(c+a,d+h,p+m,E+x).normalize(),r[2].setComponents(c+o,d+u,p+v,E+y).normalize(),r[3].setComponents(c-o,d-u,p-v,E-y).normalize(),i)r[4].setComponents(l,f,g,M).normalize(),r[5].setComponents(c-l,d-f,p-g,E-M).normalize();else if(r[4].setComponents(c-l,d-f,p-g,E-M).normalize(),e===Dn)r[5].setComponents(c+l,d+f,p+g,E+M).normalize();else if(e===Kr)r[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=bd.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ls.x=r.normal.x>0?t.max.x:t.min.x,Ls.y=r.normal.y>0?t.max.y:t.min.y,Ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends $e{constructor(t=[],e=Di,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qh extends $e{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends $e{constructor(t,e,i=On,r,s,a,o=ke,l=ke,c,h=Qn,u=1){if(h!==Qn&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ed extends jr{constructor(t,e=On,i=Di,r,s,a=ke,o=ke,l,c=Qn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class jh extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ft extends Ce{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,r,a,2),m("x","z","y",1,-1,t,i,-e,r,a,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(v,g,p,x,y,M,E,b,A,_,T){const R=M/A,P=E/_,U=M/2,k=E/2,N=b/2,B=A+1,X=_+1;let Y=0,rt=0;const q=new L;for(let Q=0;Q<X;Q++){const it=Q*P-k;for(let Lt=0;Lt<B;Lt++){const Tt=Lt*R-U;q[v]=Tt*x,q[g]=it*y,q[p]=N,c.push(q.x,q.y,q.z),q[v]=0,q[g]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),u.push(Lt/A),u.push(1-Q/_),Y+=1}}for(let Q=0;Q<_;Q++)for(let it=0;it<A;it++){const Lt=f+it+B*Q,Tt=f+it+B*(Q+1),ue=f+(it+1)+B*(Q+1),ee=f+(it+1)+B*Q;l.push(Lt,Tt,ee),l.push(Tt,ue,ee),rt+=6}o.addGroup(d,rt,T),d+=rt,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ci extends Ce{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new L,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends Ce{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let m=0;const v=[],g=i/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function x(){const M=new L,E=new L;let b=0;const A=(e-t)/i;for(let _=0;_<=s;_++){const T=[],R=_/s,P=R*(e-t)+t;for(let U=0;U<=r;U++){const k=U/r,N=k*l+o,B=Math.sin(N),X=Math.cos(N);E.x=P*B,E.y=-R*i+g,E.z=P*X,u.push(E.x,E.y,E.z),M.set(B,A,X).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-R),T.push(m++)}v.push(T)}for(let _=0;_<r;_++)for(let T=0;T<s;T++){const R=v[T][_],P=v[T+1][_],U=v[T+1][_+1],k=v[T][_+1];(t>0||T!==0)&&(h.push(R,P,k),b+=3),(e>0||T!==s-1)&&(h.push(P,U,k),b+=3)}c.addGroup(p,b,0),p+=b}function y(M){const E=m,b=new ot,A=new L;let _=0;const T=M===!0?t:e,R=M===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,g*R,0),f.push(0,R,0),d.push(.5,.5),m++;const P=m;for(let U=0;U<=r;U++){const N=U/r*l+o,B=Math.cos(N),X=Math.sin(N);A.x=T*X,A.y=g*R,A.z=T*B,u.push(A.x,A.y,A.z),f.push(0,R,0),b.x=B*.5+.5,b.y=X*.5*R+.5,d.push(b.x,b.y),m++}for(let U=0;U<r;U++){const k=E+U,N=P+U;M===!0?h.push(N,N+1,k):h.push(N+1,N,k),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cl extends Ce{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new L,M=new L,E=new L;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],M),d(e[b+2],E),l(y,M,E,x)}function l(x,y,M,E){const b=E+1,A=[];for(let _=0;_<=b;_++){A[_]=[];const T=x.clone().lerp(M,_/b),R=y.clone().lerp(M,_/b),P=b-_;for(let U=0;U<=P;U++)U===0&&_===b?A[_][U]=T:A[_][U]=T.clone().lerp(R,U/P)}for(let _=0;_<b;_++)for(let T=0;T<2*(b-_)-1;T++){const R=Math.floor(T/2);T%2===0?(f(A[_][R+1]),f(A[_+1][R]),f(A[_][R])):(f(A[_][R+1]),f(A[_+1][R+1]),f(A[_+1][R]))}}function c(x){const y=new L;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(x),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){const x=new L;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const M=g(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(M,1-E)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],M=a[x+2],E=a[x+4],b=Math.max(y,M,E),A=Math.min(y,M,E);b>.9&&A<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function m(){const x=new L,y=new L,M=new L,E=new L,b=new ot,A=new ot,_=new ot;for(let T=0,R=0;T<s.length;T+=9,R+=6){x.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),E.copy(x).add(y).add(M).divideScalar(3);const P=g(E);v(b,R+0,x,P),v(A,R+2,y,P),v(_,R+4,M,P)}}function v(x,y,M,E){E<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.vertices,t.indices,t.radius,t.detail)}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(a-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ot:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,r=[],s=[],a=[],o=new L,l=new xe;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(jt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(jt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Bn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wd extends Pl{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const Ic=new L,Dc=new L,Ka=new Ll,Ja=new Ll,Qa=new Ll;class Td extends Bn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Dc.subVectors(r[0],r[1]).add(r[0]),c=Dc);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ic.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ka.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,v,g),Ja.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,v,g),Qa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ka.calc(l),Ja.calc(l),Qa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nc(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function Ad(n,t){const e=1-n;return e*e*t}function Rd(n,t){return 2*(1-n)*n*t}function Cd(n,t){return n*n*t}function Hr(n,t,e,i){return Ad(n,t)+Rd(n,e)+Cd(n,i)}function Pd(n,t){const e=1-n;return e*e*e*t}function Ld(n,t){const e=1-n;return 3*e*e*n*t}function Id(n,t){return 3*(1-n)*n*n*t}function Dd(n,t){return n*n*n*t}function Gr(n,t,e,i,r){return Pd(n,t)+Ld(n,e)+Id(n,i)+Dd(n,r)}class tu extends Bn{constructor(t=new ot,e=new ot,i=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gr(t,r.x,s.x,a.x,o.x),Gr(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nd extends Bn{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gr(t,r.x,s.x,a.x,o.x),Gr(t,r.y,s.y,a.y,o.y),Gr(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eu extends Bn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends Bn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends Bn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Hr(t,r.x,s.x,a.x),Hr(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Bn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Hr(t,r.x,s.x,a.x),Hr(t,r.y,s.y,a.y),Hr(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iu extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Nc(o,l.x,c.x,h.x,u.x),Nc(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:wd,CatmullRomCurve3:Td,CubicBezierCurve:tu,CubicBezierCurve3:Nd,EllipseCurve:Pl,LineCurve:eu,LineCurve3:Ud,QuadraticBezierCurve:nu,QuadraticBezierCurve3:Fd,SplineCurve:iu});class Od extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new el[r.type]().fromJSON(r))}return this}}class nl extends Od{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new eu(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new nu(this.currentPoint.clone(),new ot(t,e),new ot(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new tu(this.currentPoint.clone(),new ot(t,e),new ot(i,r),new ot(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new iu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,r,s,a,o,l),this}absellipse(t,e,i,r,s,a,o,l){const c=new Pl(t,e,i,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bi extends nl{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new nl().fromJSON(r))}return this}}function Bd(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=ru(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Vd(n,t,s,e)),n.length>80*e){o=n[0],l=n[1];let h=o,u=l;for(let f=e;f<r;f+=e){const d=n[f],m=n[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ts(s,a,e,o,l,c,0),a}function ru(n,t,e,i,r){let s;if(r===tp(n,t,e,i)>0)for(let a=t;a<e;a+=i)s=Uc(a/i|0,n[a],n[a+1],s);else for(let a=e-i;a>=t;a-=i)s=Uc(a/i|0,n[a],n[a+1],s);return s&&gr(s,s.next)&&(ns(s),s=s.next),s}function Ui(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(gr(e,e.next)||Te(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ts(n,t,e,i,r,s,a){if(!n)return;!a&&s&&$d(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?kd(n,i,r,s):zd(n)){t.push(l.i,n.i,c.i),ns(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Hd(Ui(n),t),ts(n,t,e,i,r,s,2)):a===2&&Gd(n,t,e,i,r,s):ts(Ui(n),t,e,i,r,s,1);break}}}function zd(n){const t=n.prev,e=n,i=n.next;if(Te(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),f=Math.max(r,s,a),d=Math.max(o,l,c);let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Fr(r,o,s,l,a,c,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function kd(n,t,e,i){const r=n.prev,s=n,a=n.next;if(Te(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),v=Math.max(o,l,c),g=Math.max(h,u,f),p=il(d,m,t,e,i),x=il(v,g,t,e,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=p&&M&&M.z<=x;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Fr(o,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&Fr(o,h,l,u,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Fr(o,h,l,u,c,f,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==r&&M!==a&&Fr(o,h,l,u,c,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Hd(n,t){let e=n;do{const i=e.prev,r=e.next.next;!gr(i,r)&&au(i,e,e.next,r)&&es(i,r)&&es(r,i)&&(t.push(i.i,e.i,r.i),ns(e),ns(e.next),e=n=r),e=e.next}while(e!==n);return Ui(e)}function Gd(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jd(a,o)){let l=ou(a,o);a=Ui(a,a.next),l=Ui(l,l.next),ts(a,t,e,i,r,s,0),ts(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Vd(n,t,e,i){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=ru(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Kd(c))}r.sort(Wd);for(let s=0;s<r.length;s++)e=Xd(r[s],e);return e}function Wd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Xd(n,t){const e=Yd(n,t);if(!e)return t;const i=ou(e,n);return Ui(i,i.next),Ui(e,e.next)}function Yd(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,a;if(gr(n,e))return e;do{if(gr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&su(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){const u=Math.abs(r-e.y)/(i-e.x);es(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&qd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function qd(n,t){return Te(n.prev,n,t.prev)<0&&Te(t.next,n,n.next)<0}function $d(n,t,e,i){let r=n;do r.z===0&&(r.z=il(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Zd(r)}function Zd(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,e*=2}while(t>1);return n}function il(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Kd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function su(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function Fr(n,t,e,i,r,s,a,o){return!(n===a&&t===o)&&su(n,t,e,i,r,s,a,o)}function Jd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Qd(n,t)&&(es(n,t)&&es(t,n)&&jd(n,t)&&(Te(n.prev,n,t.prev)||Te(n,t.prev,t))||gr(n,t)&&Te(n.prev,n,n.next)>0&&Te(t.prev,t,t.next)>0)}function Te(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function gr(n,t){return n.x===t.x&&n.y===t.y}function au(n,t,e,i){const r=Ds(Te(n,t,e)),s=Ds(Te(n,t,i)),a=Ds(Te(e,i,n)),o=Ds(Te(e,i,t));return!!(r!==s&&a!==o||r===0&&Is(n,e,t)||s===0&&Is(n,i,t)||a===0&&Is(e,n,i)||o===0&&Is(e,t,i))}function Is(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ds(n){return n>0?1:n<0?-1:0}function Qd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&au(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function es(n,t){return Te(n.prev,n,n.next)<0?Te(n,t,n.next)>=0&&Te(n,n.prev,t)>=0:Te(n,t,n.prev)<0||Te(n,n.next,t)<0}function jd(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ou(n,t){const e=rl(n.i,n.x,n.y),i=rl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Uc(n,t,e,i){const r=rl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ns(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tp(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class ep{static triangulate(t,e,i=2){return Bd(t,e,i)}}class $n{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return $n.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Fc(t),Oc(i,t);let a=t.length;e.forEach(Fc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Oc(i,e[l]);const o=ep.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Fc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Oc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class pa extends Ce{constructor(t=new Bi([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:np;let y,M=!1,E,b,A,_;if(p){y=p.getSpacedPoints(h),M=!0,f=!1;const et=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,et),b=new L,A=new L,_=new L}f||(g=0,d=0,m=0,v=0);const T=o.extractPoints(c);let R=T.shape;const P=T.holes;if(!$n.isClockWise(R)){R=R.reverse();for(let et=0,at=P.length;et<at;et++){const lt=P[et];$n.isClockWise(lt)&&(P[et]=lt.reverse())}}function k(et){const lt=10000000000000001e-36;let ct=et[0];for(let ft=1;ft<=et.length;ft++){const Ot=ft%et.length,Ut=et[Ot],Vt=Ut.x-ct.x,Xt=Ut.y-ct.y,I=Vt*Vt+Xt*Xt,fe=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(ct.x),Math.abs(ct.y)),ne=lt*fe*fe;if(I<=ne){et.splice(Ot,1),ft--;continue}ct=Ut}}k(R),P.forEach(k);const N=P.length,B=R;for(let et=0;et<N;et++){const at=P[et];R=R.concat(at)}function X(et,at,lt){return at||he("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(at,lt)}const Y=R.length;function rt(et,at,lt){let ct,ft,Ot;const Ut=et.x-at.x,Vt=et.y-at.y,Xt=lt.x-et.x,I=lt.y-et.y,fe=Ut*Ut+Vt*Vt,ne=Ut*I-Vt*Xt;if(Math.abs(ne)>Number.EPSILON){const C=Math.sqrt(fe),S=Math.sqrt(Xt*Xt+I*I),z=at.x-Vt/C,V=at.y+Ut/C,$=lt.x-I/S,ht=lt.y+Xt/S,ut=(($-z)*I-(ht-V)*Xt)/(Ut*I-Vt*Xt);ct=z+Ut*ut-et.x,ft=V+Vt*ut-et.y;const Z=ct*ct+ft*ft;if(Z<=2)return new ot(ct,ft);Ot=Math.sqrt(Z/2)}else{let C=!1;Ut>Number.EPSILON?Xt>Number.EPSILON&&(C=!0):Ut<-Number.EPSILON?Xt<-Number.EPSILON&&(C=!0):Math.sign(Vt)===Math.sign(I)&&(C=!0),C?(ct=-Vt,ft=Ut,Ot=Math.sqrt(fe)):(ct=Ut,ft=Vt,Ot=Math.sqrt(fe/2))}return new ot(ct/Ot,ft/Ot)}const q=[];for(let et=0,at=B.length,lt=at-1,ct=et+1;et<at;et++,lt++,ct++)lt===at&&(lt=0),ct===at&&(ct=0),q[et]=rt(B[et],B[lt],B[ct]);const Q=[];let it,Lt=q.concat();for(let et=0,at=N;et<at;et++){const lt=P[et];it=[];for(let ct=0,ft=lt.length,Ot=ft-1,Ut=ct+1;ct<ft;ct++,Ot++,Ut++)Ot===ft&&(Ot=0),Ut===ft&&(Ut=0),it[ct]=rt(lt[ct],lt[Ot],lt[Ut]);Q.push(it),Lt=Lt.concat(it)}let Tt;if(g===0)Tt=$n.triangulateShape(B,P);else{const et=[],at=[];for(let lt=0;lt<g;lt++){const ct=lt/g,ft=d*Math.cos(ct*Math.PI/2),Ot=m*Math.sin(ct*Math.PI/2)+v;for(let Ut=0,Vt=B.length;Ut<Vt;Ut++){const Xt=X(B[Ut],q[Ut],Ot);vt(Xt.x,Xt.y,-ft),ct===0&&et.push(Xt)}for(let Ut=0,Vt=N;Ut<Vt;Ut++){const Xt=P[Ut];it=Q[Ut];const I=[];for(let fe=0,ne=Xt.length;fe<ne;fe++){const C=X(Xt[fe],it[fe],Ot);vt(C.x,C.y,-ft),ct===0&&I.push(C)}ct===0&&at.push(I)}}Tt=$n.triangulateShape(et,at)}const ue=Tt.length,ee=m+v;for(let et=0;et<Y;et++){const at=f?X(R[et],Lt[et],ee):R[et];M?(A.copy(E.normals[0]).multiplyScalar(at.x),b.copy(E.binormals[0]).multiplyScalar(at.y),_.copy(y[0]).add(A).add(b),vt(_.x,_.y,_.z)):vt(at.x,at.y,0)}for(let et=1;et<=h;et++)for(let at=0;at<Y;at++){const lt=f?X(R[at],Lt[at],ee):R[at];M?(A.copy(E.normals[et]).multiplyScalar(lt.x),b.copy(E.binormals[et]).multiplyScalar(lt.y),_.copy(y[et]).add(A).add(b),vt(_.x,_.y,_.z)):vt(lt.x,lt.y,u/h*et)}for(let et=g-1;et>=0;et--){const at=et/g,lt=d*Math.cos(at*Math.PI/2),ct=m*Math.sin(at*Math.PI/2)+v;for(let ft=0,Ot=B.length;ft<Ot;ft++){const Ut=X(B[ft],q[ft],ct);vt(Ut.x,Ut.y,u+lt)}for(let ft=0,Ot=P.length;ft<Ot;ft++){const Ut=P[ft];it=Q[ft];for(let Vt=0,Xt=Ut.length;Vt<Xt;Vt++){const I=X(Ut[Vt],it[Vt],ct);M?vt(I.x,I.y+y[h-1].y,y[h-1].x+lt):vt(I.x,I.y,u+lt)}}}le(),K();function le(){const et=r.length/3;if(f){let at=0,lt=Y*at;for(let ct=0;ct<ue;ct++){const ft=Tt[ct];kt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}at=h+g*2,lt=Y*at;for(let ct=0;ct<ue;ct++){const ft=Tt[ct];kt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let at=0;at<ue;at++){const lt=Tt[at];kt(lt[2],lt[1],lt[0])}for(let at=0;at<ue;at++){const lt=Tt[at];kt(lt[0]+Y*h,lt[1]+Y*h,lt[2]+Y*h)}}i.addGroup(et,r.length/3-et,0)}function K(){const et=r.length/3;let at=0;tt(B,at),at+=B.length;for(let lt=0,ct=P.length;lt<ct;lt++){const ft=P[lt];tt(ft,at),at+=ft.length}i.addGroup(et,r.length/3-et,1)}function tt(et,at){let lt=et.length;for(;--lt>=0;){const ct=lt;let ft=lt-1;ft<0&&(ft=et.length-1);for(let Ot=0,Ut=h+g*2;Ot<Ut;Ot++){const Vt=Y*Ot,Xt=Y*(Ot+1),I=at+ct+Vt,fe=at+ft+Vt,ne=at+ft+Xt,C=at+ct+Xt;bt(I,fe,ne,C)}}}function vt(et,at,lt){l.push(et),l.push(at),l.push(lt)}function kt(et,at,lt){Gt(et),Gt(at),Gt(lt);const ct=r.length/3,ft=x.generateTopUV(i,r,ct-3,ct-2,ct-1);me(ft[0]),me(ft[1]),me(ft[2])}function bt(et,at,lt,ct){Gt(et),Gt(at),Gt(ct),Gt(at),Gt(lt),Gt(ct);const ft=r.length/3,Ot=x.generateSideWallUV(i,r,ft-6,ft-3,ft-2,ft-1);me(Ot[0]),me(Ot[1]),me(Ot[3]),me(Ot[1]),me(Ot[2]),me(Ot[3])}function Gt(et){r.push(l[et*3+0]),r.push(l[et*3+1]),r.push(l[et*3+2])}function me(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ip(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new el[r.type]().fromJSON(r)),new pa(i,t.options)}}const np={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[r*3],h=t[r*3+1];return[new ot(s,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[r*3],d=t[r*3+1],m=t[r*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-u),new ot(f,1-m),new ot(v,1-p)]:[new ot(o,1-l),new ot(h,1-u),new ot(d,1-m),new ot(g,1-p)]}};function ip(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ma extends Cl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ma(t.radius,t.detail)}}class Il extends Ce{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=jt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,f=new ot,d=new L,m=new L,v=new L;let g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(m)}for(let x=0;x<=e;x++){const y=i+x*h*r,M=Math.sin(y),E=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*E,a.push(u.x,u.y,u.z),f.x=x/e,f.y=b/(t.length-1),o.push(f.x,f.y);const A=l[3*b+0]*M,_=l[3*b+1],T=l[3*b+0]*E;c.push(A,_,T)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const M=y+x*t.length,E=M,b=M+t.length,A=M+t.length+1,_=M+1;s.push(E,b,_),s.push(A,_,b)}this.setIndex(s),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.points,t.segments,t.phiStart,t.phiLength)}}class ln extends Ce{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const x=p*f-a;for(let y=0;y<c;y++){const M=y*u-s;m.push(M,-x,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,M=x+c*(p+1),E=x+1+c*(p+1),b=x+1+c*p;d.push(y,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class cs extends Ce{constructor(t=new Bi([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(a,2));function c(h){const u=r.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;$n.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];$n.isClockWise(x)===!0&&(m[g]=x.reverse())}const v=$n.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){const x=v[g],y=x[0]+u,M=x[1]+u,E=x[2]+u;i.push(y,M,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return rp(e,t)}static fromJSON(t,e){const i=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];i.push(a)}return new cs(i,t.curveSegments)}}function rp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}class hs extends Ce{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const x=[],y=p/i,M=a+y*o,E=t*Math.cos(M),b=Math.sqrt(t*t-E*E);let A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){const T=_/e,R=r+T*s;u.x=-b*Math.cos(R),u.y=E,u.z=b*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(T+A,1-y),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){const y=h[p][x+1],M=h[p][x],E=h[p+1][x],b=h[p+1][x+1];(p!==0||a>0)&&d.push(y,M,b),(p!==i-1||l<Math.PI)&&d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dl extends Ce{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],u=[],f=new L,d=new L,m=new L;for(let v=0;v<=i;v++){const g=a+v/i*o;for(let p=0;p<=r;p++){const x=p/r*s;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/r),u.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=r;g++){const p=(r+1)*v+g-1,x=(r+1)*(v-1)+g-1,y=(r+1)*(v-1)+g,M=(r+1)*v+g;l.push(p,x,M),l.push(x,y,M)}this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function _r(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Bc(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Bc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=_r(n[e]);for(const r in i)t[r]=i[r]}return t}function Bc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const cu={clone:_r,merge:Je};var ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new we().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class lp extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xr extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sl extends xr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cp extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hp extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ja={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(zc(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!zc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function zc(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class up{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fp=new up;class hu{constructor(t){this.manager=t!==void 0?t:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}hu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class dp extends hu{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ja.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=Qi.get(a);u===void 0&&(u=[],Qi.set(a,u)),u.push({onLoad:e,onError:r})}return a}const o=Jr("img");function l(){h(),e&&e(this);const u=Qi.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Qi.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),ja.remove(`image:${t}`);const f=Qi.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}Qi.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ja.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class ga extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class pp extends ga{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const to=new xe,kc=new L,Hc=new L;class Nl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(to,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===Kr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ns=new L,Us=new pi,Tn=new L;class uu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ns,Us,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Us,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ns,Us,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Us,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new L,Gc=new ot,Vc=new ot;class je extends uu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class mp extends Nl{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=mr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class fu extends ga{constructor(t,e,i=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class gp extends Nl{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}}class du extends ga{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class _a extends uu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _p extends Nl{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xp extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new _p}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ji=-90,tr=1;class vp extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(ji,tr,t,e);r.layers=this.layers,this.add(r);const s=new je(ji,tr,t,e);s.layers=this.layers,this.add(s);const a=new je(ji,tr,t,e);a.layers=this.layers,this.add(a);const o=new je(ji,tr,t,e);o.layers=this.layers,this.add(o);const l=new je(ji,tr,t,e);l.layers=this.layers,this.add(l);const c=new je(ji,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Mp extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Zl=class Zl{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};Zl.prototype.isMatrix2=!0;let Wc=Zl;function Xc(n,t,e,i){const r=Sp(i);switch(e){case Hh:return n*t;case vl:return n*t/r.components*r.byteLength;case Ml:return n*t/r.components*r.byteLength;case Ni:return n*t*2/r.components*r.byteLength;case Sl:return n*t*2/r.components*r.byteLength;case Gh:return n*t*3/r.components*r.byteLength;case Sn:return n*t*4/r.components*r.byteLength;case yl:return n*t*4/r.components*r.byteLength;case $s:case Zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:case Ao:return Math.max(n,16)*Math.max(t,8)/4;case Eo:case To:return Math.max(n,8)*Math.max(t,8)/2;case Ro:case Co:case Lo:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:case na:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $o:case Zo:case Ko:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ia:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sp(n){switch(n){case on:case Oh:return{byteLength:1,components:1};case $r:case Bh:case yn:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case On:case gl:case Mn:return{byteLength:4,components:1};case zh:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function pu(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function yp(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:bp,alphahash_pars_fragment:Ep,alphamap_fragment:wp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Hp,color_fragment:Gp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:Yp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Qp,colorspace_fragment:jp,colorspace_pars_fragment:tm,envmap_fragment:em,envmap_common_pars_fragment:nm,envmap_pars_fragment:im,envmap_pars_vertex:rm,envmap_physical_pars_fragment:mm,envmap_vertex:sm,fog_vertex:am,fog_pars_vertex:om,fog_fragment:lm,fog_pars_fragment:cm,gradientmap_pars_fragment:hm,lightmap_pars_fragment:um,lights_lambert_fragment:fm,lights_lambert_pars_fragment:dm,lights_pars_begin:pm,lights_toon_fragment:gm,lights_toon_pars_fragment:_m,lights_phong_fragment:xm,lights_phong_pars_fragment:vm,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:ym,lights_fragment_maps:bm,lights_fragment_end:Em,lightprobes_pars_fragment:wm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Cm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Fm,morphcolor_vertex:Om,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Gm,normal_pars_fragment:Vm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:Qm,premultiplied_alpha_fragment:jm,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:f0,specularmap_fragment:d0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:x0,uv_pars_fragment:v0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:y0,background_vert:b0,background_frag:E0,backgroundCube_vert:w0,backgroundCube_frag:T0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distance_vert:L0,distance_frag:I0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:k0,meshmatcap_vert:H0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:Y0,meshphysical_vert:q0,meshphysical_frag:$0,meshtoon_vert:Z0,meshtoon_frag:K0,points_vert:J0,points_frag:Q0,shadow_vert:j0,shadow_frag:tg,sprite_vert:eg,sprite_frag:ng},xt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},In={basic:{uniforms:Je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Je([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Je([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Je([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Je([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Je([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Je([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Je([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Je([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Je([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Je([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Je([xt.lights,xt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};In.physical={uniforms:Je([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Fs={r:0,b:0,g:0},ig=new xe,mu=new Yt;mu.set(-1,0,0,0,1,0,0,0,1);function rg(n,t,e,i,r,s){const a=new Kt(0);let o=r===!0?0:1,l,c,h=null,u=0,f=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function m(x){let y=!1;const M=d(x);M===null?g(a,o):M&&M.isColor&&(g(M,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,y){const M=d(y);M&&(M.isCubeTexture||M.mapping===da)?(c===void 0&&(c=new $t(new Ft(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:_r(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $t(new ln(2,2),new bn({name:"BackgroundMaterial",uniforms:_r(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(Fs,lu(n)),e.buffers.color.setClear(Fs.r,Fs.g,Fs.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:v,dispose:p}}function sg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,U,k,N,B){let X=!1;const Y=u(P,N,k,U);s!==Y&&(s=Y,c(s.object)),X=d(P,N,k,B),X&&m(P,N,k,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(P,U,k,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,U,k,N){const B=N.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const Y=P.isInstancedMesh===!0?P.id:0;let rt=X[Y];rt===void 0&&(rt={},X[Y]=rt);let q=rt[k.id];q===void 0&&(q={},rt[k.id]=q);let Q=q[B];return Q===void 0&&(Q=f(l()),q[B]=Q),Q}function f(P){const U=[],k=[],N=[];for(let B=0;B<e;B++)U[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,U,k,N){const B=s.attributes,X=U.attributes;let Y=0;const rt=k.getAttributes();for(const q in rt)if(rt[q].location>=0){const it=B[q];let Lt=X[q];if(Lt===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Lt=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Lt=P.instanceColor)),it===void 0||it.attribute!==Lt||Lt&&it.data!==Lt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==N}function m(P,U,k,N){const B={},X=U.attributes;let Y=0;const rt=k.getAttributes();for(const q in rt)if(rt[q].location>=0){let it=X[q];it===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(it=P.instanceColor));const Lt={};Lt.attribute=it,it&&it.data&&(Lt.data=it.data),B[q]=Lt,Y++}s.attributes=B,s.attributesNum=Y,s.index=N}function v(){const P=s.newAttributes;for(let U=0,k=P.length;U<k;U++)P[U]=0}function g(P){p(P,0)}function p(P,U){const k=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;k[P]=1,N[P]===0&&(n.enableVertexAttribArray(P),N[P]=1),B[P]!==U&&(n.vertexAttribDivisor(P,U),B[P]=U)}function x(){const P=s.newAttributes,U=s.enabledAttributes;for(let k=0,N=U.length;k<N;k++)U[k]!==P[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function y(P,U,k,N,B,X,Y){Y===!0?n.vertexAttribIPointer(P,U,k,B,X):n.vertexAttribPointer(P,U,k,N,B,X)}function M(P,U,k,N){v();const B=N.attributes,X=k.getAttributes(),Y=U.defaultAttributeValues;for(const rt in X){const q=X[rt];if(q.location>=0){let Q=B[rt];if(Q===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const it=Q.normalized,Lt=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;const ue=Tt.buffer,ee=Tt.type,le=Tt.bytesPerElement,K=ee===n.INT||ee===n.UNSIGNED_INT||Q.gpuType===gl;if(Q.isInterleavedBufferAttribute){const tt=Q.data,vt=tt.stride,kt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)p(q.location+bt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let bt=0;bt<q.locationSize;bt++)g(q.location+bt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let bt=0;bt<q.locationSize;bt++)y(q.location+bt,Lt/q.locationSize,ee,it,vt*le,(kt+Lt/q.locationSize*bt)*le,K)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<q.locationSize;tt++)g(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let tt=0;tt<q.locationSize;tt++)y(q.location+tt,Lt/q.locationSize,ee,it,Lt*le,Lt/q.locationSize*tt*le,K)}}else if(Y!==void 0){const it=Y[rt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(q.location,it);break;case 3:n.vertexAttrib3fv(q.location,it);break;case 4:n.vertexAttrib4fv(q.location,it);break;default:n.vertexAttrib1fv(q.location,it)}}}}x()}function E(){T();for(const P in i){const U=i[P];for(const k in U){const N=U[k];for(const B in N){const X=N[B];for(const Y in X)h(X[Y].object),delete X[Y];delete N[B]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const k in U){const N=U[k];for(const B in N){const X=N[B];for(const Y in X)h(X[Y].object),delete X[Y];delete N[B]}}delete i[P.id]}function A(P){for(const U in i){const k=i[U];for(const N in k){const B=k[N];if(B[P.id]===void 0)continue;const X=B[P.id];for(const Y in X)h(X[Y].object),delete X[Y];delete B[P.id]}}}function _(P){for(const U in i){const k=i[U],N=P.isInstancedMesh===!0?P.id:0,B=k[N];if(B!==void 0){for(const X in B){const Y=B[X];for(const rt in Y)h(Y[rt].object),delete Y[rt];delete B[X]}delete k[N],Object.keys(k).length===0&&delete i[U]}}}function T(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function ag(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function og(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Sn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==on&&A!==Mn&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:b}}function lg(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new hi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,y=x*4;let M=p.clippingState||null;l.value=M,M=h(m,f,y,d);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=d;y!==v;++y,M+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const or=4,cg=6,hg=20,ug=256,Ar=new _a,Yc=new Kt;let eo=null,no=0,io=0,ro=!1;const fg=new L,Si=new L;class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=fg}=s;eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=ro,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:yn,format:Sn,colorSpace:ra,depthBuffer:!1},r=qc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dg(s)),this._blurMaterial=mg(s,t,e),this._ggxMaterial=pg(s,t,e)}return r}_compileMaterial(t){const e=new $t(new Ce,t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,i,r,s){const l=new je(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Yc),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new Ft,new fn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy(Yc),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const E=this._cubeSize;er(r,M*E,y>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(v,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Di||t.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;er(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ar)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-or?i-m+or:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,er(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(o,Ar),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,er(t,g,p,3*v,2*v),r.setRenderTarget(t),r.render(o,Ar)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],u=3*h*(r>this._lodMax-or?r-this._lodMax+or:0),f=4*(this._cubeSize-h);er(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(l,Ar)}}function dg(n){const t=[],e=[];let i=n;const r=n-or+1+cg;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),v=new Float32Array(d*f*u);for(let p=0;p<u;p++){const x=p%3*2/3-1,y=p>2?0:-1,M=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];m.set(M,d*f*p);for(let E=0;E<f;E++){const b=h[E*2]*2-1,A=h[E*2+1]*2-1;p===0?Si.set(1,A,b):p===1?Si.set(-b,1,-A):p===2?Si.set(-b,A,1):p===3?Si.set(-1,A,-b):p===4?Si.set(-b,-1,A):Si.set(b,A,-1),Si.toArray(v,(p*f+E)*d)}}const g=new Ce;g.setAttribute("position",new Un(m,d)),g.setAttribute("outputDirection",new Un(v,d)),e.push(new $t(g,null)),i>or&&i--}return{lodMeshes:e,sizeLods:t}}function qc(n,t,e){const i=new dn(n,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function er(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function pg(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ug,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function mg(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:hg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function $c(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Zc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gu extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Jh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ft(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Kn});s.uniforms.tEquirect.value=e;const a=new $t(r,s),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=qe),new vp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function gg(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===wa||d===Ta)if(t.has(f)){const m=t.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new gu(m.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,m=d===wa||d===Ta,v=d===Di||d===pr;if(m||v){let g=e.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new al(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new al(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===wa?f.mapping=Di:d===Ta&&(f.mapping=pr),f}function l(f){let d=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function _g(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&hr("WebGLRenderer: "+i+" extension not supported."),r}}}function xg(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const x=d.array;v=d.version;for(let y=0,M=x.length;y<M;y+=3){const E=x[y+0],b=x[y+1],A=x[y+2];f.push(E,b,b,A,A,E)}}else{const x=m.array;v=m.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const E=y+0,b=y+1,A=y+2;f.push(E,b,b,A,A,E)}}const g=new(m.count>=65535?$h:qh)(f,1);g.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vg(n,t,e){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,s,u*a),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,s,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Mg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Sg(n,t,e){const i=new WeakMap,r=new we;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let M=o.attributes.position.count*y,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*E*4*u),A=new Wh(b,M,E,u);A.type=Mn,A.needsUpdate=!0;const _=y*4;for(let R=0;R<u;R++){const P=g[R],U=p[R],k=x[R],N=M*E*4*R;for(let B=0;B<P.count;B++){const X=B*_;d===!0&&(r.fromBufferAttribute(P,B),b[N+X+0]=r.x,b[N+X+1]=r.y,b[N+X+2]=r.z,b[N+X+3]=0),m===!0&&(r.fromBufferAttribute(U,B),b[N+X+4]=r.x,b[N+X+5]=r.y,b[N+X+6]=r.z,b[N+X+7]=0),v===!0&&(r.fromBufferAttribute(k,B),b[N+X+8]=r.x,b[N+X+9]=r.y,b[N+X+10]=r.z,b[N+X+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new ot(M,E)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function yg(n,t,e,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const bg={[Ph]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Uh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function Eg(n,t,e,i,r,s){const a=new dn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ce;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));const h=new lp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $t(c,h),f=new _a(-1,1,1,-1,0,1);let d=null,m=null,v=!1,g,p=null,x=[],y=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let b=0;b<x.length;b++){const A=x[b];A.setSize&&A.setSize(M,E)}},this.setEffects=function(M){x=M,y=x.length>0&&x[0].isRenderPass===!0;const E=a.width,b=a.height;x.length>0&&o===null&&(o=new dn(E,b,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new dn(E,b,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){const _=x[A];_.setSize&&_.setSize(E,b)}},this.begin=function(M,E){if(v||M.toneMapping===Nn&&x.length===0)return!1;if(p=E,E!==null){const b=E.width,A=E.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return y===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Nn,!0},this.hasRenderPass=function(){return y},this.end=function(M,E){M.toneMapping=g,v=!0;let b=a,A=o;for(let _=0;_<x.length;_++){const T=x[_];T.enabled!==!1&&(T.render(M,A,b,E),T.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,h.defines={},ae.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");const _=bg[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(u,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const _u=new $e,ol=new jr(1,1),xu=new Wh,vu=new od,Mu=new Jh,Kc=[],Jc=[],Qc=new Float32Array(16),jc=new Float32Array(9),th=new Float32Array(4);function vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Kc[r];if(s===void 0&&(s=new Float32Array(r),Kc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function va(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function Cg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,i))return;th.set(i),n.uniformMatrix2fv(this.addr,!1,th),Ne(e,i)}}function Pg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),Ne(e,i)}}function Lg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),Ne(e,i)}}function Ig(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function Fg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function Bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function kg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ol.compareFunction=e.isReversedDepthBuffer()?El:bl,s=ol):s=_u,e.setTexture2D(t||s,r)}function Hg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||vu,r)}function Gg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Mu,r)}function Vg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||xu,r)}function Wg(n){switch(n){case 5126:return wg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Xg(n,t){n.uniform1fv(this.addr,t)}function Yg(n,t){const e=vr(t,this.size,2);n.uniform2fv(this.addr,e)}function qg(n,t){const e=vr(t,this.size,3);n.uniform3fv(this.addr,e)}function $g(n,t){const e=vr(t,this.size,4);n.uniform4fv(this.addr,e)}function Zg(n,t){const e=vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Kg(n,t){const e=vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Jg(n,t){const e=vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Qg(n,t){n.uniform1iv(this.addr,t)}function jg(n,t){n.uniform2iv(this.addr,t)}function t_(n,t){n.uniform3iv(this.addr,t)}function e_(n,t){n.uniform4iv(this.addr,t)}function n_(n,t){n.uniform1uiv(this.addr,t)}function i_(n,t){n.uniform2uiv(this.addr,t)}function r_(n,t){n.uniform3uiv(this.addr,t)}function s_(n,t){n.uniform4uiv(this.addr,t)}function a_(n,t,e){const i=this.cache,r=t.length,s=va(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ol:a=_u;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function o_(n,t,e){const i=this.cache,r=t.length,s=va(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||vu,s[a])}function l_(n,t,e){const i=this.cache,r=t.length,s=va(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Mu,s[a])}function c_(n,t,e){const i=this.cache,r=t.length,s=va(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||xu,s[a])}function h_(n){switch(n){case 5126:return Xg;case 35664:return Yg;case 35665:return qg;case 35666:return $g;case 35674:return Zg;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class u_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Wg(e.type)}}class f_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h_(e.type)}}class d_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const so=/(\w+)(\])?(\[|\.)?/g;function eh(n,t){n.seq.push(t),n.map[t.id]=t}function p_(n,t,e){const i=n.name,r=i.length;for(so.lastIndex=0;;){const s=so.exec(i),a=so.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){eh(e,c===void 0?new u_(o,n,t):new f_(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new d_(o),eh(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);p_(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function nh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const m_=37297;let g_=0;function __(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const ih=new Yt;function x_(n){ae._getMatrix(ih,ae.workingColorSpace,n);const t=`mat3( ${ih.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case sa:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+__(n.getShaderSource(t),o)}else return s}function v_(n,t){const e=x_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const M_={[Ph]:"Linear",[Lh]:"Reinhard",[Ih]:"Cineon",[ml]:"ACESFilmic",[Nh]:"AgX",[Uh]:"Neutral",[Dh]:"Custom"};function S_(n,t){const e=M_[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new L;function y_(){ae.getLuminanceCoefficients(Os);const n=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function E_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function w_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Or(n){return n!==""}function sh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(n){return n.replace(T_,R_)}const A_=new Map;function R_(n,t){let e=Qt[t];if(e===void 0){const i=A_.get(t);if(i!==void 0)e=Qt[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ll(e)}const C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(C_,P_)}function P_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const L_={[qs]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function I_(n){return L_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D_={[Di]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function N_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":D_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const U_={[pr]:"ENVMAP_MODE_REFRACTION"};function F_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":U_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O_={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function B_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":O_[n.combine]||"ENVMAP_BLENDING_NONE"}function z_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function k_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=I_(e),c=N_(e),h=F_(e),u=B_(e),f=z_(e),d=b_(e),m=E_(s),v=r.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(g=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),y_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=ll(a),a=sh(a,e),a=ah(a,e),o=ll(o),o=sh(o,e),o=ah(o,e),a=oh(a),o=oh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+a,M=x+p+o,E=nh(r,r.VERTEX_SHADER,y),b=nh(r,r.FRAGMENT_SHADER,M);r.attachShader(v,E),r.attachShader(v,b),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(E)||"",N=r.getShaderInfoLog(b)||"",B=U.trim(),X=k.trim(),Y=N.trim();let rt=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,b);else{const Q=rh(r,E,"vertex"),it=rh(r,b,"fragment");he("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Q+`
`+it)}else B!==""?Wt("WebGLProgram: Program Info Log:",B):(X===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:rt,programLog:B,vertexShader:{log:X,prefix:g},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(E),r.deleteShader(b),_=new Qs(r,v),T=w_(r,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,m_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new V_(t),e.set(t,i)),i}}class V_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function W_(n){return n===Ni||n===na||n===ia}function X_(n,t,e,i,r,s){const a=new Xh,o=new G_,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,P,U,k){const N=P.fog,B=U.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||X,Y),q=rt&&rt.mapping===da?rt.image.height:null,Q=d[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Lt=it!==void 0?it.length:0;let Tt=0;B.morphAttributes.position!==void 0&&(Tt=1),B.morphAttributes.normal!==void 0&&(Tt=2),B.morphAttributes.color!==void 0&&(Tt=3);let ue,ee,le,K;if(Q){const ye=In[Q];ue=ye.vertexShader,ee=ye.fragmentShader}else{ue=_.vertexShader,ee=_.fragmentShader;const ye=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,ye,de),le=ye.id,K=de.id}const tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),kt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Gt=!!_.map,me=!!_.matcap,et=!!rt,at=!!_.aoMap,lt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,Ot=!!_.displacementMap,Ut=!!_.emissiveMap,Vt=!!_.metalnessMap,Xt=!!_.roughnessMap,I=_.anisotropy>0,fe=_.clearcoat>0,ne=_.dispersion>0,C=_.retroreflectivity>0,S=_.iridescence>0,z=_.sheen>0,V=_.transmission>0,$=I&&!!_.anisotropyMap,ht=fe&&!!_.clearcoatMap,ut=fe&&!!_.clearcoatNormalMap,Z=fe&&!!_.clearcoatRoughnessMap,j=S&&!!_.iridescenceMap,dt=S&&!!_.iridescenceThicknessMap,It=z&&!!_.sheenColorMap,_t=z&&!!_.sheenRoughnessMap,pt=!!_.specularMap,Dt=!!_.specularColorMap,Bt=!!_.specularIntensityMap,Zt=V&&!!_.transmissionMap,O=V&&!!_.thicknessMap,mt=!!_.gradientMap,J=!!_.alphaMap,gt=_.alphaTest>0,yt=!!_.alphaHash,st=!!_.extensions;let Nt=Nn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Ct={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:ee,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:kt,instancingColor:kt&&U.instanceColor!==null,instancingMorph:kt&&U.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:me,envMap:et,envMapMode:et&&rt.mapping,envMapCubeUVHeight:q,aoMap:at,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:Ot,emissiveMap:Ut,normalMapObjectSpace:ft&&_.normalMapType===Af,normalMapTangentSpace:ft&&_.normalMapType===tl,packedNormalMap:ft&&_.normalMapType===tl&&W_(_.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:I,anisotropyMap:$,clearcoat:fe,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:Z,dispersion:ne,retroreflection:C,iridescence:S,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:z,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:pt,specularColorMap:Dt,specularIntensityMap:Bt,transmission:V,transmissionMap:Zt,thicknessMap:O,gradientMap:mt,opaque:_.transparent===!1&&_.blending===Br&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:yt,combine:_.combine,mapUv:Gt&&m(_.map.channel),aoMapUv:at&&m(_.aoMap.channel),lightMapUv:lt&&m(_.lightMap.channel),bumpMapUv:ct&&m(_.bumpMap.channel),normalMapUv:ft&&m(_.normalMap.channel),displacementMapUv:Ot&&m(_.displacementMap.channel),emissiveMapUv:Ut&&m(_.emissiveMap.channel),metalnessMapUv:Vt&&m(_.metalnessMap.channel),roughnessMapUv:Xt&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:ht&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:It&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(_.sheenRoughnessMap.channel),specularMapUv:pt&&m(_.specularMap.channel),specularColorMapUv:Dt&&m(_.specularColorMap.channel),specularIntensityMapUv:Bt&&m(_.specularIntensityMap.channel),transmissionMapUv:Zt&&m(_.transmissionMap.channel),thicknessMapUv:O&&m(_.thicknessMap.channel),alphaMapUv:J&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||I),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Gt||J),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),x(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const T=d[_.type];let R;if(T){const P=In[T];R=cu.clone(P.uniforms)}else R=_.uniforms;return R}function M(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new k_(n,T,_,r),c.push(R),h.set(T,R)),R}function E(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function Y_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ch(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,v,g,p){let x=n[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},n[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=a(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=g,x.group=p),t++,x}function l(f,d,m,v,g,p,x){x.reversedDepth===!0&&(g=-g);const y=o(f,d,m,v,g,p);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):e.push(y)}function c(f,d,m,v,g,p){const x=o(f,d,m,v,g,p);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):e.unshift(x)}function h(f,d){e.length>1&&e.sort(f||q_),i.length>1&&i.sort(d||ch),r.length>1&&r.sort(d||ch)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function $_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new hh,n.set(i,[a])):r>=s.length?(a=new hh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Z_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function K_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let J_=0;function Q_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function j_(n){const t=new Z_,e=K_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new xe,a=new xe;function o(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,x=0,y=0,M=0,E=0,b=0,A=0,_=0,T=0,R=0;c.sort(Q_);for(let U=0,k=c.length;U<k;U++){const N=c[U],B=N.color,X=N.intensity,Y=N.distance;let rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ni?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],X);R++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=it,i.sunShadowMap[m]=rt;const Lt=Q.getViewportCount();for(let Tt=0;Tt<Lt;Tt++)i.sunShadowMatrix[v+Tt]=Q.getMatrix(Tt),i.sunShadowCascade[v+Tt]=Q._cascadeData[Tt];v+=Lt,m++}i.sun[d]=q,d++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.directionalShadow[g]=it,i.directionalShadowMap[g]=rt,i.directionalShadowMatrix[g]=N.shadow.matrix,E++}i.directional[g]=q,g++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=Y,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[x]=q;const Q=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[x]=Q.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.spotShadow[x]=it,i.spotShadowMap[x]=rt,A++}x++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=q,y++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const Q=N.shadow,it=e.get(N);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=q,p++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(X),q.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[M]=q,M++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==y||P.hemiLength!==M||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=x,i.rectArea.length=y,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=x,P.rectAreaLength=y,P.hemiLength=M,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=R,i.version=J_++)}function l(c,h){let u=0,f=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const M=c[x];if(M.isSunLight){const E=i.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(M.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function uh(n){const t=new j_(n),e=[],i=[],r=[];function s(f){u.camera=f,e.length=0,i.length=0,r.length=0}function a(f){e.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function tx(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new uh(n),t.set(r,[o])):s>=a.length?(o=new uh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ix=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],rx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],fh=new xe,Rr=new L,ao=new L;function sx(n,t,e){let i=new Rl;const r=new ot,s=new ot,a=new we,o=new cp,l=new hp,c={},h=e.maxTextureSize,u={[Ii]:He,[He]:Ii,[Fe]:Fe},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:ex,fragmentShader:nx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(b,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Th&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const T=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=b.length;N<B;N++){const X=b[N],Y=X.shadow;if(Y===void 0){Wt("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const rt=Y.getFrameExtents();r.multiply(rt),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/rt.x),r.x=s.x*rt.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/rt.y),r.y=s.y*rt.y,Y.mapSize.y=s.y));const q=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ur){if(X.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new dn(r.x,r.y,{format:Ni,type:yn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new jr(r.x,r.y,Mn),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=Qn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ke,Y.map.depthTexture.magFilter=ke}else X.isPointLight?(Y.map=new gu(r.x),Y.map.depthTexture=new Ed(r.x,On)):(Y.map=new dn(r.x,r.y),Y.map.depthTexture=new jr(r.x,r.y,On)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=Qn,this.type===qs?(Y.map.depthTexture.compareFunction=q?El:bl,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=ke,Y.map.depthTexture.magFilter=ke);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);const Q=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,_);for(let it=0;it<Q;it++){const Lt=Y.getCamera(it);if(X.isPointLight){const Tt=Y.camera,ue=Y.matrix,ee=X.distance||Tt.far;ee!==Tt.far&&(Tt.far=ee,Tt.updateProjectionMatrix()),Rr.setFromMatrixPosition(X.matrixWorld),Tt.position.copy(Rr),ao.copy(Tt.position),ao.add(ix[it]),Tt.up.copy(rx[it]),Tt.lookAt(ao),Tt.updateMatrixWorld(),ue.makeTranslation(-Rr.x,-Rr.y,-Rr.z),fh.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(fh,Tt.coordinateSystem,Tt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,it),n.clear();else{it===0&&(n.setRenderTarget(Y.map),n.clear());const Tt=Y.getViewport(it);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),U.viewport(a)}i=Y.getFrustum(it),M(A,_,Lt,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Ur&&x(Y,_),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,R,P)};function x(b,A){const _=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new dn(r.x,r.y,{format:Ni,type:yn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,_,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,_,d,v,null)}function y(b,A,_,T){let R=null;const P=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=R.uuid,k=A.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let B=N[k];B===void 0&&(B=R.clone(),N[k]=B,A.addEventListener("dispose",E)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Ur?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=n.properties.get(R);U.light=_}return R}function M(b,A,_,T,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ur)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const k=t.update(b),N=b.material;if(Array.isArray(N)){const B=k.groups;for(let X=0,Y=B.length;X<Y;X++){const rt=B[X],q=N[rt.materialIndex];if(q&&q.visible){const Q=y(b,q,T,R);b.onBeforeShadow(n,b,A,_,k,Q,rt),n.renderBufferDirect(_,null,k,Q,b,rt),b.onAfterShadow(n,b,A,_,k,Q,rt)}}}else if(N.visible){const B=y(b,N,T,R);b.onBeforeShadow(n,b,A,_,k,B,null),n.renderBufferDirect(_,null,k,B,b,null),b.onAfterShadow(n,b,A,_,k,B,null)}}const U=b.children;for(let k=0,N=U.length;k<N;k++)M(U[k],A,_,T,R)}function E(b){b.target.removeEventListener("dispose",E);for(const _ in c){const T=c[_],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function ax(n,t){function e(){let O=!1;const mt=new we;let J=null;const gt=new we(0,0,0,0);return{setMask:function(yt){J!==yt&&!O&&(n.colorMask(yt,yt,yt,yt),J=yt)},setLocked:function(yt){O=yt},setClear:function(yt,st,Nt,Ct,ye){ye===!0&&(yt*=Ct,st*=Ct,Nt*=Ct),mt.set(yt,st,Nt,Ct),gt.equals(mt)===!1&&(n.clearColor(yt,st,Nt,Ct),gt.copy(mt))},reset:function(){O=!1,J=null,gt.set(-1,0,0,0)}}}function i(){let O=!1,mt=!1,J=null,gt=null,yt=null;return{setReversed:function(st){if(mt!==st){const Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),mt=st;const Ct=yt;yt=null,this.setClear(Ct)}},getReversed:function(){return mt},setTest:function(st){st?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(st){J!==st&&!O&&(n.depthMask(st),J=st)},setFunc:function(st){if(mt&&(st=zf[st]),gt!==st){switch(st){case go:n.depthFunc(n.NEVER);break;case _o:n.depthFunc(n.ALWAYS);break;case xo:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case vo:n.depthFunc(n.EQUAL);break;case Mo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=st}},setLocked:function(st){O=st},setClear:function(st){yt!==st&&(yt=st,mt&&(st=1-st),n.clearDepth(st))},reset:function(){O=!1,J=null,gt=null,yt=null,mt=!1}}}function r(){let O=!1,mt=null,J=null,gt=null,yt=null,st=null,Nt=null,Ct=null,ye=null;return{setTest:function(de){O||(de?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(de){mt!==de&&!O&&(n.stencilMask(de),mt=de)},setFunc:function(de,pn,En){(J!==de||gt!==pn||yt!==En)&&(n.stencilFunc(de,pn,En),J=de,gt=pn,yt=En)},setOp:function(de,pn,En){(st!==de||Nt!==pn||Ct!==En)&&(n.stencilOp(de,pn,En),st=de,Nt=pn,Ct=En)},setLocked:function(de){O=de},setClear:function(de){ye!==de&&(n.clearStencil(de),ye=de)},reset:function(){O=!1,mt=null,J=null,gt=null,yt=null,st=null,Nt=null,Ct=null,ye=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,x=null,y=null,M=null,E=null,b=null,A=null,_=new Kt(0,0,0),T=0,R=!1,P=null,U=null,k=null,N=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=rt>=2);let Q=null,it={};const Lt=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),ue=new we().fromArray(Lt),ee=new we().fromArray(Tt);function le(O,mt,J,gt){const yt=new Uint8Array(4),st=n.createTexture();n.bindTexture(O,st),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<J;Nt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(mt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return st}const K={};K[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(qr),ct(!1),ft(ac),tt(n.CULL_FACE),at(Kn);function tt(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function vt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function kt(O,mt){return f[O]!==mt?(n.bindFramebuffer(O,mt),f[O]=mt,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=mt),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function bt(O,mt){let J=m,gt=!1;if(O){J=d.get(mt),J===void 0&&(J=[],d.set(mt,J));const yt=O.textures;if(J.length!==yt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Nt=yt.length;st<Nt;st++)J[st]=n.COLOR_ATTACHMENT0+st;J.length=yt.length,gt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,gt=!0);gt&&n.drawBuffers(J)}function Gt(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const me={[rr]:n.FUNC_ADD,[af]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};me[lf]=n.MIN,me[cf]=n.MAX;const et={[hf]:n.ZERO,[uf]:n.ONE,[ff]:n.SRC_COLOR,[Ah]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[gf]:n.DST_COLOR,[pf]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[Rh]:n.ONE_MINUS_SRC_ALPHA,[_f]:n.ONE_MINUS_DST_COLOR,[mf]:n.ONE_MINUS_DST_ALPHA,[vf]:n.CONSTANT_COLOR,[Mf]:n.ONE_MINUS_CONSTANT_COLOR,[Sf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function at(O,mt,J,gt,yt,st,Nt,Ct,ye,de){if(O===Kn){g===!0&&(vt(n.BLEND),g=!1);return}if(g===!1&&(tt(n.BLEND),g=!0),O!==sf){if(O!==p||de!==R){if((x!==rr||E!==rr)&&(n.blendEquation(n.FUNC_ADD),x=rr,E=rr),de)switch(O){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFunc(n.ONE,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",O);break}else switch(O){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lc:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",O);break}y=null,M=null,b=null,A=null,_.set(0,0,0),T=0,p=O,R=de}return}yt=yt||mt,st=st||J,Nt=Nt||gt,(mt!==x||yt!==E)&&(n.blendEquationSeparate(me[mt],me[yt]),x=mt,E=yt),(J!==y||gt!==M||st!==b||Nt!==A)&&(n.blendFuncSeparate(et[J],et[gt],et[st],et[Nt]),y=J,M=gt,b=st,A=Nt),(Ct.equals(_)===!1||ye!==T)&&(n.blendColor(Ct.r,Ct.g,Ct.b,ye),_.copy(Ct),T=ye),p=O,R=!1}function lt(O,mt){O.side===Fe?vt(n.CULL_FACE):tt(n.CULL_FACE);let J=O.side===He;mt&&(J=!J),ct(J),O.blending===Br&&O.transparent===!1?at(Kn):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const gt=O.stencilWrite;o.setTest(gt),gt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){P!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),P=O)}function ft(O){O!==nf?(tt(n.CULL_FACE),O!==U&&(O===ac?n.cullFace(n.BACK):O===rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),U=O}function Ot(O){O!==k&&(Y&&n.lineWidth(O),k=O)}function Ut(O,mt,J){O?(tt(n.POLYGON_OFFSET_FILL),(N!==mt||B!==J)&&(N=mt,B=J,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,J))):vt(n.POLYGON_OFFSET_FILL)}function Vt(O){O?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function Xt(O){O===void 0&&(O=n.TEXTURE0+X-1),Q!==O&&(n.activeTexture(O),Q=O)}function I(O,mt,J){J===void 0&&(Q===null?J=n.TEXTURE0+X-1:J=Q);let gt=it[J];gt===void 0&&(gt={type:void 0,texture:void 0},it[J]=gt),(gt.type!==O||gt.texture!==mt)&&(Q!==J&&(n.activeTexture(J),Q=J),n.bindTexture(O,mt||K[O]),gt.type=O,gt.texture=mt)}function fe(){const O=it[Q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(O){he("WebGLState:",O)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(O){he("WebGLState:",O)}}function S(){try{n.texSubImage2D(...arguments)}catch(O){he("WebGLState:",O)}}function z(){try{n.texSubImage3D(...arguments)}catch(O){he("WebGLState:",O)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(O){he("WebGLState:",O)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(O){he("WebGLState:",O)}}function ht(){try{n.texStorage2D(...arguments)}catch(O){he("WebGLState:",O)}}function ut(){try{n.texStorage3D(...arguments)}catch(O){he("WebGLState:",O)}}function Z(){try{n.texImage2D(...arguments)}catch(O){he("WebGLState:",O)}}function j(){try{n.texImage3D(...arguments)}catch(O){he("WebGLState:",O)}}function dt(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function It(O,mt){u[O]!==mt&&(n.pixelStorei(O,mt),u[O]=mt)}function _t(O){ue.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ue.copy(O))}function pt(O){ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Dt(O,mt){let J=c.get(mt);J===void 0&&(J=new WeakMap,c.set(mt,J));let gt=J.get(O);gt===void 0&&(gt=n.getUniformBlockIndex(mt,O.name),J.set(O,gt))}function Bt(O,mt){const gt=c.get(mt).get(O);l.get(mt)!==gt&&(n.uniformBlockBinding(mt,gt,O.__bindingPointIndex),l.set(mt,gt))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,it={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,x=null,y=null,M=null,E=null,b=null,A=null,_=new Kt(0,0,0),T=0,R=!1,P=null,U=null,k=null,N=null,B=null,ue.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:kt,drawBuffers:bt,useProgram:Gt,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:Ot,setPolygonOffset:Ut,setScissorTest:Vt,activeTexture:Xt,bindTexture:I,unbindTexture:fe,compressedTexImage2D:ne,compressedTexImage3D:C,texImage2D:Z,texImage3D:j,pixelStorei:It,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:_t,viewport:pt,reset:Zt}}function ox(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return m?new OffscreenCanvas(C,S):Jr("canvas")}function g(C,S,z){let V=1;const $=ne(C);if(($.width>z||$.height>z)&&(V=z/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ht=Math.floor(V*$.width),ut=Math.floor(V*$.height);f===void 0&&(f=v(ht,ut));const Z=S?v(ht,ut):f;return Z.width=ht,Z.height=ut,Z.getContext("2d").drawImage(C,0,0,ht,ut),Wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ht+"x"+ut+")."),Z}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function x(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,S,z,V,$,ht=!1){if(C!==null){if(n[C]!==void 0)return n[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8),z===n.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),z===n.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),S===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8),z===n.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),z===n.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&(z===n.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),z===n.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),S===n.RGBA){const j=ht?sa:ae.getTransfer($);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=j===_e?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),z===n.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(C,S){let z;return C?S===null||S===On||S===Zr?z=n.DEPTH24_STENCIL8:S===Mn?z=n.DEPTH32F_STENCIL8:S===$r&&(z=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===On||S===Zr?z=n.DEPTH_COMPONENT24:S===Mn?z=n.DEPTH_COMPONENT32F:S===$r&&(z=n.DEPTH_COMPONENT16),z}function b(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==qe?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(C){const S=C.target;S.removeEventListener("dispose",_),P(S)}function T(C){const S=i.get(C);if(S.__webglInit===void 0)return;const z=C.source,V=d.get(z);if(V){const $=V[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(z)}i.remove(C)}function R(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const z=C.source,V=d.get(z);delete V[S.__cacheKey],a.memory.textures--}function P(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let $=0;$<S.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(S.__webglFramebuffer[V][$]);else n.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)n.deleteFramebuffer(S.__webglFramebuffer[V]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let V=0,$=z.length;V<$;V++){const ht=i.get(z[V]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(z[V])}i.remove(C)}let U=0;function k(){U=0}function N(){return U}function B(C){U=C}function X(){const C=U;return C>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function Y(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function rt(C,S){const z=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const V=C.image;if(V===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(z,C,S);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function q(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){vt(z,C,S);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function Q(C,S){const z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){vt(z,C,S);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function it(C,S){const z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){kt(z,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const Lt={[ea]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},Tt={[ke]:n.NEAREST,[wf]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[qe]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ue={[Cf]:n.NEVER,[Nf]:n.ALWAYS,[Pf]:n.LESS,[bl]:n.LEQUAL,[Lf]:n.EQUAL,[El]:n.GEQUAL,[If]:n.GREATER,[Df]:n.NOTEQUAL};function ee(C,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===qe||S.magFilter===Aa||S.magFilter===ds||S.magFilter===Ai||S.minFilter===qe||S.minFilter===Aa||S.minFilter===ds||S.minFilter===Ai)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Lt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Lt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Lt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Tt[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Tt[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==ds&&S.minFilter!==Ai||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function le(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const V=S.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const ht=Y(S);if(ht!==C.__cacheKey){$[ht]===void 0&&($[ht]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[ht].usedTimes++;const ut=$[C.__cacheKey];ut!==void 0&&($[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(S)),C.__cacheKey=ht,C.__webglTexture=$[ht].texture}return z}function K(C,S,z){return Math.floor(Math.floor(C/z)/S)}function tt(C,S,z,V){const ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,z,V,S.data);else{ht.sort((It,_t)=>It.start-_t.start);let ut=0;for(let It=1;It<ht.length;It++){const _t=ht[ut],pt=ht[It],Dt=_t.start+_t.count,Bt=K(pt.start,S.width,4),Zt=K(_t.start,S.width,4);pt.start<=Dt+1&&Bt===Zt&&K(pt.start+pt.count-1,S.width,4)===Bt?_t.count=Math.max(_t.count,pt.start+pt.count-_t.start):(++ut,ht[ut]=pt)}ht.length=ut+1;const Z=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let It=0,_t=ht.length;It<_t;It++){const pt=ht[It],Dt=Math.floor(pt.start/4),Bt=Math.ceil(pt.count/4),Zt=Dt%S.width,O=Math.floor(Dt/S.width),mt=Bt,J=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Zt,O,mt,J,z,V,S.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function vt(C,S,z){let V=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=n.TEXTURE_3D);const $=le(C,S),ht=S.source;e.bindTexture(V,C.__webglTexture,n.TEXTURE0+z);const ut=i.get(ht);if(ht.version!==ut.__version||$===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=ae.getPrimaries(ae.workingColorSpace),gt=S.colorSpace===ui?null:ae.getPrimaries(S.colorSpace),yt=S.colorSpace===ui||J===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,r.maxTextureSize);j=fe(S,j);const dt=s.convert(S.format,S.colorSpace),It=s.convert(S.type);let _t=M(S.internalFormat,dt,It,S.normalized,S.colorSpace,S.isVideoTexture);ee(V,S);let pt;const Dt=S.mipmaps,Bt=S.isVideoTexture!==!0,Zt=ut.__version===void 0||$===!0,O=ht.dataReady,mt=b(S,j);if(S.isDepthTexture)_t=E(S.format===Ri,S.type),Zt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,_t,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,_t,j.width,j.height,0,dt,It,null));else if(S.isDataTexture)if(Dt.length>0){Bt&&Zt&&e.texStorage2D(n.TEXTURE_2D,mt,_t,Dt[0].width,Dt[0].height);for(let J=0,gt=Dt.length;J<gt;J++)pt=Dt[J],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,pt.width,pt.height,dt,It,pt.data):e.texImage2D(n.TEXTURE_2D,J,_t,pt.width,pt.height,0,dt,It,pt.data);S.generateMipmaps=!1}else Bt?(Zt&&e.texStorage2D(n.TEXTURE_2D,mt,_t,j.width,j.height),O&&tt(S,j,dt,It)):e.texImage2D(n.TEXTURE_2D,0,_t,j.width,j.height,0,dt,It,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,_t,Dt[0].width,Dt[0].height,j.depth);for(let J=0,gt=Dt.length;J<gt;J++)if(pt=Dt[J],S.format!==Sn)if(dt!==null)if(Bt){if(O)if(S.layerUpdates.size>0){const yt=Xc(pt.width,pt.height,S.format,S.type);for(const st of S.layerUpdates){const Nt=pt.data.subarray(st*yt/pt.data.BYTES_PER_ELEMENT,(st+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,st,pt.width,pt.height,1,dt,Nt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,pt.width,pt.height,j.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_t,pt.width,pt.height,j.depth,0,pt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,pt.width,pt.height,j.depth,dt,It,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,_t,pt.width,pt.height,j.depth,0,dt,It,pt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Bt&&Zt&&e.texStorage2D(n.TEXTURE_2D,mt,_t,Dt[0].width,Dt[0].height);for(let J=0,gt=Dt.length;J<gt;J++)pt=Dt[J],S.format!==Sn?dt!==null?Bt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,_t,pt.width,pt.height,0,pt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,pt.width,pt.height,dt,It,pt.data):e.texImage2D(n.TEXTURE_2D,J,_t,pt.width,pt.height,0,dt,It,pt.data)}else if(S.isDataArrayTexture)if(Bt){if(Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,_t,j.width,j.height,j.depth),O)if(S.layerUpdates.size>0){const J=Xc(j.width,j.height,S.format,S.type);for(const gt of S.layerUpdates){const yt=j.data.subarray(gt*J/j.data.BYTES_PER_ELEMENT,(gt+1)*J/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,j.width,j.height,1,dt,It,yt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,dt,It,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,j.width,j.height,j.depth,0,dt,It,j.data);else if(S.isData3DTexture)Bt?(Zt&&e.texStorage3D(n.TEXTURE_3D,mt,_t,j.width,j.height,j.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,dt,It,j.data)):e.texImage3D(n.TEXTURE_3D,0,_t,j.width,j.height,j.depth,0,dt,It,j.data);else if(S.isFramebufferTexture){if(Zt)if(Bt)e.texStorage2D(n.TEXTURE_2D,mt,_t,j.width,j.height);else{let J=j.width,gt=j.height;for(let yt=0;yt<mt;yt++)e.texImage2D(n.TEXTURE_2D,yt,_t,J,gt,0,dt,It,null),J>>=1,gt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),u.add(S),J.onpaint=gt=>{const yt=gt.changedElements;for(const st of u)yt.includes(st.image)&&(st.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const yt=n.RGBA,st=n.RGBA,Nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,yt,st,Nt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&Zt){const J=ne(Dt[0]);e.texStorage2D(n.TEXTURE_2D,mt,_t,J.width,J.height)}for(let J=0,gt=Dt.length;J<gt;J++)pt=Dt[J],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt,It,pt):e.texImage2D(n.TEXTURE_2D,J,_t,dt,It,pt);S.generateMipmaps=!1}else if(Bt){if(Zt){const J=ne(j);e.texStorage2D(n.TEXTURE_2D,mt,_t,J.width,J.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,It,j)}else e.texImage2D(n.TEXTURE_2D,0,_t,dt,It,j);p(S)&&x(V),ut.__version=ht.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function kt(C,S,z){if(S.image.length!==6)return;const V=le(C,S),$=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);const ht=i.get($);if($.version!==ht.__version||V===!0){e.activeTexture(n.TEXTURE0+z);const ut=ae.getPrimaries(ae.workingColorSpace),Z=S.colorSpace===ui?null:ae.getPrimaries(S.colorSpace),j=S.colorSpace===ui||ut===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const dt=S.isCompressedTexture||S.image[0].isCompressedTexture,It=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let st=0;st<6;st++)!dt&&!It?_t[st]=g(S.image[st],!0,r.maxCubemapSize):_t[st]=It?S.image[st].image:S.image[st],_t[st]=fe(S,_t[st]);const pt=_t[0],Dt=s.convert(S.format,S.colorSpace),Bt=s.convert(S.type),Zt=M(S.internalFormat,Dt,Bt,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,mt=ht.__version===void 0||V===!0,J=$.dataReady;let gt=b(S,pt);ee(n.TEXTURE_CUBE_MAP,S);let yt;if(dt){O&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Zt,pt.width,pt.height);for(let st=0;st<6;st++){yt=_t[st].mipmaps;for(let Nt=0;Nt<yt.length;Nt++){const Ct=yt[Nt];S.format!==Sn?Dt!==null?O?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Zt,Ct.width,Ct.height,0,Ct.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Ct.width,Ct.height,Dt,Bt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Zt,Ct.width,Ct.height,0,Dt,Bt,Ct.data)}}}else{if(yt=S.mipmaps,O&&mt){yt.length>0&&gt++;const st=ne(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(It){O?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,_t[st].width,_t[st].height,Dt,Bt,_t[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,_t[st].width,_t[st].height,0,Dt,Bt,_t[st].data);for(let Nt=0;Nt<yt.length;Nt++){const ye=yt[Nt].image[st].image;O?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,ye.width,ye.height,Dt,Bt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Zt,ye.width,ye.height,0,Dt,Bt,ye.data)}}else{O?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Bt,_t[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Dt,Bt,_t[st]);for(let Nt=0;Nt<yt.length;Nt++){const Ct=yt[Nt];O?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,Dt,Bt,Ct.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Zt,Dt,Bt,Ct.image[st])}}}p(S)&&x(n.TEXTURE_CUBE_MAP),ht.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function bt(C,S,z,V,$,ht){const ut=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),j=M(z.internalFormat,ut,Z,z.normalized,z.colorSpace),dt=i.get(S),It=i.get(z);if(It.__renderTarget=S,!dt.__hasExternalTextures){const _t=Math.max(1,S.width>>ht),pt=Math.max(1,S.height>>ht);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,ht,j,_t,pt,S.depth,0,ut,Z,null):e.texImage2D($,ht,j,_t,pt,0,ut,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,It.__webglTexture,0,Vt(S)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,It.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(C,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const V=S.depthTexture,$=V&&V.isDepthTexture?V.type:null,ht=E(S.stencilBuffer,$),ut=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(S),ht,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(S),ht,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ht,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,C)}else{const V=S.textures;for(let $=0;$<V.length;$++){const ht=V[$],ut=s.convert(ht.format,ht.colorSpace),Z=s.convert(ht.type),j=M(ht.internalFormat,ut,Z,ht.normalized,ht.colorSpace);Xt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(S),j,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(S),j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,S,z){const V=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ee(n.TEXTURE_CUBE_MAP,S.depthTexture);const dt=s.convert(S.depthTexture.format),It=s.convert(S.depthTexture.type);let _t;S.depthTexture.format===Qn?_t=n.DEPTH_COMPONENT24:S.depthTexture.format===Ri&&(_t=n.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,_t,S.width,S.height,0,dt,It,null)}}else rt(S.depthTexture,0);const ht=$.__webglTexture,ut=Vt(S),Z=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,j=S.depthTexture.format===Ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qn)Xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,ht,0);else if(S.depthTexture.format===Ri)Xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,ht,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){const S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=V}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)me(S.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?me(S.__webglFramebuffer[0],C,0):me(S.__webglFramebuffer,C,0)}else if(z){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=n.createRenderbuffer(),Gt(S.__webglDepthbuffer[V],C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ht)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Gt(S.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,S,z){const V=i.get(C);S!==void 0&&bt(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&et(C)}function lt(C){const S=C.texture,z=i.get(C),V=i.get(S);C.addEventListener("dispose",_);const $=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ut=$.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=S.version,a.memory.textures++),ht){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let j=0;j<S.mipmaps.length;j++)z.__webglFramebuffer[Z][j]=n.createFramebuffer()}else z.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)z.__webglFramebuffer[Z]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ut)for(let Z=0,j=$.length;Z<j;Z++){const dt=i.get($[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Xt(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const j=$[Z];z.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);const dt=s.convert(j.format,j.colorSpace),It=s.convert(j.type),_t=M(j.internalFormat,dt,It,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),pt=Vt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,_t,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ee(n.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)bt(z.__webglFramebuffer[Z][j],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,j);else bt(z.__webglFramebuffer[Z],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(S)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Z=0,j=$.length;Z<j;Z++){const dt=$[Z],It=i.get(dt);let _t=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,It.__webglTexture),ee(_t,dt),bt(z.__webglFramebuffer,C,dt,n.COLOR_ATTACHMENT0+Z,_t,0),p(dt)&&x(_t)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),ee(Z,S),S.mipmaps&&S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)bt(z.__webglFramebuffer[j],C,S,n.COLOR_ATTACHMENT0,Z,j);else bt(z.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,Z,0);p(S)&&x(Z),e.unbindTexture()}C.depthBuffer&&et(C)}function ct(C){const S=C.textures;for(let z=0,V=S.length;z<V;z++){const $=S[z];if(p($)){const ht=y(C),ut=i.get($).__webglTexture;e.bindTexture(ht,ut),x(ht),e.unbindTexture()}}}const ft=[],Ot=[];function Ut(C){if(C.samples>0){if(Xt(C)===!1){const S=C.textures,z=C.width,V=C.height;let $=n.COLOR_BUFFER_BIT;const ht=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(C),Z=S.length>1;if(Z)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);const j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const It=i.get(S[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,$,n.NEAREST),l===!0&&(ft.length=0,Ot.length=0,ft.push(n.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Ot.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const It=i.get(S[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Vt(C){return Math.min(r.maxSamples,C.samples)}function Xt(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function I(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function fe(C,S){const z=C.colorSpace,V=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ra&&z!==ui&&(ae.getTransfer(z)===_e?(V!==Sn||$!==on)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",z)),S}function ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lx(n,t){function e(i,r=ui){let s;const a=ae.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oh)return n.BYTE;if(i===Bh)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===On)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===yn)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Gh)return n.RGB;if(i===Sn)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===vl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===yl)return n.RGBA_INTEGER;if(i===$s||i===Zs||i===Ks||i===Js)if(a===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===wo||i===To||i===Ao)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Po||i===Lo||i===Io||i===na||i===Do)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return a===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Po)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lo)return s.COMPRESSED_R11_EAC;if(i===Io)return s.COMPRESSED_SIGNED_R11_EAC;if(i===na)return s.COMPRESSED_RG11_EAC;if(i===Do)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Ho||i===Go||i===Vo||i===Wo||i===Xo||i===Yo||i===qo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return a===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Zo||i===Ko)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return a===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===Qo||i===ia||i===jo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new jh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fx extends Fi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new ux,p={},x=e.getContextAttributes();let y=null,M=null;const E=[],b=[],A=new ot;let _=null,T=null;const R=new je;R.viewport=new we;const P=new je;P.viewport=new we;const U=[R,P],k=new Mp;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=E[K];return tt===void 0&&(tt=new Na,E[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=E[K];return tt===void 0&&(tt=new Na,E[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=E[K];return tt===void 0&&(tt=new Na,E[K]=tt),tt.getHandSpace()};function X(K){const tt=b.indexOf(K.inputSource);if(tt===-1)return;const vt=E[tt];vt!==void 0&&(vt.update(K.inputSource,K.frame,c||a),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",rt);for(let K=0;K<E.length;K++){const tt=b[K];tt!==null&&(b[K]=null,E[K].disconnect(tt))}N=null,B=null,g.reset();for(const K in p)delete p[K];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,M=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",rt),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,kt=null,bt=null;x.depth&&(bt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=x.stencil?Ri:Qn,kt=x.stencil?Zr:On);const Gt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Gt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new dn(f.textureWidth,f.textureHeight,{format:Sn,type:on,depthTexture:new jr(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,vt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new dn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(K){for(let tt=0;tt<K.removed.length;tt++){const vt=K.removed[tt],kt=b.indexOf(vt);kt>=0&&(b[kt]=null,E[kt].disconnect(vt))}for(let tt=0;tt<K.added.length;tt++){const vt=K.added[tt];let kt=b.indexOf(vt);if(kt===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=b.length){b.push(vt),kt=Gt;break}else if(b[Gt]===null){b[Gt]=vt,kt=Gt;break}if(kt===-1)break}const bt=E[kt];bt&&bt.connect(vt)}}const q=new L,Q=new L;function it(K,tt,vt){q.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const kt=q.distanceTo(Q),bt=tt.projectionMatrix.elements,Gt=vt.projectionMatrix.elements,me=bt[14]/(bt[10]-1),et=bt[14]/(bt[10]+1),at=(bt[9]+1)/bt[5],lt=(bt[9]-1)/bt[5],ct=(bt[8]-1)/bt[0],ft=(Gt[8]+1)/Gt[0],Ot=me*ct,Ut=me*ft,Vt=kt/(-ct+ft),Xt=Vt*-ct;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xt),K.translateZ(Vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const I=me+Vt,fe=et+Vt,ne=Ot-Xt,C=Ut+(kt-Xt),S=at*et/fe*I,z=lt*et/fe*I;K.projectionMatrix.makePerspective(ne,C,S,z,I,fe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Lt(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let tt=K.near,vt=K.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),k.near=P.near=R.near=tt,k.far=P.far=R.far=vt,(N!==k.near||B!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;const kt=K.parent,bt=k.cameras;Lt(k,kt);for(let Gt=0;Gt<bt.length;Gt++)Lt(bt[Gt],kt);bt.length===2?it(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),Tt(K,k,kt)};function Tt(K,tt,vt){vt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let ue=null;function ee(K,tt){if(h=tt.getViewerPose(c||a),m=tt,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let kt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,kt=!0);for(let et=0;et<vt.length;et++){const at=vt[et];let lt=null;if(d!==null)lt=d.getViewport(at);else{const ft=u.getViewSubImage(f,at);lt=ft.viewport,et===0&&(t.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(M))}let ct=U[et];ct===void 0&&(ct=new je,ct.layers.enable(et),ct.viewport=new we,U[et]=ct),ct.matrix.fromArray(at.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(at.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),et===0&&(k.matrix.copy(ct.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),kt===!0&&k.cameras.push(ct)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const et=u.getDepthInformation(vt[0]);et&&et.isValid&&et.texture&&g.init(et,r.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),u=i.getBinding();for(let et=0;et<vt.length;et++){const at=vt[et].camera;if(at){let lt=p[at];lt||(lt=new jh,p[at]=lt);const ct=u.getCameraImage(at);lt.sourceTexture=ct}}}}for(let vt=0;vt<E.length;vt++){const kt=b[vt],bt=E[vt];kt!==null&&bt!==void 0&&bt.update(kt,tt,c||a)}ue&&ue(K,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}const le=new pu;le.setAnimationLoop(ee),this.setAnimationLoop=function(K){ue=K},this.dispose=function(){}}}const dx=new xe,Su=new Yt;Su.set(-1,0,0,0,1,0,0,0,1);function px(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,lu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,M=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(dx.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Su),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mx(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;i.uniformBlockBinding(M,b)}function c(M,E){let b=r[M.id];b===void 0&&(g(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",x));const A=E.program;i.updateUBOMapping(M,A);const _=t.render.frame;s[M.id]!==_&&(f(M),s[M.id]=_)}function h(M){const E=u();M.__bindingPointIndex=E;const b=n.createBuffer(),A=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const E=r[M.id],b=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,T=b.length;_<T;_++){const R=b[_];if(Array.isArray(R))for(let P=0,U=R.length;P<U;P++)d(R[P],_,P,A);else d(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,E,b,A){if(v(M,E,b,A)===!0){const _=M.__offset,T=M.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){const U=T[P],k=p(U);m(U,M.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function m(M,E,b){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,b)}function v(M,E,b,A){const _=M.value,T=E+"_"+b;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{const R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(M){const E=M.uniforms;let b=0;const A=16;for(let T=0,R=E.length;T<R;T++){const P=Array.isArray(E[T])?E[T]:[E[T]];for(let U=0,k=P.length;U<k;U++){const N=P[U],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,Y=B.length;X<Y;X++){const rt=B[X],q=p(rt),Q=b%A,it=Q%q.boundary,Lt=Q+it;b+=it,Lt!==0&&A-Lt<q.storage&&(b+=A-Lt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const _=b%A;return _>0&&(b+=A-_),M.__size=b,M.__cache={},this}function p(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",M),E}function x(M){const E=M.target;E.removeEventListener("dispose",x);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function y(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function _x(){return An===null&&(An=new Zh(gx,16,16,Ni,yn),An.name="DFG_LUT",An.minFilter=qe,An.magFilter=qe,An.wrapS=qn,An.wrapT=qn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class xx{constructor(t={}){const{canvas:e=Of(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=on}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=d,g=new Set([yl,Sl,Ml]),p=new Set([on,On,$r,Zr,_l,xl]),x=new Uint32Array(4),y=new Int32Array(4),M=new L;let E=null,b=null;const A=[],_=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,U=null,k=null,N=null,B=null;this._outputColorSpace=Qe;let X=0,Y=0,rt=null,q=-1,Q=null;const it=new we,Lt=new we;let Tt=null;const ue=new Kt(0);let ee=0,le=e.width,K=e.height,tt=1,vt=null,kt=null;const bt=new we(0,0,le,K),Gt=new we(0,0,le,K);let me=!1;const et=new Rl;let at=!1,lt=!1;const ct=new xe,ft=new L,Ot=new we,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return rt===null?tt:1}let I=i;function fe(w,F){return e.getContext(w,F)}let ne,C,S,z,V,$,ht,ut,Z,j,dt,It,_t,pt,Dt,Bt,Zt,O,mt,J,gt,yt,st;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",pn,!1),I===null){const F="webgl2";if(I=fe(F,w),I===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(w){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),he("WebGLRenderer: "+w.message),w}function Nt(){ne=new _g(I),ne.init(),gt=new lx(I,ne),C=new og(I,ne,t,gt),S=new ax(I,ne),C.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),k=I.createFramebuffer(),N=I.createFramebuffer(),B=I.createFramebuffer(),z=new Mg(I),V=new Y_,$=new ox(I,ne,S,V,C,gt,z),ht=new gg(R),ut=new yp(I),yt=new sg(I,ut),Z=new xg(I,ut,z,yt),j=new yg(I,Z,ut,yt,z),O=new Sg(I,C,$),Dt=new lg(V),dt=new X_(R,ht,ne,C,yt,Dt),It=new px(R,V),_t=new $_,pt=new tx(ne),Zt=new rg(R,ht,S,j,m,l),Bt=new sx(R,j,C),st=new mx(I,z,C,S),mt=new ag(I,ne,z),J=new vg(I,ne,z),z.programs=dt.programs,R.capabilities=C,R.extensions=ne,R.properties=V,R.renderLists=_t,R.shadowMap=Bt,R.state=S,R.info=z}v!==on&&(T=new Eg(v,e.width,e.height,o,r,s));const Ct=new fx(R,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(le,K,!1))},this.getSize=function(w){return w.set(le,K)},this.setSize=function(w,F,W=!0){if(Ct.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=w,K=F,e.width=Math.floor(w*tt),e.height=Math.floor(F*tt),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(le*tt,K*tt).floor()},this.setDrawingBufferSize=function(w,F,W){le=w,K=F,tt=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(v===on){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(it)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,F,W,H){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,F,W,H),S.viewport(it.copy(bt).multiplyScalar(tt).round())},this.getScissor=function(w){return w.copy(Gt)},this.setScissor=function(w,F,W,H){w.isVector4?Gt.set(w.x,w.y,w.z,w.w):Gt.set(w,F,W,H),S.scissor(Lt.copy(Gt).multiplyScalar(tt).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){S.setScissorTest(me=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){kt=w},this.getClearColor=function(w){return w.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let H=0;if(w){let G=!1;if(rt!==null){const St=rt.texture.format;G=g.has(St)}if(G){const St=rt.texture.type,wt=p.has(St),Mt=Zt.getClearColor(),At=Zt.getClearAlpha(),Pt=Mt.r,Jt=Mt.g,ie=Mt.b;wt?(x[0]=Pt,x[1]=Jt,x[2]=ie,x[3]=At,I.clearBufferuiv(I.COLOR,0,x)):(y[0]=Pt,y[1]=Jt,y[2]=ie,y[3]=At,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Zt.dispose(),_t.dispose(),pt.dispose(),V.dispose(),ht.dispose(),j.dispose(),yt.dispose(),st.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Jl),Ct.removeEventListener("sessionend",Ql),gi.stop()};function ye(w){w.preventDefault(),fc("WebGLRenderer: Context Lost."),P=!0}function de(){fc("WebGLRenderer: Context Restored."),P=!1;const w=z.autoReset,F=Bt.enabled,W=Bt.autoUpdate,H=Bt.needsUpdate,G=Bt.type;Nt(),z.autoReset=w,Bt.enabled=F,Bt.autoUpdate=W,Bt.needsUpdate=H,Bt.type=G}function pn(w){he("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function En(w){const F=w.target;F.removeEventListener("dispose",En),qu(F)}function qu(w){$u(w),V.remove(w)}function $u(w){const F=V.get(w).programs;F!==void 0&&(F.forEach(function(W){dt.releaseProgram(W)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,H,G,St){F===null&&(F=Ut);const wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,Mt=Ju(w,F,W,H,G);S.setMaterial(H,wt);let At=W.index,Pt=1;if(H.wireframe===!0){if(At=Z.getWireframeAttribute(W),At===void 0)return;Pt=2}const Jt=W.drawRange,ie=W.attributes.position;let Rt=Jt.start*Pt,pe=(Jt.start+Jt.count)*Pt;St!==null&&(Rt=Math.max(Rt,St.start*Pt),pe=Math.min(pe,(St.start+St.count)*Pt)),At!==null?(Rt=Math.max(Rt,0),pe=Math.min(pe,At.count)):ie!=null&&(Rt=Math.max(Rt,0),pe=Math.min(pe,ie.count));const Pe=pe-Rt;if(Pe<0||Pe===1/0)return;yt.setup(G,H,Mt,W,At);let Ee,Me=mt;if(At!==null&&(Ee=ut.get(At),Me=J,Me.setIndex(Ee)),G.isMesh)H.wireframe===!0?(S.setLineWidth(H.wireframeLinewidth*Xt()),Me.setMode(I.LINES)):Me.setMode(I.TRIANGLES);else if(G.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),S.setLineWidth(Ge*Xt()),G.isLineSegments?Me.setMode(I.LINES):G.isLineLoop?Me.setMode(I.LINE_LOOP):Me.setMode(I.LINE_STRIP)}else G.isPoints?Me.setMode(I.POINTS):G.isSprite&&Me.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ge=G._multiDrawStarts,Et=G._multiDrawCounts,Ze=G._multiDrawCount,ce=At?ut.get(At).bytesPerElement:1,cn=V.get(H).currentProgram.getUniforms();for(let wn=0;wn<Ze;wn++)cn.setValue(I,"_gl_DrawID",wn),Me.render(Ge[wn]/ce,Et[wn])}else if(G.isInstancedMesh)Me.renderInstances(Rt,Pe,G.count);else if(W.isInstancedBufferGeometry){const Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Ge);Me.renderInstances(Rt,Pe,Et)}else Me.render(Rt,Pe)};function Kl(w,F,W,H){U!==null&&w.isNodeMaterial&&U.setObject(H,w),at===!0&&Dt.setState(w,W,!1),w.transparent===!0&&w.side===Fe&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,fs(w,F,H),w.side=Ii,w.needsUpdate=!0,fs(w,F,H),w.side=Fe):fs(w,F,H)}this.compile=function(w,F,W=null){W===null&&(W=w),U!==null&&U.renderStart(w,F,W),b=pt.get(W),b.init(F),_.push(b),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,lt),at===!0&&Dt.setGlobalState(this.clippingPlanes,F),U!==null&&Bt.render(b.state.shadowsArray,W,F);const H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const St=G.material;if(St)if(Array.isArray(St))for(let wt=0;wt<St.length;wt++){const Mt=St[wt];Kl(Mt,W,F,G),H.add(Mt)}else Kl(St,W,F,G),H.add(St)}),b=_.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(w,F,W=null){const H=this.compile(w,F,W);return new Promise(G=>{function St(){if(H.forEach(function(wt){const At=V.get(wt).currentProgram;(At===void 0||At.isReady())&&H.delete(wt)}),H.size===0){G(w);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ba=null;function Zu(w){ba&&ba(w)}function Jl(){gi.stop()}function Ql(){gi.start()}const gi=new pu;gi.setAnimationLoop(Zu),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){ba=w,Ct.setAnimationLoop(w),w===null?gi.stop():gi.start()},Ct.addEventListener("sessionstart",Jl),Ct.addEventListener("sessionend",Ql),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(w,F);const W=Ct.enabled===!0&&Ct.isPresenting===!0,H=T!==null&&(rt===null||W)&&T.begin(R,rt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,rt),b=pt.get(w,_.length),b.init(F),b.state.textureUnits=$.getTextureUnits(),_.push(b),ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(ct,Dn,F.reversedDepth),lt=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,lt),E=_t.get(w,A.length),E.init(),A.push(E),Ct.enabled===!0&&Ct.isPresenting===!0){const wt=R.xr.getDepthSensingMesh();wt!==null&&Ea(wt,F,-1/0,R.sortObjects)}Ea(w,F,0,R.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(vt,kt),Vt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Vt&&Zt.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Dt.beginShadows();const G=b.state.shadowsArray;if(Bt.render(G,w,F),at===!0&&Dt.endShadows(),(H&&T.hasRenderPass())===!1){const wt=E.opaque,Mt=E.transmissive;if(b.setupLights(),F.isArrayCamera){const At=F.cameras;if(Mt.length>0)for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){const ie=At[Pt];tc(wt,Mt,w,ie)}Vt&&Zt.render(w);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){const ie=At[Pt];jl(E,w,ie,ie.viewport)}}else Mt.length>0&&tc(wt,Mt,w,F),Vt&&Zt.render(w),jl(E,w,F)}rt!==null&&Y===0&&($.updateMultisampleRenderTarget(rt),$.updateRenderTargetMipmap(rt)),H&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),yt.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(b=_[_.length-1],$.setTextureUnits(b.state.textureUnits),at===!0&&Dt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,U!==null&&U.renderEnd()};function Ea(w,F,W,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(et)){H&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const wt=j.update(w),Mt=w.material;Mt.visible&&E.push(w,wt,Mt,W,Ot.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(et))){const wt=j.update(w),Mt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ot.copy(wt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){const At=wt.groups;for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){const ie=At[Pt],Rt=Mt[ie.materialIndex];Rt&&Rt.visible&&E.push(w,wt,Rt,W,Ot.z,ie,F)}}else Mt.visible&&E.push(w,wt,Mt,W,Ot.z,null,F)}}const St=w.children;for(let wt=0,Mt=St.length;wt<Mt;wt++)Ea(St[wt],F,W,H)}function jl(w,F,W,H){const{opaque:G,transmissive:St,transparent:wt}=w;b.setupLightsView(W),at===!0&&Dt.setGlobalState(R.clippingPlanes,W),H&&S.viewport(it.copy(H)),G.length>0&&us(G,F,W),St.length>0&&us(St,F,W),wt.length>0&&us(wt,F,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function tc(w,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Rt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new dn(1,1,{generateMipmaps:!0,type:Rt?yn:on,minFilter:Ai,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const St=b.state.transmissionRenderTarget[H.id],wt=H.viewport||it;St.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);const Mt=R.getRenderTarget(),At=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(ue),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),Vt&&Zt.render(W);const Jt=R.toneMapping;R.toneMapping=Nn;const ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),at===!0&&Dt.setGlobalState(R.clippingPlanes,H),us(w,W,H),$.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let pe=0,Pe=F.length;pe<Pe;pe++){const Ee=F[pe],{object:Me,geometry:Ge,material:Et,group:Ze}=Ee;if(Et.side===Fe&&Me.layers.test(H.layers)){const ce=Et.side;Et.side=He,Et.needsUpdate=!0,ec(Me,W,H,Ge,Et,Ze),Et.side=ce,Et.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,At,Pt),R.setClearColor(ue,ee),ie!==void 0&&(H.viewport=ie),R.toneMapping=Jt}function us(w,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,St=w.length;G<St;G++){const wt=w[G],{object:Mt,geometry:At,group:Pt}=wt;let Jt=wt.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),Mt.layers.test(W.layers)&&ec(Mt,F,W,At,Jt,Pt)}}function ec(w,F,W,H,G,St){U!==null&&G.isNodeMaterial&&U.setObject(w,G),w.onBeforeRender(R,F,W,H,G,St),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,F,W,H,w,St),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,R.renderBufferDirect(W,F,H,G,w,St),G.side=Ii,G.needsUpdate=!0,R.renderBufferDirect(W,F,H,G,w,St),G.side=Fe):R.renderBufferDirect(W,F,H,G,w,St),w.onAfterRender(R,F,W,H,G,St)}function fs(w,F,W){F.isScene!==!0&&(F=Ut);const H=V.get(w),G=b.state.lights,St=b.state.shadowsArray,wt=G.state.version,Mt=dt.getParameters(w,G.state,St,F,W,b.state.lightProbeGridArray),At=dt.getProgramCacheKey(Mt);let Pt=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=ht.get(w.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",En),Pt=new Map,H.programs=Pt);let ie=Pt.get(At);if(ie!==void 0){if(H.currentProgram===ie&&H.lightsStateVersion===wt)return ic(w,Mt),ie}else Mt.uniforms=dt.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,W,Mt),w.onBeforeCompile(Mt,R),ie=dt.acquireProgram(Mt,At),Pt.set(At,ie),H.uniforms=Mt.uniforms;const Rt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),ic(w,Mt),H.needsLights=ju(w),H.lightsStateVersion=wt,H.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=ie,H.uniformsList=null,ie}function nc(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Qs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ic(w,F){const W=V.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Ku(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=w.length;W<H;W++){const G=w[W];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function Ju(w,F,W,H,G){F.isScene!==!0&&(F=Ut),$.resetTextureUnits();const St=F.fog,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Mt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Pt=ht.get(H.envMap||wt,At),Jt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!W.morphAttributes.position,pe=!!W.morphAttributes.normal,Pe=!!W.morphAttributes.color;let Ee=Nn;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ee=R.toneMapping);const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ge=Me!==void 0?Me.length:0,Et=V.get(H),Ze=b.state.lights;if(at===!0&&(lt===!0||w!==Q)){const be=w===Q&&H.id===q;Dt.setState(H,w,be)}let ce=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ze.state.version||Et.outputColorSpace!==Mt||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==Pt||H.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==Jt||Et.vertexTangents!==ie||Et.morphTargets!==Rt||Et.morphNormals!==pe||Et.morphColors!==Pe||Et.toneMapping!==Ee||Et.morphTargetsCount!==Ge||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Et.__version=H.version);let cn=Et.currentProgram;ce===!0&&(cn=fs(H,F,G),U&&H.isNodeMaterial&&U.onUpdateProgram(H,cn,Et));let wn=!1,ti=!1,zi=!1;const ve=cn.getUniforms(),Ae=Et.uniforms;if(S.useProgram(cn.program)&&(wn=!0,ti=!0,zi=!0),H.id!==q&&(q=H.id,ti=!0),Et.needsLights){const be=Ku(b.state.lightProbeGridArray,G);Et.lightProbeGrid!==be&&(Et.lightProbeGrid=be,ti=!0)}if(wn||Q!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ve.setValue(I,"projectionMatrix",w.projectionMatrix),ve.setValue(I,"viewMatrix",w.matrixWorldInverse);const ni=ve.map.cameraPosition;ni!==void 0&&ni.setValue(I,ft.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,ti=!0,zi=!0)}if(Et.needsLights&&(Ze.state.sunShadowMap.length>0&&ve.setValue(I,"sunShadowMap",Ze.state.sunShadowMap,$),Ze.state.directionalShadowMap.length>0&&ve.setValue(I,"directionalShadowMap",Ze.state.directionalShadowMap,$),Ze.state.spotShadowMap.length>0&&ve.setValue(I,"spotShadowMap",Ze.state.spotShadowMap,$),Ze.state.pointShadowMap.length>0&&ve.setValue(I,"pointShadowMap",Ze.state.pointShadowMap,$)),G.isSkinnedMesh){ve.setOptional(I,G,"bindMatrix"),ve.setOptional(I,G,"bindMatrixInverse");const be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ve.setValue(I,"boneTexture",be.boneTexture,$))}G.isBatchedMesh&&(ve.setOptional(I,G,"batchingTexture"),ve.setValue(I,"batchingTexture",G._matricesTexture,$),ve.setOptional(I,G,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",G._indirectTexture,$),ve.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",G._colorsTexture,$));const ei=W.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&O.update(G,W,cn),(ti||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,ve.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Ae.envMapIntensity.value=F.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=_x()),ti){if(ve.setValue(I,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Qu(Ae,zi),St&&H.fog===!0&&It.refreshFogUniforms(Ae,St),It.refreshMaterialUniforms(Ae,H,tt,K,b.state.transmissionRenderTarget[w.id]),Et.needsLights&&Et.lightProbeGrid){const be=Et.lightProbeGrid;Ae.probesSH.value=be.texture,Ae.probesMin.value.copy(be.boundingBox.min),Ae.probesMax.value.copy(be.boundingBox.max),Ae.probesResolution.value.copy(be.resolution)}Qs.upload(I,nc(Et),Ae,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qs.upload(I,nc(Et),Ae,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(I,"center",G.center),ve.setValue(I,"modelViewMatrix",G.modelViewMatrix),ve.setValue(I,"normalMatrix",G.normalMatrix),ve.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const be=H.uniformsGroups;for(let ni=0,ki=be.length;ni<ki;ni++){const sc=be[ni];st.update(sc,cn),st.bind(sc,cn)}}return cn}function Qu(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ju(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(w,F,W){const H=V.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=F,V.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const W=V.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){rt=w,X=F,Y=W;let H=null,G=!1,St=!1;if(w){const Mt=V.get(w);if(Mt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),it.copy(w.viewport),Lt.copy(w.scissor),Tt=w.scissorTest,S.viewport(it),S.scissor(Lt),S.setScissorTest(Tt),q=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(Mt.__hasExternalTextures)$.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&V.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);const Pt=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?H=Pt[F][W]:H=Pt[F],G=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?H=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?H=Pt[W]:H=Pt,it.copy(w.viewport),Lt.copy(w.scissor),Tt=w.scissorTest}else it.copy(bt).multiplyScalar(tt).floor(),Lt.copy(Gt).multiplyScalar(tt).floor(),Tt=me;if(W!==0&&(H=k),S.bindFramebuffer(I.FRAMEBUFFER,H)&&S.drawBuffers(w,H),S.viewport(it),S.scissor(Lt),S.setScissorTest(Tt),G){const Mt=V.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,W)}else if(St){const Mt=F;for(let At=0;At<w.textures.length;At++){const Pt=V.get(w.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Pt.__webglTexture,W,Mt)}}else if(w!==null&&W!==0){const Mt=V.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,W)}q=-1};function rc(w){const F=V.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=C.textureFormatReadable(w.format),F.__typeReadable=C.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,W,H,G,St,wt,Mt=0){if(!(w&&w.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){S.bindFramebuffer(I.FRAMEBUFFER,At);try{const Pt=w.textures[Mt],Jt=Pt.format,ie=Pt.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Rt=rc(Pt);if(Rt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&W>=0&&W<=w.height-G&&I.readPixels(F,W,H,G,gt.convert(Jt),gt.convert(ie),St)}finally{const Pt=rt!==null?V.get(rt).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,H,G,St,wt,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(F>=0&&F<=w.width-H&&W>=0&&W<=w.height-G){S.bindFramebuffer(I.FRAMEBUFFER,At);const Pt=w.textures[Mt],Jt=Pt.format,ie=Pt.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt);const Rt=rc(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(F,W,H,G,gt.convert(Jt),gt.convert(ie),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Pe=rt!==null?V.get(rt).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Pe);const Ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bf(I,Ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(pe),I.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){const H=Math.pow(2,-W),G=Math.floor(w.image.width*H),St=Math.floor(w.image.height*H),wt=F!==null?F.x:0,Mt=F!==null?F.y:0;$.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,wt,Mt,G,St),S.unbindTexture()},this.copyTextureToTexture=function(w,F,W=null,H=null,G=0,St=0){let wt,Mt,At,Pt,Jt,ie,Rt,pe,Pe;const Ee=w.isCompressedTexture?w.mipmaps[St]:w.image;if(W!==null)wt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,Jt=W.min.y,ie=W.isBox3?W.min.z:0;else{const Ae=Math.pow(2,-G);wt=Math.floor(Ee.width*Ae),Mt=Math.floor(Ee.height*Ae),w.isDataArrayTexture?At=Ee.depth:w.isData3DTexture?At=Math.floor(Ee.depth*Ae):At=1,Pt=0,Jt=0,ie=0}H!==null?(Rt=H.x,pe=H.y,Pe=H.z):(Rt=0,pe=0,Pe=0);const Me=gt.convert(F.format),Ge=gt.convert(F.type);let Et;F.isData3DTexture?($.setTexture3D(F,0),Et=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),Et=I.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),Et=I.TEXTURE_2D),S.activeTexture(I.TEXTURE0),S.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Ze=S.getParameter(I.UNPACK_ROW_LENGTH),ce=S.getParameter(I.UNPACK_IMAGE_HEIGHT),cn=S.getParameter(I.UNPACK_SKIP_PIXELS),wn=S.getParameter(I.UNPACK_SKIP_ROWS),ti=S.getParameter(I.UNPACK_SKIP_IMAGES);S.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),S.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),S.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),S.pixelStorei(I.UNPACK_SKIP_IMAGES,ie);const zi=w.isDataArrayTexture||w.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ae=V.get(w),ei=V.get(F),be=V.get(Ae.__renderTarget),ni=V.get(ei.__renderTarget);S.bindFramebuffer(I.READ_FRAMEBUFFER,be.__webglFramebuffer),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ki=0;ki<At;ki++)zi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(w).__webglTexture,G,ie+ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(F).__webglTexture,St,Pe+ki)),I.blitFramebuffer(Pt,Jt,wt,Mt,Rt,pe,wt,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||V.has(w)){const Ae=V.get(w),ei=V.get(F);S.bindFramebuffer(I.READ_FRAMEBUFFER,N),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let be=0;be<At;be++)zi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,G,ie+be):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,G),ve?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ei.__webglTexture,St,Pe+be):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ei.__webglTexture,St),G!==0?I.blitFramebuffer(Pt,Jt,wt,Mt,Rt,pe,wt,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):ve?I.copyTexSubImage3D(Et,St,Rt,pe,Pe+be,Pt,Jt,wt,Mt):I.copyTexSubImage2D(Et,St,Rt,pe,Pt,Jt,wt,Mt);S.bindFramebuffer(I.READ_FRAMEBUFFER,null),S.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ve?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Et,St,Rt,pe,Pe,wt,Mt,At,Me,Ge,Ee.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,St,Rt,pe,Pe,wt,Mt,At,Me,Ee.data):I.texSubImage3D(Et,St,Rt,pe,Pe,wt,Mt,At,Me,Ge,Ee):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,Rt,pe,wt,Mt,Me,Ge,Ee.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,Rt,pe,Ee.width,Ee.height,Me,Ee.data):I.texSubImage2D(I.TEXTURE_2D,St,Rt,pe,wt,Mt,Me,Ge,Ee);S.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),S.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),S.pixelStorei(I.UNPACK_SKIP_PIXELS,cn),S.pixelStorei(I.UNPACK_SKIP_ROWS,wn),S.pixelStorei(I.UNPACK_SKIP_IMAGES,ti),St===0&&F.generateMipmaps&&I.generateMipmap(Et),S.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){X=0,Y=0,rt=null,S.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class is extends $t{constructor(){const t=is.SkyShader,e=new bn({name:t.name,uniforms:cu.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:He,depthWrite:!1});super(new Ft(1,1,1),e),this.isSky=!0}}is.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Cr=new L;function un(n,t,e,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Cr.copy(t),Cr[i]=0,Cr.normalize();const c=.5*a/(a+o),h=1-Cr.angleTo(n)/l;return Math.sign(Cr[e])===1?h*c:o/(a+o)+c+c*(1-h)}class tn extends Ft{constructor(t=1,e=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new L,c=new L,h=new L(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,v=new L,g=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:v.set(1,0,0),d[x+0]=un(v,c,"z","y",s,i),d[x+1]=1-un(v,c,"y","z",s,e);break;case 1:v.set(-1,0,0),d[x+0]=1-un(v,c,"z","y",s,i),d[x+1]=1-un(v,c,"y","z",s,e);break;case 2:v.set(0,1,0),d[x+0]=1-un(v,c,"x","z",s,t),d[x+1]=un(v,c,"z","x",s,i);break;case 3:v.set(0,-1,0),d[x+0]=1-un(v,c,"x","z",s,t),d[x+1]=1-un(v,c,"z","x",s,i);break;case 4:v.set(0,0,1),d[x+0]=1-un(v,c,"x","y",s,t),d[x+1]=1-un(v,c,"y","x",s,e);break;case 5:v.set(0,0,-1),d[x+0]=un(v,c,"x","y",s,t),d[x+1]=1-un(v,c,"y","x",s,e);break}}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.segments,t.radius)}}const nn={s:1},nt={length:3.765,width:1.66,height:1.52,wheelbase:2.425,front:.7,rear:.64,track:1.49,tyreR:.2935,tyreW:.165,rimR:.178,turningRadius:4.9,mirrorHalf:.95};nt.zFront=-3.125;nt.zRear=nt.rear;const Ht=n=>nt.zFront+n;{const n=Math.sqrt(nt.turningRadius**2-nt.wheelbase**2)-nt.track/2;nt.maxSteer=Math.atan(nt.wheelbase/n),nt.wheelTurns=1.45}nt.eye=new L(.37,1.2,Ht(2));const en=nt.length,yu=(n,t,e)=>Math.min(e,Math.max(t,n)),Xn=(n,t,e)=>n+(t-n)*e;function Ul(n){const t=n.length,e=n.map(a=>a[0]),i=n.map(a=>a[1]),r=[],s=[];for(let a=0;a<t-1;a++)r[a]=(i[a+1]-i[a])/(e[a+1]-e[a]);s[0]=r[0],s[t-1]=r[t-2];for(let a=1;a<t-1;a++)s[a]=r[a-1]*r[a]<=0?0:(r[a-1]+r[a])/2;for(let a=0;a<t-1;a++){if(r[a]===0){s[a]=s[a+1]=0;continue}const o=s[a]/r[a],l=s[a+1]/r[a],c=o*o+l*l;if(c>9){const h=3/Math.sqrt(c);s[a]=h*o*r[a],s[a+1]=h*l*r[a]}}return a=>{if(a<=e[0])return i[0];if(a>=e[t-1])return i[t-1];let o=0;for(;a>e[o+1];)o++;const l=e[o+1]-e[o],c=(a-e[o])/l,h=c*c,u=h*c;return(2*u-3*h+1)*i[o]+(u-2*h+c)*l*s[o]+(-2*u+3*h)*i[o+1]+(u-h)*l*s[o+1]}}const di=Ul([[0,.6],[.04,.7],[.14,.785],[.4,.85],[.75,.915],[1,.965],[1.31,1.215],[1.58,1.44],[1.72,1.5],[2.2,1.517],[2.75,1.505],[3.2,1.475],[3.34,1.445],[3.62,1.04],[3.7,.97],[en,.84]]),bu=Ul([[.9,.95],[1,.955],[1.62,1],[2.92,1.07],[3.06,1.125],[3.25,1.14],[3.5,1.13],[3.7,1.07],[en,1.06]]),vx=Ul([[0,.31],[.15,.25],[.4,.215],[3.3,.215],[3.55,.25],[en,.34]]),aa=[nt.front,nt.front+nt.wheelbase],Zn=.355;function Mx(n){let t=vx(n);for(const e of aa){const i=n-e;Math.abs(i)<Zn&&(t=Math.max(t,nt.tyreR+Math.sqrt(Zn*Zn-i*i)))}return t}function Eu(n){if(n<.55)return .6+.23*Math.sqrt(Math.max(0,1-(1-n/.55)**2));if(n>en-.3){const t=(n-(en-.3))/.3;return .7+.13*Math.sqrt(Math.max(0,1-t*t))}return nt.width/2}function cl(n){const t=Eu(n),e=di(n),i=Mx(n),r=Math.min(bu(n),e-.05),s=Math.max(0,e-r-.04),a=t-.07-.36*s,o=r-i;return[[0,i],[t*.55,i],[t-.07,i+.012],[t-.02,i+Math.min(.07,o*.25)],[t,i+o*.3],[t,i+o*.62],[t-.012,r-.035],[t-.04,r],[t-.07,r+.01],[t-.07-.36*s*.5,r+.01+s*.5],[a,r+.01+s],[a-.07,e-.012],[a*.5,e-.003],[0,e]]}const Sx=n=>Math.max(0,di(n)-Math.min(bu(n),di(n)-.05)-.04),Wn={sail:[1,1.18],front:[1.18,2.12],b:[2.12,2.2],rear:[2.2,2.92],c:[2.92,2.98],quarter:[2.98,3.2],screen:[1.015,1.6],back:[3.37,3.6]},hl=[.985,1.18,2.16,2.95],Ti=0,dh=1,Pr=2;function yx(n,t){const e=r=>n>r[0]&&n<r[1],i=Sx(n);if(t===8||t===9)return i<.03?Ti:e(Wn.front)||e(Wn.rear)||e(Wn.quarter)?dh:e(Wn.sail)||e(Wn.b)||e(Wn.c)?Pr:Ti;if(t===7)return i>.03&&n>1&&n<3.3?Pr:Ti;if(t>=11)return e(Wn.screen)||e(Wn.back)?dh:Ti;if(t>=10&&Math.abs(n-hl[0])<.004)return Pr;if(t>=3&&t<=6){for(const r of hl.slice(1))if(Math.abs(n-r)<.004)return Pr}return t<=2&&(n<.3||n>en-.25)?Pr:Ti}function bx(){const n=[];for(let e=0;e<=en;e+=.04)n.push(e);const t=[en,...Object.values(Wn).flat(),...aa.flatMap(e=>[e-Zn-.001,e-Zn+.002,e+Zn-.002,e+Zn+.001])];for(const e of hl)t.push(e-.004,e+.004);for(const e of t)n.push(yu(e,0,en));return n.sort((e,i)=>e-i),n.filter((e,i)=>i===0||e-n[i-1]>.0015)}const li=26;function ph(n){const t=n.map(([e,i])=>[e,i]);for(let e=12;e>=1;e--)t.push([-n[e][0],n[e][1]]);return t}const Ex=n=>n<=12?n:25-n;let oo=null;function wx(){if(oo)return oo;const n=bx(),t=[];for(const a of n)for(const[o,l]of ph(cl(a)))t.push(o,l,Ht(a));const e=[[],[],[]];for(let a=0;a<n.length-1;a++){const o=(n[a]+n[a+1])/2;for(let l=0;l<li;l++){const c=(l+1)%li,h=a*li+l,u=a*li+c,f=(a+1)*li+l,d=(a+1)*li+c;e[yx(o,Ex(l))].push(h,u,f,u,d,f)}}for(const[a,o]of[[0,!0],[n.length-1,!1]]){const l=t.length/3,c=ph(cl(n[a]));let h=0;for(const[,u]of c)h+=u/c.length;t.push(0,h,Ht(n[a]));for(const[u,f]of c)t.push(u,f,Ht(n[a]));for(let u=0;u<li;u++){const f=l+1+u,d=l+1+(u+1)%li;o?e[Ti].push(l,d,f):e[Ti].push(l,f,d)}}const i=new Ce;i.setAttribute("position",new te(t,3));const r=[];let s=0;return e.forEach((a,o)=>{r.push(...a),i.addGroup(s,a.length,o),s+=a.length}),i.setIndex(r),i.computeVertexNormals(),oo=i,i}function Tx(n,t){const e=cl(n),i=yu(Math.floor(t),0,13),r=t-i,s=e[i],a=e[Math.min(13,i+1)];return[Xn(s[0],a[0],r),Xn(s[1],a[1],r)]}function nr(n,t,e,i,r,s=.004,a=14,o=10){const l=typeof e=="function"?e:()=>e,c=typeof i=="function"?i:()=>i,h=(g,p)=>{const[x,y]=Tx(g,p);return new L(x,y,Ht(g))},u=[],f=.002;for(let g=0;g<=a;g++){const p=Xn(n,t,g/a);for(let x=0;x<=o;x++){const y=Xn(l(p),c(p),x/o),M=h(p,y),E=h(p,y+.05).sub(h(p,y-.05)),b=h(Math.min(en,p+f),y).sub(h(Math.max(0,p-f),y)),A=E.cross(b).normalize();M.addScaledVector(A,s),u.push(M.x*r,M.y,M.z)}}const d=[],m=o+1;for(let g=0;g<a;g++)for(let p=0;p<o;p++){const x=g*m+p,y=[x,x+1,x+m,x+1,x+m+1,x+m];if(r<0)for(let M=0;M<6;M+=3)[y[M+1],y[M+2]]=[y[M+2],y[M+1]];d.push(...y)}const v=new Ce;return v.setAttribute("position",new te(u,3)),v.setIndex(d),v.computeVertexNormals(),v}let Bs=null;function Ax(){if(Bs)return Bs;const n=nt.tyreR,t=nt.rimR+.006,e=nt.tyreW/2,i=[],r=.022;i.push(new ot(t,-e+.012));for(let u=0;u<=4;u++){const f=-Math.PI/2+u/4*(Math.PI/2);i.push(new ot(n-r+Math.cos(f)*r,-e+r+Math.sin(f)*r))}for(let u=0;u<=4;u++){const f=u/4*(Math.PI/2);i.push(new ot(n-r+Math.cos(f)*r,e-r+Math.sin(f)*r))}i.push(new ot(t,e-.012));const s=new Il(i,28);s.rotateZ(Math.PI/2);const a=new Bi;a.absarc(0,0,nt.rimR,0,Math.PI*2,!1);for(let u=0;u<5;u++){const f=u/5*Math.PI*2+.22,d=f+Math.PI*2/5-.44,m=new nl;m.absarc(0,0,nt.rimR-.022,f,d,!1),m.absarc(0,0,.07,d-.08,f+.08,!0),a.holes.push(m)}const o=new pa(a,{depth:.02,bevelEnabled:!0,bevelThickness:.006,bevelSize:.005,bevelSegments:1,curveSegments:10});o.rotateY(Math.PI/2),o.translate(e-.035,0,0);const l=new Oe(nt.rimR-.004,nt.rimR-.004,nt.tyreW-.03,18,1,!0);l.rotateZ(Math.PI/2);const c=new Oe(.05,.055,.03,12);c.rotateZ(Math.PI/2),c.translate(e-.02,0,0);const h=new Oe(.13,.13,.02,16);return h.rotateZ(Math.PI/2),h.translate(-.01,0,0),Bs={tyre:s,rim:o,barrel:l,hub:c,brake:h},Bs}function Rx(n,t){const e=Ax(),i=new Re,r=new Re;i.add(r);const s=new Re;s.scale.x=t,r.add(s);const a=new $t(e.tyre,n.tyre);return a.castShadow=!0,s.add(a,new $t(e.rim,n.rim),new $t(e.barrel,n.rimDark),new $t(e.hub,n.rim),new $t(e.brake,n.rimDark)),{steer:i,spin:r}}function Cx(n,t){const e=(i,r={})=>new xr({color:i,roughness:.6,metalness:0,...r});return{paint:new sl({color:t,roughness:.38,metalness:.55,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),glass:new sl({color:n.ink,roughness:.02,metalness:0,transparent:!0,opacity:.62,envMapIntensity:1.6,depthWrite:!1,side:Fe}),black:e(n.trimDark,{roughness:.75}),tyre:e(n.tyre,{roughness:.92}),rim:e(n.gunmetal??n.metal,{roughness:.3,metalness:.85}),rimDark:e(n.trimDark,{roughness:.7,metalness:.3}),chrome:e(n.metal,{roughness:.15,metalness:1}),lamp:e(n.cream,{roughness:.08,metalness:.5,envMapIntensity:1.4,polygonOffset:!0,polygonOffsetFactor:-2}),lampInner:e(n.metal,{roughness:.1,metalness:1,polygonOffset:!0,polygonOffsetFactor:-4}),tail:e(n.tail,{roughness:.2,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-2}),plate:e(n.plate,{roughness:.5}),plateInk:e(n.ink,{roughness:.6}),trim:e(n.trim,{roughness:.9,side:He,envMapIntensity:.15}),trimDark:e(n.trimDark,{roughness:.8,side:He,envMapIntensity:.15}),hidden:new fn({visible:!1}),dash:e(n.dash,{roughness:.8,envMapIntensity:.25}),dashLight:e(n.trim,{roughness:.85,envMapIntensity:.15}),seat:e(n.seat,{roughness:.95,envMapIntensity:.1}),dial:e(n.dial,{roughness:.5}),needle:e(n.tail,{roughness:.4,emissive:n.tail,emissiveIntensity:.4}),mirrorBack:e(n.metal,{roughness:.2,metalness:.9})}}function wu(n,t,{withCabin:e=!0}={}){const i=Cx(n,t),r=new Re,s=wx(),a=new $t(s,[i.paint,i.glass,i.black]);a.castShadow=!0,a.receiveShadow=!0,a.renderOrder=2,r.add(a);const o=new $t(s,[i.trim,i.hidden,i.trimDark]);o.receiveShadow=!0,r.add(o);const l=(_,T,R={})=>{const P=new $t(_,T);return R.shadow&&(P.castShadow=!0),r.add(P),P},c=new tn(1.36,.36,3.2,1,.05);c.translate(0,.37,Ht(en/2+.05)),l(c,i.black);for(const _ of aa)for(const T of[-1,1]){const R=new Oe(Zn-.01,Zn-.01,.3,20,1,!1,0,Math.PI);R.rotateZ(Math.PI/2),R.rotateX(Math.PI/2),R.translate(T*(nt.width/2-.2),nt.tyreR,Ht(_)),l(R,i.black)}const h=nt.zFront-.003,u=new Bi;u.moveTo(-.4,.565),u.lineTo(.4,.565),u.lineTo(.47,.47),u.lineTo(.37,.355),u.lineTo(-.37,.355),u.lineTo(-.47,.47),u.closePath();const f=new cs(u);f.rotateY(Math.PI),f.translate(0,0,h),l(f,i.black);for(let _=0;_<3;_++){const T=new Ft(.78-_*.04,.008,.006);T.translate(0,.52-_*.05,h-.004),l(T,i.chrome)}const d=new Ft(.5,.12,.008);d.translate(0,.42,h-.008),l(d,i.plate);const m=new Ci(.045,24);m.scale(1.4,.7,1),m.rotateX(-Math.PI/2+.6),m.translate(0,di(.06)+.004,Ht(.06)),l(m,i.chrome);for(const _ of[-1,1]){l(nr(.012,.54,R=>Xn(6.4,5.7,R/.54),R=>Xn(11.5,10,R/.54),_,.006),i.lamp),l(nr(.05,.2,R=>Xn(7.6,7.2,R/.2),R=>Xn(10.4,9.9,R/.2),_,.008,6,6),i.lampInner),l(nr(3.5,en-.004,4.9,R=>Xn(9.4,10.6,(R-3.58)/(en-3.58)),_),i.tail);for(const R of[2,2.78])l(nr(R-.1,R,6.35,6.75,_,.012,3,2),i.black);l(nr(.86,.92,6,6.3,_,.006,2,2),i.tail),l(nr(1.24,2.96,3.55,3.95,_,.008,16,2),i.black);for(const[R,P,U]of[[.06,i.black,.004],[.034,i.lamp,.008]]){const k=new Ci(R,20);k.rotateY(Math.PI),k.translate(_*.47,.37,nt.zFront-U),l(k,P)}const T=new Ft(.12,.04,.01);T.translate(_*.52,.45,nt.zRear+.004),l(T,i.tail)}const v=new Ft(.62,.035,.03);v.translate(0,.655,nt.zFront+.035),l(v,i.black);const g=new Ft(.6,.008,.012);g.translate(0,.66,nt.zFront+.018),l(g,i.chrome);const p=new Ci(.045,24);p.scale(1.4,.75,1),p.translate(0,.9,Ht(3.705)+.012),l(p,i.chrome);const x=new Ft(1.02,.028,.13);x.rotateX(.12),x.translate(0,di(3.3)+.008,Ht(3.36)),l(x,i.black);const y=new Ft(.5,.12,.008);y.translate(0,.62,nt.zRear+.008),l(y,i.plate);for(const[_,T,R]of[[.16,.58,.05],[-.36,.46,.08]]){const P=new Ft(T,.007,.014);P.rotateZ(R),P.rotateX(-.9),P.translate(_,di(1.035)+.006,Ht(1.035)),l(P,i.black)}const M=[];for(const[_,T]of aa.entries())for(const R of[-1,1]){const P=Rx(i,R);P.steer.position.set(R*nt.track/2,nt.tyreR,Ht(T)),P.front=_===0,P.side=R,r.add(P.steer),M.push(P)}const E={};for(const _ of[-1,1]){const T=new Re,R=new $t(new tn(.22,.135,.085,3,.03),i.paint);R.position.z=-.002,R.castShadow=!0;const P=new $t(oa(.19,.112),i.mirrorBack);P.position.z=.044,T.add(R,P),T.position.set(_*.875,1.035,Ht(1.215)),r.add(T);const U=new Ft(.07,.035,.07);U.translate(_*.79,1,Ht(1.19)),l(U,i.black),E[_<0?"left":"right"]={group:T,glass:P,side:_,w:.19,h:.112}}{const _=new Re,T=new $t(new tn(.255,.075,.035,3,.015),i.dash),R=new $t(oa(.236,.058),i.mirrorBack);R.position.z=.018,_.add(T,R),_.position.set(0,1.365,Ht(1.63)),r.add(_);const P=new Oe(.008,.01,.07,8);P.translate(0,1.415,Ht(1.6)),l(P,i.dash),E.rear={group:_,glass:R,side:0,w:.236,h:.058}}let b=null,A=null;return e?{steeringWheel:b,needle:A}=Px(r,i):Lx(r,i),{group:r,mats:i,wheels:M,mirrors:E,steeringWheel:b,needle:A,body:a}}function oa(n,t){const e=new Bi,i=Math.min(n,t)*.32;e.moveTo(-n/2+i,-t/2),e.lineTo(n/2-i,-t/2),e.quadraticCurveTo(n/2,-t/2,n/2,-t/2+i),e.lineTo(n/2,t/2-i),e.quadraticCurveTo(n/2,t/2,n/2-i,t/2),e.lineTo(-n/2+i,t/2),e.quadraticCurveTo(-n/2,t/2,-n/2,t/2-i),e.lineTo(-n/2,-t/2+i),e.quadraticCurveTo(-n/2,-t/2,-n/2+i,-t/2);const r=new cs(e,6),s=r.attributes.uv,a=r.attributes.position;for(let o=0;o<s.count;o++)s.setXY(o,1-(a.getX(o)/n+.5),a.getY(o)/t+.5);return r}function Px(n,t){const e=.37*nn.s,i=(_,T)=>{const R=new $t(_,T);return R.receiveShadow=!0,n.add(R),R},r=Ht(1),s=[[-r-.01,.95],[-r-.12,.945],[-Ht(1.32),.935],[-Ht(1.46),.915],[-Ht(1.5),.9],[-Ht(1.52),.84],[-Ht(1.48),.7],[-Ht(1.37),.6],[-r,.55]],a=new Bi(s.map(([_,T])=>new ot(_,T))),o=new pa(a,{depth:1.52,bevelEnabled:!1});o.rotateY(Math.PI/2),o.translate(-.76,0,0),i(o,t.dash);const l=new Ft(1.5,.16,.04);l.translate(0,.66,Ht(1.47)),i(l,t.dashLight);const c=new Oe(.17,.17,.15,20,1,!0,-Math.PI/2,Math.PI);c.scale(1,1,.45),c.rotateX(Math.PI/2),c.translate(e,.925,Ht(1.4)),i(c,new xr({color:t.dash.color,roughness:.85,side:Fe}));let h=null;for(const[_,T]of[[e-.07,!0],[e+.08,!1]]){const R=new Ci(.052,28);if(R.rotateX(-.25),R.translate(_,.965,Ht(1.43)),i(R,t.dial),T){const P=new Re,U=new Ft(.004,.044,.002);U.translate(0,.022,0),P.add(new $t(U,t.needle)),P.position.set(_,.965,Ht(1.43)+.004),P.rotation.x=-.25,n.add(P),h=P}}const u=new tn(.3,.34,.12,2,.02);u.translate(0,.74,Ht(1.48)),i(u,t.dash);const f=new hs(.03,12,10);f.translate(0,.62,Ht(1.78)),i(f,t.dash);const d=new tn(.2,.22,.7,2,.04);d.translate(0,.42,Ht(1.88)),i(d,t.dash);const m=new Re,v=new Re;m.add(v);const g=new Dl(.185,.017,10,40);v.add(new $t(g,t.dash));const p=new tn(.13,.1,.06,2,.02);v.add(new $t(p,t.dash));for(const _ of[0,Math.PI,-Math.PI/2]){const T=new Ft(.15,.03,.016);T.translate(.09,0,0),T.rotateZ(_),v.add(new $t(T,t.dash))}const x=new Ft(.02,.012,.02);x.translate(0,.185,.005),v.add(new $t(x,t.dashLight)),m.position.set(e,.87,Ht(1.63)),m.rotation.x=-.42,n.add(m),m.userData.spin=v;const y=new Oe(.035,.045,.3,12);y.rotateX(Math.PI/2-.42),y.translate(e,.81,Ht(1.5)),i(y,t.dash);for(const _ of[.37,-.37]){const T=new tn(.5,.13,.5,2,.05);T.translate(_,.5,Ht(2.3)),i(T,t.seat);const R=new tn(.5,.62,.12,2,.05);R.rotateX(-.22),R.translate(_,.84,Ht(2.55)),i(R,t.seat);const P=new tn(.26,.17,.1,2,.04);P.rotateX(-.18),P.translate(_,1.28,Ht(2.62)),i(P,t.seat)}const M=new tn(1.3,.14,.48,2,.05);M.translate(0,.5,Ht(3)),i(M,t.seat);const E=new tn(1.3,.58,.12,2,.05);E.rotateX(-.2),E.translate(0,.82,Ht(3.33)),i(E,t.seat);for(const _ of[-.42,.42]){const T=new tn(.24,.13,.09,2,.035);T.rotateX(-.18),T.translate(_,1.17,Ht(3.37)),i(T,t.seat)}const b=new Ft(1.3,.02,.3);b.translate(0,1.04,Ht(3.53)),i(b,t.dash);const A=new Ft(1.5,.02,2.6);return A.translate(0,.3,Ht(2.4)),i(A,t.dash),{steeringWheel:m,needle:h}}function Lx(n,t){const e=(s,a)=>n.add(new $t(s,a)),i=new Ft(1.5,.3,.45);i.translate(0,.8,Ht(1.3)),e(i,t.dash);for(const s of[.37,-.37]){const a=new Ft(.5,.75,.12);a.translate(s,.9,Ht(2.55)),e(a,t.seat)}const r=new Ft(1.3,.6,.12);r.translate(0,.82,Ht(3.33)),e(r,t.seat)}const Yn=(()=>{const n=[];for(let t=0;t<=40;t++){const e=t/40*en;n.push([Eu(e),Ht(e)])}return[...n,...n.reverse().map(([t,e])=>[-t,e])]})();function Ix(n,t){const e=nt.tyreW/2,i=.255,r=n.side*nt.track/2,s=n.steer.position.z,a=Math.cos(t),o=Math.sin(t);return[[-e,-i],[e,-i],[e,i],[-e,i]].map(([l,c])=>[r+l*a+c*o,s-l*o+c*a])}const Tu=[-1,1].map(n=>{const t=n*.78,e=n*nt.mirrorHalf,i=Ht(1.13),r=Ht(1.27);return[[Math.min(t,e),i],[Math.max(t,e),i],[Math.max(t,e),r],[Math.min(t,e),r]]}),fr=(()=>{const n=nt.eye.z-nt.zFront;let t=1/0;for(let e=0;e<1;e+=.005)t=Math.min(t,(nt.eye.y-di(e)-.004)/(n-e));return{slope:t,hiddenGround:nt.eye.y/t-n,hiddenOnWall:e=>nt.eye.y-t*(n+e)}})(),lo=new L,mh=new L,Lr=new L,Ir=new L,co=new L,Dx=new L,zs=new L,ho=new L,ks=new xe;class Nx{constructor(t,e,i,r,s=1){this.glass=t,this.convex=s,this.w=e,this.h=i,this.target=new dn(r,Math.round(r*i/e),{type:yn,samples:2}),this.camera=new je,this.camera.matrixAutoUpdate=!1,t.material=new fn({map:this.target.texture,color:14211288})}render(t,e,i,r=220){const s=this.glass;s.updateWorldMatrix(!0,!1);const a=s.matrixWorld.elements;lo.set(a[12],a[13],a[14]),mh.set(a[0],a[1],a[2]).normalize(),Lr.set(a[4],a[5],a[6]).normalize(),Ir.set(a[8],a[9],a[10]).normalize();const o=Dx.copy(i).sub(lo).dot(Ir);if(o<=.001)return!1;ho.copy(i).addScaledVector(Ir,-2*o),co.crossVectors(Ir,Lr),ks.makeBasis(co,Lr,zs.copy(Ir).negate()),ks.setPosition(ho);const l=this.camera;l.matrixWorld.copy(ks),l.matrixWorldInverse.copy(ks).invert();let c=1/0,h=-1/0,u=1/0,f=-1/0;for(const[g,p]of[[-1,-1],[1,-1],[1,1],[-1,1]]){zs.copy(lo).addScaledVector(mh,g*this.w/2).addScaledVector(Lr,p*this.h/2).sub(ho);const x=zs.dot(co),y=zs.dot(Lr);c=Math.min(c,x),h=Math.max(h,x),u=Math.min(u,y),f=Math.max(f,y)}const d=this.convex,m=(c+h)/2,v=(u+f)/2;return l.projectionMatrix.makePerspective(m+(c-m)*d,m+(h-m)*d,v+(f-v)*d,v+(u-v)*d,o,r),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),s.visible=!1,t.setRenderTarget(this.target),t.clear(),t.render(e,l),t.setRenderTarget(null),s.visible=!0,!0}}function Ux(){const n=t=>new Kt(t);return{sky:n("#c6dcef"),ink:n("#141519"),cream:n("#f4f1ea"),asphalt:n("#3b3d42"),concrete:n("#bdb8ae"),paintLine:n("#f6f4ee"),yellow:n("#f2bd1d"),brick:n("#b4522e"),mortar:n("#cfc8bb"),grass:n("#5a9a2c"),leaf:[n("#3f8f25"),n("#5aa832"),n("#2f7a28"),n("#79b83c")],trunk:n("#5b3d26"),hill:n("#5f9a3a"),building:[n("#f3c7a1"),n("#ea9f74"),n("#9fcbe0"),n("#f6e2ac"),n("#e09a9a"),n("#b9d8a4")],paint:n("#6a1222"),others:[n("#ecebe7"),n("#a9aeb5"),n("#1d1e22"),n("#1e5fae"),n("#e0782a")],tyre:n("#18181a"),metal:n("#c9ccd2"),gunmetal:n("#55585e"),trim:n("#b3a993"),trimDark:n("#232327"),dash:n("#1b1b1e"),seat:n("#3b3834"),dial:n("#0e0e10"),tail:n("#d0121c"),plate:n("#f4f4f0"),accent:n("#ff2d87"),clay:n("#ff3b30")}}const ci=n=>`#${n.getHexString(Qe)}`;function Rn(n,t){const e=document.createElement("canvas");e.width=e.height=n,t(e.getContext("2d"),n);const i=new Qh(e);return i.wrapS=i.wrapT=ea,i.colorSpace=Qe,i.anisotropy=8,i}function Au(n){let t=n>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}const Fx={asphalt:new URL("/play/parking/assets/asphalt-DH8KHrUc.jpg",import.meta.url).href,brick:new URL("/play/parking/assets/brick-DaF38vzV.jpg",import.meta.url).href,tiles:new URL("/play/parking/assets/pavers-Db2rkgEj.jpg",import.meta.url).href,grass:new URL("/play/parking/assets/grass-Bt239YZU.jpg",import.meta.url).href,facade:new URL("/play/parking/assets/facade-yMGRTfX8.jpg",import.meta.url).href,floor:new URL("/play/parking/assets/floor-TA1MLFTF.jpg",import.meta.url).href,concrete:new URL("/play/parking/assets/concrete-HH_9GOcy.jpg",import.meta.url).href,shops:new URL("/play/parking/assets/shops-geEbPysZ.jpg",import.meta.url).href,shops2:new URL("/play/parking/assets/shops2-D7cAogtz.jpg",import.meta.url).href};function Ox(n,t){const e=Au(5),i=Rn(256,(x,y)=>{x.fillStyle=ci(n.asphalt),x.fillRect(0,0,y,y);for(let M=0;M<6e3;M++){const E=40+Math.floor(e()*50);x.fillStyle=`rgb(${E},${E},${E+3})`,x.fillRect(e()*y,e()*y,1+e()*1.5,1+e()*1.5)}}),r=Rn(512,(x,y)=>{x.fillStyle=ci(n.mortar),x.fillRect(0,0,y,y);const M=y/10,E=y/5;for(let b=0;b<10;b++){const A=y-(b+1)*M,_=b%2?E/2:0;for(let T=-E;T<y+E;T+=E)x.fillStyle=ci(n.brick.clone().multiplyScalar(.82+e()*.3)),x.fillRect(T+_+2.5,A+M*.1,E-5,M*.9)}}),s=Rn(256,(x,y)=>{x.fillStyle=ci(n.ink),x.fillRect(0,0,y,y),x.fillStyle=ci(n.yellow),x.fillRect(0,0,y/2,y)}),a=Rn(256,(x,y)=>{x.fillStyle=ci(n.concrete),x.fillRect(0,0,y,y),x.strokeStyle="rgb(140,136,128)",x.lineWidth=3;for(let M=0;M<=3;M++)x.beginPath(),x.moveTo(M*y/3,0),x.lineTo(M*y/3,y),x.moveTo(0,M*y/3),x.lineTo(y,M*y/3),x.stroke()}),o=Rn(256,(x,y)=>{x.fillStyle=ci(n.grass),x.fillRect(0,0,y,y);for(let M=0;M<5e3;M++)x.fillStyle=ci(n.grass.clone().multiplyScalar(.7+e()*.6)),x.fillRect(e()*y,e()*y,1,2+e()*2)}),l=Rn(256,(x,y)=>{x.fillStyle="#f0d9b8",x.fillRect(0,0,y,y),x.fillStyle="#5d7385";for(let M=0;M<4;M++)for(let E=0;E<4;E++)x.fillRect(E*64+18,M*64+16,28,34)}),c=(x,y=40)=>Rn(256,(M,E)=>{M.fillStyle=x,M.fillRect(0,0,E,E);for(let b=0;b<3e3;b++)M.globalAlpha=.08,M.fillStyle=e()>.5?"#000":"#fff",M.fillRect(e()*E,e()*E,2+e()*y*.1,2+e()*y*.1)}),h=c("#8d8c88"),u=c("#a7a39b"),f=(x,y)=>{const M=["#d9473b","#2f7bbf","#e9b23a","#3e9b5a"];x.fillStyle="#6d6a64",x.fillRect(0,0,y,y);for(let E=0;E<4;E++)x.fillStyle=M[E],x.fillRect(E*y/4+4,y*.08,y/4-8,y*.2),x.fillStyle="#2b2a28",x.fillRect(E*y/4+8,y*.34,y/4-16,y*.66)},d=Rn(256,f),m=Rn(256,f),v=Rn(256,(x,y)=>{x.fillStyle="#f2bd1d",x.fillRect(0,0,y,y),x.fillStyle="#17171a";for(let M=-2;M<4;M++)x.beginPath(),x.moveTo(M*(y/2),y),x.lineTo(M*(y/2)+y/4,y),x.lineTo(M*(y/2)+y/4+y,0),x.lineTo(M*(y/2)+y,0),x.closePath(),x.fill()}),g={asphalt:i,brick:r,curb:s,tiles:a,grass:o,facade:l,floor:h,concrete:u,shops:d,shops2:m,hazard:v},p=new dp;for(const[x,y]of Object.entries(Fx))p.load(y,M=>{g[x].image=M;for(const E of[g[x],...js.get(g[x])||[]])E.image=M,E.needsUpdate=!0},void 0,()=>{});return g}const js=new WeakMap;function Ye(n){const t=n.clone();return js.has(n)||js.set(n,[]),js.get(n).push(t),t.needsUpdate=!0,t}function Mr(n,t,e,i,r=0){const s=Math.cos(r),a=Math.sin(r);return[[-e,-i],[e,-i],[e,i],[-e,i]].map(([o,l])=>[n+o*s+l*a,t-o*a+l*s])}function Pi(n,t){const e=Math.cos(n.h),i=Math.sin(n.h);return t.map(([r,s])=>[n.x+r*e+s*i,n.z-r*i+s*e])}function gh(n,t){for(let e=0;e<n.length;e++){const[i,r]=n[e],[s,a]=n[(e+1)%n.length];t.push([r-a,s-i])}return t}function ta(n,t){for(const[e,i]of gh(t,gh(n,[]))){let r=1/0,s=-1/0,a=1/0,o=-1/0;for(const[l,c]of n){const h=l*e+c*i;r=Math.min(r,h),s=Math.max(s,h)}for(const[l,c]of t){const h=l*e+c*i;a=Math.min(a,h),o=Math.max(o,h)}if(s<a||o<r)return!1}return!0}function _h(n,t,e){const i=e[0]-t[0],r=e[1]-t[1],s=i*i+r*r||1e-9,a=Math.max(0,Math.min(1,((n[0]-t[0])*i+(n[1]-t[1])*r)/s));return[t[0]+i*a,t[1]+r*a]}function Ru(n,t){if(ta(n,t)){let r=0,s=0;for(const[o,l]of n)r+=o/n.length,s+=l/n.length;let a=null;for(let o=0;o<t.length;o++){const l=_h([r,s],t[o],t[(o+1)%t.length]),c=Math.hypot(l[0]-r,l[1]-s);(!a||c<a.d)&&(a={d:c,q:l})}return{d:0,a:a.q,b:a.q}}let e={d:1/0,a:null,b:null};const i=(r,s,a)=>{for(const o of r)for(let l=0;l<s.length;l++){const c=_h(o,s[l],s[(l+1)%s.length]),h=Math.hypot(o[0]-c[0],o[1]-c[1]);h<e.d&&(e=a?{d:h,a:c,b:o}:{d:h,a:o,b:c})}};return i(n,t,!1),i(t,n,!0),e}function oe(n,t,{cast:e=!0,receive:i=!0}={}){const r=new $t(n,t);return r.castShadow=e,r.receiveShadow=i,r}const qt=n=>new xr({roughness:.9,metalness:0,...n});function la(n,t,e,i,r,s="line",a="bay line",o=.1){const l=Math.hypot(i-t,r-e),c=Math.atan2(i-t,r-e),h=oe(new Ft(o,.004,l),n.mat.line,{cast:!1});h.position.set((t+i)/2,.003,(e+r)/2),h.rotation.y=c,n.group.add(h);const u={name:s,label:a,kind:"mark",h:0,poly:Mr((t+i)/2,(e+r)/2,o/2,l/2,c),mesh:h};return n.obstacles.push(u),u}function Ln(n,t,e,i,r="parked car",s=1){const a=wu(n.P,e,{withCabin:!1});a.group.position.set(t.x,0,t.z),a.group.rotation.y=t.h,a.group.scale.set(s*.97,s,s);const o=c=>c.map(([h,u])=>[h*s*.97,u*s]);for(const c of a.wheels)c.steer.rotation.y=0;for(const c of Object.values(a.mirrors))ar(a,c);n.group.add(a.group);const l={name:i,label:r,kind:"tall",h:nt.height*s,poly:Pi(t,o(Yn)),mesh:a.group,car:!0};n.obstacles.push(l);for(const c of Tu)n.obstacles.push({name:i,label:r,kind:"tall",h:1.1,poly:Pi(t,o(c)),part:!0});return l}function ar(n,t,e=0,i=0){const r=t.group,s=r.position.clone(),a=nt.eye.clone().sub(s).normalize();let o;t.side===0?o=new L(0,1.18,nt.zRear-.2).sub(s).normalize():o=new L(t.side*Math.sin(e),-Math.sin(i),Math.cos(e)).normalize();const l=a.add(o).normalize(),c=new L(0,1,0),h=c.clone().addScaledVector(l,-c.dot(l)).normalize(),u=new L().crossVectors(h,l);r.quaternion.setFromRotationMatrix(new xe().makeBasis(u,h,l))}function xh(n,t,e,i,r=-1,s=3,a=.15){const o=i-e,l=(e+i)/2,c=.15,h=Ye(n.tex.curb);h.repeat.set(o/2,1),h.needsUpdate=!0;const u=new Ft(c,a,o),f=u.attributes.uv,d=u.attributes.position;for(let M=0;M<f.count;M++)f.setXY(M,(d.getZ(M)+o/2)/o,f.getY(M));const m=oe(u,qt({map:h,roughness:.8}));m.position.set(t+r*c/2,a/2,l),n.group.add(m);const v=Ye(n.tex.tiles);v.repeat.set((s-c)/.9,o/.9),v.needsUpdate=!0;const g=new Ft(s-c,a,o),p=oe(g,qt({map:v,color:n.P.concrete}));p.position.set(t+r*(c+(s-c)/2),a/2,l),n.group.add(p);const x=t,y=t+r*s;n.obstacles.push({name:"curb",label:"curb",kind:"low",h:a,poly:[[Math.min(x,y),e],[Math.max(x,y),e],[Math.max(x,y),i],[Math.min(x,y),i]],mesh:m})}function Bx(n){return{trunk:qt({color:n.trunk}),leaves:n.leaf.map(t=>qt({color:t,roughness:.95}))}}const Hs={trunk:null,crown:null};function zx(n,t,e,i=1,r=0){Hs.trunk??=new Oe(.12,.2,1,7),Hs.crown??=new ma(1,1);const s=n.mat.trees??(n.mat.trees=Bx(n.P)),a=oe(Hs.trunk,s.trunk);a.scale.set(i,2.6*i,i),a.position.set(t,r+1.3*i,e),n.group.add(a);const o=Math.abs(Math.round(t*7+e*13));for(let l=0;l<4;l++){const c=oe(Hs.crown,s.leaves[(o+l)%s.leaves.length]),h=l*2.1+o,u=l===0?0:.8*i;c.scale.setScalar((l===0?1.5:1.05)*i),c.position.set(t+Math.cos(h)*u,r+(3.1+(l?.2:.6))*i,e+Math.sin(h)*u),n.group.add(c)}}function kx(n,t){const e=new Re,i=Ye(t.grass);i.repeat.set(200,200),i.needsUpdate=!0;const r=oe(new ln(400,400),qt({map:i,roughness:1}),{cast:!1});r.rotation.x=-Math.PI/2,r.position.y=-.01,e.add(r);const s=Ye(t.asphalt);s.repeat.set(12,60),s.needsUpdate=!0;const a=oe(new ln(24,120),qt({map:s,roughness:.92}),{cast:!1});a.rotation.x=-Math.PI/2,a.position.set(0,0,-20),e.add(a);const o=Au(9);for(let d=0;d<30;d++){const m=d/30*Math.PI*2+o()*.08,v=48+o()*30,g=10+o()*12,p=9+o()*15,x=Ye(t.facade);x.repeat.set(g/12,p/12),x.needsUpdate=!0;const y=qt({map:x}),M=qt({color:n.building[d%n.building.length]}),E=oe(new Ft(g,p,10),[y,y,M,M,y,y],{cast:!1,receive:!1});E.position.set(Math.sin(m)*v,p/2,Math.cos(m)*v),E.rotation.y=m,e.add(E)}const l=qt({color:n.hill,roughness:1,flatShading:!0});for(let d=0;d<14;d++){const m=d/14*Math.PI*2+o(),v=120+o()*40,g=oe(new ma(1,2),l,{cast:!1,receive:!1});g.scale.set(30+o()*30,12+o()*18,30+o()*20),g.position.set(Math.sin(m)*v,-4,Math.cos(m)*v),e.add(g)}const c=[];for(let d=0;d<40;d++){const m=o()*Math.PI*2,v=22+o()*22,g=Math.sin(m)*v,p=-20+Math.cos(m)*v*1.6;Math.abs(g)<13&&p>-82&&p<42||c.push([g,p,.9+o()*.6])}const h=[],u={P:n,group:{add:(...d)=>h.push(...d)},mat:{}};for(const[d,m,v]of c)zx(u,d,m,v);const f=new Map;for(const d of h){const m=d.material.uuid+d.geometry.uuid;f.has(m)||f.set(m,[]),f.get(m).push(d)}for(const d of f.values()){const m=new Kh(d[0].geometry,d[0].material,d.length);d.forEach((v,g)=>{v.updateMatrix(),m.setMatrixAt(g,v.matrix)}),m.castShadow=!0,m.receiveShadow=!0,e.add(m)}return e}const re=-12,ge=2.7,Vr=.9;function lr(n,{x:t,z:e,w:i,d:r,h:s,y:a=0,band:o=!0,name:l,label:c,kind:h="tall",obstacle:u=!0}){const f=Ye(n.tex.concrete);f.repeat.set(Math.max(i,r)/2,s/2);const d=qt({map:f,transparent:!0}),m=oe(new Ft(i,s,r),d);if(m.position.set(t,a+s/2,e),n.group.add(m),o){const g=Ye(n.tex.hazard);g.repeat.set(Math.max(i,r)/.6,Vr/.6);const p=oe(new Ft(i+.006,Vr,r+.006),qt({map:g,roughness:.7,transparent:!0}),{cast:!1});p.position.set(t,a+Vr/2,e),n.group.add(p),m.userData.band=p}if(!u)return m;const v={name:l,label:c,kind:h,h:s,poly:Mr(t,e,i/2,r/2),mesh:m,fade:!0};return n.obstacles.push(v),v}function Wr(n,t,e,i="#ffffff",r=null,s="bold 120px sans-serif"){const a=document.createElement("canvas");a.width=512,a.height=Math.round(512*e/t);const o=a.getContext("2d");r&&(o.fillStyle=r,o.fillRect(0,0,a.width,a.height)),o.fillStyle=i,o.font=s,o.textAlign="center",o.textBaseline="middle",o.fillText(n,a.width/2,a.height/2+6);const l=new Qh(a);l.colorSpace=Qe;const c=new $t(new ln(t,e),new fn({map:l,transparent:!0,toneMapped:!1}));return c.userData.text=!0,c}function Gs(n,t="B1"){const e=n.P;n.env="basement";const i=Ye(n.tex.floor);i.repeat.set(40/3,44/3);const r=oe(new ln(40,44),qt({map:i,roughness:.75}),{cast:!1});r.rotation.x=-Math.PI/2,r.position.set(0,.003,re+18),n.group.add(r);const s=Ye(n.tex.concrete);s.repeat.set(10,11);const a=oe(new ln(40,44),qt({map:s,color:new Kt("#9a968e"),side:Fe}),{cast:!0,receive:!1});a.rotation.x=Math.PI/2,a.position.set(0,ge,re+18),a.userData.ceiling=!0,n.group.add(a),lr(n,{x:0,z:re-.15,w:40,d:.3,h:ge,name:"wall",label:"wall"}),lr(n,{x:0,z:re+16.15,w:40,d:.3,h:ge,name:"wall2",label:"wall"});for(const d of[-20.15,20.15])lr(n,{x:d,z:re+8,w:.3,d:16.6,h:ge,band:!1,name:"endwall",label:"wall",obstacle:!1});for(let d=-4;d<=4;d++){const m=d*2.5+1.25;la(n,m,re+.02,m,re+5,m===-1.25?"lineW":m===1.25?"lineE":"line"),la(n,m,re+11,m,re+16)}for(let d=-4;d<=3;d++){const m=Wr(`${t}-${String(31+d).padStart(2,"0")}`,.9,.32,"#ffffff","#1f6fb8","bold 150px sans-serif");m.position.set(d*2.5+2.5-1.25,1.35,re+.01),n.group.add(m)}n.pillarAt=(d,m)=>lr(n,{x:d,z:m,w:.6,d:.6,h:ge,name:"pillar",label:"pillar"});for(const d of[-6.25,6.25])n.pillarAt(d,re+.3),n.pillarAt(d,re+5.4),n.pillarAt(d,re+10.6);const o=new xr({color:"#ffffff",emissive:"#f4fbff",emissiveIntensity:3}),l=new Ft(1.2,.04,.06);for(let d=-16;d<=16;d+=4)for(const m of[re+2.5,re+8,re+13.5]){const v=new $t(l,o);v.position.set(d,ge-.04,m),n.group.add(v)}const c=oe(new Ft(40,.35,.6),qt({color:"#b7b9bc",metalness:.6,roughness:.4}),{cast:!1});c.position.set(0,ge-.25,re+6.2),n.group.add(c);const h=Wr("EXIT  →",1.1,.32,"#ffffff","#1d9a4f");h.position.set(3,2.25,re+8),h.rotation.y=Math.PI,n.group.add(h),n.lights=[[-4,re+2.5],[4,re+2.5],[0,re+8],[-8,re+8],[8,re+8]].map(([d,m])=>{const v=new du("#eef6ff",9,11,1.6);return v.position.set(d,ge-.15,m),n.group.add(v),v});const u=new fu("#f3f8ff",40,16,1.1,.8,1.4);u.position.set(.5,ge-.1,re+3.2),u.target.position.set(0,0,re+2.8),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-5e-4,u.shadow.normalBias=.02,n.group.add(u,u.target),n.spot=u;const f=[[-7.5,e.others[1]],[-2.5,e.others[3]],[5,e.others[0]]];for(const[d,m]of f)Ln(n,{x:d,z:re+16-.5+nt.zFront,h:Math.PI},m,"farcar")}function Hx(n,t,e,i){const r=["#d9473b","#2f7bbf","#e9b23a","#3e9b5a","#f1f1ee","#8a4fb0"][i%6],s=oe(new Oe(.17,.2,.75,10),qt({color:r}));s.position.set(t,.2+1,e);const a=oe(new Oe(.15,.13,.82,10),qt({color:i%2?"#2b3550":"#5a4a3a"}));a.position.set(t,.2+.41,e);const o=oe(new hs(.12,12,10),qt({color:"#8a5a3c"}));o.position.set(t,.2+1.5,e),n.group.add(s,a,o)}function ul(n,t,e="auto",i="auto rickshaw"){const r=new Re,s=qt({color:"#1f8f3a",roughness:.45,metalness:.2}),a=qt({color:"#f2c218",roughness:.45,metalness:.2}),o=qt({color:"#151517",roughness:.85}),l=(d,m,v,g,p)=>{const x=oe(d,m);return x.position.set(v,g,p),r.add(x),x};l(new Ft(1.24,.5,1.9),s,0,.55,.25),l(new Ft(.9,.75,.55),a,0,.7,-.95),l(new Ft(.5,.35,.3),a,0,.45,-1.2);const c=l(new Ft(1.3,.08,2.1),o,0,1.68,.1);c.castShadow=!0;for(const d of[-.6,.6])l(new Ft(.04,.85,.04),o,d,1.25,-.75);l(new Ft(1.3,.8,.04),o,0,1.25,1.15),l(new Ft(.9,.5,.02),new sl({color:"#223",transparent:!0,opacity:.45,roughness:.05}),0,1.3,-.95);const h=new Oe(.2,.2,.12,16);h.rotateZ(Math.PI/2);for(const[d,m]of[[-.55,.75],[.55,.75],[0,-1.1]])l(h,o,d,.2,m);const u=new Ci(.06,14);u.rotateY(Math.PI),l(u,qt({color:"#fff",emissive:"#fff",emissiveIntensity:.4}),0,.62,-1.36),r.position.set(t.x,0,t.z),r.rotation.y=t.h,n.group.add(r);const f={name:e,label:i,kind:"tall",h:1.7,poly:Mr(t.x,t.z,.65,1.32,t.h),mesh:r,car:!0};return n.obstacles.push(f),f}function ca(n,t,e,i,r){const s=new Re,a=["#c81d25","#1d4fa8","#f1f1ee","#1b1b1e","#e07a1f"][r%5],o=qt({color:a,roughness:.35,metalness:.3}),l=qt({color:"#141416",roughness:.8}),c=(u,f,d,m,v)=>{const g=oe(u,f);g.position.set(d,m,v),s.add(g)};c(new Ft(.5,.45,.9),o,0,.55,.25),c(new Ft(.42,.12,.7),l,0,.84,.3),c(new Ft(.4,.6,.12),o,0,.6,-.45),c(new Ft(.62,.05,.05),l,0,1.12,-.5);const h=new Oe(.25,.25,.1,14);h.rotateZ(Math.PI/2),c(h,l,0,.25,-.62),c(h,l,0,.25,.62),s.position.set(t,0,e),s.rotation.y=i,n.group.add(s),n.obstacles.push({name:"scooter",label:"scooter",kind:"tall",h:1.15,poly:Mr(t,e,.32,.9,i),mesh:s})}const an=-2.3,yi=.18;function vh(n){const t=n.P;n.env="street",xh(n,an,-70,30,-1,2.6,yi),xh(n,7.7,-70,30,1,2.6,yi);for(let a=-68;a<28;a+=7.5){const o=oe(new Ft(.12,.004,3),n.mat.line,{cast:!1});o.position.set(2.7,.003,a),n.group.add(o)}const e=(a,o)=>{for(let l=-66;l<28;l+=12){const c=Math.abs(Math.round(l/12))%2?n.tex.shops:n.tex.shops2,h=Ye(c),u=oe(new ln(12,8),qt({map:h,roughness:.85}),{cast:!1});u.position.set(a,yi+4,l+6),u.rotation.y=o,n.group.add(u);const f=Ye(n.tex.facade);f.repeat.set(1,.75);const d=oe(new Ft(12,9,6),[qt({color:t.building[l/12&3]}),qt({color:t.building[l/12&3]}),qt({color:"#8d8a84"}),qt({color:"#8d8a84"}),qt({map:f}),qt({map:f})],{cast:!1});d.position.set(a-Math.sin(o)*3.02,yi+8+4.5,l+6),d.rotation.y=o,n.group.add(d);const m=oe(new Ft(12,8.2,5.9),qt({color:"#5d5a55"}),{cast:!1});m.position.set(a-Math.sin(o)*3.01,yi+4,l+6),m.rotation.y=o,n.group.add(m)}};e(an-2.6,Math.PI/2),e(7.7+2.6,-Math.PI/2);for(const a of[-40,-22,-4,14]){const o=oe(new Oe(.09,.12,8,8),qt({color:"#9a9a96"}));o.position.set(an-.35,4,a),n.group.add(o),n.obstacles.push({name:"pole",label:"electric pole",kind:"tall",h:8,poly:Mr(an-.35,a,.12,.12)})}let i=0;for(const a of[-30,-27,-18,-11,-8.5,-3,2,6,11,18])Hx(n,an-.9-i*.37%1.2,a,i++);const r=oe(new Ft(.9,.8,1.6),qt({color:"#7b4a26"}));r.position.set(an-1.2,yi+.75,-15),n.group.add(r);const s=oe(new Ft(.85,.15,1.5),qt({color:"#e6862a"}));s.position.set(an-1.2,yi+1.22,-15),n.group.add(s),ca(n,7.2,-30,-.6,1),ca(n,7.2,-28.8,-.6,2),ul(n,{x:6.9,z:-18,h:Math.PI},"farauto")}const Cu={cx:0,cz:0,ri:4.6,ro:8.2,rm:6.4,phi0:-Math.PI/2,dir:1,floor:3,floors:2},zt=Cu,Dr=-zt.floor*zt.floors,Xe={x:21.25,wallZ:-14.4};function ha(n,t=zt){const e=t.dir*(n-t.phi0)/(Math.PI*2);return-t.floor*Math.min(t.floors,Math.max(0,e))}function Nr(n,t,e,i,r=260,s=[1,1]){const a=[],o=[],l=[],c=zt.floors*Math.PI*2;for(let u=0;u<=r;u++){const f=u/r,d=zt.phi0+zt.dir*c*f,m=ha(d),v=Math.cos(d),g=Math.sin(d);a.push(zt.cx+n*v,m+e,zt.cz+n*g,zt.cx+t*v,m+i,zt.cz+t*g);const p=c*zt.rm*f;if(o.push(p/s[0],0,p/s[0],s[1]),u<r){const x=u*2;l.push(x,x+2,x+1,x+1,x+2,x+3)}}const h=new Ce;return h.setAttribute("position",new te(a,3)),h.setAttribute("uv",new te(o,2)),h.setIndex(l),h.computeVertexNormals(),h}function Gx(n,t,e,i,r,s=null,a=48){for(let o=0;o<a;o++){const l=o/a*Math.PI*2-Math.PI,c=(o+1)/a*Math.PI*2-Math.PI,h=(l+c)/2;if(s&&h>s[0]&&h<s[1])continue;const u=t*(c-l)+.05,f=zt.cx+t*Math.cos(h),d=zt.cz+t*Math.sin(h);n.obstacles.push({name:r,label:"ramp wall",kind:"tall",h:i-e,y0:e,y1:i,poly:Mr(f,d,.15,u/2,-h)})}}function Vx(n,t,e){const i=n.group,r=new Re;r.position.y=t,i.add(r),n.group=r;const s=n.obstacles.length;n.floorY=t,e();for(const a of n.obstacles.slice(s))a.y1=(a.y1??(a.y0??0)+a.h)+t,a.y0=(a.y0??0)+t;n.floorY=0,n.group=i}function Cn(n,t,e,i,r,s,a="wall",o="wall",l=!0){const c=Math.hypot(i-t,r-e),h=Math.abs(i-t)>Math.abs(r-e);return lr(n,{x:(t+i)/2,z:(e+r)/2,w:h?c:.3,d:h?.3:c,h:s,name:a,label:o,band:l})}function Wx(n){const t=n.P;n.env="basement",n.lamps=[];const e=(b,A)=>{const _=Ye(n.tex.floor);return _.repeat.set(b/3,A/3),qt({map:_,roughness:.75})},i=(b,A,_,T,R,P=!1)=>{const U=oe(new ln(A-b,T-_),P?qt({color:"#8f8b84",side:Fe}):e(A-b,T-_),{cast:P,receive:!P});U.rotation.x=P?Math.PI/2:-Math.PI/2,U.position.set((b+A)/2,R,(_+T)/2),P&&(U.userData.ceiling=!0),n.group.add(U)},r=new xr({color:"#ffffff",emissive:"#f4fbff",emissiveIntensity:3}),s=new Ft(1.2,.04,.06),a=(b,A,_,T=0)=>{const R=new $t(s,r);R.position.set(b,A,_),R.rotation.y=T,n.group.add(R),n.lamps.push([b,A+(n.floorY||0)-.15,_])};i(-26,.2,-8.35,-4.45,.003),i(-26,9,-9,9,ge,!0),Cn(n,-26,-8.5,0,-8.5,ge,"topwall","wall"),Cn(n,-26,-4.3,-1.65,-4.3,ge,"topwall","wall"),Cn(n,-26.15,-8.5,-26.15,-4.3,ge,"topwall","wall",!1);for(const b of n.obstacles)b.name==="topwall"&&(b.y0=0,b.y1=ge);for(let b=-22;b<=-4;b+=6)a(b,ge-.04,-6.4);const o=Wr("↓ B1  B2  PARKING",2.2,.4,"#ffffff","#1f6fb8","bold 120px sans-serif");o.position.set(-9,2.2,-8.33),n.group.add(o);const l=Ye(n.tex.concrete);l.repeat.set(10,3);const c=ge-Dr,h=oe(new Oe(zt.ri,zt.ri,c,48),qt({map:l}));h.position.set(zt.cx,Dr+c/2,zt.cz),n.group.add(h);const u=[];for(let b=0;b<24;b++){const A=b/24*Math.PI*2;u.push([zt.cx+zt.ri*Math.cos(A),zt.cz+zt.ri*Math.sin(A)])}n.obstacles.push({name:"core",label:"ramp core",kind:"tall",h:c,y0:Dr,y1:ge,poly:u});const f=[-Math.PI+Math.asin(4.6/zt.ro)-.02,-Math.PI/2+.01],d=[-Math.PI/2-.01,-Math.asin(4.6/zt.ro)+.02],m=Ye(n.tex.concrete);m.repeat.set(16,1);const v=qt({map:m,side:Fe}),g=(b,A,_)=>{const R=_?(N=>Math.PI/2-N)(_[0]):0,P=_?Math.PI*2-(_[1]-_[0]):Math.PI*2,U=new Oe(zt.ro+.15,zt.ro+.15,A-b,72,1,!0,_?R:0,P),k=oe(U,v);k.position.set(zt.cx,(b+A)/2,zt.cz),n.group.add(k),Gx(n,zt.ro+.15,b,A,"rampwall",_)};g(Dr,-3.3,d),g(-3.3,0,null),g(0,ge,f);const p=Ye(n.tex.floor),x=oe(Nr(zt.ri,zt.ro,.004,.004,260,[3,1]),qt({map:p,roughness:.8,side:Fe}));n.group.add(x);const y=oe(Nr(zt.ri,zt.ro,-.25,-.25),qt({color:"#7d7a74",side:Fe}),{cast:!1});n.group.add(y);for(const b of[zt.ri+.25,zt.ro-.25])n.group.add(oe(Nr(b-.05,b+.05,.01,.01),n.mat.line,{cast:!1}));const M=Ye(n.tex.hazard);M.repeat.set(1,1);const E=qt({map:M,roughness:.7,side:Fe});n.group.add(oe(Nr(zt.ri+.01,zt.ri+.01,0,Vr,260,[.6,1]),E,{cast:!1})),n.group.add(oe(Nr(zt.ro-.01,zt.ro-.01,0,Vr,260,[.6,1]),E,{cast:!1}));for(let b=0;b<16;b++){const A=zt.phi0+zt.dir*(b+.5)*(Math.PI/4),_=ha(A)+2.45,T=zt.rm;a(zt.cx+T*Math.cos(A),_,zt.cz+T*Math.sin(A),-A+Math.PI/2)}for(const[b,A]of[[1,"B1"],[2,"B2"]]){const _=zt.phi0+zt.dir*b*Math.PI*2-.35,T=Wr(A,.9,.5,"#ffffff","#1f6fb8","bold 220px sans-serif");T.position.set(zt.cx+(zt.ri+.02)*Math.cos(_),ha(_)+1.5,zt.cz+(zt.ri+.02)*Math.sin(_)),T.rotation.y=Math.PI/2-_,n.group.add(T)}Vx(n,Dr,()=>{i(-9,34.2,-15,2.6,.003),Cn(n,0,-8.5,8.6,-8.5,2.3,"lanewall","wall",!1),Cn(n,1.65,-4.3,8.6,-4.3,2.3,"lanewall","wall",!1),Cn(n,8.75,-14.6,8.75,-8.5,ge,"hallwall","wall",!1),Cn(n,8.75,-4.3,8.75,1.75,ge,"hallwall","wall",!1),Cn(n,8.6,Xe.wallZ-.15,34.2,Xe.wallZ-.15,ge,"wall","wall"),Cn(n,8.6,1.75,34.2,1.75,ge,"wall2","wall"),Cn(n,34.35,-14.6,34.35,1.75,ge,"endwall","wall",!1),i(8.6,34.2,-14.6,1.75,ge,!0);for(let _=0;_<=9;_++){const T=10+_*2.5;if(la(n,T,Xe.wallZ+.02,T,Xe.wallZ+5,T===20?"lineW":T===22.5?"lineE":"line"),la(n,T,-3.4,T,1.6),_<9){const R=Wr(`B2-${String(11+_).padStart(2,"0")}`,.9,.32,"#ffffff","#1f6fb8","bold 150px sans-serif");R.position.set(T+1.25,1.35,Xe.wallZ+.01),n.group.add(R)}}for(const _ of[15,30])lr(n,{x:_,z:Xe.wallZ+.3,w:.6,d:.6,h:ge,name:"pillar",label:"pillar"});const b=(_,T,R,P,U=1,k=!1)=>Ln(n,{x:_,z:k?Xe.wallZ+.5-nt.zFront:Xe.wallZ+.45+nt.rear*U,h:k?0:Math.PI},T,R,P,U);b(18.75-.05,t.others[0],"carW","parked car"),b(23.75+.08,t.others[2],"carE","parked SUV",1.15),b(11.25,t.others[3],"farcar","parked car",1,!0),b(16.25,t.others[1],"farcar","parked car"),b(26.25,t.others[4],"farcar","parked car",1,!0),b(31.25,t.others[0],"farcar","parked car");for(const[_,T]of[[11.25,t.others[1]],[13.75,t.others[4]],[21.25,t.others[3]],[26.25,t.others[0]],[28.75,t.others[2]]])Ln(n,{x:_,z:1.6-.5+nt.zFront,h:Math.PI},T,"farcar");for(let _=11;_<=33;_+=4)a(_,ge-.04,-11.9),a(_,ge-.04,-6.4);for(let _=1;_<=7;_+=3)a(_,ge-.04,-6.4);const A=new fu("#f3f8ff",40,16,1.1,.8,1.4);A.position.set(Xe.x+.5,ge-.1,Xe.wallZ+3.2),A.target.position.set(Xe.x,0,Xe.wallZ+2.8),A.castShadow=!0,A.shadow.mapSize.set(1024,1024),A.shadow.bias=-5e-4,A.shadow.normalBias=.02,n.group.add(A,A.target),n.spot=A}),n.spiral={...zt}}const Xx={seat(n){return Gs(n,"B1"),{pose:{x:0,z:re+6.5-nt.zFront,h:0},jitter:{x:.45,z:.8,h:.12}}},wall(n){return Gs(n,"B1"),Ln(n,{x:2.58,z:re+.3-nt.zFront,h:.02},n.P.others[0],"carE"),Ln(n,{x:-2.55,z:re+.55-nt.zFront,h:-.015},n.P.others[2],"carW","parked SUV",1.15),{pose:{x:0,z:re+6.5-nt.zFront,h:0},jitter:{x:.35,z:.8,h:.1}}},footpath(n){vh(n),ul(n,{x:an+.2+.65,z:-16,h:.03});for(let t=0;t<4;t++)ca(n,an+.55,7+t*.9,.55,t);return{pose:{x:.35,z:0,h:0},jitter:{x:.4,z:1.5,h:.1}}},bay(n){return Gs(n,"B1"),Ln(n,{x:2.5,z:re+.4+nt.rear*1.15,h:Math.PI},n.P.others[4],"carE","parked SUV",1.15),Ln(n,{x:-2.6,z:re+.5-nt.zFront,h:-.01},n.P.others[1],"carW"),{pose:{x:.25,z:re+8.2+nt.rear,h:Math.PI},jitter:{x:.45,z:.7,h:.12}}},market(n){vh(n),ul(n,{x:an+.15+.65,z:-6-1.32,h:0},"ahead","auto rickshaw");const t=an+.15+nt.width/2;Ln(n,{x:t+.04,z:-.1-nt.zFront,h:.01},n.P.others[0],"behind","car behind");for(let e=0;e<3;e++)ca(n,an+.55,6.5+e*.9,.55,e+2);return{pose:{x:an+.15+1.3+.75+nt.width/2,z:-6.6-nt.rear,h:0},jitter:{x:.25,z:.5,h:.06}}},spiral(n){return Wx(n),{pose:{x:-13,z:-6.4,h:-Math.PI/2},jitter:{x:1,z:.35,h:.08}}},tight(n){return Gs(n,"B2"),n.pillarAt(1.25+.25,re+2.6),Ln(n,{x:-2.38,z:re+.35+nt.rear*1.15,h:Math.PI+.02},n.P.others[2],"carW","parked SUV",1.15),Ln(n,{x:5,z:re+.5-nt.zFront,h:0},n.P.others[0],"carE2"),{pose:{x:.1,z:re+8.4+nt.rear,h:Math.PI},jitter:{x:.4,z:.7,h:.12}}}};function Yx(n,t,e){const i={P:t,tex:e,group:new Re,obstacles:[],mat:{line:qt({color:t.paintLine,roughness:.7}),post:qt({color:t.metal,roughness:.5,metalness:.6}),plaster:qt({color:t.cream.clone().lerp(t.building[3],.4)})}},r=Xx[n](i);if(nn.s<0){i.group.scale.x=-1,i.group.traverse(s=>{s.userData.text&&(s.scale.x*=-1)});for(const s of i.obstacles)s.poly=s.poly.map(([a,o])=>[-a,o]);if(r.pose={x:-r.pose.x,z:r.pose.z,h:-r.pose.h},i.spiral){const s=Math.PI-i.spiral.phi0;i.spiral={...i.spiral,cx:-i.spiral.cx,phi0:Math.atan2(Math.sin(s),Math.cos(s)),dir:-i.spiral.dir}}i.lamps&&(i.lamps=i.lamps.map(([s,a,o])=>[-s,a,o]))}return{group:i.group,obstacles:i.obstacles,start:r,env:i.env,spot:i.spot,spiral:i.spiral,lamps:i.lamps}}const Xr=-12,fi=-2.3,ir=.9,cr=nt.track/2+nt.tyreW/2,Pn=nt.wheelbase/Math.tan(nt.maxSteer),fl=-6,Vs={y:1.19,h:.32},Pu={seat:{kind:"line",dir:1,x:0,h:0,gap:.3,look:"band"},wall:{kind:"line",dir:1,x:0,h:0,gap:.12,look:"band"},footpath:{kind:"line",dir:1,x:fi+.12+cr,h:0,z:-14.68+1.5-nt.zFront,look:"curb"},bay:{kind:"line",dir:-1,x:0,h:Math.PI,gap:.15,look:"rear"},tight:{kind:"line",dir:-1,x:.12,h:Math.PI,gap:.15,look:"rear",roomy:!0},spiral:{kind:"spiral",x:Xe.x,h:Math.PI,bayX:Xe.x,wallZ:Xe.wallZ,gap:.15},market:{kind:"parallel",x:fi+.22+cr,h:0,z:fl+1.05-nt.zFront,zBack:-.1-.35-nt.rear}};for(const n of Object.values(Pu))n.gap==null||n.kind!=="line"||(n.z=n.dir>0?Xr+n.gap-nt.zFront:Xr+n.gap+nt.rear);const xn=n=>Math.atan2(Math.sin(n),Math.cos(n));function bi(n,t,e,i){const r=-t*nt.maxSteer,s=n.h+i*e/nt.wheelbase*Math.tan(r),a=(n.h+s)/2;return{x:n.x-Math.sin(a)*i*e,z:n.z-Math.cos(a)*i*e,h:s}}function Ws(n){return n>nt.length+.08?`${se(n-nt.length)} BEHIND`:n<-.08?`${se(-n)} AHEAD`:`AT ${Lu(n).toUpperCase()}`}function Xs(n){return n>nt.length+.08?`${se(n-nt.length)} behind your rear bumper`:n<-.08?`${se(-n)} ahead of your bonnet`:`level with your ${Lu(n)}`}function Lu(n){return n<.9?"bonnet":n<1.25?"side mirror":n<2.15?"front door":n<2.95?"rear door":n<3.5?"rear window":"rear bumper"}function Mh(n){const t={x:Math.abs(nt.eye.x),z:nt.eye.z},e=Ht(.16),i=nt.zFront-fr.hiddenGround,r=(t.z-e)/(t.z-i);return t.x+r*(n-t.x)}function Ys(n){return n<-.62?"left of the bonnet":n<-.3?"the left headlamp":n<.1?"the middle of the bonnet":n<.45?"the right half of the bonnet":"right of the bonnet"}const qx="#ff2d87",uo=n=>({mirror:"left",pts:[[fi,.19,n.z-2],[fi,.19,n.z+7]],color:"#2bff88",label:"FOOTPATH EDGE"}),se=n=>`${Math.max(0,Math.round(n*100))} cm`,dl=n=>n.replace(/\b(left|right|LEFT|RIGHT)\b/g,t=>({left:"right",right:"left",LEFT:"RIGHT",RIGHT:"LEFT"})[t]).replace("with Q","with E");function $x(n){n.sTarget=-n.sTarget,n.look={mirrorL:"mirrorR",mirrorR:"mirrorL",left:"right",right:"left"}[n.look]||n.look,n.lookAt&&(n.lookAt.x=-n.lookAt.x);for(const t of n.marks||[])t.mirror={left:"right",right:"left"}[t.mirror]||t.mirror,t.pts=t.pts.map(([e,i,r])=>[-e,i,r]),t.label=dl(t.label);for(const t of["cue","short","action","lookLabel"])n[t]&&(n[t]=dl(n[t]))}class Zx{constructor(t){this.group=new Re,this.group.visible=!1,t.add(this.group);const e=new fn({color:"#2bff88",transparent:!0,opacity:.22,depthWrite:!1,toneMapped:!1}),i=new fn({color:"#2bff88",transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1}),r=new Bi(Yn.map(([c,h])=>new ot(c,h))),s=new cs(r);s.rotateX(Math.PI/2),this.ghost=new Re,this.ghost.add(new $t(s,e));const a=[],o=Yn.length;for(let c=0;c<o;c++){const[h,u]=Yn[c],[f,d]=Yn[(c+1)%o],m=Math.hypot(f-h,d-u),v=new Ft(.05,.004,m+.05);v.rotateY(Math.atan2(f-h,d-u)),v.translate((h+f)/2,0,(u+d)/2),a.push(v)}for(const c of a)this.ghost.add(new $t(c,i));this.ghost.position.y=.012,this.group.add(this.ghost);const l=new ln(.07,.22);l.rotateX(-Math.PI/2),this.dashes=new Kh(l,new fn({color:"#ffffff",transparent:!0,opacity:.8,depthWrite:!1,toneMapped:!1}),120),this.dashes.count=0,this.group.add(this.dashes),this.mark=new $t(new ln(2.4,.1).rotateX(-Math.PI/2),i),this.mark.visible=!1,this.group.add(this.mark),this.ribbons=[0,1].map(()=>{const h=new Ce;h.setAttribute("position",new te(new Float32Array(126),3)),h.setAttribute("color",new te(new Float32Array(126),3));const u=[];for(let d=0;d<20;d++)u.push(d*2,d*2+1,d*2+2,d*2+1,d*2+3,d*2+2);h.setIndex(u);const f=new $t(h,new fn({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,side:Fe,toneMapped:!1}));return f.frustumCulled=!1,this.group.add(f),{m:f,N:20}}),this.tmp=new L,this.reset()}reset(){this.phase="setup",this.theta=0,this.picture=null,this.pictureShort=null,this.redo=null,this.perp=null,this.cache=null,this.path=null}setLevel(t){this.id=t,this.plan=Pu[t],this.reset()}bestSteer(t,e,i,r,s,a){let o=0,l=1/0;const c=Math.max(.6,Math.min(5,Math.hypot(i.x-t.x,i.z-t.z)));for(let h=-1;h<=1.0001;h+=.1){let u=t,f=0;for(let m=0;m<c;m+=.2)u=bi(u,h,.2,e),a&&m<2&&a(u,h)&&(f=50);const d=f+Math.hypot(u.x-i.x,u.z-i.z)+s*Math.abs(xn(u.h-r));d<l-1e-6&&(l=d,o=h)}return Math.round(o*10)/10}update(t,e){const i=this.plan;if(!i)return null;const r=t.car,s=nn.s<0&&(i.kind==="parallel"||i.kind==="spiral"||i.look==="curb");this.flip=s,this.px=i.x*(s?1:nn.s);const a=s?{...r,x:-r.x,h:-r.h,steer:-r.steer}:r,o=s?{...e,hit:(c,h)=>e.hit({x:-c.x,z:c.z,h:-c.h},-h),behindIn:()=>{const c=e.behindIn?.();return c&&{mirror:c.mirror==="left"?"right":"left",where:dl(c.where)}}}:e;this.env=o,this.ghostPose=null;const l=i.kind==="parallel"?this.parallel(a,o):i.kind==="spiral"?this.spiral(a,o):this.line(a,i);return s&&$x(l),this.lastAdvice=l,this.draw(r,l,e),l}line(t,e){const i=e.dir,r={x:-Math.sin(e.h),z:-Math.cos(e.h)},s={x:r.x*i,z:r.z*i},a=this.px,o=(a-t.x)*s.x+(e.z-t.z)*s.z,l={x:-s.z,z:s.x},c=(t.x-a)*l.x+(t.z-e.z)*l.z,h=Math.min(i>0?4:3.5,Math.max(1.2,o*.6)),u=Math.max(0,o-h),f={x:a-s.x*u,z:e.z-s.z*u},d=o<2;if(!this.redo&&o<.3&&Math.abs(c)>.12&&(this.redo={x:t.x,z:t.z}),this.redo){const g=2-Math.hypot(t.x-this.redo.x,t.z-this.redo.z);if(g>.04||Math.abs(t.v)>.02){const p={dir:-i,rem:g,sTarget:this.bestSteer(t,-i,{x:t.x+s.x*3-l.x*c,z:t.z+s.z*3-l.z*c},e.h,.6,this.env?.hit),travel:s,...this.pedal(t,-i,g)};return p.look=i>0?"mirrorRear":"ahead",p.cue=`You are ${se(Math.abs(c))} off the line with no room left. ${i>0?"Reverse":"Pull forward"} about 2 m and come in again.`,p.short=`${se(Math.abs(c))} OFF  /  ${i>0?"BACK UP":"PULL FORWARD"} 2 M AND TRY AGAIN`,p}this.redo=null}const m=this.bestSteer(t,i,f,e.h,d?1.4:.35,this.env?.hit),v={dir:i,rem:o,sTarget:m,travel:s,...this.pedal(t,i,o)};if(e.look==="band"){const g=t.z+nt.zFront-(e.wallZ??Xr),p=ir-fr.hiddenOnWall(g),x=ir-fr.hiddenOnWall(e.gap);Math.abs(c)>.25&&o>2?(v.look="ahead",v.cue=`Look ahead. Line up the middle of the bonnet with the middle of the bay. You are ${se(Math.abs(c))} to the ${c*l.x>0?"right":"left"} of it.`,v.short=`AHEAD  /  LINE UP WITH THE BAY, ${se(Math.abs(c))} ${c*l.x>0?"RIGHT":"LEFT"}`):p>=ir-.005?(v.look="ahead",v.cue=`Look at the wall. The whole yellow and black band still shows over the bonnet. Stop when only ${se(x)} of it shows.`,v.short=`WALL  /  WHOLE BAND SHOWS, STOP AT ${se(x)}`):(v.look="ahead",v.cue=`Watch the band on the wall. ${se(p)} of it shows over the bonnet now. Stop when ${se(x)} shows.`,v.short=`WALL  /  BAND ${se(p)} → ${se(x)}`),v.lookAt={x:t.x,y:.85,z:e.wallZ??Xr},v.lookLabel=Math.abs(c)>.25&&o>2?"WATCH THE BAY AHEAD":"WATCH THE BAND ON THE WALL"}else if(e.look==="curb"){const g=fi-t.x,p=Mh(g),x=Mh(-.9475);v.look="ahead",o<3&&Math.abs(xn(t.h))<.06?(v.look="mirrorL",v.marks=[uo(t)],v.cue=t.dip?`Check the left mirror. The strip of road beside the rear tyre should be about a hand wide. Now the gap is ${se(-g-cr)}.`:"Press M to dip the left mirror and check the strip of road beside the rear tyre.",v.short=t.dip?`LEFT MIRROR  /  ROAD STRIP ${se(-g-cr)}`:"PRESS M  /  DIP THE LEFT MIRROR"):(v.cue=`Watch where the footpath edge meets the bonnet. Now it meets ${Ys(p)}. Steer in until it meets ${Ys(x)}, then straighten.`,v.short=`EDGE MEETS ${Ys(p).replace("the ","").toUpperCase()}  →  ${Ys(x).replace("the ","").toUpperCase()}`),v.lookAt={x:fi,y:.2,z:t.z+nt.zFront-fr.hiddenGround},v.lookLabel="WATCH WHERE THE EDGE MEETS THE BONNET"}else{const g=Yn.map(([y,M])=>t.x+y*Math.cos(t.h)+M*Math.sin(t.h));Math.min(...g),Math.max(...g),t.z-nt.rear*Math.cos(t.h)*-1;const p=e.wallZ??Xr,x=t.z-nt.rear<p+5.6;if(o<2.2&&x){const y=this.rearHidden(o+e.gap),M=this.rearHidden(e.gap);if(v.look="mirrorRear",v.marks=[{mirror:"rear",pts:[[t.x-1.2,M,p+.02],[t.x+1.2,M,p+.02]],color:"#2bff88",label:"STOP WHEN THE BOOT MEETS THIS"}],M<=ir-.03){const E=Math.max(0,ir-y),b=ir-M;v.cue=`Watch the rear mirror. The boot hides the bottom of the band. ${se(E)} shows now. Stop when ${se(b)} shows.`,v.short=`REAR MIRROR  /  BAND ${se(E)} → ${se(b)}`}else if(M<Vs.y-.03){const E=b=>Math.max(0,Vs.y-b);v.cue=`Watch the rear mirror. The boot line climbs the plain wall toward the blue bay number. It is ${se(E(y))} below the sign now. Stop when it is ${se(E(M))} below.`,v.short=`REAR MIRROR  /  BOOT LINE ${se(E(y))} → ${se(E(M))} BELOW SIGN`}else{const E=b=>Math.min(Vs.h,Math.max(0,b-Vs.y));v.cue=`Watch the blue bay number in the rear mirror. The boot covers it from the bottom up. ${se(E(y))} is covered now. Stop when ${se(E(M))} is covered.`,v.short=`REAR MIRROR  /  SIGN COVERED ${se(E(y))} → ${se(E(M))}`}}else if(x){const y=c*l.x>0?"left":"right",M=Math.abs(c)<.06;v.look=y==="left"?"mirrorL":"mirrorR";const E=(e.bayX??0)+(y==="left"?1.25:-1.25);t.dip&&(v.marks=[{mirror:y,pts:[[E,.02,p],[E,.02,p+5]],color:M?"#2bff88":qx,label:"BAY LINE"}]),t.dip?(v.cue=M?"Check both side mirrors. The bay lines look the same distance from the car. Keep the wheel straight.":`The bay line looks closer in the ${y} mirror. Steer ${y==="left"?"right":"left"} to move the back of the car away from it.`,v.short=M?"MIRRORS  /  LINES EVEN":`${y.toUpperCase()} MIRROR  /  LINE CLOSER, STEER ${y==="left"?"RIGHT":"LEFT"}`):(v.cue="Press M to dip both mirrors. Then you can see the bay lines beside the car.",v.short="PRESS M  /  DIP THE MIRRORS TO SEE THE LINES")}else v.look="mirrorRear",v.cue=`Look in the rear mirror and both side mirrors. Aim the back of the car at the middle of the bay. You are ${se(Math.abs(c))} to the ${c*l.x<0?"right":"left"} of it.`,v.short=`MIRRORS  /  AIM AT THE BAY, ${se(Math.abs(c))} ${c*l.x<0?"RIGHT":"LEFT"}`}return v}rearHidden(t){const e=this.mirrorEye;if(!e)return 0;const i={y:di(3.6),z:Ht(3.6)},s=(nt.zRear+t-e.z)/(i.z-e.z);return e.y+s*(i.y-e.y)}spiral(t,e){const i=Cu,r=this.plan,s=-(t.y||0)/i.floor,a=Math.abs(t.v)>.02,o=r.wallZ+r.gap+nt.rear;if(this.ghostPose={x:r.bayX,z:o,h:Math.PI},this.bayPlan??={kind:"line",dir:-1,x:r.bayX,h:Math.PI,gap:r.gap,z:o,look:"rear",wallZ:r.wallZ,bayX:r.bayX},this.phase==="straight")return this.px=r.bayX,this.line(t,this.bayPlan);const l={dir:1,sTarget:0};if(this.phase==="arc"){l.dir=-1,l.sTarget=-1,l.look="mirrorL";const M=xn(-Math.PI/2-t.h),E=Math.round(Math.max(0,M)*180/Math.PI);if(l.marks=[-1.25,1.25].map(A=>({mirror:"left",pts:[[r.bayX+A,.02,r.wallZ],[r.bayX+A,.02,r.wallZ+5]],color:"#2bff88",label:"BAY LINE"})),M>=Math.PI/2-.02)return l.pedalWord=a?"LET GO NOW":"STOPPED",l.action=a?"LET GO NOW":"STRAIGHTEN UP",l.cue="You are square to the bay. Let go of the wheel and reverse straight back.",l.short="SQUARE TO THE BAY  /  WHEEL STRAIGHT",a||(this.phase="straight"),l;const b=Pn*(Math.PI/2-M);return l.pedalWord=t.steer<-.9?this.pedal(t,-1,b).pedalWord:"WAIT",l.pedalDir=t.steer<-.9?-1:0,l.action=t.steer<-.9?`HOLD LEFT  /  ${l.pedalWord}`:"HOLD LEFT TO FULL LOCK",l.cue=`Full left lock, then reverse slowly. Watch the left mirror as the back swings into the bay. ${E} of 90 degrees.`,l.short=`LEFT MIRROR  /  ${E} OF 90 DEGREES`,l}const c=t.x-Math.sin(t.h)*1.2,h=t.z-Math.cos(t.h)*1.2,u=Math.atan2(h-i.cz,c-i.cx),f=Math.hypot(c-i.cx,h-i.cz),d=()=>{l.pedalDir=1,l.pedalWord=Math.abs(t.v)<1.5?"HOLD UP":"TAP UP"};if(s<.02&&t.x<-3)return l.sTarget=this.bestSteer(t,1,{x:t.x+4,z:-i.rm},-Math.PI/2,.6,e.hit),d(),l.look="ahead",l.lookLabel="WATCH THE LANE AHEAD",l.lookAt={x:t.x-Math.sin(t.h)*7,y:.3,z:-i.rm},l.cue="Drive to the ramp. It turns right and goes down two floors to B2. Keep to the middle of the lane.",l.short="TO THE RAMP  /  B2 IS TWO FLOORS DOWN",l;if(s<1.98){const M=Math.max(u,i.phi0)+4.5/i.rm,E={x:i.cx+i.rm*Math.cos(M),z:i.cz+i.rm*Math.sin(M)};l.sTarget=this.bestSteer(t,1,E,Math.PI-M,.3,e.hit),d();const b=i.ro-f-nt.width/2,A=Math.min(2,Math.floor(s)+1);return l.look="ahead",l.lookLabel="WATCH THE LANE AHEAD",l.lookAt={x:E.x,y:.1,z:E.z},l.cue=`Down the spiral. Keep a steady right turn and stay in the middle of the lane. The outer wall is on your left, about ${se(b)} from the car. Floor ${A} of 2.`,l.short=`RAMP  /  FLOOR ${A} OF 2  /  OUTER WALL ${se(b)}`,l}const m=this.perpPlan(e);this.path=m.path;const v=m.x0-t.x;Object.assign(l,{rem:v,...this.pedal(t,v>=0?1:-1,Math.abs(v))}),l.sTarget=Math.abs(v)>.3?this.bestSteer(t,v>=0?1:-1,{x:t.x+Math.sign(v)*4,z:m.zA},-Math.PI/2,.8,e.hit):0;const g=r.bayX+1.25,x=t.x-Math.sin(t.h)*-nt.zFront-g,y=m.x0+-nt.zFront-g;return l.look="left",l.cue=`Glance left with Q. The far line of the empty bay is ${Xs(x)}. ${v>=0?"Drive on":"Back up"} until it is ${Xs(y)}.`,l.short=`LOOK LEFT  /  FAR LINE ${Ws(x)} → ${Ws(y)}`,m.clear||(l.cue+=" The aisle is tight here. Keep a little further from the bays."),Math.abs(v)<.08&&!a&&Math.abs(xn(t.h+Math.PI/2))<.07&&(this.phase="arc"),l}perpPlan(t){if(this.perp)return this.perp;const e=this.plan,i=e.wallZ+e.gap+nt.rear,r=e.bayX+Pn;let s=null;for(const a of[-6.4,-6.9,-5.9,-7.4,-5.4]){const o=[];let l={x:r,z:a,h:-Math.PI/2},c=0;for(;xn(-Math.PI/2-l.h)<Math.PI/2-1e-4&&c++<80;){const f=Pn*(Math.PI/2-xn(-Math.PI/2-l.h));o.push(l={...bi(l,-1,Math.min(.15,f),-1),s:-1})}for(;l.z>i+.01&&c++<160;)o.push(l={...bi(l,0,Math.min(.15,l.z-i),-1),s:0});const h=o.every(f=>!t.hit(f,f.s)),u={x0:r,zA:a,path:o,clear:h};if(h){s=u;break}s??=u}return this.perp=s,s}parkPlan(t,e){const i=this.plan,r=Math.round(t*20);if(this.cache?.key===r)return this.cache;const s=t-i.x;let a=null;t:for(const o of[i.zBack,(i.zBack+i.z)/2,i.z])for(const l of[40,37.5,42.5,35,45,32.5,47.5,30,50,27.5]){const c=l*Math.PI/180,h=(s-2*Pn*(1-Math.cos(c)))/Math.sin(c);if(h<0)continue;const u=o-(2*Pn*Math.sin(c)+h*Math.cos(c)),f=this.sweep({x:t,z:u,h:0},c,h),d=f.every(v=>!e.hit(v,v.s)),m={key:r,th:c,ls:h,zStart:u,zEnd:o,path:f,clear:d};if(d){a=m;break t}a??=m}return this.cache=a||{key:r,th:Math.PI/4,ls:0,zStart:i.z-2*Pn*Math.sin(Math.PI/4),zEnd:i.z,path:[],clear:!1},this.cache}sweep(t,e,i){const r=[];let s=t,a=0;for(;-xn(s.h)<e-1e-4&&a++<80;)r.push(s={...bi(s,-1,Math.min(.15,Pn*(e+xn(s.h))),-1),s:-1});for(let o=0;o<i;o+=.15)r.push(s={...bi(s,0,Math.min(.15,i-o),-1),s:0});for(a=0;xn(s.h)<-1e-4&&a++<80;)r.push(s={...bi(s,1,Math.min(.15,Pn*-xn(s.h)),-1),s:1});return r}parallel(t,e){const i=this.plan,r=xn(t.h),s=Math.abs(t.v)>.02,a={dir:-1,sTarget:0};if(this.phase==="setup"){const l=t.x-i.x;if(Math.abs(r)>.06||l<1.3||l>2.6)return a.look="ahead",a.action="LINE UP BESIDE THE AUTO",a.cue="First drive alongside the auto, straight and about an arm's length from it.",a.short="AHEAD  /  LINE UP BESIDE THE AUTO",a.sTarget=this.bestSteer(t,1,{x:i.x+1.9,z:t.z-3},0,.8,e.hit),a.pedalWord="HOLD UP",a.pedalDir=1,a;const c=this.parkPlan(t.x,e);Object.assign(this,{theta:c.th,ls:c.ls,zStart:c.zStart,path:c.path});const h=c.zStart-t.z;Object.assign(a,{rem:h,...this.pedal(t,h>=0?-1:1,Math.abs(h))});const u=fl-(t.z+nt.zFront),f=fl-(c.zStart+nt.zFront);return a.look="left",a.cue=`Glance left with Q. The back of the auto is ${Xs(u)}. ${h>=0?"Reverse":"Pull forward"} straight until it is ${Xs(f)}.`,a.short=`LOOK LEFT  /  AUTO ${Ws(u)} → ${Ws(f)}`,c.clear||(a.cue+=" This gap is tight from here. Pull out a little wider."),Math.abs(h)<.08&&!s&&(this.phase="left",this.picture=null),a}if(this.phase==="left"){a.sTarget=-1,a.look="mirrorL";const l=Math.round(-r*180/Math.PI),c=Math.round(this.theta*180/Math.PI);if(-r>=this.theta-.01)return a.pedalWord=s?"LET GO NOW":"STOPPED",a.action=s?"LET GO NOW":"STOP HERE",a.cue=this.describePicture(e,`You are at ${c} degrees to the footpath.`,this.ls>.05?"Now straighten the wheel.":"Now turn fully right."),a.short=this.pictureShort||`${c} DEGREES  /  REMEMBER THE MIRRORS`,s||(this.phase=this.ls>.05?"straight":"right",this.from={x:t.x,z:t.z}),a;const h=Pn*(this.theta- -r);return a.pedalWord=t.steer<-.9?this.pedal(t,-1,h).pedalWord:"WAIT",a.pedalDir=t.steer<-.9?-1:0,a.action=t.steer<-.9?`HOLD LEFT  /  ${a.pedalWord}`:"HOLD LEFT TO FULL LOCK",a.marks=[uo(t)],a.cue=`Full left lock, then reverse slowly. Watch the left mirror as the back swings toward the footpath. ${l} of ${c} degrees.`,a.short=`LEFT MIRROR  /  ${l} OF ${c} DEGREES`,a}if(this.phase==="straight"){const l=Math.hypot(t.x-this.from.x,t.z-this.from.z),c=this.ls-l;return Object.assign(a,{rem:c,...this.pedal(t,-1,c)}),a.sTarget=0,a.look="ahead",a.cue=`Wheel straight and reverse in a line. Look through the windscreen: your front left corner has to pass the back of the auto. ${se(Math.max(0,c))} to go.`,a.short=`AHEAD  /  STRAIGHT BACK ${se(Math.max(0,c))}`,(a.there||c<.04&&!s)&&(a.action="STOP. TURN FULLY RIGHT",this.phase="right"),a}if(this.phase==="right")return a.sTarget=1,a.look="ahead",r>=-.015?(a.pedalWord=s?"LET GO NOW":"STOPPED",a.action=s?"LET GO NOW":"STRAIGHTEN UP",a.cue="You are parallel to the footpath. Let go of the wheel so it straightens.",a.short="PARALLEL  /  WHEEL STRAIGHT",s||(this.phase="center"),a):(a.pedalWord=t.steer>.9?this.pedal(t,-1,Pn*-r).pedalWord:"WAIT",a.pedalDir=t.steer>.9?-1:0,a.action=t.steer>.9?`HOLD RIGHT  /  ${a.pedalWord}`:"HOLD RIGHT TO FULL LOCK",a.cue="Full right lock and keep reversing. The front swings in toward the footpath. Stop when the car is straight.",a.short="AHEAD  /  UNTIL THE CAR IS STRAIGHT",a);const o=i.z-t.z;return Object.assign(a,{rem:o,dir:o>=0?-1:1,...this.pedal(t,o>=0?-1:1,Math.abs(o))}),a.sTarget=0,a.look="mirrorL",a.marks=[uo(t)],a.cue=t.dip?`Check the left mirror: the strip of road by the rear tyre is ${se(t.x-cr-fi)} wide. Even up the gaps in front and behind.`:"Press M to dip the left mirror and check the gap to the footpath. Even up the gaps in front and behind.",a.short=t.dip?`LEFT MIRROR  /  ROAD STRIP ${se(t.x-cr-fi)}`:"PRESS M  /  DIP THE LEFT MIRROR",a}describePicture(t,e,i){if(!this.picture&&t.behindIn){const r=t.behindIn();this.picture=r?`Remember this picture: the car behind sits in the ${r.where} of your ${r.mirror} mirror.`:"Remember this picture in your mirrors.",this.pictureShort=r?`REMEMBER  /  CAR BEHIND, ${r.where.replace(" part","").toUpperCase()} OF ${r.mirror.toUpperCase()} MIRROR`:null}return`${e} ${this.picture||""} ${i}`}pedal(t,e,i){const r=Math.abs(t.v),s=r*r/7+.02,a=e>0?"UP":"DOWN",o=e>0?"DOWN":"UP";return i<-.06?{pedalWord:`TAP ${o}`,pedalDir:-e,over:!0}:i<=Math.max(s,.04)?{pedalWord:r>.02?"LET GO NOW":"STOPPED",pedalDir:0,there:r<=.02}:{pedalWord:i<1?`TAP ${a}`:`HOLD ${a}`,pedalDir:e}}draw(t,e,i){const r=this.plan,s=x=>this.flip?-x:x,a=x=>this.flip?-x:x,o=this.ghostPose;this.ghost.position.set(s(o?o.x:r.kind==="parallel"?r.x:this.px),.012,o?o.z:r.z),this.ghost.rotation.y=o?a(o.h):r.h;const l=[];if(r.kind==="spiral")this.mark.visible=!1,this.phase==="setup"&&(t.y||0)<-5&&l.push(...(this.path||[]).map(x=>({x:s(x.x),z:x.z,h:a(x.h)})));else if(r.kind==="parallel")this.mark.visible=this.phase==="setup"&&this.zStart!=null,this.mark.visible&&this.mark.position.set(t.x,.013,this.zStart),this.phase==="setup"&&l.push(...(this.path||[]).map(x=>({x:s(x.x),z:x.z,h:a(x.h)})));else{this.mark.visible=!1;const x=Math.max(0,Math.floor(e.rem/.45));for(let y=0;y<=x&&y<100;y++)l.push({x:s(this.px)-e.travel.x*y*.45,z:r.z-e.travel.z*y*.45,h:r.h})}const c=new xe,h=new pi;let u=0;for(let x=0;x<l.length&&u<120;x+=r.kind==="line"?1:2){const y=l[x];h.setFromAxisAngle(new L(0,1,0),y.h),c.compose(new L(y.x,.011,y.z),h,new L(1,1,1)),this.dashes.setMatrixAt(u++,c)}this.dashes.count=u,this.dashes.instanceMatrix.needsUpdate=!0;const f=Math.abs(t.v)>.02?Math.sign(t.v):e.pedalDir||e.dir||1,d=f>0?nt.zFront+.12:nt.zRear-.08,m=[-.8,.8].map(x=>[x,d]);let v={x:t.x,z:t.z,h:t.h};const g=[v];let p=1/0;for(let x=1;x<=20;x++)v=bi(v,t.steer,.18,f),g.push(v),p===1/0&&i.hit(v,t.steer)&&(p=x);this.ribbons.forEach(({m:x,N:y},M)=>{const E=x.geometry.attributes.position,b=x.geometry.attributes.color;for(let A=0;A<=y;A++){const _=g[A],[T,R]=m[M],P=Math.cos(_.h),U=Math.sin(_.h),k=_.x+T*P+R*U,N=_.z-T*U+R*P,B=P*.03,X=-U*.03;E.setXYZ(A*2,k-B,.014,N-X),E.setXYZ(A*2+1,k+B,.014,N+X);const Y=A>=p?2:A>=p-3?1:0,rt=Y===2?[1,.2,.2]:Y===1?[1,.8,.1]:[.2,1,.55],q=1-A/(y+4);for(const Q of[A*2,A*2+1])b.setXYZ(Q,rt[0]*q,rt[1]*q,rt[2]*q)}E.needsUpdate=!0,b.needsUpdate=!0}),e.willHit=p<=20?p*.18:null}}const Ma=3.6,Kx=.9,Se=n=>n<=.004?"touching":n<.995?`${Math.round(n*100)} cm`:`${n.toFixed(2)} m`,Jx=n=>`${n.toFixed(1)} m`,Qx=n=>Math.round((Kx-fr.hiddenOnWall(n))*100),jx=Jx(fr.hiddenGround),tv=Yn.filter(([,n])=>n>nt.zRear-.32),Be={front:{id:"front",from:"body",to:["wall"],y:.42,view:[1,.35],pitch:.3,part:"front bumper"},tyreF:{id:"tyreF",from:"tyreFL",to:["curb"],y:.06,view:[-.8,-1],pitch:.38,dist:2.3,part:"front tyre"},tyreR:{id:"tyreR",from:"tyreRL",to:["curb"],y:.06,view:[-.8,-1],pitch:.38,dist:2.3,part:"rear tyre"},ahead:{id:"ahead",from:"body",to:["ahead","auto"],y:.45,view:[1,.2],pitch:.5,dist:3,part:"ahead"},behind:{id:"behind",from:"body",to:["behind"],y:.45,view:[1,-.2],pitch:.5,dist:3,part:"behind"},rear:{id:"rear",from:"body",to:["wall"],y:.42,view:[1,-.45],pitch:.45,dist:3,part:"rear bumper"},lineW:{id:"lineW",from:"body",to:["lineW"],y:.02,view:[.2,-1],pitch:.7,dist:3.6,part:"bay line"},lineE:{id:"lineE",from:"body",to:["lineE"],y:.02,view:[-.2,-1],pitch:.7,dist:3.6,part:"bay line"},pillar:{id:"pillar",from:"bodyMirrors",to:["pillar"],y:1,view:[0,-1],pitch:.55,dist:3.4,part:"pillar"},suv:{id:"suv",from:"bodyMirrors",to:["carW"],y:1,view:[0,-1],pitch:.55,dist:3.4,part:"SUV"}},Sh=(n,t=0)=>{let e=((n-t)%Math.PI+Math.PI)%Math.PI;return e>Math.PI/2&&(e=Math.PI-e),e*180/Math.PI},Ei=(n,t,e)=>n<=t?3:n<=e?2:1,yh=(n,t=0)=>Pi(n.car,Yn).every(([e])=>e>t-1.25&&e<t+1.25),Iu={seat:{place:"seat",tools:{},measures:[Be.front],judge(n){const t=n.front.d;return{won:!0,stars:Ei(t,.5,1),title:`${Se(t)} from the wall`,html:`<p>From the seat it looked closer than that. The bonnet hides about ${jx} of floor in front of you, so the foot of the wall was gone long before you stopped.</p><p>Next you aim for 20 cm.</p>`}}},wall:{place:"wall",tools:{getIn:!0},measures:[Be.front],judge(n){const t=n.front.d;return t>.2?{won:!1,title:`${Se(t)} from the wall`,html:`<p>That is ${Se(t-.2)} more than the goal. At 20 cm only about ${Qx(.2)} cm of the yellow and black band shows above the bonnet. Creep in until it does.</p>`}:{won:!0,stars:Ei(t,.05,.1),title:`${Se(t)} from the wall`,html:"<p>You read the band on the wall instead of the floor you cannot see. Every basement wall and pillar has one. Learn where it sits on your bonnet when you are close.</p><p>Next you take this out to a market street.</p>"}}},footpath:{place:"footpath",tools:{getIn:!0,dip:!0},measures:[Be.tyreF,Be.tyreR],judge(n,t){const e=n.tyreF.d,i=n.tyreR.d,r=Sh(t.car.h),s=Math.max(e,i),a=`${Se(e)} and ${Se(i)} from the footpath`;return r>3?{won:!1,title:a,html:`<p>You stopped at ${r.toFixed(0)} degrees to the footpath. Straighten the wheel and roll a car length before you stop.</p>`}:s>.25?{won:!1,title:a,html:`<p>Your front tyre is ${Se(e)} out and your rear tyre is ${Se(i)} out. Both need to be within 25 cm, or the traffic behind you cannot pass. Dip the mirrors and watch the strip of road beside the car get thin.</p>`}:{won:!0,stars:Ei(s,.08,.15),title:a,html:"<p>The dipped mirror showed the gap you cannot see from the seat. The strip of road between car and footpath got thin as you closed in.</p><p>Next you go back to the basement and reverse into a bay.</p>"}}},bay:{place:"bay",tools:{getIn:!0,dip:!0},measures:[Be.rear,Be.lineW,Be.lineE],judge(n,t){const e=n.rear.d,i=(n.lineW.d-n.lineE.d)/2,r=`${Se(e)} from the wall`;return yh(t)?e>.3?{won:!1,title:r,html:`<p>That is ${Se(e-.3)} more than the goal. Watch the band on the wall in the rear mirror and creep back until it sinks below the back window.</p>`}:{won:!0,stars:Math.min(Ei(e,.1,.2),Math.abs(i)<=.12?3:2),title:r,html:`<p>The side mirrors kept you between the lines and the rear mirror read the wall. You were ${Se(Math.abs(i))} off the middle of the bay.</p><p>Next you squeeze in by a busy footpath.</p>`}:{won:!1,title:r,html:"<p>Your car is over a bay line. Watch both lines in the side mirrors and keep the gaps the same as you reverse.</p>"}}},market:{place:"market",tools:{getIn:!0,dip:!0,sensors:!0},measures:[Be.tyreF,Be.tyreR,Be.ahead,Be.behind],judge(n,t){const e=n.tyreF.d,i=n.tyreR.d,r=Sh(t.car.h),s=Math.max(e,i),a=t.car.z+nt.zFront/2,o=`${Se(e)} and ${Se(i)} from the footpath`;return a<-6||a>-.1?{won:!1,title:"Not in the gap",html:"<p>Park in the gap between the auto and the car. Start with your rear bumper level with the back of the auto.</p>"}:r>4?{won:!1,title:o,html:`<p>You stopped at ${r.toFixed(0)} degrees to the footpath. Once the rear is in, turn the wheel fully away from the footpath to swing the front in.</p>`}:s>.3?{won:!1,title:o,html:`<p>Your front tyre is ${Se(e)} out and your rear tyre is ${Se(i)} out. Both need to be within 30 cm. Turn in sooner and dip the mirrors.</p>`}:{won:!0,stars:Math.min(Ei(s,.12,.2),r<=2?3:2),title:o,html:`<p>Mirrors, sensors and the footpath trick in one go. There was ${Se(n.ahead.d)} to the auto and ${Se(n.behind.d)} to the car behind.</p><p>Last comes the tightest spot in the basement.</p>`}}},spiral:{place:"spiral",tools:{getIn:!0,dip:!0,sensors:!0},measures:[Be.rear,Be.lineW,Be.lineE],judge(n,t){const e=n.rear.d,i=(n.lineW.d-n.lineE.d)/2,r=`${Se(e)} from the wall`;return(t.car.y||0)>-5?{won:!1,title:"Not on B2 yet",html:"<p>The empty bay is two floors down. Follow the spiral ramp to B2.</p>"}:yh(t,Xe.x*nn.s)?e>.3?{won:!1,title:r,html:`<p>That is ${Se(e-.3)} more than the goal. Watch the band on the wall in the rear mirror and creep back.</p>`}:{won:!0,stars:Math.min(Ei(e,.1,.2),Math.abs(i)<=.12?3:2),title:r,html:`<p>Two floors down the spiral and straight into the bay. You were ${Se(Math.abs(i))} off the middle of it.</p>`}:{won:!1,title:r,html:"<p>You are not inside the empty bay between the white car and the SUV. Drive past it, then reverse in on full lock.</p>"}}},tight:{place:"tight",tools:{getIn:!0,dip:!0,sensors:!0},measures:[Be.rear,Be.pillar,Be.suv],judge(n,t){const e=n.rear.d,i=`${Se(e)} from the wall`;return e>.25?{won:!1,title:i,html:`<p>That is ${Se(e-.25)} more than the goal. Watch the band in the rear mirror and listen to the sensors.</p>`}:n.pillar.d<.5&&n.suv.d<.5?{won:!1,title:i,html:`<p>You are in, but with ${Se(n.pillar.d)} by the pillar and ${Se(n.suv.d)} by the SUV nobody can open a door. Keep at least 50 cm on one side.</p>`}:{won:!0,stars:Math.min(Ei(e,.1,.15),Math.max(n.pillar.d,n.suv.d)>=.6?3:2),title:i,html:"<p>That is the whole idea. You cannot see how close you are, so you read things you can see. The band on the wall, the mirrors and the beeps.</p>"}}}},D={ok:!1};function ev(n){const t=document.createElement("canvas");try{D.renderer=new xx({canvas:t,antialias:!0,powerPreference:"high-performance"})}catch{return}const e=D.renderer;e.shadowMap.enabled=!0,e.shadowMap.type=Th,e.shadowMap.autoUpdate=!1,e.toneMapping=ml,e.toneMappingExposure=.6,D.scene=new Fa,D.camera=new je(60,1,.03,260),D.hudScene=new Fa,D.hudCam=new _a(0,1,0,-1,-10,10),D.sunDir=new L().setFromSphericalCoords(1,pc.degToRad(50),pc.degToRad(125)),D.sky=new is,D.sky.scale.setScalar(200);const i=D.sky.material.uniforms;i.turbidity.value=2.2,i.rayleigh.value=1.4,i.mieCoefficient.value=.004,i.mieDirectionalG.value=.82,i.sunPosition.value.copy(D.sunDir),D.scene.add(D.sky);const r=new Fa,s=new is;s.scale.setScalar(200),Object.assign(s.material.uniforms.sunPosition.value,D.sunDir);for(const l of["turbidity","rayleigh","mieCoefficient","mieDirectionalG"])s.material.uniforms[l].value=i[l].value;r.add(s);const a=new al(e);D.scene.environment=a.fromScene(r,0,1,400).texture,D.scene.environmentIntensity=.16,D.hemi=new pp(13624319,6969924,.45),D.sun=new xp(16773336,6.5),D.sun.castShadow=!0,D.sun.shadow.mapSize.set(2048,2048);const o=D.sun.shadow.camera;o.left=o.bottom=-13,o.right=o.top=13,o.near=1,o.far=70,D.sun.shadow.bias=-4e-4,D.sun.shadow.normalBias=.03,D.sun.shadow.radius=3,D.scene.add(D.hemi,D.sun,D.sun.target),D.measureGroup=new Re,D.scene.add(D.measureGroup),D.ok=!0,D.q=0;try{const l=e.getContext(),c=l.getExtension("WEBGL_debug_renderer_info"),h=c?l.getParameter(c.UNMASKED_RENDERER_WEBGL):"";/swiftshader|llvmpipe|software/i.test(h)&&Hu(ss.length-1)}catch{}Du()}function Du(){if(!D.ok)return;const n=Ux();D.P=n,D.tex=Ox(n),D.scene.fog=new Qr(n.sky,70,200),D.scenery&&D.scene.remove(D.scenery),D.scenery=kx(n,D.tex),D.scene.add(D.scenery),D.car&&D.scene.remove(D.car.group),D.car=wu(n,n.paint,{withCabin:!0}),D.scene.add(D.car.group),D.mirrors={};const t=nn.s>0?{left:1.9,right:1.45,rear:1}:{left:1.45,right:1.9,rear:1};for(const[e,i]of Object.entries(D.car.mirrors))D.mirrors[e]=new Nx(i.glass,i.w,i.h,e==="rear"?640:360,t[e]);for(const e of[...D.hudScene.children])D.hudScene.remove(e);D.insets={};for(const[e,i]of Object.entries(D.mirrors)){const r=new $t(oa(1,1),new fn({map:i.target.texture,color:15000804}));r.visible=!1,D.hudScene.add(r),D.insets[e]={mesh:r,rect:null,size:""}}D.coach=new Zx(D.scene),D.placeId=null}function Nu(n,t){if(D.ok){D.place&&(D.scene.remove(D.place.group),D.place.group.traverse(e=>{e.isMesh&&!e.geometry.userData.shared&&e.geometry.dispose()})),D.place=Yx(t,D.P,D.tex),D.scene.add(D.place.group),D.place.group.updateMatrixWorld(!0);for(const e of D.place.obstacles)e.mesh&&e.kind==="tall"&&(e.box=new mi().setFromObject(e.mesh));D.place.ceilings=[],D.place.group.traverse(e=>e.userData.ceiling&&D.place.ceilings.push(e));for(const e of D.pool||[])D.scene.remove(e);D.pool=(D.place.lamps?Array.from({length:6}):[]).map(()=>{const e=new du("#eef6ff",9,11,1.6);return D.scene.add(e),e}),D.placeId=t,Uu()}}function nv(n){if(!D.pool?.length)return;const t=n.car,e=D.place.lamps.map(i=>[i,(i[0]-t.x)**2+((i[1]-t.y-1.5)*2)**2+(i[2]-t.z)**2]).sort((i,r)=>i[1]-r[1]);D.pool.forEach((i,r)=>i.position.set(...e[r][0]))}const iv=n=>Math.atan2(Math.sin(n),Math.cos(n));function ua(n,t,e){const i=D.place?.spiral;if(!i)return{y:0,phiU:null};const r=Math.atan2(e-i.cz,t-i.cx),s=n==null?r:n+iv(r-n),a=Math.hypot(t-i.cx,e-i.cz),o=i.dir*(s-i.phi0)/(Math.PI*2);return{y:a>i.ri-.3&&a<i.ro+.3?ha(s,i):o<i.floors/2?0:-i.floor*i.floors,phiU:s}}function Fl(n){const t=ua(n.phiU,n.x,n.z);n.y=t.y,n.phiU=t.phiU;const e=n.x-Math.sin(n.h)*nt.wheelbase,i=n.z-Math.cos(n.h)*nt.wheelbase,r=ua(n.phiU,e,i);n.pitch=Math.atan2(r.y-n.y,nt.wheelbase),D.carY=n.y}function Uu(){const n=D.place?.env==="basement",t=ss[D.q].shadow>0;D.sky.visible=!n,D.scenery&&(D.scenery.visible=!n),D.sun.visible=!n,D.sun.castShadow=!n&&t,D.place?.spot&&(D.place.spot.castShadow=t),D.hemi.color.set(n?"#e4ebf2":"#cfe3ff"),D.hemi.groundColor.set(n?"#55524c":"#6a5a44"),D.hemi.intensity=n?1.1:.45,D.scene.environmentIntensity=n?.05:.16,D.scene.background=n?new Kt("#202124"):null,D.scene.fog=n?new Qr("#2a2b2e",14,40):new Qr(D.P.sky,70,200),D.renderer.toneMappingExposure=n?.85:.6}function Fu(n){const t={x:n.x,z:n.z,h:n.h,y:0,pitch:0,phiU:null,v:0,steer:0,keySteer:!1,gear:"P",dip:!1,sensors:!1,spin:0,odo:0};return D.ok&&Fl(t),t}function rv(n){const{pose:t,jitter:e}=n;for(let i=0;i<40;i++){const r=()=>Math.random()*2-1,s={x:t.x+r()*e.x,z:t.z+r()*e.z,h:t.h+r()*e.h};s.y=ua(null,s.x,s.z).y;const a=r()*.25;if(!Yr(s,a)&&!Yr({...s,x:s.x+.15},a)&&!Yr({...s,x:s.x-.15},a))return{...s,steer:a}}return{...t,steer:0}}function Ol(n){const t=-n*nt.maxSteer;if(Math.abs(t)<1e-4)return{left:0,right:0,d:t};const e=nt.wheelbase/Math.tan(Math.abs(t)),i=Math.atan(nt.wheelbase/(e-nt.track/2)),r=Math.atan(nt.wheelbase/(e+nt.track/2)),s=Math.sign(t);return t>0?{left:s*i,right:s*r,d:t}:{left:s*r,right:s*i,d:t}}function Ou(n,t){const e=Ol(t),i={body:Pi(n,Yn),mirrors:Tu.map(r=>Pi(n,r)),tyres:{}};if(D.car)for(const r of D.car.wheels){const s=`tyre${r.front?"F":"R"}${r.side<0?"L":"R"}`;i.tyres[s]=Pi(n,Ix(r,r.front?r.side<0?e.left:e.right:0))}return i}function Yr(n,t){const e=D.place?.obstacles||[],i=n.y??D.carY??0,r=n.x-Math.sin(n.h)*1.24,s=n.z-Math.cos(n.h)*1.24;let a=null;for(const o of e){if(o.kind==="mark")continue;const l=o.y0??0,c=o.y1??l+o.h;if(!(o.kind==="tall"?c<i+.15||l>i+1.55:c<i||l>i+.35)){if(!o.bc){let h=0,u=0;for(const[f,d]of o.poly)h+=f/o.poly.length,u+=d/o.poly.length;o.bc={x:h,z:u,r:Math.max(...o.poly.map(([f,d])=>Math.hypot(f-h,d-u)))}}if(!(Math.hypot(o.bc.x-r,o.bc.z-s)>o.bc.r+2.15)){if(a??=Ou(n,t),o.kind==="tall"){if(ta(a.body,o.poly)||o.h>.9&&a.mirrors.some(h=>ta(h,o.poly)))return o}else if(Object.values(a.tyres).some(h=>ta(h,o.poly)))return o}}}return null}const sv=12/Ma;function av(n,t,e){const i=n.car,r=n.input,s=r.fwd||e.values.fwdBtn,a=r.back||e.values.backBtn,o=(r.right||e.values.rightBtn?1:0)-(r.left||e.values.leftBtn?1:0);o?(i.steer=ze(i.steer+o*t*1.1,-1,1),i.keySteer=!0):i.keySteer&&(i.steer=Math.sign(i.steer)*Math.max(0,Math.abs(i.steer)-t*1.6),i.steer||(i.keySteer=!1));const l=s&&!a?1:a&&!s?-1:0;if(r.hand?i.v=Math.sign(i.v)*Math.max(0,Math.abs(i.v)-8*t):l?i.v*l<-.01?i.v+=l*5*t:i.v=l>0?Math.min(sv,Math.max(0,i.v)+1*t):Math.max(-1.6666666666666665,Math.min(0,i.v)-.8*t):i.v=Math.sign(i.v)*Math.max(0,Math.abs(i.v)-3.5*t),Math.abs(i.v)<.003&&!l&&(i.v=0),i.v>.01?i.gear="D":i.v<-.01&&(i.gear="R"),l&&(n.started=!0),Math.abs(i.v)<1e-4)return;const c=Math.max(1,Math.ceil(Math.abs(i.v)*t/.01)),h=t/c,u=Ol(i.steer);for(let f=0;f<c;f++){const d=i.h+i.v/nt.wheelbase*Math.tan(u.d)*h,m=(i.h+d)/2,v={x:i.x-Math.sin(m)*i.v*h,z:i.z-Math.cos(m)*i.v*h,h:d};v.y=ua(i.phiU,v.x,v.z).y;const g=Yr(v,i.steer);if(g){ov(n,e,g);return}i.x=v.x,i.z=v.z,i.h=v.h,i.odo+=i.v*h,Fl(i)}}function ov(n,t,e){const i=n.car;n.touch={name:e.name,label:e.label,kmh:Math.abs(i.v)*Ma,at:t.t},i.v=0,Li.thud(),n.autoOut=t.t+.7}function lv(n){const t=Ou(n.car,n.car.steer),e=D.place?.obstacles||[],i={};for(const r of n.level.measures){const s=nn.s>0?r.from:r.from.replace(/L$/,"R"),a=r.from==="body"?[t.body]:r.from==="bodyMirrors"?[t.body,...t.mirrors]:[t.tyres[s]];let o=null;for(const l of e)if(r.to.includes(l.name))for(const c of a){const h=Ru(c,l.poly);(!o||h.d<o.d)&&(o={...h,o:l})}o&&(i[r.id]={...r,...o,y:r.y+(n.car.y||0)})}return i}function Bl(n){const t=D.measureGroup;for(const r of[...t.children])t.remove(r),r.geometry.dispose();const e=new fn({color:D.P.accent}),i=new fn({color:D.P.clay});for(const r of Object.values(n.measures)){const s=new L(r.a[0],r.y,r.a[1]),a=new L(r.b[0],r.y,r.b[1]),o=s.distanceTo(a);if(o<.004){const c=new $t(new hs(.035,12,8),i);c.position.copy(s),t.add(c);continue}const l=new $t(new Oe(.006,.006,o,6),e);l.position.copy(s).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new L(0,1,0),a.clone().sub(s).normalize()),t.add(l);for(const c of[s,a]){const h=new $t(new Ft(.012,.09,.012),e);h.position.copy(c),t.add(h)}}}function Bu(n){return n.mode==="drive"&&Math.abs(n.car.v)<.05&&n.started}function zl(n,t){if(n.mode!=="drive")return;if(!Bu(n)&&!n.touch){Ev(n,t,n.started?"Stop first. Hold Brake until the car is still.":"Drive first. Hold Gas to roll.");return}const e=n.car;e.v=0,e.gear="P",n.mode="out",n.attempts++,n.outAt=t.t,n.measures=lv(n),n.gapI=0,D.ok&&Bl(n),ku(n,0),n.orbit.top=!1,n.resultAt=t.t+1.5,n.result=null,t.refresh()}function zu(n,t){n.mode!=="out"||!n.level.tools.getIn||n.touch||(n.mode="drive",n.measures={},n.resultAt=null,n.started=!0,D.ok&&Bl(n),t.hideResult(),n.look.yaw=n.look.baseYaw,n.look.pitch=n.look.basePitch,t.refresh())}function cv(n,t){const e=n.level;let i;if(n.touch?i={won:!1,title:"You touched it",html:`<p>${n.touch.name==="curb"?"Your tyre hit the curb":`You touched the ${n.touch.label}`} at ${n.touch.kmh.toFixed(1)} km/h. Close means close without touching. Let the car creep and brake a little earlier.</p>`}:i=e.judge(n.measures,n),i.won&&n.attempts>1&&(i.stars=Math.min(i.stars,2)),i.won){const r=`parking-best:${t.stage.id}`,s=Object.values(n.measures)[0];let a=null;try{a=JSON.parse(localStorage.getItem(r)||"null"),s&&(a==null||s.d<a)&&localStorage.setItem(r,JSON.stringify(s.d))}catch{}const o=n.attempts>1?` ${n.attempts} tries, so the third star needs one try.`:"";s&&a!=null?i.html+=`<p class="stats">Your best ${Se(Math.min(a,s.d))}.${o}</p>`:o&&(i.html+=`<p class="stats">${o.trim()}</p>`)}ya(t)&&(i.html+='<p class="stats">Parked with the coach. Turn it off to try alone.</p>'),n.result=i,kl(n,t,600)}function kl(n,t,e=0){const i=n.result;i&&t.result({won:i.won,title:i.title,html:i.html,stars:i.won?i.stars:0,look:!0,delay:e})}function bh(n){const t=D.car?.mirrors[n];if(!t)return 0;const e=t.group.position.clone().sub(nt.eye);return Math.atan2(-e.x,-e.z)}function ku(n,t){const e=Object.values(n.measures),i=e[t%Math.max(1,e.length)],r=n.orbit,s=n.car;if(i){r.target.set((i.a[0]+i.b[0])/2,i.y,(i.a[1]+i.b[1])/2);const[a,o]=i.view,l=a*nn.s,c=l*Math.cos(s.h)+o*Math.sin(s.h),h=-l*Math.sin(s.h)+o*Math.cos(s.h);r.yaw=Math.atan2(c,h),r.pitch=i.d>1.2?Math.max(i.pitch,.45):i.pitch,r.dist=Math.max(i.dist??2.6,i.d*1.1+2.4)}else r.target.set(s.x,.5,s.z),r.yaw=s.h+1,r.pitch=.4,r.dist=4}const Sa=new L,hv=new pi,Eh=new jn(0,0,0,"YXZ");function uv(n,t){const e=D.camera,i=D.car.group,r=t.w/t.h,s=(n.mode==="out"?70:88)*(Math.PI/180);let a=2*Math.atan(Math.tan(s/2)/r);a=ze(a,48*Math.PI/180,100*Math.PI/180),e.fov=a*180/Math.PI,e.aspect=r,e.updateProjectionMatrix(),i.updateMatrixWorld(!0);const o=i.localToWorld(Sa.copy(nt.eye));Eh.set(n.look.pitch,n.look.yaw,0);const l=i.quaternion.clone().multiply(hv.setFromEuler(Eh));if(n.mode==="drive"){e.position.copy(o),e.quaternion.copy(l);return}const c=n.orbit,h=c.top?Math.max(c.dist,7.5):c.dist,u=v=>new L(Math.sin(c.yaw)*Math.cos(v),Math.sin(v),Math.cos(c.yaw)*Math.cos(v)).multiplyScalar(h).add(c.target);let f=c.top?1.45:c.pitch;for(;f<1.4&&dv(u(f),c.target);)f+=.06;const d=u(f);d.y=Math.max((n.car.y||0)+.25,d.y);const m=mo.inOut((t.t-n.outAt)/1.3);if(m<1){const v=i.localToWorld(new L(1.4*nn.s,1.6,Ht(2.1))),g=m<.4?o.clone().lerp(v,m/.4):v.clone().lerp(d,(m-.4)/.6);e.position.copy(g);const p=o.clone().add(new L(0,0,-3).applyQuaternion(l));e.lookAt(p.lerp(c.target,mo.inOut(m*1.4)))}else e.position.copy(d),e.lookAt(c.target)}function fv(n,t){const e=n.car,i=D.car;i.group.position.set(e.x,e.y||0,e.z),i.group.rotation.order="YXZ",i.group.rotation.set(e.pitch||0,e.h,0);const r=Ol(e.steer);for(const o of i.wheels)o.front&&(o.steer.rotation.y=o.side<0?r.left:r.right),o.spin.rotation.x-=e.v*t/nt.tyreR;i.steeringWheel&&(i.steeringWheel.userData.spin.rotation.z=-e.steer*nt.wheelTurns*Math.PI*2),i.needle&&(i.needle.rotation.z=2.3-Math.abs(e.v*Ma)/160*4.6);const s=nn.s>0?i.mirrors.left:i.mirrors.right,a=nn.s>0?i.mirrors.right:i.mirrors.left;e.dip?ar(i,s,.015,.42):ar(i,s,.13,.05),e.dip?ar(i,a,.015,.36):ar(i,a,.1,.05),ar(i,i.mirrors.rear)}const fo=new Al;function dv(n,t){const e=n.distanceTo(t);fo.origin.copy(n),fo.direction.copy(t).sub(n).normalize();for(const i of D.place?.obstacles||[]){if(!i.box||i.fade)continue;if(i.box.containsPoint(n))return!0;const r=fo.intersectBox(i.box,Sa);if(r&&r.distanceTo(n)<e-.05)return!0}return!1}function pv(n){const t=D.camera.position,e=new Al(t.clone(),n.orbit.target.clone().sub(t).normalize()),i=t.distanceTo(n.orbit.target);for(const r of D.place.obstacles){if(!r.box||!r.fade)continue;let s=1;if(n.mode==="out"){const a=e.intersectBox(r.box,Sa);(r.box.containsPoint(t)||a&&a.distanceTo(t)<i)&&(s=.16)}for(const a of[].concat(r.mesh.material))a.opacity+=(s-a.opacity)*.2,Math.abs(a.opacity-s)<.01&&(a.opacity=s),a.depthWrite=a.opacity>.99}}function mv(n,t){const e=t.safe,i=10,r=ze(e.w*.2,96,230),s=r/1.7,a=ze(e.w*.3,140,330),o=a/(.236/.058),l={left:{x:e.x+i,y:e.y+i,w:r,h:s},right:{x:e.x+e.w-i-r,y:e.y+i,w:r,h:s}},c=rs(D.car.group.localToWorld(D.car.mirrors.rear.group.position.clone()),t);if(!c||c.y<e.y+8||c.y>e.y+e.h-8||c.x<e.x||c.x>e.x+e.w){let h=e.x+(e.w-a)/2,u=e.y+i;h<l.left.x+r+12&&(u=e.y+i+s+30),l.rear={x:h,y:u,w:a,h:o}}return l}function rs(n,t){const e=n.clone().project(D.camera);return e.z>1||e.z<-1?null:{x:(e.x+1)/2*t.w,y:(1-e.y)/2*t.h,off:Math.abs(e.x)>1||Math.abs(e.y)>1}}const ss=[{pr:1.6,shadow:2048,mirrorsEvery:1},{pr:1.1,shadow:1024,mirrorsEvery:2},{pr:.75,shadow:512,mirrorsEvery:3},{pr:.5,shadow:0,mirrorsEvery:4,every:2}];function Hu(n){D.q=n;const t=ss[n].shadow;D.sky&&Uu(),t&&(D.sun.shadow.mapSize.set(t,t),D.sun.shadow.map?.dispose(),D.sun.shadow.map=null)}function gv(){const n=performance.now(),t=n-(D.lastFrame??n);return D.lastFrame=n,D.slow=t>40?(D.slow||0)+Math.min(t,400)/1e3:Math.max(0,(D.slow||0)-t/2e3),D.slow>1&&D.q<ss.length-1&&!D.lockQ&&(Hu(D.q+1),D.slow=0),ss[D.q]}function _v(n,t,e){const i=D.renderer,r=gv();if(D.frame=(D.frame||0)+1,r.every>1&&D.frame%r.every&&D.still?.width===Math.round(e.w*e.dpr)){n.drawImage(D.still,0,0,e.w,e.h);return}const s=Math.min(e.dpr,r.pr);i.getPixelRatio()!==s&&i.setPixelRatio(s);const a=i.getSize(Sa);(a.x!==e.w||a.y!==e.h)&&i.setSize(e.w,e.h,!1),uv(t,e),pv(t),nv(t);for(const h of D.place?.ceilings||[])h.visible=t.mode!=="out";const o=t.car;D.sun.position.set(o.x,0,o.z).addScaledVector(D.sunDir,30),D.sun.target.position.set(o.x,0,o.z),D.sun.target.updateMatrixWorld(),i.shadowMap.needsUpdate=!0;const l=D.camera.position;D.drawn=(D.drawn||0)+1;const c=t.mode==="drive"&&e.values.insets;Object.entries(D.mirrors).forEach(([h,u],f)=>{t.mode==="out"&&h==="rear"||r.mirrorsEvery>1&&D.drawn%r.mirrorsEvery!==f%r.mirrorsEvery||u.render(i,D.scene,l)}),D.measureGroup.visible=t.mode==="out",i.render(D.scene,D.camera),t.layout=c?mv(t,e):null;for(const[h,u]of Object.entries(D.insets)){const f=t.layout?.[h];if(u.mesh.visible=!!f,!f)continue;const d=`${Math.round(f.w)}x${Math.round(f.h)}`;u.size!==d&&(u.mesh.geometry.dispose(),u.mesh.geometry=oa(f.w,f.h),u.size=d),u.mesh.position.set(f.x+f.w/2,-(f.y+f.h/2),0)}t.layout&&(D.hudCam.right=e.w,D.hudCam.bottom=-e.h,D.hudCam.updateProjectionMatrix(),i.autoClear=!1,i.clearDepth(),i.render(D.hudScene,D.hudCam),i.autoClear=!0),n.drawImage(i.domElement,0,0,e.w,e.h),r.every>1&&(D.still??=document.createElement("canvas"),(D.still.width!==n.canvas.width||D.still.height!==n.canvas.height)&&(D.still.width=n.canvas.width,D.still.height=n.canvas.height),D.still.getContext("2d").drawImage(i.domElement,0,0,D.still.width,D.still.height))}function as(n,t,e,i,r,s){n.beginPath(),n.moveTo(t+s,e),n.arcTo(t+i,e,t+i,e+r,s),n.arcTo(t+i,e+r,t,e+r,s),n.arcTo(t,e+r,t,e,s),n.arcTo(t,e,t+i,e,s),n.closePath()}function Hl(n,t,e){if(t.x<e.x+4||t.y<e.y+4||t.x+t.w>e.x+e.w-4||t.y+t.h>e.y+e.h-4)return!1;for(const i of n)if(t.x<i.x+i.w+4&&i.x<t.x+t.w+4&&t.y<i.y+i.h+4&&i.y<t.y+t.h+4)return!1;return n.push(t),!0}const dr="#ff2d87",xv="rgba(10, 12, 20, 0.78)",Fn=(n,t=700,e=!0)=>`${e?"italic ":""}${t} ${n}px 'Barlow Condensed', 'Arial Narrow', sans-serif`;function Gl(n,t,e){n.save(),n.font=e;const i=n.measureText(t).width;return n.restore(),i}function Vl(n,t,e,i,r,s=1){n.save(),n.globalAlpha=s,n.fillStyle=xv,n.beginPath(),n.moveTo(t+6,e),n.lineTo(t+i,e),n.lineTo(t+i-6,e+r),n.lineTo(t,e+r),n.closePath(),n.fill(),n.fillStyle=dr,n.beginPath(),n.moveTo(t+6,e),n.lineTo(t+10,e),n.lineTo(t+4,e+r),n.lineTo(t,e+r),n.closePath(),n.fill(),n.restore()}function Gu(n,t,e,i,r,s){const a=Fn(12,600,!1),o=t.toUpperCase(),l=Gl(n,o,a)+22,c={x:e-l/2,y:i,w:l,h:20};Hl(r,c,s)&&(Vl(n,c.x,c.y,c.w,c.h,.9),n.save(),n.font=a,n.fillStyle="#fff",n.textBaseline="middle",n.fillText(o,c.x+14,c.y+10.5),n.restore())}function vv(n,t,e){const i=[],r=e.values.labels;if(t.layout){const s={left:"left mirror",right:"right mirror",rear:"rear mirror"};for(const[a,o]of Object.entries(t.layout))i.push({x:o.x-6,y:o.y-6,w:o.w+12,h:o.h+12}),n.save(),as(n,o.x-4,o.y-4,o.w+8,o.h+8,Math.min(o.w,o.h)*.3+4),n.lineWidth=6,n.strokeStyle="#0d0e12",n.stroke(),as(n,o.x-1,o.y-1,o.w+2,o.h+2,Math.min(o.w,o.h)*.3+1),n.lineWidth=1.2,n.strokeStyle="rgba(255,255,255,0.55)",n.stroke(),n.restore(),r&&Gu(n,s[a],o.x+o.w/2,o.y+o.h+12,i,e.safe)}if(t.mode==="drive"&&(Mv(n,t,e,i),Rv(n,t,e,i),t.touch&&e.t-t.touch.at<.8)){n.save();const s=1-(e.t-t.touch.at)/.8,a=n.createRadialGradient(e.w/2,e.h/2,Math.min(e.w,e.h)*.3,e.w/2,e.h/2,Math.max(e.w,e.h)*.7);a.addColorStop(0,"rgba(255,40,40,0)"),a.addColorStop(1,`rgba(255,40,40,${.55*s})`),n.fillStyle=a,n.fillRect(0,0,e.w,e.h),n.restore()}t.mode==="out"&&e.t-t.outAt>1.1&&Sv(n,t,e,i)}function Mv(n,t,e,i){const r=e.safe,s=e.w<560,o=(Math.abs(t.car.v)*Ma).toFixed(1),l=Fn(s?34:48,800),c=s?128:172,h=s?52:68,u={x:r.x+r.w-c-12,y:r.y+r.h-h-10,w:c,h};if(!Hl(i,u,r))return;Vl(n,u.x,u.y,u.w,u.h,.92),n.save(),n.fillStyle="#fff",n.font=l,n.textBaseline="alphabetic";const f=u.y+h*.78;n.fillText(o,u.x+16,f);const d=Gl(n,o,l);n.font=Fn(s?12:14,600),n.fillStyle="rgba(255,255,255,0.7)",n.fillText("KM/H",u.x+20+d,f);const m=s?24:30,v=u.x+c-m-12,g=u.y+(h-m)/2;n.fillStyle=t.car.gear==="R"?dr:"rgba(255,255,255,0.14)",n.fillRect(v,g,m,m),n.fillStyle="#fff",n.font=Fn(s?18:22,800),n.textAlign="center",n.textBaseline="middle",n.fillText(t.car.gear,v+m/2,g+m/2+1),n.restore()}function Sv(n,t,e,i){const r=Object.values(t.measures),s=e.w<560?24:30;r.forEach((a,o)=>{const l=new L((a.a[0]+a.b[0])/2,a.y,(a.a[1]+a.b[1])/2),c=rs(l,e);if(!c||c.off)return;const h=ze((e.t-t.outAt-1.1-o*.3)*4,0,1);if(h<=0)return;const u=Se(a.d).toUpperCase(),f=Fn(s,800),d=Gl(n,u,f)+30,m=s+12,v=[[c.x-d/2,c.y-m-14],[c.x-d/2,c.y+14],[c.x+16,c.y-m/2],[c.x-d-16,c.y-m/2]];for(const[g,p]of v){if(!Hl(i,{x:g,y:p,w:d,h:m},e.safe))continue;const y=mo.back(h);n.save(),n.translate(g+d/2,p+m/2),n.scale(y,y),n.translate(-(g+d/2),-(p+m/2)),Vl(n,g,p,d,m,h),n.globalAlpha=h,n.font=f,n.fillStyle=a.d<=.004?"#ff5a5a":"#fff",n.textBaseline="middle",n.fillText(u,g+17,p+m/2+1),n.restore(),e.values.labels&&h>=1&&Gu(n,a.part,g+d/2,p+m+6,i,e.safe);break}})}const Li={ac:null,wake(){try{this.ac??=new AudioContext,this.ac.state==="suspended"&&this.ac.resume()}catch{}},tone(n,t,e=.05,i="sine"){const r=this.ac;if(!r||r.state!=="running")return;const s=r.currentTime,a=r.createOscillator(),o=r.createGain();a.type=i,a.frequency.value=n,o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(e,s+.008),o.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(o).connect(r.destination),a.start(s),a.stop(s+t+.02)},thud(){this.tone(70,.25,.2,"triangle")}};function yv(n,t){const e=n.car;if(!e.sensors||e.gear!=="R"||n.mode!=="drive"||!D.place){n.sensor=null;return}const i=Pi(e,tv);let r=1/0;for(const a of D.place.obstacles)a.kind==="tall"&&!a.part&&(r=Math.min(r,Ru(i,a.poly).d));if(n.sensor=r,r>1.2)return;const s=r<=.3?.11:ef(.12,.7,(r-.3)/.9);t.t-(n.beepAt||0)>=s&&(n.beepAt=t.t,Li.tone(2300,r<=.3?.13:.07))}const po={arrowup:"fwd",w:"fwd",arrowdown:"back",s:"back",arrowleft:"left",a:"left",arrowright:"right",d:"right"," ":"hand",q:"glanceL",e:"glanceR"};function bv(n,t){const e=i=>i.target instanceof HTMLElement&&i.target.matches("input[type=text], textarea, select");window.addEventListener("keydown",i=>{if(e(i)||i.ctrlKey||i.metaKey||i.altKey)return;const r=i.key.toLowerCase();if(Li.wake(),n.mode==="out"&&r==="enter"){!(i.target instanceof HTMLButtonElement)&&!t.hudOpen()&&n.result&&(kl(n,t),i.preventDefault());return}if(n.mode==="out"){const a=n.orbit,o={arrowleft:()=>a.yaw-=.08,a:()=>a.yaw-=.08,arrowright:()=>a.yaw+=.08,d:()=>a.yaw+=.08,arrowup:()=>a.pitch=ze(a.pitch+.05,.05,1.5),arrowdown:()=>a.pitch=ze(a.pitch-.05,.05,1.5),w:()=>a.dist=ze(a.dist*.92,1.2,14),s:()=>a.dist=ze(a.dist*1.08,1.2,14),f:()=>zu(n,t),g:()=>Vu(n),t:()=>a.top=!a.top}[r];o&&(o(),i.preventDefault());return}if(po[r]){if(r===" "&&i.target instanceof HTMLButtonElement)return;n.input[po[r]]=!0,i.preventDefault();return}const s=n.car;if(!i.repeat){if(r==="f"||r==="enter"){if(r==="enter"&&(i.target instanceof HTMLButtonElement||t.hudOpen()))return;zl(n,t)}else if(r==="m"&&n.level.tools.dip)s.dip=!s.dip;else if(r==="n"&&n.level.tools.sensors)s.sensors=!s.sensors;else if(r==="c")Xu(n,t);else return;i.preventDefault()}},!0),window.addEventListener("keyup",i=>{const r=po[i.key.toLowerCase()];r&&(n.input[r]=!1,i.preventDefault())},!0),window.addEventListener("blur",()=>{for(const i of Object.keys(n.input))n.input[i]=!1}),t.canvas.addEventListener("wheel",i=>{n.mode==="out"&&(i.preventDefault(),n.orbit.dist=ze(n.orbit.dist*Math.exp(i.deltaY*.001),1.2,14))},{passive:!1})}function Vu(n){const t=Object.keys(n.measures).length;t&&(n.gapI=(n.gapI+1)%t,n.orbit.top=!1,ku(n,n.gapI))}function Ev(n,t,e){t.status(e),n.flashAt=t.t}function wh(n){const t=n.values.rightSide?-1:1;return t===nn.s?!1:(nn.s=t,nt.eye.x=.37*t,!0)}const Wu="parking-coach";function ya(n){if(n.values.coach==null)try{n.values.coach=localStorage.getItem(Wu)!=="0"}catch{n.values.coach=!0}return n.values.coach}function Xu(n,t){t.values.coach=!ya(t);try{localStorage.setItem(Wu,t.values.coach?"1":"0")}catch{}t.values.coach||(n.advice=null)}function wv(){const n=D.place?.obstacles.find(i=>i.name==="behind"&&i.mesh);if(!n)return null;const t=n.mesh.getWorldPosition(new L),e=new L(t.x,.7,t.z+nt.zFront);for(const i of["left","right"]){const r=e.clone().project(D.mirrors[i].camera);if(Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&r.z<1){const s=-r.x;return{mirror:i,where:s<-.33?"left part":s>.33?"right part":"middle"}}}return null}function Tv(n,t){const e=D.ok&&ya(t)&&n.mode==="drive"&&!n.touch;if(D.coach&&(D.coach.group.visible=e&&t.values.guides!==!1,D.coach.group.position.y=n.car.y||0),!e){n.advice=null;return}const i=D.mirrors.rear.camera;D.coach.mirrorEye=D.car.group.worldToLocal(new L().setFromMatrixPosition(i.matrixWorld)),n.advice=D.coach.update(n,{hit:Yr,behindIn:wv})}function Av(n,t,e){const i=t.split(" "),r=[];let s="";for(const a of i){const o=s?`${s} ${a}`:a;n.measureText(o).width>e&&s?(r.push(s),s=a):s=o}return s&&r.push(s),r}function Rv(n,t,e,i){let r=t.advice;if(!r){if(t.started||t.mode!=="drive")return;r={short:"HOLD ↑ FORWARD  /  ↓ BACK  /  ← → STEER  /  F STEP OUT  /  C COACH",sTarget:t.car.steer,pedalDir:0,pedalWord:""}}const s=e.safe,a=e.w<560,o=t.car,l=Math.abs(o.v)>.02,c=r.willHit!=null&&l&&r.willHit<.8,h=r.pedalWord||"",u=B=>c||h==="LET GO NOW"?"letgo":r.pedalDir!==B?"off":h.startsWith("TAP")?"tap":h.startsWith("HOLD")?"hold":"off";let f=(r.there?"STOP HERE  /  PRESS F TO STEP OUT":r.short||"").toUpperCase();c&&(f="STOP  /  YOU WILL TOUCH");const d=Fn(a?14:16,700),m=a?48:56,v=a?120:136,g=Math.min(a?s.w-24:620,s.w-(a?24:208));n.save(),n.font=d;let p=Av(n,f,g-v-20);p.length>2&&(p=p.slice(0,2));const x=Math.max(...p.map(B=>n.measureText(B).width),0);n.restore();const y=Math.min(g,v+x+24),M=s.x+12,E=s.y+s.h-m-10-(a?60:0);i.push({x:M,y:E,w:y,h:m}),n.save(),n.fillStyle="rgba(10, 12, 20, 0.82)",n.fillRect(M,E,y,m),n.fillStyle=c||h==="LET GO NOW"?"#ff3b3b":"#2bff88",n.fillRect(M,E,3,m);const b=a?15:18,A=M+12+b,_=E+m/2,T=B=>-Math.PI/2+B*Math.PI*.75;n.lineWidth=3,n.strokeStyle="rgba(255,255,255,0.3)",n.beginPath(),n.arc(A,_,b,0,Math.PI*2),n.stroke(),n.strokeStyle="#2bff88",n.lineWidth=5,n.beginPath(),n.arc(A,_,b,T(r.sTarget)-.2,T(r.sTarget)+.2),n.stroke(),n.strokeStyle=dr,n.lineWidth=3,n.beginPath(),n.moveTo(A,_),n.lineTo(A+Math.cos(T(o.steer))*(b-2),_+Math.sin(T(o.steer))*(b-2)),n.stroke();const R=r.sTarget-o.steer;if(Math.abs(R)>.15){const B=Math.sign(R),X=A+B*(b+7);n.fillStyle="#2bff88",n.globalAlpha=.6+.4*Math.sin(e.t*8),n.beginPath(),n.moveTo(X,_-6),n.lineTo(X+B*6,_),n.lineTo(X,_+6),n.closePath(),n.fill(),n.globalAlpha=1}const P=a?22:26,U=a?30:36,k=A+b+18;[[-1,k],[1,k+P+8]].forEach(([B,X])=>Cv(n,X,_-U/2,P,U,u(B),B,e.t)),n.font=d,n.fillStyle=c?"#ff6b6b":"#ffffff",n.textBaseline="middle";const N=a?17:20;p.forEach((B,X)=>n.fillText(B,M+v,_+(X-(p.length-1)/2)*N)),n.restore(),t.advice&&(Iv(n,t,e,r),Lv(n,t,e,r))}function Cv(n,t,e,i,r,s,a,o){n.save();const l="#2bff88",c="#ff3b3b";let h="rgba(255,255,255,0.12)",u="rgba(255,255,255,0.35)";s==="hold"&&(h=u=l),s==="tap"&&(u=l,h=Math.sin(o*12)>0?l:"rgba(43,255,136,0.25)"),s==="letgo"&&(u=c,h="rgba(255,59,59,0.3)"),as(n,t,e,i,r,4),n.fillStyle=h,n.fill(),n.lineWidth=2,n.strokeStyle=u,n.stroke(),n.strokeStyle=s==="hold"||s==="tap"&&h===l?"rgba(0,0,0,0.35)":"rgba(255,255,255,0.18)",n.lineWidth=1.5;for(let m=1;m<=3;m++){const v=e+r*m/4;n.beginPath(),n.moveTo(t+5,v),n.lineTo(t+i-5,v),n.stroke()}n.fillStyle=s==="off"?"rgba(255,255,255,0.6)":s==="letgo"?"#fff":"#0b0c10";const f=t+i/2,d=e+r/2;n.beginPath(),n.moveTo(f,d-a*7),n.lineTo(f+6,d+a*4),n.lineTo(f-6,d+a*4),n.closePath(),n.fill(),n.restore()}function Pv(n,t,e,i){const r=D.mirrors[e],s=i.clone().project(r.camera);if(s.z<-1||s.z>1)return null;const a=(s.x+1)/2,o=(s.y+1)/2,l=n.layout?.[e];if(l)return{x:l.x+(1-a)*l.w,y:l.y+(1-o)*l.h,inside:a>=0&&a<=1&&o>=0&&o<=1};const c=D.car.mirrors[e],h=new L((.5-a)*c.w,(o-.5)*c.h,0);c.glass.updateWorldMatrix(!0,!1);const u=rs(c.glass.localToWorld(h),t);return u&&{x:u.x,y:u.y,inside:a>=0&&a<=1&&o>=0&&o<=1}}function Lv(n,t,e,i){for(const r of i.marks||[]){const s=[];for(let d=0;d<=16;d++){const m=d/16,[v,g,p]=r.pts[0],[x,y,M]=r.pts[1],E=Pv(t,e,r.mirror,new L(v+(x-v)*m,g+(y-g)*m+(t.car.y||0),p+(M-p)*m));s.push(E&&E.inside?E:null)}const o=s.filter(Boolean);if(o.length<2)continue;n.save();const l=t.layout?.[r.mirror];l&&(as(n,l.x,l.y,l.w,l.h,Math.min(l.w,l.h)*.3),n.clip()),n.lineCap="round";for(const[d,m]of[[7,"rgba(0,0,0,0.55)"],[3.5,r.color]]){n.lineWidth=d,n.strokeStyle=m,n.beginPath();let v=!1;for(const g of s){if(!g){v=!1;continue}v?n.lineTo(g.x,g.y):n.moveTo(g.x,g.y),v=!0}n.stroke()}n.restore();const c=o[Math.floor(o.length/2)];n.save(),n.font=Fn(11,700,!1);const h=n.measureText(r.label).width+10;let u=c.x-h/2,f=c.y-22;l&&(u=ze(u,l.x+4,l.x+l.w-h-4),f=ze(f,l.y+4,l.y+l.h-18)),n.fillStyle="rgba(10,12,20,0.85)",n.fillRect(u,f,h,16),n.fillStyle=r.color,n.textBaseline="middle",n.fillText(r.label,u+5,f+8.5),n.restore()}}function Iv(n,t,e,i){const r=.7+.3*Math.sin(e.t*3),s={mirrorL:"left",mirrorR:"right",mirrorRear:"rear"}[i.look],a=i.lookLabel||(s?`WATCH THE ${s.toUpperCase()} MIRROR`:"WATCH HERE");let o=null;n.save(),n.strokeStyle=dr,n.globalAlpha=r,n.lineWidth=3;const l=s&&t.layout?.[s];if(l)as(n,l.x-9,l.y-9,l.w+18,l.h+18,Math.min(l.w,l.h)*.3+9),n.stroke(),o={x:l.x+l.w/2,y:l.y+l.h+36};else if(s){const d=D.car.mirrors[s].group,m=rs(D.car.group.localToWorld(d.position.clone()),e);m&&!m.off&&(n.beginPath(),n.arc(m.x,m.y,34,0,Math.PI*2),n.stroke(),o={x:m.x,y:m.y+42})}else if(i.look==="left"||i.look==="right"){n.globalAlpha=1,n.fillStyle=dr,n.font=Fn(16,800),n.textBaseline="middle";const d=e.safe.y+e.safe.h*.45;i.look==="left"?n.fillText("◀ LOOK LEFT (HOLD Q)",e.safe.x+14,d):(n.textAlign="right",n.fillText("LOOK RIGHT (HOLD E) ▶",e.safe.x+e.safe.w-14,d))}else if(i.lookAt){const d=rs(new L(i.lookAt.x,i.lookAt.y+(t.car.y||0),i.lookAt.z),e);d&&!d.off&&(n.beginPath(),n.arc(d.x,d.y,26,0,Math.PI*2),n.stroke(),o={x:d.x,y:d.y+34})}if(n.restore(),!o)return;n.save(),n.font=Fn(12,700,!1);const c=n.measureText(a).width+16,h=e.safe,u=ze(o.x-c/2,h.x+4,h.x+h.w-c-4),f=ze(o.y,h.y+4,h.y+h.h-24);n.fillStyle=dr,n.fillRect(u,f,c,20),n.fillStyle="#fff",n.textBaseline="middle",n.fillText(a,u+8,f+10.5),n.restore()}function Dv(n,t,e){n.level=Iu[e],D.coach?.setLevel(e),D.ok&&D.placeId!==n.level.place&&Nu(n,n.level.place),Wl(n,t)}function Wl(n,t){const e=D.place?rv(D.place.start):{x:0,z:0,h:0,steer:0};n.car=Fu(e),n.car.steer=e.steer,n.mode="drive",n.attempts=0,n.touch=null,n.autoOut=null,n.measures={},n.result=null,n.resultAt=null,n.started=!1,n.advice=null,D.coach?.reset(),Yu(n.look),D.ok&&Bl(n),t.hideResult(),t.refresh?.()}function Nv(n,t){const e=n.level.tools,i=(r,s,a)=>({type:"button",className:"pill",label:`${r} ${s}`,aria:r,...a});return n.mode==="out"?[{type:"row",className:"pills",items:[...e.getIn&&!n.touch?[i("Get in","F",{onClick:(r,s)=>zu(r,s)})]:[],i("Next gap","G",{disabled:r=>Object.keys(r.measures).length<2,onClick:r=>Vu(r)}),i("From above","T",{pressed:r=>r.orbit.top,onClick:r=>r.orbit.top=!r.orbit.top}),i("Score","↵",{primary:!0,disabled:r=>!r.result,onClick:(r,s)=>kl(r,s)})]}]:[{type:"row",className:"touch-only steer-pad",items:[{type:"hold",key:"leftBtn",className:"pad",label:"◀",aria:"Steer left"},{type:"hold",key:"rightBtn",className:"pad",label:"▶",aria:"Steer right"}]},{type:"row",className:"pills",items:[i("Step out","F",{disabled:r=>!Bu(r),onClick:(r,s)=>zl(r,s)}),i("Coach","C",{pressed:(r,s)=>ya(s),onClick:(r,s)=>Xu(r,s)}),...e.dip?[i("Dip mirrors","M",{pressed:r=>r.car.dip,onClick:r=>r.car.dip=!r.car.dip})]:[],...e.sensors?[i("Sensors","N",{pressed:r=>r.car.sensors,onClick:r=>(r.car.sensors=!r.car.sensors,Li.wake())})]:[]]},{type:"row",className:"touch-only pedals",items:[{type:"hold",key:"backBtn",className:"pedal",label:"▼",aria:"Back",onChange:(r,s)=>s&&Li.wake()},{type:"hold",key:"fwdBtn",className:"pedal",label:"▲",aria:"Forward",onChange:(r,s)=>s&&Li.wake()}]}]}function wi(n,t,e){return{id:n,title:t,...e,enter:(i,r)=>Dv(i,r,n),retry:(i,r)=>Wl(i,r),look:()=>{},controls:Nv}}function Yu(n){n.yaw=n.baseYaw=.08*nn.s,n.pitch=n.basePitch=-.1}const Uv=[wi("seat","Take the seat",{alt:"The driver seat of a maroon Grand i10 in a mall basement, facing an empty bay and the wall.",goal:"Roll into the bay, stop near the wall and step out"}),wi("wall","Nose to the wall",{alt:"A basement bay between a white car and an SUV, with a yellow and black band painted on the wall.",goal:"Stop within 20 cm of the wall without touching it"}),wi("footpath","Close to the footpath",{alt:"A crowded market street with shops, people and a tall footpath beside you. An auto rickshaw is parked ahead.",goal:"Stop parallel, tyres within 25 cm of the footpath"}),wi("bay","Back into the bay",{alt:"An empty basement bay behind you, between an SUV and a car.",goal:"Reverse into the empty bay and stop within 30 cm of the wall"}),wi("market","Between an auto and a car",{alt:"A gap of 5.9 metres by the market footpath, between an auto rickshaw ahead and a car behind.",goal:"Park in the gap, tyres within 30 cm of the footpath"}),wi("spiral","Down the spiral",{alt:"A mall ground floor with a spiral ramp that goes down two floors to B2, where an empty bay waits between a white car and an SUV.",goal:"Go down the spiral to B2 and reverse into the empty bay"}),wi("tight","The tight spot",{alt:"A basement bay on level B2 with a pillar eating into one side and an SUV over the line on the other.",goal:"Back in and stop within 25 cm of the wall"})];tf({title:"Parking a Grand i10",layout:"stage",dust:!1,grain:!1,hintCards:!1,levelMenu:!0,levelNote(n){try{const t=JSON.parse(localStorage.getItem(`parking-best:${n.id}`)||"null");return t==null?"":`best ${Se(t)}`}catch{return""}},back:{href:"/projects/parking-a-grand-i10/",label:"Project"},settings:[{key:"labels",label:"Labels",value:!0},{key:"insets",label:"Mirrors on screen",value:!0},{key:"guides",label:"Ground guides",value:!0},{key:"rightSide",label:"Drive on the right",value:!1}],stages:Uv,init(n){const t={input:{gas:!1,brake:!1,left:!1,right:!1,glanceL:!1,glanceR:!1},look:{yaw:.08,pitch:-.1,baseYaw:.08,basePitch:-.1},orbit:{yaw:0,pitch:.3,dist:2.6,target:new L,top:!1},car:Fu({x:0,z:0,h:0}),level:Iu.seat,mode:"drive",measures:{},attempts:0};return wh(n),ev(),n.canvas.style.touchAction="none",bv(t,n),D.ok||n.status("This sim needs WebGL, which this browser has turned off."),t},update(n,t,e){wh(e)&&D.ok&&(Du(),Nu(n,n.level.place),D.coach.setLevel(e.stage.id),Wl(n,e)),n.mode==="drive"&&!n.touch&&av(n,t,e),D.ok&&D.place&&Fl(n.car),n.autoOut!=null&&e.t>=n.autoOut&&(n.autoOut=null,zl(n,e)),n.resultAt!=null&&e.t>=n.resultAt&&(n.resultAt=null,cv(n,e)),n.flashAt!=null&&e.t-n.flashAt>2.6&&(n.flashAt=null,e.status(""));const i=n.look;if(n.mode==="drive"&&!i.dragging){const r=n.input.glanceL?bh("left"):n.input.glanceR?bh("right"):null;r!=null?(i.yaw+=(r-i.yaw)*(1-Math.exp(-t*10)),i.glancing=!0):i.glancing&&(i.yaw+=(i.baseYaw-i.yaw)*(1-Math.exp(-t*10)),Math.abs(i.yaw-i.baseYaw)<.005&&(i.glancing=!1))}if(yv(n,e),Tv(n,e),!n.flashAt){const r=n.sensor;e.status(r==null||r>1.2?"":r<=.3?"Sensors: steady tone":r<=.6?"Sensors: fast beeps":"Sensors: slow beeps")}},draw(n,t,e){if(!D.ok){n.fillStyle="#fff",n.font=Fn(28),n.fillText("This sim needs WebGL to draw the car.",24,e.safe.y+60);return}fv(t,e.dt),_v(n,t,e),vv(n,t,e)},pointer:{down(n,t,e){Li.wake();const i=n.look,r=e.t;n.mode==="drive"&&r-(i.lastTap||-1)<.3&&Yu(i),i.lastTap=r,i.dragging={x:t.x,y:t.y}},move(n,t){const e=n.look;if(!e.dragging)return;const i=t.x-e.dragging.x,r=t.y-e.dragging.y;e.dragging={x:t.x,y:t.y},n.mode==="drive"?(e.yaw=e.baseYaw=ze(e.yaw+i*.005,-2.6,2.6),e.pitch=e.basePitch=ze(e.pitch+r*.004,-.9,.6)):(n.orbit.yaw-=i*.008,n.orbit.pitch=ze(n.orbit.pitch+r*.006,.05,1.5))},up(n){n.look.dragging=null},leave(n){n.look.dragging=null}}});
