(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{15:function(t,e,i){"use strict";i.r(e);var s=["SUN","MON","TUE","WED","THU","FRI","SAT"],n={data:function(){return{time:"",date:"",timer:null}},mounted:function(){this.updateTime(),this.timer=setInterval(this.updateTime,1e3)},methods:{updateTime:function(){var t=new Date;this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+s[t.getDay()]},zeroPadding:function(t,e){for(var i="",s=0;s<e;s++)i+="0";return(i+t).slice(-e)}}},a=(i(57),i(0)),d=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clock-component"},[e("div",{staticClass:"clock"},[e("p",{staticClass:"date"},[this._v(this._s(this.date))]),e("p",{staticClass:"time"},[this._v(this._s(this.time))])])])},[],!1,null,"01f50522",null);e.default=d.exports},54:function(t,e,i){},57:function(t,e,i){"use strict";var s=i(54);i.n(s).a}}]);