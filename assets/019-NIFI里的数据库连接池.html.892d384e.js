const e={key:"v-e2636e92",path:"/ApacheNIFI%E6%95%99%E7%A8%8B/019-NIFI%E9%87%8C%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0.html",title:"NIFI\u91CC\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60",lang:"zh-CN",frontmatter:{title:"NIFI\u91CC\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60",date:"2020-09-08T00:00:00.000Z",category:["ApacheNIFI\u6559\u7A0B"],tag:["NIFI"],summary:`\u901A\u5E38\u6211\u4EEC\u5728NIFI\u91CC\u6700\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u5C31\u662F\u8BFB\u5199\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u4E00\u4E9B\u7EC4\u4EF6\u6BD4\u5982GenerateTableFetch\u3001ExecuteSQL\u3001PutSQL\u3001ExecuteSQLRecord\u3001PutDatabaseRecord\u7B49\u7B49\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u5C5E\u6027\u914D\u7F6E\u5927\u6982\u53EBDatabase Connection Pooling Service\u7684\uFF0C\u5BF9\u5E94\u7684\u63A5\u53E3\u662FDBCPService\uFF0C\u5176\u5B9E\u73B0\u7C7B\u6709\uFF1AHiveConnectionPool DBCPConnectionPool DBCPConnectionPoolLookup\u3002\u6211\u4EEC\u7528\u7684\u6700\u591A\u7684\u5C31\u662FDBCPConnectionPool\u3002\u5177\u4F53\u600E\u4E48\u914D\u7F6E\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0\u4E86\uFF0C\u770B\u5BF9\u5E94\u7684Controller Service\u6587\u6863\u5C31\u53EF\u4EE5\u4E86\u3002
`,head:[["meta",{property:"og:url",content:"https://zhangchengk.github.io/ApacheNIFI%E6%95%99%E7%A8%8B/019-NIFI%E9%87%8C%E7%9A%84%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0.html"}],["meta",{property:"og:site_name",content:"Panda\u8BDA\u7684\u535A\u5BA2"}],["meta",{property:"og:title",content:"NIFI\u91CC\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://zhangchengk.github.io/"}],["meta",{property:"og:updated_time",content:"2022-05-31T14:27:10.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"NIFI\u91CC\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60"}],["meta",{property:"article:tag",content:"NIFI"}],["meta",{property:"article:published_time",content:"2020-09-08T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-31T14:27:10.000Z"}]]},excerpt:`<p>\u901A\u5E38\u6211\u4EEC\u5728NIFI\u91CC\u6700\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u5C31\u662F\u8BFB\u5199\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u4E00\u4E9B\u7EC4\u4EF6\u6BD4\u5982GenerateTableFetch\u3001ExecuteSQL\u3001PutSQL\u3001ExecuteSQLRecord\u3001PutDatabaseRecord\u7B49\u7B49\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u5C5E\u6027\u914D\u7F6E\u5927\u6982\u53EB<code v-pre>Database Connection Pooling Service</code>\u7684\uFF0C\u5BF9\u5E94\u7684\u63A5\u53E3\u662F<code v-pre>DBCPService</code>\uFF0C\u5176\u5B9E\u73B0\u7C7B\u6709\uFF1AHiveConnectionPool DBCPConnectionPool DBCPConnectionPoolLookup\u3002\u6211\u4EEC\u7528\u7684\u6700\u591A\u7684\u5C31\u662FDBCPConnectionPool\u3002\u5177\u4F53\u600E\u4E48\u914D\u7F6E\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0\u4E86\uFF0C\u770B\u5BF9\u5E94\u7684Controller Service\u6587\u6863\u5C31\u53EF\u4EE5\u4E86\u3002</p>
`,headers:[{level:2,title:"Database Connection URL",slug:"database-connection-url",children:[]},{level:2,title:"Database Driver Class Name",slug:"database-driver-class-name",children:[]},{level:2,title:"Database Driver Location(s)",slug:"database-driver-location-s",children:[]},{level:2,title:"\u5E95\u5C42\u8FDE\u63A5\u6C60\u7684\u9009\u62E9",slug:"\u5E95\u5C42\u8FDE\u63A5\u6C60\u7684\u9009\u62E9",children:[]},{level:2,title:"\u51E0\u4E2A\u7814\u7A76",slug:"\u51E0\u4E2A\u7814\u7A76",children:[]},{level:2,title:"DBCPConnectionPoolLookup",slug:"dbcpconnectionpoollookup",children:[]}],git:{createdTime:1653141484e3,updatedTime:165400723e4,contributors:[{name:"zhangcheng",email:"zhangchengk@foxmail.com",commits:3}]},readingTime:{minutes:6.22,words:1867},filePathRelative:"ApacheNIFI\u6559\u7A0B/019-NIFI\u91CC\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60.md"};export{e as data};
