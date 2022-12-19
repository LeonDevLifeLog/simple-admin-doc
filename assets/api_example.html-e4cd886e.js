import{_ as t,a as p}from"./api_gen_struct-3403667f.js";import{ab as o,F as i,G as r,E as n,R as a,M as e,ac as l,U as c}from"./framework-5ae10408.js";const u={},d=l(`<h1 id="_3-分钟开发-api-服务" tabindex="-1"><a class="header-anchor" href="#_3-分钟开发-api-服务" aria-hidden="true">#</a> 3 分钟开发 API 服务</h1><p>首先确认你安装了以下软件:</p><ul><li>simple-admin-tool (goctls) v0.1.0 +</li></ul><h2 id="创建-api-项目" tabindex="-1"><a class="header-anchor" href="#创建-api-项目" aria-hidden="true">#</a> 创建 API 项目</h2><p>创建 example</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api new example <span class="token parameter variable">--i18n</span><span class="token operator">=</span>true <span class="token parameter variable">--casbin</span><span class="token operator">=</span>true <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.4.3 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v0.1.2 <span class="token parameter variable">--trans_err</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-api <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8081</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3>`,7),m=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),k=n("tr",null,[n("td",null,"i18n"),n("td",null,"是否启用 i18n"),n("td",null,"true 为启用")],-1),v=n("tr",null,[n("td",null,"casbin"),n("td",null,"是否启用 casbin"),n("td",null,"true 为启用")],-1),b=n("tr",null,[n("td",null,"module_name"),n("td",null,"go.mod 中的module名称"),n("td",null,"如果项目需要被在外部import，需要像上面例子设置为github或者其他地方的仓库网址， 为空则只在本地使用")],-1),h=n("td",null,"go_zero_version",-1),_=n("td",null,"go zero版本",-1),g={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},y=n("td",null,"tool_version",-1),x=n("td",null,"simple admin tools 版本号",-1),f={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},q=n("tr",null,[n("td",null,"trans_err"),n("td",null,"国际化翻译错误信息"),n("td",null,"true 为启用")],-1),E=n("tr",null,[n("td",null,"gitlab"),n("td",null,"是否生成 gitlab-ci.yml"),n("td",null,"true 为生成")],-1),P=n("tr",null,[n("td",null,"port"),n("td",null,"端口号"),n("td",null,"服务暴露的端口号")],-1),C=l('<p>详细参数请在命令行查看 <code>goctls api new --help</code></p><blockquote><p>你可以看到以下结构</p></blockquote><figure><img src="'+p+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><blockquote><p>然后编辑 etc/example.yaml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.api
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明运行成功.</p><h2 id="代码生成-基于proto" tabindex="-1"><a class="header-anchor" href="#代码生成-基于proto" aria-hidden="true">#</a> 代码生成（基于Proto）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>/home/ryan/GolandProjects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),z=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),S=n("tr",null,[n("td",null,"proto"),n("td",null,"proto文件地址"),n("td",null,"输入proto文件的绝对路径")],-1),w=n("tr",null,[n("td",null,"style"),n("td",null,"文件名格式"),n("td",null,"go_zero为蛇形格式")],-1),N=n("tr",null,[n("td",null,"service_name"),n("td",null,"服务名称"),n("td",null,"和new 时的名称相同，如example.go的serviceName是 example")],-1),M=n("tr",null,[n("td",null,"o"),n("td",null,"输出位置"),n("td",null,"文件输出位置，可以为相对路径，指向main文件目录")],-1),R=n("tr",null,[n("td",null,"model"),n("td",null,"模型名称"),n("td",null,"schema中内部struct名称，如example中的Student")],-1),j=n("tr",null,[n("td",null,"rpc_name"),n("td",null,"RPC名称"),n("td",null,"输入Example则生成文件会生成l.svcCtx.ExampleRpc")],-1),A=n("tr",null,[n("td",null,"search_key_num"),n("td",null,"搜索字段数量（默认为3）"),n("td",null,"列表搜索字段数量，只能自动生成string的字段")],-1),L=n("td",null,"grpc_package",-1),T=n("td",null,"RPC *_grpc.go 包路径",-1),B={href:"http://xn--examplegithub-hj1uz85h4i4c.com/suyuan32/simple-admin-example-rpc/example",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,[a("详细参数请在命令行查看 "),n("code",null,"goctls api proto --help")],-1),H=n("blockquote",null,[n("p",null,"生成效果")],-1),I=n("figure",null,[n("img",{src:t,alt:"pic",tabindex:"0",loading:"lazy"}),n("figcaption",null,"pic")],-1),V={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,"注意还需要手动添加下 service_context, config, etc, ExampleRpc",-1);function U(F,K){const s=c("ExternalLinkIcon");return i(),r("div",null,[d,n("table",null,[m,n("tbody",null,[k,v,b,n("tr",null,[h,_,n("td",null,[a("需要到"),n("a",g,[a("go-zero"),e(s)]),a("查看最新release")])]),n("tr",null,[y,x,n("td",null,[a("需要到"),n("a",f,[a("tool"),e(s)]),a("查看simple admin tools 最新 release")])]),q,E,P])]),C,n("table",null,[z,n("tbody",null,[S,w,N,M,R,j,A,n("tr",null,[L,T,n("td",null,[n("a",B,[a("在example中是github.com/suyuan32/simple-admin-example-rpc/example"),e(s)])])])])]),D,H,I,n("blockquote",null,[n("p",null,[a("详情查看 simple admin example api 地址 "),n("a",V,[a("https://github.com/suyuan32/simple-admin-example-api"),e(s)])])]),G])}const Q=o(u,[["render",U],["__file","api_example.html.vue"]]);export{Q as default};
