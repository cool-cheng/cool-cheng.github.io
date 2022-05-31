import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as r,c as n,a as i,b as a,F as h,d as s,e}from"./app.11494968.js";const d={},c=s('<p>NiFi\u4F7F\u7528\u9884\u5199\u65E5\u5FD7\u6765\u8DDF\u8E2AFlowFiles\uFF08\u5373\u6570\u636E\u8BB0\u5F55\uFF09\u5728\u7CFB\u7EDF\u4E2D\u6D41\u52A8\u65F6\u7684\u53D8\u5316\u3002\u8BE5\u9884\u5199\u65E5\u5FD7\u8DDF\u8E2AFlowFiles\u672C\u8EAB\u7684\u66F4\u6539\uFF0C\u4F8B\u5982FlowFile\u7684\u5C5E\u6027\uFF08\u7EC4\u6210\u5143\u6570\u636E\u7684\u952E/\u503C\u5BF9\uFF09\u53CA\u5176\u72B6\u6001\uFF0C\u518D\u6BD4\u5982FlowFile\u6240\u5C5E\u7684Connection /Queue\u3002</p><p>\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C06\u63CF\u8FF0\u7528\u4E8E\u5B9E\u73B0\u6B64\u529F\u80FD\u7684\u5B9E\u73B0\u7EC6\u8282\u548C\u7B97\u6CD5\u3002</p><h2 id="\u4EC0\u4E48\u662F\u9884\u5199\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u9884\u5199\u65E5\u5FD7" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u9884\u5199\u65E5\u5FD7</h2><p>\u9884\u5199\u65E5\u5FD7\uFF08WAL,Write Ahead Log\uFF09\u662F\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u7528\u4E8E\u5B9E\u73B0\u4E8B\u52A1\u6027\u548C\u6301\u4E45\u6027\u7684\u4E00\u7CFB\u5217\u6280\u672F\uFF0CARIES\u662FWAL\u7CFB\u5217\u6280\u672F\u5E38\u7528\u7684\u7B97\u6CD5\u3002\u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF0C\u505A\u4E00\u4E2A\u64CD\u4F5C\u4E4B\u524D\u5148\u8BB2\u8FD9\u4EF6\u4E8B\u60C5\u8BB0\u5F55\u4E0B\u6765\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528wal" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528wal" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528WAL</h2><p>\u53EF\u4EE5\u4E3A\u975E\u5185\u5B58\u578B\u6570\u636E\u63D0\u5347\u6781\u9AD8\u7684\u6548\u7387\uFF0C\u771F\u6B63\u7684\u6267\u884C\u64CD\u4F5C\u53EF\u80FD\u6570\u636E\u91CF\u4F1A\u6BD4\u8F83\u5927\uFF0C\u64CD\u4F5C\u6BD4\u8F83\u7E41\u7410\uFF0C\u5E76\u4E14\u5199\u6570\u636E\u4E0D\u4E00\u5B9A\u662F\u987A\u5E8F\u5199\uFF0C\u6240\u4EE5\u5982\u679C\u6BCF\u4E00\u6B21\u64CD\u4F5C\u90FD\u8981\u7B49\u5F85\u7ED3\u679Cflush\u5230\u53EF\u9760\u5B58\u50A8\uFF08\u6BD4\u5982\u78C1\u76D8\uFF09\u4E2D\u624D\u6267\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u7684\u8BDD\uFF0C\u6548\u7387\u5C31\u592A\u4F4E\u4E86\u3002\u6362\u4E00\u79CD\u601D\u8DEF\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u505A\u771F\u6B63\u7684\u64CD\u4F5C\u4E4B\u524D\uFF0C\u5148\u5C06\u8FD9\u4EF6\u4E8B\u8BB0\u5F55\u4E0B\u6765\uFF0C\u6301\u4E45\u5316\u5230\u53EF\u9760\u5B58\u50A8\u4E2D\uFF08\u56E0\u4E3A\u65E5\u5FD7\u4E00\u822C\u5F88\u5C0F\uFF0C\u5E76\u4E14\u662F\u987A\u5E8F\u5199\uFF0C\u6548\u7387\u5F88\u9AD8\uFF09\uFF0C\u7136\u540E\u518D\u53BB\u6267\u884C\u771F\u6B63\u7684\u64CD\u4F5C\u3002</p><p>\u4FDD\u8BC1\u4E86\u6570\u636E\u7684\u5B8C\u6574\u6027\uFF0C\u5728\u786C\u76D8\u6570\u636E\u4E0D\u635F\u574F\u7684\u60C5\u51B5\u4E0B\uFF0C\u9884\u5199\u5F0F\u65E5\u5FD7\u5141\u8BB8\u5B58\u50A8\u7CFB\u7EDF\u5728\u5D29\u6E83\u540E\u80FD\u591F\u5728\u65E5\u5FD7\u7684\u6307\u5BFC\u4E0B\u6062\u590D\u5230\u5D29\u6E83\u524D\u7684\u72B6\u6001\uFF0C\u907F\u514D\u6570\u636E\u4E22\u5931</p><h2 id="apache-nifi\u7684-write-ahead-log-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#apache-nifi\u7684-write-ahead-log-\u5B9E\u73B0" aria-hidden="true">#</a> Apache NiFi\u7684 Write-Ahead Log \u5B9E\u73B0</h2><h3 id="\u672F\u8BED\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED\u5B9A\u4E49" aria-hidden="true">#</a> \u672F\u8BED\u5B9A\u4E49</h3><ul><li>SerDe: \u5E8F\u5217\u5316/\u53CD\u5E8F\u5217\u5316\u8BB0\u5F55\u4EE5\u53CA\u66F4\u65B0\u8BB0\u5F55\u7684\u63A5\u53E3</li><li>TransactionID Generator: \u662F\u4E00\u4E2AAtomicLong\uFF0C\u7528\u4E8E\u5728\u7F16\u5199\u4EE5\u7F16\u8F91\u6BCF\u4E2A\u4EA4\u6613\u7684\u65E5\u5FD7\u6216snapshot\u65F6\u6307\u793A\u4EA4\u6613ID</li></ul><h3 id="writing-to-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#writing-to-the-write-ahead-log" aria-hidden="true">#</a> Writing to the Write-Ahead Log</h3><ol><li>\u9A8C\u8BC1\u8BB0\u5F55\u662F\u5426\u5DF2\u6062\u590D\uFF08&#39;restored flag&#39;\u8BBE\u7F6E\u4E3Atrue\uFF09\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u629B\u51FAIllegalStateException</li><li>\u83B7\u53D6repo\u5171\u4EAB\u9501 (read lock)</li><li>\u58F0\u660E\u4E00\u4E2A\u5F53\u524D\u672A\u4F7F\u7528\u7684\u5206\u533A <ol><li>\u589E\u52A0AtomicLong\u548Cmod\u7684\u5206\u533A\u6570 -&gt; partitionIndex</li><li>\u5C1D\u8BD5\u58F0\u660E\uFF08\u83B7\u5F97\u5199\u9501\u5B9A\uFF09partition [partitionIndex]\u3002 \u5982\u679C\u4E0D\u6210\u529F\uFF0C\u8FD4\u56DE\uFF1F\uFF1F\uFF1F\u3002</li></ol></li><li>\u5982\u679C\u6CA1\u6709\u7528\u4E8E\u7F16\u8F91\u65E5\u5FD7\u7684\u8F93\u51FA\u6D41\uFF0C\u521B\u5EFA\u8F93\u51FA\u6D41\u5E76\u7F16\u5199SerDe\u7C7B\u540D\u79F0\u548C\u7248\u672C</li><li>\u83B7\u53D6ID\uFF08\u589E\u91CFAtomicLong\uFF09\u5E76\u5199\u5165\u7F16\u8F91\u65E5\u5FD7</li><li>\u5C06\u66F4\u65B0\u5199\u5165\u5206\u533A <ol><li>\u5E8F\u5217\u5316\u66F4\u65B0\u5185\u5BB9\u5230record</li><li>\u5982\u679C\u6709\u66F4\u591A\u8BB0\u5F55\uFF0C\u5219\u5199\u5165TransactionContinue\u6807\u8BB0\uFF1B\u8FD4\u56DE\u4E0A\u4E00\u6B65\uFF0C\u5426\u5219\u5230\u4E0B\u4E00\u6B65</li><li>\u5199\u4E8B\u52A1\u63D0\u4EA4\u6807\u8BB0</li></ol></li><li>\u66F4\u65B0\u5168\u5C40\u8BB0\u5F55Map\u4EE5\u4FDD\u5B58\u6700\u65B0\u7248\u672C\u7684\u8BB0\u5F55</li><li>\u91CA\u653E\u5206\u533A\u58F0\u660E</li><li>\u91CA\u653E\u5171\u4EAB\u9501</li></ol><h3 id="checkpointing-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#checkpointing-the-write-ahead-log" aria-hidden="true">#</a> Checkpointing the Write-Ahead Log</h3><ol><li>\u83B7\u53D6\u4E92\u65A5\u9501\uFF08\u5199\u9501\uFF09\uFF0C\u662F\u7684\u4EFB\u4F55\u5206\u533A\u65E0\u6CD5\u88AB\u66F4\u65B0</li><li>\u521B\u5EFA.partial\u6587\u4EF6</li><li>\u7F16\u5199SerDe\u7C7B\u540D\u79F0\u548C\u7248\u672C</li><li>\u5199\u5165\u5F53\u524D\u7684\u6700\u5927\u4E8B\u52A1ID</li><li>\u5728\u5168\u5C40\u8BB0\u5F55Map\u4E2D\u5199\u5165\u8BB0\u5F55\u6570</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u8BB0\u5F55\uFF0C\u5E8F\u5217\u5316\u8BB0\u5F55</li><li>\u5173\u95ED.partial\u6587\u4EF6\u7684\u8F93\u51FA\u6D41</li><li>\u5220\u9664\u5F53\u524D\u7684&#39;snapshot&#39;\u6587\u4EF6</li><li>\u5C06.partial\u6587\u4EF6\u91CD\u547D\u540D\u4E3A&#39;snapshot&#39;</li><li>\u6E05\u9664\u6240\u6709\u5206\u533A/\u7F16\u8F91\u65E5\u5FD7\uFF1A \u5BF9\u4E8E\u6BCF\u4E2A\u5206\u533A\uFF1A <ol><li>\u5173\u95ED\u6587\u4EF6\u8F93\u51FA\u6D41</li><li>\u521B\u5EFA\u65B0\u7684\u8F93\u51FA\u6D41\u5230\u6587\u4EF6\uFF0C\u6307\u660ETruncate\uFF0C\u800C\u4E0D\u662Fappend\u3002</li><li>\u7F16\u5199SerDe\u7C7B\u540D\u79F0\u548C\u7248\u672C</li></ol></li><li>\u91CA\u653E\u5199\u9501</li></ol><h3 id="restoring-from-the-write-ahead-log" tabindex="-1"><a class="header-anchor" href="#restoring-from-the-write-ahead-log" aria-hidden="true">#</a> Restoring from the Write-Ahead Log</h3><ol><li>\u83B7\u53D6\u4E92\u65A5\u9501\uFF08\u5199\u9501\uFF09\uFF0C\u4EE5\u4FBF\u65E0\u6CD5\u66F4\u65B0\u4EFB\u4F55\u5206\u533A</li><li>\u4ECEsnapshot\u8FD8\u539F <ol><li>\u68C0\u67E5snapshot\u548C.partial\u6587\u4EF6 <ol><li>\u5982\u679C\u4E24\u4E2A\u6587\u4EF6\u90FD\u4E0D\u5B58\u5728\uFF0C\u5219\u6CA1\u6709\u8981\u8FD8\u539F\u7684snapshot\u3002\u79FB\u81F34\u3002</li><li>\u5982\u679C\u53EA\u6709snapshot\u6587\u4EF6\uFF0C\u6211\u4EEC\u5728\u4E0D\u521B\u5EFAsnapshot\u7684\u60C5\u51B5\u4E0B\u5411\u4E0B\u9762\u6B65\u9AA4\u7EE7\u7EED\u6267\u884C\u3002</li><li>\u5982\u679C.partial\u6587\u4EF6\u5B58\u5728\u4E14snapshot\u5B58\u5728\uFF0C\u5219\u5728\u521B\u5EFAsnapshot\u65F6\u4F1A\u5D29\u6E83\u3002\u6240\u4EE5\u8981\u5220\u9664.partial\u6587\u4EF6\u3002</li><li>\u5982\u679C\u53EA\u6709.partial\u6587\u4EF6\u5B58\u5728\uFF0C\u6211\u4EEC\u5728\u521B\u5EFA.partial\u6587\u4EF6\u5E76\u5220\u9664snapshot\u4E4B\u540E\u518D\u5C06.partial\u6587\u4EF6\u91CD\u547D\u540D\u4E3Asnapshot\u3002</li></ol></li><li>\u6253\u5F00InputStream\u5230snapshot\u6587\u4EF6</li><li>\u8BFB\u53D6SerDe\u7C7B\u540D\u79F0\u548C\u7248\u672C</li><li>\u8BFB\u53D6\u6700\u5927\u4E8B\u52A1ID</li><li>\u8BFB\u53D6snapshot\u4E2D\u7684\u8BB0\u5F55\u6570</li><li>\u5BF9\u4E8Esnapshot\u4E2D\u7684\u6BCF\u4E2A\u8BB0\u5F55\uFF0C\u53CD\u5E8F\u5217\u5316\u8BB0\u5F55\u5E76\u66F4\u65B0\u5168\u5C40\u8BB0\u5F55Map</li><li>\u901A\u8FC7\u8BBE\u7F6E\u4E3A\u4ECEsnapshot\u8BFB\u53D6\u7684\u6700\u5927\u4E8B\u52A1ID\u6765\u66F4\u65B0TransactionID\u751F\u6210\u5668\uFF08\u539F\u5B50\u957F\uFF09+ 1</li></ol></li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u5206\u533A\uFF1A <ol><li>\u9605\u8BFB\u4EA4\u6613ID\u3002</li><li>\u5982\u679C\u662FEOF\uFF0C\u8BF7\u5B8C\u6210\u8FD8\u539F\u5206\u533A\u3002</li><li>\u5982\u679C\u4EA4\u6613ID\u5C0F\u4E8E\u4EA4\u6613ID\u751F\u6210\u5668\u7684\u503C\uFF0C\u8BF7\u8BFB\u53D6\u8BE5\u4EA4\u6613\u7684\u6570\u636E\u5E76\u4E22\u5F03\u3002\u8F6C\u5230 3-1</li></ol></li><li>\u786E\u5B9A\u54EA\u4E2A\u5206\u533A\u8BFB\u53D6\u7684\u6700\u5C0F\u4E8B\u52A1ID\u5927\u4E8E\u6216\u7B49\u4E8ETransactionID\u751F\u6210\u5668\u3002</li><li>\u4ECE\u5206\u533A\u8FD8\u539F\u4E8B\u52A1\uFF08\u8C03\u7528SerDe\uFF03deserializeRecord\uFF0C\u5305\u62EC\u7528\u4E8E\u5199\u5165\u6587\u4EF6\u7684SerDe\u7684\u7248\u672C\u3002\u8FD9\u6837\uFF0C\u5982\u679C\u5B9E\u73B0\u53D1\u751F\u66F4\u6539\uFF0C\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u8FD8\u539F\u6570\u636E\uFF09\u3002</li><li>\u68C0\u67E5\u8FD8\u539F\u662F\u5426\u6210\u529F <ol><li>\u5982\u679C\u6210\u529F\uFF0C\u8BF7\u66F4\u65B0\u5168\u5C40\u8BB0\u5F55Map\u4EE5\u53CD\u6620\u5DF2\u8FD8\u539F\u8BB0\u5F55\u7684\u65B0\u72B6\u6001\u3002 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u5C06TransactionID\u751F\u6210\u5668\u66F4\u65B0\u4E3A\u5728\u7B2C5\u6B65\u9AA4\u4E2D\u6062\u590D\u7684\u4E8B\u52A1\u7684TransactionID+1\u3002\u4ECE\u7F16\u8F91\u65E5\u5FD7\u4E2D\u8BFB\u53D6\u4E0B\u4E00\u4E2A\u4E8B\u52A1ID\u3002</li><li>\u5982\u679C\u672A\u6210\u529F\uFF08\u610F\u5916\u7684EOF\uFF09\uFF0C\u5219\u653E\u5F03\u4E8B\u52A1\u5E76\u63D0\u9192EOF\u3002</li></ol></li><li>\u91CD\u590D4-6\uFF0C\u76F4\u5230\u6240\u6709\u5206\u533A\u90FD\u5DF2\u8FD8\u539F\u3002</li><li>\u5982\u679C\u6709\u4EFB\u4F55\u5206\u533A\u8868\u660E\u51FA\u73B0\u610F\u5916\u7684EOF\uFF0C\u5219\u5728\u66F4\u6B63\u6B64\u5206\u533A\u4E4B\u524D\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5199\u5165\u8BE5\u5206\u533A, \u56E0\u6B64\u5728\u5141\u8BB8\u4EFB\u4F55\u66F4\u65B0\u4E4B\u524D\u6267\u884CCheckpoint. \u8FD9\u5C06\u5BFC\u81F4\u7F16\u8F91\u65E5\u5FD7\u88AB\u5220\u9664\u3002 \u5982\u679C\u65E0\u6CD5\u68C0\u67E5\u70B9\uFF0C\u5219\u629B\u51FAIOException\uFF0C\u6307\u793A\u8FD8\u539F\u5931\u8D25\u3002\u786E\u4FDD\u91CA\u653E\u5199\u9501\u5B9A\uFF01</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u5206\u533A\uFF0C\u6253\u5F00\u8F93\u51FA\u6D41\u4EE5\u8FDB\u884C\u8FFD\u52A0\u3002</li><li>\u5C06 &#39;restored&#39; \u6807\u5FD7\u8BBE\u7F6E\u4E3Atrue</li><li>\u91CA\u653E\u5199\u9501</li></ol>',16),p=e("\u53C2\u8003\uFF1A "),g={href:"https://blog.csdn.net/winwill2012/article/details/71719106",target:"_blank",rel:"noopener noreferrer"},_=e("https://blog.csdn.net/winwill2012/article/details/71719106"),I={href:"https://cwiki.apache.org/confluence/display/NIFI/NiFi%27s+Write-Ahead+Log+Implementation",target:"_blank",rel:"noopener noreferrer"},f=e("https://cwiki.apache.org/confluence/display/NIFI/NiFi's+Write-Ahead+Log+Implementation");function u(m,w){const l=o("ExternalLinkIcon");return r(),n(h,null,[c,i("p",null,[p,i("a",g,[_,a(l)]),i("a",I,[f,a(l)])])],64)}var x=t(d,[["render",u],["__file","026-\u9884\u5199\u65E5\u5FD7(WAL).html.vue"]]);export{x as default};
