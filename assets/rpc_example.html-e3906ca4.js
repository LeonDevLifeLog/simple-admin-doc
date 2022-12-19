import{_ as p,a as o}from"./ent_gen_logic-6662d943.js";import{ab as l,F as i,G as c,E as n,R as s,M as e,ac as t,U as u}from"./framework-5ae10408.js";const r={},d=t(`<h1 id="_3分钟开发-rpc-服务" tabindex="-1"><a class="header-anchor" href="#_3分钟开发-rpc-服务" aria-hidden="true">#</a> 3分钟开发 RPC 服务</h1><blockquote><p>首先确认你安装了以下软件:</p></blockquote><ul><li>simple-admin-tool (goctls) v0.1.3</li></ul><h2 id="创建-rpc-基本项目" tabindex="-1"><a class="header-anchor" href="#创建-rpc-基本项目" aria-hidden="true">#</a> 创建 RPC 基本项目</h2><blockquote><p>创建 example 服务</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc new example <span class="token parameter variable">--ent</span><span class="token operator">=</span>true <span class="token parameter variable">--module_name</span><span class="token operator">=</span>github.com/suyuan32/simple-admin-example-rpc <span class="token parameter variable">--go_zero_version</span><span class="token operator">=</span>v1.4.3 <span class="token parameter variable">--tool_version</span><span class="token operator">=</span>v0.1.2 <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8080</span> <span class="token parameter variable">--gitlab</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3>`,7),k=n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",null,"介绍"),n("th",null,"使用方法")])],-1),m=n("tr",null,[n("td",null,"ent"),n("td",null,"是否启用 ent"),n("td",null,"true 为启用")],-1),v=n("tr",null,[n("td",null,"module_name"),n("td",null,"go.mod 中的module名称"),n("td",null,"如果项目需要被在外部import，需要像上面例子设置为github或者其他地方的仓库网址， 为空则只在本地使用")],-1),b=n("td",null,"go_zero_version",-1),g=n("td",null,"go zero版本",-1),h={href:"https://github.com/zeromicro/go-zero/releases",target:"_blank",rel:"noopener noreferrer"},y=n("td",null,"tool_version",-1),f=n("td",null,"simple admin tools 版本号",-1),q={href:"https://github.com/suyuan32/simple-admin-tools/releases",target:"_blank",rel:"noopener noreferrer"},x=n("tr",null,[n("td",null,"gitlab"),n("td",null,"是否生成 gitlab-ci.yml"),n("td",null,"true 为生成")],-1),_=n("tr",null,[n("td",null,"port"),n("td",null,"端口号"),n("td",null,"服务暴露的端口号")],-1),w=t('<p>详细参数请在命令行查看 <code>goctls rpc new --help</code></p><blockquote><p>你可以看到如下项目结构</p></blockquote><figure><img src="'+p+`" alt="Example" tabindex="0" loading="lazy"><figcaption>Example</figcaption></figure><p>然后编辑 etc/example.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> example.rpc
<span class="token key atrule">ListenOn</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8080</span>

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

<span class="token key atrule">RedisConf</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">ServiceName</span><span class="token punctuation">:</span> exampleRpcLogger
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> file
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /home/ryan/data/logs/example/rpc
  <span class="token key atrule">Encoding</span><span class="token punctuation">:</span> json
  <span class="token key atrule">Level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">Compress</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>
  <span class="token key atrule">StackCoolDownMillis</span><span class="token punctuation">:</span> <span class="token number">100</span>

<span class="token key atrule">Prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">4001</span>
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> /metrics

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>编辑 schema</p></blockquote><p>进入目录 ent/schema, 修改 example.go, 改名为 student.go 添加 mixin 和字段 address 和 uuid</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> schema

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;entgo.io/ent&quot;</span>
	<span class="token string">&quot;entgo.io/ent/schema/field&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/ent/schema/mixins&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Student holds the schema definition for the Student entity.</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ent<span class="token punctuation">.</span>Schema
<span class="token punctuation">}</span>

<span class="token comment">// Fields of the Student.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Fields</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Field <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Field<span class="token punctuation">{</span>
		field<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		field<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Mixin <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Mixin<span class="token punctuation">{</span>
		mixins<span class="token punctuation">.</span>BaseMixin<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Edges of the Student.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>Student<span class="token punctuation">)</span> <span class="token function">Edges</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ent<span class="token punctuation">.</span>Edge <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成 Ent 代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> gen-ent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>生成 Student 逻辑代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>goctls rpc ent <span class="token parameter variable">--schema</span><span class="token operator">=</span>./ent/schema  <span class="token parameter variable">--style</span><span class="token operator">=</span>go_zero <span class="token parameter variable">--multiple</span><span class="token operator">=</span>false <span class="token parameter variable">--service_name</span><span class="token operator">=</span>example <span class="token parameter variable">--o</span><span class="token operator">=</span>./ <span class="token parameter variable">--model</span><span class="token operator">=</span>Student <span class="token parameter variable">--group</span><span class="token operator">=</span>student

<span class="token function">make</span> gen-rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数介绍-1" tabindex="-1"><a class="header-anchor" href="#参数介绍-1" aria-hidden="true">#</a> 参数介绍</h3><table><thead><tr><th>参数</th><th>介绍</th><th>使用方法</th></tr></thead><tbody><tr><td>schema</td><td>schema文件地址</td><td>输入Ent schema 文件夹相对路径</td></tr><tr><td>style</td><td>文件名格式</td><td>go_zero为蛇形格式</td></tr><tr><td>service_name</td><td>服务名称</td><td>和new 时的名称相同，如example.go的serviceName是 example</td></tr><tr><td>o</td><td>输出位置</td><td>文件输出位置，可以为相对路径，指向main文件目录</td></tr><tr><td>model</td><td>模型名称</td><td>schema中内部struct名称，如example中的Student</td></tr><tr><td>search_key_num</td><td>搜索字段数量（默认为3）</td><td>列表搜索字段数量，只能自动生成string的字段</td></tr><tr><td>group</td><td>分组名称</td><td>分组名称用于将不同logic文件放到不同文件夹</td></tr></tbody></table><p>详细参数请在命令行查看 <code>goctls rpc ent --help</code></p><blockquote><p>快捷命令：gen-rpc-ent-logic model=Student 表示只生成 schema 为 Student 的代码， 为空则全部生成 group 为分组文件夹名称</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> gen-rpc-ent-logic <span class="token assign-left variable">model</span><span class="token operator">=</span>Student <span class="token assign-left variable">group</span><span class="token operator">=</span>student

<span class="token function">make</span> gen-rpc

<span class="token comment"># 可能需要运行下</span>
go mod tidy 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="logic" tabindex="0" loading="lazy"><figcaption>logic</figcaption></figure><p>可以看到 crud 代码已生成</p><blockquote><p>proto 文件代码</p></blockquote><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> example<span class="token punctuation">;</span>
<span class="token keyword">option</span> go_package<span class="token operator">=</span><span class="token string">&quot;./example&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">Empty</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">IDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">IDsReq</span> <span class="token punctuation">{</span>
  <span class="token keyword">repeated</span> <span class="token builtin">uint64</span> ids <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">UUIDReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> uuid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">BaseResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> msg <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PageInfoReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// Student message</span>

<span class="token keyword">message</span> <span class="token class-name">StudentInfo</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> created_at <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> updated_at <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token builtin">int64</span> age <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">StudentListResp</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> total <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">StudentInfo</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">StudentPageReq</span> <span class="token punctuation">{</span>
  <span class="token builtin">uint64</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">uint64</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">service</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
  <span class="token comment">// group: base</span>
  <span class="token keyword">rpc</span> <span class="token function">initDatabase</span> <span class="token punctuation">(</span><span class="token class-name">Empty</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Student management</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">createOrUpdateStudent</span> <span class="token punctuation">(</span><span class="token class-name">StudentInfo</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">getStudentList</span> <span class="token punctuation">(</span><span class="token class-name">StudentPageReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">StudentListResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">deleteStudent</span> <span class="token punctuation">(</span><span class="token class-name">IDReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// group: student</span>
  <span class="token keyword">rpc</span> <span class="token function">batchDeleteStudent</span> <span class="token punctuation">(</span><span class="token class-name">IDsReq</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">BaseResp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用group注释给 rpc 分组</p><blockquote><p>然后代码就可以运行啦 !</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run example.go <span class="token parameter variable">-f</span> etc/example.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果看到</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Starting server at <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),S={href:"https://github.com/suyuan32/simple-admin-file/blob/master/api/internal/logic/file/init_database_logic.go",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/suyuan32/simple-admin-example-rpc",target:"_blank",rel:"noopener noreferrer"},R=t(`<blockquote><p>simple admin example api 中如何远程调用该 RPC</p></blockquote><blockquote><p>添加 config</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/config&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/stores/redis&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	rest<span class="token punctuation">.</span>RestConf
	Auth         rest<span class="token punctuation">.</span>AuthConf
	DatabaseConf config<span class="token punctuation">.</span>DatabaseConf
	RedisConf    redis<span class="token punctuation">.</span>RedisConf
	CasbinConf   config<span class="token punctuation">.</span>CasbinConf
	ExampleRpc   zrpc<span class="token punctuation">.</span>RpcClientConf
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小型网站直接使用</p><p>ExampleRpc: Endpoints:</p><ul><li>127.0.0.1:8080</li></ul><p>的方式直连，不需要服务发现， Endpoints 可以有多个</p></blockquote><blockquote><p>添加 example rpc</p></blockquote><h3 id="修改-service-context" tabindex="-1"><a class="header-anchor" href="#修改-service-context" aria-hidden="true">#</a> 修改 service context</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> svc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-example-rpc/exampleclient&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/zrpc&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/config&quot;</span>
	i18n2 <span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/i18n&quot;</span>
	<span class="token string">&quot;github.com/suyuan32/simple-admin-example-api/internal/middleware&quot;</span>

	<span class="token string">&quot;github.com/suyuan32/simple-admin-core/pkg/i18n&quot;</span>

	<span class="token string">&quot;github.com/casbin/casbin/v2&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ServiceContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Config     config<span class="token punctuation">.</span>Config
	ExampleRpc exampleclient<span class="token punctuation">.</span>Example
	Casbin     <span class="token operator">*</span>casbin<span class="token punctuation">.</span>Enforcer
	Authority  rest<span class="token punctuation">.</span>Middleware
	Trans      <span class="token operator">*</span>i18n<span class="token punctuation">.</span>Translator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>ServiceContext <span class="token punctuation">{</span>

	rds <span class="token operator">:=</span> c<span class="token punctuation">.</span>RedisConf<span class="token punctuation">.</span><span class="token function">NewRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>rds<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;initialize redis failed&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	cbn<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>CasbinConf<span class="token punctuation">.</span><span class="token function">NewCasbin</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span>Type<span class="token punctuation">,</span> c<span class="token punctuation">.</span>DatabaseConf<span class="token punctuation">.</span><span class="token function">GetDSN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">Errorw</span><span class="token punctuation">(</span><span class="token string">&quot;initialize casbin failed&quot;</span><span class="token punctuation">,</span> logx<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span><span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	trans <span class="token operator">:=</span> <span class="token operator">&amp;</span>i18n<span class="token punctuation">.</span>Translator<span class="token punctuation">{</span><span class="token punctuation">}</span>
	trans<span class="token punctuation">.</span><span class="token function">NewBundle</span><span class="token punctuation">(</span>i18n2<span class="token punctuation">.</span>LocaleFS<span class="token punctuation">)</span>
	trans<span class="token punctuation">.</span><span class="token function">NewTranslator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceContext<span class="token punctuation">{</span>
		Config<span class="token punctuation">:</span>     c<span class="token punctuation">,</span>
		Authority<span class="token punctuation">:</span>  middleware<span class="token punctuation">.</span><span class="token function">NewAuthorityMiddleware</span><span class="token punctuation">(</span>cbn<span class="token punctuation">,</span> rds<span class="token punctuation">)</span><span class="token punctuation">.</span>Handle<span class="token punctuation">,</span>
		Trans<span class="token punctuation">:</span>      trans<span class="token punctuation">,</span>
		ExampleRpc<span class="token punctuation">:</span> exampleclient<span class="token punctuation">.</span><span class="token function">NewExample</span><span class="token punctuation">(</span>zrpc<span class="token punctuation">.</span><span class="token function">MustNewClient</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>ExampleRpc<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后在 logic 直接调用 l.svcCtx.ExampleRpc 即可</p></blockquote>`,8),z={href:"https://github.com/suyuan32/simple-admin-example-api",target:"_blank",rel:"noopener noreferrer"};function E(N,D){const a=u("ExternalLinkIcon");return i(),c("div",null,[d,n("table",null,[k,n("tbody",null,[m,v,n("tr",null,[b,g,n("td",null,[s("需要到"),n("a",h,[s("go-zero"),e(a)]),s("查看最新release")])]),n("tr",null,[y,f,n("td",null,[s("需要到"),n("a",q,[s("tool"),e(a)]),s("查看simple admin tools 最新 release")])]),x,_])]),w,n("p",null,[s("说明运行成功. 注意后续还需要修改数据库初始化函数，参考 "),n("a",S,[s("simple admin file"),e(a)])]),n("blockquote",null,[n("p",null,[s("项目地址 "),n("a",C,[s("https://github.com/suyuan32/simple-admin-example-rpc"),e(a)])])]),R,n("blockquote",null,[n("p",null,[s("simple admin example api 地址 "),n("a",z,[s("https://github.com/suyuan32/simple-admin-example-api"),e(a)])])])])}const M=l(r,[["render",E],["__file","rpc_example.html.vue"]]);export{M as default};
