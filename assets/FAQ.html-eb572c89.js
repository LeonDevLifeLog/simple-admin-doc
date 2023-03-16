import{_ as t,W as c,X as i,Y as a,Z as e,$ as o,a0 as s,D as r}from"./framework-2d2f73c4.js";const p={},l=s('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="默认账号是什么" tabindex="-1"><a class="header-anchor" href="#默认账号是什么" aria-hidden="true">#</a> 默认账号是什么？</h2><p>A: 账号: admin 密码: simple-admin</p><h2 id="注册的账号不能登录" tabindex="-1"><a class="header-anchor" href="#注册的账号不能登录" aria-hidden="true">#</a> 注册的账号不能登录?</h2><p>A: 默认注册成功后的角色是会员，没有登录的权限。你需要修改角色权限或者将用户的角色设置为管理员.</p><h2 id="go-zero-有几种服务注册发现方式" tabindex="-1"><a class="header-anchor" href="#go-zero-有几种服务注册发现方式" aria-hidden="true">#</a> go-zero 有几种服务注册发现方式？</h2>',6),d={href:"https://mp.weixin.qq.com/s/-WaWJaM_ePEQOf7ExNJe7w",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="如何处理跨域问题" tabindex="-1"><a class="header-anchor" href="#如何处理跨域问题" aria-hidden="true">#</a> 如何处理跨域问题？</h2><p>A: 修改 api/core.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>server <span class="token operator">:=</span> rest<span class="token punctuation">.</span><span class="token function">MustNewServer</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RestConf<span class="token punctuation">,</span> rest<span class="token punctuation">.</span><span class="token function">WithCors</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 <code>*</code> 为自己的域名或IP,默认为<code>*</code>，允许所有。</p><h2 id="如何同步-fork-仓库" tabindex="-1"><a class="header-anchor" href="#如何同步-fork-仓库" aria-hidden="true">#</a> 如何同步 fork 仓库?</h2><blockquote><p>给fork配置远程库,先查看远程状态</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>确定一个将被同步给 fork 远程的上游仓库, upstream后的地址是你即将同步的git地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/suyuan32/simple-admin-core.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>开始同步fork</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>切换到本地主分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>把 upstream/master 分支合并到本地 master 上，这样就完成了同步，并且不会丢掉本地修改的内容。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="如何获取环境变量" tabindex="-1"><a class="header-anchor" href="#如何获取环境变量" aria-hidden="true">#</a> 如何获取环境变量？</h2><p>只需要在 <code>config.go</code> 的变量中声明 <code>env</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
     ServiceName <span class="token builtin">string</span> <span class="token string">\`json:&quot;,env=SERVICE_NAME&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何配置-windows-环境" tabindex="-1"><a class="header-anchor" href="#如何配置-windows-环境" aria-hidden="true">#</a> 如何配置 Windows 环境？</h2>`,19),m=a("strong",null,[e("首先安装 "),a("code",null,"git"),e(" , 我们需要 "),a("code",null,"git bash"),e(" 命令行执行 linux 命令")],-1),h=a("br",null,null,-1),v=a("code",null,"make",-1),k={href:"https://chocolatey.org/install#individual",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在管理员状态下的 POWERSHELL 执行</span>

Set-ExecutionPolicy Bypass <span class="token parameter variable">-Scope</span> Process -Force<span class="token punctuation">;</span> <span class="token punctuation">[</span>System.Net.ServicePointManager<span class="token punctuation">]</span>::SecurityProtocol <span class="token operator">=</span> <span class="token punctuation">[</span>System.Net.ServicePointManager<span class="token punctuation">]</span>::SecurityProtocol <span class="token parameter variable">-bor</span> <span class="token number">3072</span><span class="token punctuation">;</span> iex <span class="token variable"><span class="token punctuation">((</span>New<span class="token operator">-</span>Object System.Net.WebClient<span class="token punctuation">)</span>.DownloadString<span class="token punctuation">(</span>&#39;https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>community.chocolatey.org<span class="token operator">/</span>install.ps1&#39;<span class="token punctuation">))</span></span>

<span class="token comment">## 然后执行</span>

choco <span class="token function">install</span> <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装完成 <code>make</code> 后重启 IDE 即可，IDE 的命令行均选择 <code>git bash</code></p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>git bash</code> 下的路径使用 <code>/</code> 分隔， windows 默认为 <code>\\</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls api proto <span class="token parameter variable">--proto</span><span class="token operator">=</span>D:/projects/simple-admin-example-rpc/example.proto <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--api_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--rpc_service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--rpc_name</span><span class="token operator">=</span>Example <span class="token parameter variable">--grpc_package</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,3);function g(f,_){const n=r("ExternalLinkIcon");return c(),i("div",null,[l,a("p",null,[e("A： 3 种 "),a("a",d,[e("go-zero"),o(n)])]),u,a("blockquote",null,[a("p",null,[m,e(),h,a("strong",null,[e("其次需要安装 "),v,e(" 命令， 我们通过 "),a("a",k,[e("Chocolatey"),o(n)]),e(" 进行安装")])])]),b])}const q=t(p,[["render",g],["__file","FAQ.html.vue"]]);export{q as default};
