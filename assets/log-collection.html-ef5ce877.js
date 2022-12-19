import{_ as l}from"./kibana-dac8c721.js";import{ab as t,F as c,G as o,E as a,R as n,M as e,ac as p,U as i}from"./framework-5ae10408.js";const r={},u=a("h1",{id:"日志收集",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#日志收集","aria-hidden":"true"},"#"),n(" 日志收集")],-1),d=a("blockquote",null,[a("p",null,"本项目主要使用 EFK 进行日志收集")],-1),k=a("ul",null,[a("li",null,"Elasticsearch"),a("li",null,"Filebeat"),a("li",null,"Kibana")],-1),m=a("blockquote",null,[a("p",null,"安装方法")],-1),b={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.elastic.co/guide/en/kibana/current/docker.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<blockquote><p>测试环境快速安装方法 <br> Docker</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># es</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> es01 <span class="token parameter variable">--net</span> elastic <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms1g -Xmx1g&quot;</span> <span class="token parameter variable">-m</span> 3g <span class="token parameter variable">-it</span> docker.elastic.co/elasticsearch/elasticsearch:8.4.3

<span class="token comment"># kibana</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> kib-01 <span class="token parameter variable">--net</span> elastic <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 docker.elastic.co/kibana/kibana:8.4.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Filebeat</p></blockquote><p>修改 filebeat-deploy.yaml， 位置 simple-admin-core/deploy/k8s/log-collection/filebeat/</p><blockquote><p>可以添加 log 来源位置，默认有 core</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> log
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> /home/data/logs/core/<span class="token important">*/*.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置环境变量</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTICSEARCH_HOST   
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.50.216&quot;</span>  <span class="token comment"># ES的地址</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTICSEARCH_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;9200&quot;</span>  <span class="token comment"># ES的端口</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTICSEARCH_USERNAME
              <span class="token key atrule">value</span><span class="token punctuation">:</span> elastic <span class="token comment"># ES 的用户名</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTICSEARCH_PASSWORD
              <span class="token key atrule">value</span><span class="token punctuation">:</span> UQ==CXXjw47bK_I13<span class="token important">*f1</span> <span class="token comment"># 密码</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTICSEARCH_CA_FINGERPRINT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> 8d6aed6bba745f2f0aaa46f628e3124c82ae6727c1f5e207e3d821ffeefb5e5e <span class="token comment"># 信任的CA指纹</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTIC_CLOUD_ID 
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token comment"># 云 ID， 可选</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ELASTIC_CLOUD_AUTH 
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token comment"># 云 Token， 可选</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后使用脚本部署 filebeat</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 simple-admin-core/deploy/k8s/log-collection/filebeat</span>
kubectl apply <span class="token parameter variable">-f</span> filebeat-deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>效果展示</p></blockquote><figure><img src="`+l+'" alt="Pic" tabindex="0" loading="lazy"><figcaption>Pic</figcaption></figure>',12);function h(f,y){const s=i("ExternalLinkIcon");return c(),o("div",null,[u,d,k,m,a("ul",null,[a("li",null,[a("a",b,[n("Elasticsearch"),e(s)])]),a("li",null,[a("a",v,[n("Filebeat"),e(s)])]),a("li",null,[a("a",_,[n("Kibana"),e(s)])])]),g])}const q=t(r,[["render",h],["__file","log-collection.html.vue"]]);export{q as default};
