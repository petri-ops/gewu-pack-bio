# RETIREMENT-LOG（注册表死链退役留痕）

## 2026-10-08 · BLOCK-146 本机同步 BLOCK-145 D2（Windows 侧重放）

- 背景：BLOCK-145 D2 在 Mac 侧完成 pack 注册表死链退役（Mac 本地提交 5589026，按 BIO-4 惯例不推送）。Windows 克隆停在 db6be21（退役前），17 条死链原样在册，`test/tool-registry-script-links.test.mjs`（desktop 仓）在本机恒红。本笔为**内容级重放**：按 desktop 仓 AUDIT-LOG 2026-10-08 BLOCK-145 收口行记录的意图（「17 条→6 条全可解析〔deseq2 pluginOnly+pack 通道〕」）执行。
- 处置：`registry/tool-registry.json` 中以下 17 个 TOOLS 条目 `script` 置空（退役为插件通道声明，与 deseq2 pluginOnly 同形态；条目本体保留， displayName/description 等元数据不动）：

  km-survival、lasso-cox、bindea-immune、complexheatmap、maftools-mutation、ml-feature-select、ml-classifier、rsf-survival、shap-explain、consensus-cluster、ml-scvi-annotate、mo-mofa、mo-snf、spatial-standard、spatial-svg、spatial-deconv、spatial-lr

- 验收：desktop 仓 `node --test test/tool-registry-script-links.test.mjs` → 1 pass 0 fail（6 条保留 script 的条目全部可解析）。
- 对账：本笔与 Mac 5589026 为同意图双端实现（Mac 侧原始 diff 本机不可见）；如两端后续对账发现处置形态差异（删除条目 vs script 置空），以测试契约（desktop test/tool-registry-script-links.test.mjs 注释）为准收敛。
- 同批另笔：deseq2.R parse_design_terms 多因子（D3 本机重放，镜像 Mac 3f3c5e8 意图）。
