import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "STRUCTURE DESIGNER | Case Study",
    description: "6つの占術をAIで統合し、人間の複雑な構造を立体的に分析するプロダクトの開発ストーリー。",
}

export default function StructureDesignerPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="container max-w-4xl mx-auto px-4 relative">
                    <Link
                        href="/#works"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Works
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge>Next.js</Badge>
                        <Badge>Gemini API</Badge>
                        <Badge>Supabase</Badge>
                        <Badge>LINE Messaging API</Badge>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        STRUCTURE DESIGNER
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                        <span className="text-foreground font-semibold">「6つの占術を、同時に。」</span><br />
                        人間が30年かけて習得する知識を、AIはどう統合したか。
                    </p>

                    <Button asChild size="lg">
                        <Link href="https://www.structure-designer.com/" target="_blank">
                            サイトを見る
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Hero Image */}
            <section className="container max-w-5xl mx-auto px-4 -mt-8 mb-16">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-2xl">
                    <Image
                        src="/images/structure-designer.png"
                        alt="STRUCTURE DESIGNER Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Main Content */}
            <article className="container max-w-4xl mx-auto px-4 pb-24">

                {/* Problem Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                        課題：既存の占いサービスの限界
                    </h2>

                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                                <h3 className="font-semibold text-destructive mb-2">❌ 平面的なタイプ論</h3>
                                <p className="text-sm text-muted-foreground">「あなたはAタイプ」と単純化しすぎる</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                                <h3 className="font-semibold text-primary mb-2">✓ 立体的な構造理解</h3>
                                <p className="text-sm text-muted-foreground">矛盾を含んだ固有の構造として定義</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                                <h3 className="font-semibold text-destructive mb-2">❌ 一方的な通告</h3>
                                <p className="text-sm text-muted-foreground">過去の会話を記憶せずリセット</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                                <h3 className="font-semibold text-primary mb-2">✓ 文脈のある対話</h3>
                                <p className="text-sm text-muted-foreground">3層記憶システムで個別の文脈を保持</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                                <h3 className="font-semibold text-destructive mb-2">❌ オカルト的な怪しさ</h3>
                                <p className="text-sm text-muted-foreground">スピリチュアルな演出</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                                <h3 className="font-semibold text-primary mb-2">✓ 知的な分析</h3>
                                <p className="text-sm text-muted-foreground">「占い師」ではなく「分析官」として振る舞う</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-lg bg-destructive/10 border border-destructive/20">
                                <h3 className="font-semibold text-destructive mb-2">❌ 静的なテキスト</h3>
                                <p className="text-sm text-muted-foreground">受動的な体験</p>
                            </div>
                            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                                <h3 className="font-semibold text-primary mb-2">✓ 動的なライブ体験</h3>
                                <p className="text-sm text-muted-foreground">今この瞬間のためだけに生成</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                        アプローチ：ハイブリッド構造エンジン
                    </h2>

                    <div className="p-8 rounded-xl bg-secondary/50 border border-border/50 mb-8">
                        <h3 className="font-semibold mb-6 text-center">6つのデータソースを統合</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">🔥</div>
                                <div className="font-mono text-sm">四柱推命</div>
                                <div className="text-xs text-muted-foreground">五行・日干</div>
                            </div>
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">⭐</div>
                                <div className="font-mono text-sm">西洋占星術</div>
                                <div className="text-xs text-muted-foreground">月星座・水星</div>
                            </div>
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">🔢</div>
                                <div className="font-mono text-sm">数秘術</div>
                                <div className="text-xs text-muted-foreground">行動動機</div>
                            </div>
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">🌀</div>
                                <div className="font-mono text-sm">九星気学</div>
                                <div className="text-xs text-muted-foreground">バイオリズム</div>
                            </div>
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">🧠</div>
                                <div className="font-mono text-sm">心理分析</div>
                                <div className="text-xs text-muted-foreground">MBTI/Big5</div>
                            </div>
                            <div className="p-4 rounded-lg bg-background border border-border text-center">
                                <div className="text-2xl mb-2">📅</div>
                                <div className="font-mono text-sm">暦/環境</div>
                                <div className="text-xs text-muted-foreground">外部エネルギー</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground font-mono text-sm">
                                → JSON化 → Gemini に注入 → 翻訳レイヤー → ビジネスアクションとして出力
                            </span>
                        </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-6 py-4 bg-secondary/30 rounded-r-lg">
                        <p className="text-lg italic">
                            「慎重な星（占星術）」を持っているのに「大胆な行動をとる（心理テスト）」という結果が出た場合、これをエラーとせず <strong>「普段は慎重だが、ここぞという時に爆発力を発揮する才能」</strong> として定義する。
                        </p>
                    </blockquote>
                </section>

                {/* Core Tech Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                        AI Orchestration：3つの Core Tech
                    </h2>

                    {/* Tech 1 */}
                    <div className="mb-12 p-8 rounded-xl border border-border/50 bg-card/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                            <h3 className="text-xl font-bold">翻訳レイヤー（Translation Layer）</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            <strong className="text-foreground">最大の技術的差別化要因。</strong>内部計算（Lens）とユーザーへの発話（Voice）を分離。
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-muted/50">
                                <h4 className="font-mono text-sm text-muted-foreground mb-2">Lens（内部処理）</h4>
                                <p className="text-sm">数秘8 + 八白土星 + 破壊殺 = <span className="text-destructive font-semibold">動くべきではない</span></p>
                            </div>
                            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                                <h4 className="font-mono text-sm text-primary mb-2">Voice（翻訳出力）</h4>
                                <p className="text-sm">「今週は『スタート』より『準備』に運気がある週です。企画書の設計図を固める時間にしませんか？」</p>
                            </div>
                        </div>
                        <p className="text-center mt-4 text-sm font-semibold text-primary">→「占い」を「戦略」へ昇華</p>
                    </div>

                    {/* Tech 2 */}
                    <div className="mb-12 p-8 rounded-xl border border-border/50 bg-card/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                            <h3 className="text-xl font-bold">Gemini Pro × Flash のハイブリッド脳</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            役割に応じて、2つの異なるAIモデルを使い分け。
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4 font-semibold">モデル</th>
                                        <th className="text-left py-3 px-4 font-semibold">役割</th>
                                        <th className="text-left py-3 px-4 font-semibold">用途</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 px-4 font-mono">Gemini 2.5 Pro</td>
                                        <td className="py-3 px-4">頭脳</td>
                                        <td className="py-3 px-4 text-muted-foreground">100万トークンで過去ログ全読み。月次レポート、深い診断</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-mono">Gemini 2.5 Flash</td>
                                        <td className="py-3 px-4">声</td>
                                        <td className="py-3 px-4 text-muted-foreground">毎朝のLINE配信、即レスチャット。月額数十円レベルの低コスト</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Tech 3 */}
                    <div className="p-8 rounded-xl border border-border/50 bg-card/50">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                            <h3 className="text-xl font-bold">3層記憶アーキテクチャ</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            統合されたデータを「静的なプロフィール」で終わらせず、「動的な文脈」として活用。
                        </p>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="p-4 rounded-lg border border-border bg-background">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded bg-muted text-xs">L1</span>
                                    <span className="font-semibold">完全記憶</span>
                                </div>
                                <p className="text-muted-foreground text-xs">全ての会話ログを保存</p>
                            </div>
                            <div className="p-4 rounded-lg border border-border bg-background">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded bg-muted text-xs">L2</span>
                                    <span className="font-semibold">構造化記憶</span>
                                </div>
                                <p className="text-muted-foreground text-xs">「仕事の悩み」「健康状態」をタグ付け要約</p>
                            </div>
                            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded bg-primary/20 text-xs text-primary">L3</span>
                                    <span className="font-semibold text-primary">文脈注入</span>
                                </div>
                                <p className="text-muted-foreground text-xs">直近ログをプロンプトに注入 → 「昨日のDB修正、お見事でしたね」</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Positioning Section */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                        ポジショニング
                    </h2>
                    <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/50 border border-primary/20">
                        <p className="text-lg leading-relaxed mb-4">
                            既存の占いが「運命に翻弄される受動的なエンタメ」だったのに対し、
                        </p>
                        <p className="text-xl md:text-2xl font-bold leading-relaxed">
                            SILASは「自分の構造（Structure）を理解し、運気の流れ（Flow）を味方につけて、<span className="text-primary">自律的に人生を設計するための能動的なツール</span>」。
                        </p>
                        <hr className="my-6 border-border/50" />
                        <p className="text-muted-foreground">
                            「占い」というブラックボックスを技術で解体し、現代人に必要な<strong className="text-foreground">「メンタルと戦略のガソリンスタンド」</strong>へと再構築。
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Button asChild size="lg" className="text-lg px-8 py-6">
                        <Link href="https://www.structure-designer.com/" target="_blank">
                            STRUCTURE DESIGNER を試す
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </section>

            </article>
        </div>
    )
}
