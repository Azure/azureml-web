(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(102)),c={title:"Workspace",description:"Overview of Azure ML Workspaces.",keywords:["workspace"]},s={unversionedId:"cheatsheet/workspace",id:"cheatsheet/workspace",isDocsHomePage:!1,title:"Workspace",description:"Overview of Azure ML Workspaces.",source:"@site/docs/cheatsheet/workspace.md",slug:"/cheatsheet/workspace",permalink:"/azureml-web/docs/cheatsheet/workspace",editUrl:"https://github.com/Azure/azureml-web/tree/main/website/docs/cheatsheet/workspace.md",version:"current",sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/azureml-web/docs/cheatsheet/installation"},next:{title:"Compute Target",permalink:"/azureml-web/docs/cheatsheet/compute-targets"}},i=[{value:"Get workspace",id:"get-workspace",children:[{value:"Helpful methods",id:"helpful-methods",children:[]}]},{value:"Get Workspace Assets",id:"get-workspace-assets",children:[{value:"Compute Targets",id:"compute-targets",children:[]},{value:"Datastores",id:"datastores",children:[]},{value:"Keyvault",id:"keyvault",children:[]},{value:"Environments",id:"environments",children:[]},{value:"MLFlow",id:"mlflow",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Workspaces are a foundational object used throughout Azure ML and are used in the\nconstructors of many other classes. Throughout this documentation we frequently\nomit the workspace object instantiation and simply refer to ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"installation"}),"Installation")," for instructions on creating a new workspace."),Object(o.b)("h2",{id:"get-workspace"},"Get workspace"),Object(o.b)("p",null,"Instantiate ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace")," object used to connect to your AML assets."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),'from azureml.core import Workspace\nws = Workspace(\n    subscription_id="<subscription_id>",\n    resource_group="<resource_group>",\n    workspace_name="<workspace_name>",\n)\n')),Object(o.b)("p",null,"For convenience store your workspace metadata in a ",Object(o.b)("inlineCode",{parentName:"p"},"config.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title=".azureml/config.json"',title:'".azureml/config.json"'}),'{\n    "subscription_id": <subscription-id>,\n    "resource_group": <resource-group>,\n    "workspace_name": <workspace-name>\n}\n')),Object(o.b)("h3",{id:"helpful-methods"},"Helpful methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ws.write_config(path, file_name)")," : Write the ",Object(o.b)("inlineCode",{parentName:"li"},"config.json")," on your behalf. The ",Object(o.b)("inlineCode",{parentName:"li"},"path")," defaults to '.azureml/' in the current working directory and ",Object(o.b)("inlineCode",{parentName:"li"},"file_name")," defaults to 'config.json'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Workspace.from_config(path, _file_name)"),": Read the workspace configuration from config. The parameter defaults to starting the search in the current directory.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is recommended to store these in a directory ",Object(o.b)("inlineCode",{parentName:"p"},".azureml/")," as this path is searched ",Object(o.b)("em",{parentName:"p"},"by default"),"\nin the ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace.from_config")," method."))),Object(o.b)("h2",{id:"get-workspace-assets"},"Get Workspace Assets"),Object(o.b)("p",null,"The workspace provides a handle to your Azure ML assets:"),Object(o.b)("h3",{id:"compute-targets"},"Compute Targets"),Object(o.b)("p",null,"Get all compute targets attached to the workspace."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.compute_targets: Dict[str, ComputeTarget]\n")),Object(o.b)("h3",{id:"datastores"},"Datastores"),Object(o.b)("p",null,"Get all datastores registered to the workspace."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.datastores: Dict[str, Datastore]\n")),Object(o.b)("p",null,"Get the workspace's default datastore."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.get_default_datastore(): Datastore\n")),Object(o.b)("h3",{id:"keyvault"},"Keyvault"),Object(o.b)("p",null,"Get workspace's default Keyvault."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.get_default_keyvault(): Keyvault\n")),Object(o.b)("h3",{id:"environments"},"Environments"),Object(o.b)("p",null,"Get environments registered to the workspace."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.environments: Dict[str, Environment]\n")),Object(o.b)("h3",{id:"mlflow"},"MLFlow"),Object(o.b)("p",null,"Get MLFlow tracking uri."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"ws.get_mlflow_tracking_uri(): str\n")))}p.isMDXComponent=!0}}]);