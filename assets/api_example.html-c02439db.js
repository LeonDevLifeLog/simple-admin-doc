import{_ as t,a as p}from"./api_gen_struct-3403667f.js";import{_ as i,W as o,X as r,Y as n,Z as a,$ as s,a0 as l,F as c}from"./framework-2d290880.js";const u={},d=l(`<h1 id="_3-分钟开发-api-服务" tabindex="-1"><a class="header-anchor" href="#_3-分钟开发-api-服务" aria-hidden="true">#</a> 3 分钟开发 API 服务</h1><p>首先确认你安装了以下软件:</p><ul><li>simple-admin-tool (goctls) v0.2.2 +</li></ul><h2 id="api服务的职责" tabindex="-1"><a class="header-anchor" href="#api服务的职责" aria-hidden="true">#</a> API服务的职责</h2><p>在 simple admin 中， API 服务充当网关的角色，主要提供以下功能：</p><ul><li>用户鉴权， 如 JWT</li><li>数据处理， 如数据过滤筛选，国际化翻译</li><li>限流和熔断</li></ul><p>一个API可以接入多个 RPC， 提供统一的请求入口</p><h2 id="创建-api-项目" tabindex="-1"><a class="header-anchor" href="#创建-api-项目" aria-hidden="true">#</a> 创建 API 项目</h2><p>创建 example</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true <span class="token parameter variable">--casbin</span><span class="token operator">=</span>true <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.4.4 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v0.2.2 <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-new-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-new-参数介绍" aria-hidden="true">#</a> <code>api new</code> 参数介绍</h3>`,11),m=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"必须"),n("th",null,"默认值"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),v=n("tr",null,[n("td",null,"i18n"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 i18n"),n("td",null,"true 为启用")],-1),k=n("tr",null,[n("td",null,"casbin"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否启用 casbin"),n("td",null,"true 为启用")],-1),b=n("tr",null,[n("td",null,"module_name"),n("td",null,"是"),n("td"),n("td",null,"go.mod 中的module名称"),n("td",null,"如果项目需要被在外部import，需要像上面例子设置为github或者其他地方的仓库网址， 为空则只在本地使用")],-1),h=n("td",null,"go_zero_version",-1),_=n("td",null,"是",-1),g=n("td",null,null,-1),y=n("td",null,"go zero版本",-1),x={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},f=n("td",null,"tool_version",-1),P=n("td",null,"是",-1),q=n("td",null,null,-1),C=n("td",null,"simple admin tools 版本号",-1),E={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},z=n("tr",null,[n("td",null,"trans_err"),n("td",null,"否"),n("td",null,"false"),n("td",null,"国际化翻译错误信息"),n("td",null,"true 为启用")],-1),w=n("tr",null,[n("td",null,"gitlab"),n("td",null,"否"),n("td",null,"false"),n("td",null,"是否生成 gitlab-ci.yml"),n("td",null,"true 为生成")],-1),S=n("tr",null,[n("td",null,"port"),n("td",null,"否"),n("td",null,"9100"),n("td",null,"端口号"),n("td",null,"服务暴露的端口号")],-1),A=l('<p>详细参数请在命令行查看 <code>goctls api new --help</code></p><blockquote><p>你可以看到以下结构</p></blockquote><figure><img src="'+p+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── desc                              api声明文件存放目录
├── etc                               配置文件目录
└── internal
    ├── config
    ├── handler                       handler目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── i18n                          国际化i18n文件目录
    │   └── locale
    ├── logic                         业务代码目录
    │   ├── base
    │   ├── student
    │   └── teacher
    ├── middleware                    中间件目录
    ├── svc                           全局参数目录
    └── types                         类型声明目录


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后编辑 etc/example.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">Timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>

<span class="token key atrule">Auth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> <span class="token comment"># the same as core</span>
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">259200</span>

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> exampleApiLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/data/logs/example/api
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4000</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics


<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">DatabaseConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> simple_admin
  <span class="token key atrule">Username</span><span class="token punctuation">:</span> root <span class="token comment"># set your username</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> <span class="token comment"># set your password</span>
  <span class="token key atrule">MaxOpenConn</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">SSLMode</span><span class="token punctuation">:</span> disable
  <span class="token key atrule">CacheTime</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">CasbinConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">ModelText</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    [request_definition]
    r = sub, obj, act
    [policy_definition]
    p = sub, obj, act
    [role_definition]
    g = _, _
    [policy_effect]
    e = some(where (p.eft == allow))
    [matchers]
    m = r.sub == p.sub &amp;&amp; keyMatch2(r.obj,p.obj) &amp;&amp; r.act == p.act</span>

<span class="token key atrule">ExampleRpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果看到</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8081<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明运行成功.</p><h2 id="代码生成-基于proto" tabindex="-1"><a class="header-anchor" href="#代码生成-基于proto" aria-hidden="true">#</a> 代码生成（基于Proto）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="api-proto-参数介绍" tabindex="-1"><a class="header-anchor" href="#api-proto-参数介绍" aria-hidden="true">#</a> <code>api proto</code> 参数介绍</h3>`,15),T=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"必须"),n("th",null,"默认值"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),I=n("tr",null,[n("td",null,"proto"),n("td",null,"是"),n("td"),n("td",null,"proto文件地址"),n("td",null,"输入proto文件的绝对路径, 注意要为合并后的proto即根目录下的proto ，不是desc 文件夹中的")],-1),N=n("tr",null,[n("td",null,"style"),n("td",null,"否"),n("td",null,"go_zero"),n("td",null,"文件名格式"),n("td",null,"go_zero为蛇形格式")],-1),R=n("tr",null,[n("td",null,"api_service_name"),n("td",null,"是"),n("td"),n("td",null,"服务名称"),n("td",null,"api 服务的 service 名称, 在api声明文件中")],-1),j=n("tr",null,[n("td",null,"rpc_service_name"),n("td",null,"是"),n("td"),n("td",null,"服务名称"),n("td",null,"rpc 服务的名称, 与proto文件中的service名称一致")],-1),L=n("tr",null,[n("td",null,"o"),n("td",null,"是"),n("td"),n("td",null,"输出位置"),n("td",null,"文件输出位置，可以为相对路径，指向main文件目录")],-1),M=n("tr",null,[n("td",null,"model"),n("td",null,"是"),n("td"),n("td",null,"模型名称"),n("td",null,"schema中内部struct名称，如example中的Student")],-1),B=n("tr",null,[n("td",null,"rpc_name"),n("td",null,"是"),n("td"),n("td",null,"RPC名称"),n("td",null,"输入Example则生成文件会生成l.svcCtx.ExampleRpc")],-1),D=n("td",null,"grpc_package",-1),H=n("td",null,"是",-1),V=n("td",null,null,-1),G=n("td",null,"RPC *_grpc.go 包路径",-1),W={href:"http://github.com/suyuan32/simple-admin-example-rpc/example",target:"_blank",rel:"noopener noreferrer"},F=n("tr",null,[n("td",null,"multiple"),n("td",null,"否"),n("td",null,"false"),n("td",null,"多服务"),n("td",null,"若 proto 文件中有多个service, 需要设置为 true")],-1),J=l(`<p>详细参数请在命令行查看 <code>goctls api proto --help</code></p><blockquote><p>multiple 例子</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>school <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Teacher <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>School <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example <span class="token parameter variable">--multiple</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),K={href:"https://github.com/suyuan32/simple-admin-example-api/tree/multiple",target:"_blank",rel:"noopener noreferrer"},O=n("blockquote",null,[n("p",null,"生成效果")],-1),U=n("figure",null,[n("img",{src:t,alt:"pic",tabindex:"0",loading:"lazy"}),n("figcaption",null,"pic")],-1),X={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},Y=n("p",null,"注意还需要手动添加下 service_context, config, etc, ExampleRpc",-1);function Z($,Q){const e=c("ExternalLinkIcon");return o(),r("div",null,[d,n("table",null,[m,n("tbody",null,[v,k,b,n("tr",null,[h,_,g,y,n("td",null,[a("需要到"),n("a",x,[a("go-zero"),s(e)]),a("查看最新release")])]),n("tr",null,[f,P,q,C,n("td",null,[a("需要到"),n("a",E,[a("tool"),s(e)]),a("查看simple admin tools 最新 release")])]),z,w,S])]),A,n("table",null,[T,n("tbody",null,[I,N,R,j,L,M,B,n("tr",null,[D,H,V,G,n("td",null,[a("在example中是 "),n("a",W,[a("github.com/suyuan32/simple-admin-example-rpc/example"),s(e)])])]),F])]),J,n("p",null,[n("a",K,[a("代码"),s(e)])]),O,U,n("blockquote",null,[n("p",null,[a("详情查看 simple admin example api 地址 "),n("a",X,[a("https://github.com/suyuan32/simple-admin-example-api"),s(e)])])]),Y])}const en=i(u,[["render",Z],["__file","api_example.html.vue"]]);export{en as default};