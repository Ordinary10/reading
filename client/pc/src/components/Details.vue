<template>
	<div class="details">
		<!--头部导航-->
		<tops></tops>

		<!--导航图片-->
		<div class=" m tp">
			<img src="../../static/images/toubu.jpg" />
		</div>

		<!--内容部分-->
		<div class="m">
			<!--左边内容-->
			<div class="left">

				<!--左边第一大模块-->
				<div class="left1">
					<img :src="bookinfor.cover" style="width: 320px;height: 320px;" />
					<a href="#">免费在线读</a>
				</div>

				<!--左边第二大模块-->
				<div class="left2">
					<h3>浏览此商品的顾客也同时浏览</h3>
					<ul>
						<li>
							<p class="picture">
								<a href="#" title="三毛：我需要最狂的风，和最静的海（成为和三毛一样的女子，优雅从容、被爱、被珍视。《心若淡定，便是优雅》畅销作家张其姝新作） 她爱风、爱海，也爱红尘。她把人生过成自己想要的样子，她优雅从容，一直被爱、被珍视。她是这样的女子，你也可以。">
									<img src="../../static/images/sanmao.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									三毛：我需要最狂的风，和最静的海.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="这是一本关于爱与陪伴的书，孙俪分享她和动物之间的温暖故事，百张照片记录温暖时刻+宠物资讯小贴士。每一只可爱的小动物都有两次生命，一次是出生，一次是从遇见你开始。">
									<img src="../../static/images/sunli.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									孙俪新书 遇见你，陪伴你.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="拥有仪式感，你才能真正成为有爱、有温度、有人情味的人，得到认可与尊重，收获惊喜、浪漫、幸运和精彩。人民日报强烈呼吁，3000家媒体感动推荐，5亿人热情参与。黄磊、何炅、刘嘉玲、孙俪都在推崇的生活态度。">
									<img src="../../static/images/life.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									生活需要仪式感 （把温暖和感动带给你在乎的人）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="（才情是女人的魅力，看见＂央视一姐＂董卿的优雅与才情，摄取提升女人智慧与能量的捷径！）">
									<img src="../../static/images/qing.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									董卿：做一个有才情的女子
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="《半小时漫画世界史》是300万粉丝大号“混子曰”创始人陈磊（二混子）力作！看半小时漫画，通五千年历史。用漫画解读历史，开启阅读新潮流。读客熊猫君出品 ">
									<img src="../../static/images/man.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									半小时漫画世界史（其实是一本严谨的极简世界史。）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="从容是老天送给内心有空间的人的礼物。“林清玄从容幸福系列”，45年创作精华，静心疗愈，插图典藏。">
									<img src="../../static/images/lin.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									从容的底气（林清玄从容幸福系列，45年创作精华）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="三毛：我需要最狂的风，和最静的海（成为和三毛一样的女子，优雅从容、被爱、被珍视。《心若淡定，便是优雅》畅销作家张其姝新作） 她爱风、爱海，也爱红尘。她把人生过成自己想要的样子，她优雅从容，一直被爱、被珍视。她是这样的女子，你也可以。">
									<img src="../../static/images/sanmao.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									三毛：我需要最狂的风，和最静的海.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="这是一本关于爱与陪伴的书，孙俪分享她和动物之间的温暖故事，百张照片记录温暖时刻+宠物资讯小贴士。每一只可爱的小动物都有两次生命，一次是出生，一次是从遇见你开始。">
									<img src="../../static/images/sunli.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									孙俪新书 遇见你，陪伴你.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="拥有仪式感，你才能真正成为有爱、有温度、有人情味的人，得到认可与尊重，收获惊喜、浪漫、幸运和精彩。人民日报强烈呼吁，3000家媒体感动推荐，5亿人热情参与。黄磊、何炅、刘嘉玲、孙俪都在推崇的生活态度。">
									<img src="../../static/images/life.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									生活需要仪式感 （把温暖和感动带给你在乎的人）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="（才情是女人的魅力，看见＂央视一姐＂董卿的优雅与才情，摄取提升女人智慧与能量的捷径！）">
									<img src="../../static/images/qing.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									董卿：做一个有才情的女子
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="《半小时漫画世界史》是300万粉丝大号“混子曰”创始人陈磊（二混子）力作！看半小时漫画，通五千年历史。用漫画解读历史，开启阅读新潮流。读客熊猫君出品 ">
									<img src="../../static/images/man.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									半小时漫画世界史（其实是一本严谨的极简世界史。）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="从容是老天送给内心有空间的人的礼物。“林清玄从容幸福系列”，45年创作精华，静心疗愈，插图典藏。">
									<img src="../../static/images/lin.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									从容的底气（林清玄从容幸福系列，45年创作精华）
								</a>
							</p>
						</li>
						<li>
							<p class="picture">
								<a href="#" title="三毛：我需要最狂的风，和最静的海（成为和三毛一样的女子，优雅从容、被爱、被珍视。《心若淡定，便是优雅》畅销作家张其姝新作） 她爱风、爱海，也爱红尘。她把人生过成自己想要的样子，她优雅从容，一直被爱、被珍视。她是这样的女子，你也可以。">
									<img src="../../static/images/sanmao.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									三毛：我需要最狂的风，和最静的海.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="这是一本关于爱与陪伴的书，孙俪分享她和动物之间的温暖故事，百张照片记录温暖时刻+宠物资讯小贴士。每一只可爱的小动物都有两次生命，一次是出生，一次是从遇见你开始。">
									<img src="../../static/images/sunli.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									孙俪新书 遇见你，陪伴你.
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="拥有仪式感，你才能真正成为有爱、有温度、有人情味的人，得到认可与尊重，收获惊喜、浪漫、幸运和精彩。人民日报强烈呼吁，3000家媒体感动推荐，5亿人热情参与。黄磊、何炅、刘嘉玲、孙俪都在推崇的生活态度。">
									<img src="../../static/images/life.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									生活需要仪式感 （把温暖和感动带给你在乎的人）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="（才情是女人的魅力，看见＂央视一姐＂董卿的优雅与才情，摄取提升女人智慧与能量的捷径！）">
									<img src="../../static/images/qing.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									董卿：做一个有才情的女子
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="《半小时漫画世界史》是300万粉丝大号“混子曰”创始人陈磊（二混子）力作！看半小时漫画，通五千年历史。用漫画解读历史，开启阅读新潮流。读客熊猫君出品 ">
									<img src="../../static/images/man.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									半小时漫画世界史（其实是一本严谨的极简世界史。）
								</a>
							</p>
						</li>

						<li>
							<p class="picture">
								<a href="#" title="从容是老天送给内心有空间的人的礼物。“林清玄从容幸福系列”，45年创作精华，静心疗愈，插图典藏。">
									<img src="../../static/images/lin.jpg" />
								</a>
							</p>
							<p class="pi-text">
								<a href="#">
									从容的底气（林清玄从容幸福系列，45年创作精华）
								</a>
							</p>
						</li>
					</ul>

				</div>

			</div>

			<!--中间内容-->
			<div class="middle">
				<!--第一大模块-->
				<div class="one">
					<h1>
				    <div class="long">
				      	<span>书生艺气</span>
				   	    <div class='sanjiao'></div>
				   </div>
				{{bookinfor.title}}
				</h1>

					<p>
						{{bookinfor.introduce}}<br/>读客熊猫君出品
						<span class="chuping" :title="bookinfor.introduce">
							<a href="#">文艺书每满150减50，查看更多促销点击这里>></a>
						</span>
					</p>
					<div class="author">
						<span>
							作者:
							<a href="#">{{bookinfor.autor}};</a>
						</span>
						<span>
							出版社:
							<a href="#">{{bookinfor.press}}</a>
						</span>
						<span>
							出版时间:{{bookinfor.date}}
						</span>
					</div>

					<div class="price">
						<!--抢购价-->
						<div class="price1">
							<p id="dd-price-text">抢购价</p>
							<p class="dd-price">
								<span id="yen">¥</span> {{bookinfor.price}}
								<span id="yen2">优惠</span>
								<span id="yen3">定价</span>
								<span id="yen4">¥188.00</span>
							</p>
						</div>
						<!--电子书价-->
						<div class="price2">
							<p id="dd-price-text">电子书价</p>
							<p class="dd-price">
								<a href="#" id="yen5">¥</a>
								<a href="#" id="yen6">30</a>
							</p>
						</div>
					</div>

				</div>

				<!--第二大模块-->
				<div class="two">

					<!--配送模块-->
					<div class="letter">
						<div class="let letter3">
							配送至
						</div>
						<div class="let2">
							<input type="text" name="" id="" value="" placeholder="有效的邮寄地址" class="beijing" />
							<b>有货</b>
						</div>

						<div class="let3">
							<a href="#" @mouseover="show" @mouseout="hide">满49元免运费</a>
							<ul :class="{ulshow:ulclass}" class="let3-ul" @mouseover="show" @mouseout="hide">
								<li>自营订单满49元（含）免运费</li>
								<li>不足金额订单收取运费6元起</li>
							</ul>
						</div>

					</div>

					<!--服务模块-->
					<div class="service">
						<div class="let letter2">
							服务
						</div>
						<div class="ser">
							<span>由<b>“当当”</b>发货，并提供售后服务。</span>
						</div>
					</div>

					<!--购物车模块-->
					<div class="shopping">
						<div class="shop">
							<input type="text" class="num" value="" v-model="numbers" />
							<div class="shop1">
								<button class="add" @click="addnum" style="cursor: pointer;">+</button>
								<button class="jian" @click="subnum" style="cursor: pointer;">-</button>
							</div>

						</div>

						<div class="shop2">
							<button class="gouwu" @click="shoppingcart"><a href="#">加入购物车</a></button>
							<button class="mail"><a href="#">立即购买</a></button>
							<button class="book"><a href="#">购买电子书</a></button>
						</div>

					</div>
					<span class="xian">每账户限购<span>5</span>件，超出限购数量以当当价为准</span>
				</div>

				<!--第三模块-->
				<div class="three">

					<div class="shortbook">
						<a href="#"><img src="../../static/images/book.jpg" title="种一棵树，最好的时间是十年前，其次是现在。" /></a>
					</div>
					<!--分割线-->
					<div class="title">
						<span>产品特色</span>
					</div>

					<!--长图-->
					<div class="longbook">
						<img src="../../static/images/longbook.jpg" />
					</div>

					<!--编辑推荐-->
					<div class="title">
						<span id="bianji">编辑推荐</span>
					</div>
					<div class="bianji">
						<p>◆欧美读者平均3个通宵读完！</p>
						<p>◆平均每年销量100万册，世界各国持续畅销26年！</p>
						<p>◆《巨人的陨落》作者、爱伦坡终身大师奖得主肯·福莱特里程碑式代表作！</p>
						<p>◆美国、英国、加拿大、保加利亚、巴西、丹麦、荷兰、意大利、法国、德国、匈牙利、挪威、波兰、葡萄、西班牙、瑞典……30种语言畅销各国！</p>
						<p>◆BBC 读者评选年度小说、脱口秀女王奥普拉读书俱乐部推荐，口碑横扫世界各国。</p>
						<p>◆ 同名改编英剧由奥斯卡奖获得者埃迪·雷德梅恩主演。</p>
						<p>◆“《圣殿春秋》证明，肯·福莱特是真正的大师！”——《华盛顿邮报》</p>
						<p>◆肯·福莱特曾表示：“在我的所有作品中，没有哪本比《圣殿春秋》更受欢迎的了。它无可替代，并让我深深骄傲。”</p>
						<p>◆这部小说让每个人知道，我们有能力越过世俗，触及永恒。</p>
					</div>

					<!--内容简介-->
					<div class="title">
						<span id="neirong">内容简介</span>
					</div>
					<div class="bianji">
						<p>十二世纪英国。一个贫困的建筑匠，一心只想建造一座美丽的大教堂。</p>
						<p>几经波折，他终于遇到了一个机会。但一座大教堂的建造过程是各方势力的角力：教会、贵族、王室、“巫女”……教堂的建造屡遭干涉。每一种声音都有可能成就他，也有可能毁灭他。</p>
						<p>在那个风云诡谲的时代，一个普通建筑匠的信念能否改变世界……</p>
					</div>

					<!--作者简介-->
					<div class="title">
						<span id="zuozhe">作者简介</span>
					</div>
					<div class="bianji">
						<p>
							<b>肯·福莱特（Ken Follett，1949－）</b>
						</p>
						<p>
							<b>爱伦·坡终身大师奖得主，通宵小说大师。</b>
						</p>
						<p>一个拥有柏林墙的作家：柏林市政府为了感谢肯·福莱特写出了《永恒的边缘》，送给他一块柏林墙。</p>
						<p>一个屡屡打破销售记录的作家：肯·福莱特的小说《无尽世界》上市10天就登顶了西班牙所有畅销排行榜。</p>
						<p>一个拥有专属档案馆的作家：萨基诺谷州立大学为他建立了一座档案馆，那里存放着许多他的资料和手稿,总数超过60,000件。</p>
					</div>

					<!--目录-->
					<div class="title">
						<span id="mulu">目录</span>
					</div>
					<div class="bianji">
						<p>序幕</p>
						<p>第一部分 1135-1136</p>
						<p>第二部分 1136-1137</p>
						<p>第三部分 1140-1142</p>
						<p>第四部分 1142-1145</p>
						<p>第五部分 1152-1155</p>
						<p>第六部分 1170-1174</p>
					</div>

					<!--媒体评论-->
					<div class="title">
						<span id="meiti">媒体评论</span>
					</div>
					<div class="bianji">
						<p>☆ 《圣殿春秋》证明，肯·福莱特是真正的大师！</p>
						<p>— —《华盛顿邮报》</p>
						<p>☆ 中世纪的广阔画面和普通人的情绪相互交织，造就了这部伟大的史诗。简直无可挑剔！</p>
						<p>— —《出版人周刊》</p>
						<p>☆ 这个恢弘的故事似乎触及了所有的人类情感 ——爱与恨、忠诚与背叛、希望与绝望。</p>
						<p>— —《大都会》</p>
					</div>

					<!--免费在线读-->
					<div class="title">
						<span id="mianfei">免费在线读</span>
					</div>
					<div class="bianji">
						<p>圣殿春秋： 序幕 1123</p>
						<p class="suojin">小男孩们早早地来看绞刑了。</p>
						<p class="suojin">天还没亮，头一批三四个男孩子就偷偷摸摸地溜出了棚屋，他们穿着毡靴，悄悄地不发出声响，就像猫儿似的。小镇覆盖着薄薄的一层新雪，如同刚刚涂了一道油漆，他们踩下的脚印糟践了平整光滑的雪面。他们走在杂乱的木屋之间，沿着结冻的泥泞街道，来到了静谧的市场，高耸的绞刑架正等候在那里。</p>
						<p class="suojin">这些男孩子对大人珍视的一切全都嗤之以鼻。他们蔑视和嘲弄所有美好的东西。他们看到一个跛子就会哼哼哈哈，如果看见一只受伤的动物就会用石头把它打死。他们为自己的伤口吹牛，为自己的疤痕得意，对伤残更保持着特别的敬意：一个缺了指头的男孩能够成为他们的首领。他们喜爱暴力；他们愿意跑上几英里去观看流血；至于绞刑，他们是绝不会错过一饱眼福的机会的。</p>
						<p class="suojin">一个男孩在绞刑架的底座上撒尿。另一个男孩爬上台阶，用两个拇指扣住喉头，然后猛摔在地上，扮着鬼脸，装出被绞死的可怕样子。别的孩子佩服得狂呼乱叫，引得两条狗一路吠着跑进了市场。一个很小的男孩大模大样地吃起一个苹果，那些大一点儿的孩子中有一个在他鼻子上猛击一拳，抢走苹果。小男孩朝一条狗扔过去一个尖利的石块来发泄自己的怨气，那条狗嗥叫着跑回家去。接下来就无事可做了，于是他们全部都蹲在大教堂前廊里干燥的走道上，一心等着看热闹。</p>
						<p class="suojin">　广场四周一幢幢结实的木石结构住房的百叶窗后闪起了烛光，那都是富裕的工匠和商人们的住家，这时洗碗碟的女仆和男学徒在点火烧水做粥了。天空的颜色由黑转灰，镇上的居民们穿着厚重的粗毛外套，低头走出矮矮的门口，颤抖着走下河边打水。</p>
					</div>

				</div>

			</div>

			<!--右边书签导航栏内容-->
			<div class="right" :class="{rightshow:isyes}">
				<ul>
					<li>
						<a href="#bianji">编辑推荐</a>
					</li>
					<li>
						<a href="#neirong">内容简介</a>
					</li>
					<li>
						<a href="#zuozhe">作者简介</a>
					</li>
					<li>
						<a href="#mulu" class="jianju">目录</a>
					</li>
					<li>
						<a href="#meiti">媒体评论</a>
					</li>
					<li>
						<a href="#mianfei">免费在线读</a>
					</li>
					<li>
						<a href="#"><img src="../../static/images/blue.png" /></a>
					</li>
					<li>
						<a href="#" class="free">免费下载</a>
					</li>
				</ul>
			</div>
		</div>

		<!--侧边导航栏-->
		<div class="rightside">
			<div class=" side side1">
				<a href="#"><img src="../../static/images/erweima.png" /></a>
			</div>

			<div class="side ">
				<a href="#" class="side2">用户反馈</a>
			</div>

			<div class="side">
				<a href="#"><img src="../../static/images/m.png" /></a>
			</div>
		</div>

		<footers></footers>
	</div>
</template>

<script>
	import Top from "./Top";
	import Footer from "./Footer";
	export default {
		name: "Details",
		components: {
			tops: Top,
			footers: Footer
		},
		data() {
			return {
				isyes: false,
				ulclass: false,
				bookinfor: {},
				numbers: 1
			}
		},
		props: ['bookid'],
		methods: {
			show() {
				this.ulclass = true
			},
			hide() {
				this.ulclass = false
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 800) {
					this.isyes = true;
				} else {
					this.isyes = false;
				}
			},
			addnum() {
				this.numbers = (this.numbers - 0) + 1;
			},
			subnum() {
				if(this.numbers > 0) {
					this.numbers = this.numbers - 1;
				}
			},
			shoppingcart() {
				const _this = this;
				let numbers = _this.numbers;
				let bookid = _this.$route.query.bookid;
				let userid = _this.$token.getCookie("userid");
				let bookprice = _this.bookinfor.price;
				let obj = {
					userid: userid,
					bookid: bookid,
					bookprice: bookprice,
					numbers: numbers
				};
				if(userid != null) {
					_this.$axios.post(_this.$ip+"/writeshopping", obj).then(response => {
						alert("已添加至购物车，可至购物车查看详细信息");
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
				} else {
					alert("你还没有登录账号，请先登录");
					_this.$router.push({
						path: '/login'
					});
				}

			}
		},
		beforeMount() {
			const _this = this;
			let bookid = _this.$route.query.bookid;
			let listname = _this.$route.query.listname;
			if(listname) {
				_this.$axios.post(_this.$ip+"/bookinfor", {
					bookid: bookid,
					listname: listname
				}).then(response => {
					_this.bookinfor = response.data.bookinfor[0];
				}).catch(response => {
					console.log("post发送Ajax请求失败");
				})
			} else {
				_this.$axios.post(_this.$ip+"/bookinfor", {
					bookid: bookid
				}).then(response => {
					_this.bookinfor = response.data.bookinfor[0];
				}).catch(response => {
					console.log("post发送Ajax请求失败");
				})
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		watch: {
			'$route': {
				handler() {
					const _this = this;
					let bookid = _this.$route.query.bookid;
					let listname = _this.$route.query.listname;
					if(listname) {
						_this.$axios.post(_this.$ip+"/bookinfor", {
							bookid: bookid,
							listname: listname
						}).then(response => {
							_this.bookinfor = response.data.bookinfor[0];
						}).catch(response => {
							console.log("post发送Ajax请求失败");
						})
					} else {
						_this.$axios.post(_this.$ip+"/bookinfor", {
							bookid: bookid
						}).then(response => {
							_this.bookinfor = response.data.bookinfor[0];
						}).catch(response => {
							console.log("post发送Ajax请求失败");
						})
					}
				},
				deep: true
			}
		}
	}
</script>

<style scoped>
	.rightshow {
		position: fixed;
		right: 10px;
		top: 50%;
		margin-top: -177px;
	}
	
	* {
		margin: 0px;
		padding: 0px;
		list-style-type: 0px;
		border: 0px;
	}
	/*模块居中*/
	
	.m {
		width: 1200px;
		/*background-color: palevioletred;*/
		margin: 20px auto;
	}
	/*导航图片*/
	
	.m>img {
		width: 100%;
		height: 60px;
	}
	
	.tp {
		height: 60px;
	}
	/*左边内容部分*/
	
	.left {
		width: 330px;
		height: 330px;
		margin: 0;
		/*	background-color: yellow;*/
		display: inline-block;
		vertical-align: top;
		position: relative;
	}
	
	.left1>img {
		width: 320px;
		height: 320px;
	}
	
	.left1>a {
		position: absolute;
		text-decoration: none;
		display: inline-block;
		width: 100px;
		height: 36px;
		background-color: #FFD451;
		border-top-left-radius: 18px;
		border-bottom-left-radius: 18px;
		color: black;
		font-size: 14px;
		line-height: 36px;
		text-indent: 18px;
		bottom: 0px;
		right: 0px;
	}
	
	.left2 {
		width: 268px;
		margin-top: 110px;
		border: 1px solid #eee;
		/*background-color: lightcyan;*/
	}
	
	.left2>h3 {
		height: 30px;
		color: #646464;
		font: 14px/30px "Microsoft Yahei";
		overflow: hidden;
		padding: 5px 0 0 8px;
		background-color: #fff;
	}
	
	.left2>ul {
		list-style: none;
		width: 249px;
		margin: 0 auto;
		padding-bottom: 8px;
	}
	
	.left2>ul>li {
		padding: 10px;
		width: 240px;
		border-top: 1px dotted #CCCCCC;
	}
	
	.picture>a>img {
		display: inline-block;
		width: 150px;
		height: 150px;
		margin-left: 40px;
	}
	
	.pi-text>a {
		text-decoration: none;
		font-size: 14px;
		color: #646464;
	}
	
	.pi-text>a:hover {
		text-decoration: underline;
	}
	/*中间内容部分*/
	
	.middle {
		width: 693px;
		/*	height: 600px;*/
		margin: 0 30px;
		background-color: white;
		display: inline-block;
		position: relative;
	}
	/*第一大模块*/
	
	.one {
		padding: 0 5px;
	}
	
	.long {
		width: 72px;
		height: 20px;
		line-height: 17px;
		background-color: red;
		display: inline-block;
	}
	
	.long>span {
		font-size: 10px;
		height: 20px;
		line-height: 20px;
		color: white;
		text-align: center;
	}
	
	.sanjiao {
		border-top: 10px solid transparent;
		border-left: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-right: 20px solid white;
		position: absolute;
		top: 4px;
		left: 47px;
	}
	
	.one>h1 {
		color: #323232;
		font-size: 18px;
		line-height: 24px;
	}
	
	.one>p {
		color: #323232;
		font-size: 16px;
		line-height: 24px;
		padding-top: 6px;
	}
	
	.chuping {
		font-size: 18px;
	}
	
	.chuping>a {
		text-decoration: none;
		color: #1a66b;
	}
	
	.author {
		width: 630px;
		height: 72px;
		font-size: 14px;
		margin-top: 8px;
	}
	
	.author>span {
		padding-right: 25px;
		display: inline-block;
		padding-top: 6px;
	}
	
	.author>span>a {
		text-decoration: none;
	}
	/*价格模块*/
	
	.price {
		width: 675px;
		height: 66px;
		background-color: #EBEBEB;
	}
	/*抢购价*/
	
	.price1 {
		display: inline-block;
	}
	
	#dd-price-text {
		width: 101px;
		height: 28px;
		line-height: 28px;
		color: #8f8f8f;
		font-size: 12px!important;
	}
	
	.dd-price {
		width: 255px;
		height: 38px;
		font-size: 26px;
		color: #e52222;
		/*background-color: yellowgreen;*/
	}
	
	#yen {
		display: inline-block;
		width: 8px;
		height: 17px;
		font: 14px verdana;
	}
	
	#yen2 {
		display: inline-block;
		width: 40px;
		height: 30px;
		font: 14px verdana;
	}
	
	#yen3 {
		color: #969696;
		font: 14px verdana;
	}
	
	#yen4 {
		display: inline-block;
		width: 56px;
		height: 30px;
		text-decoration: line-through;
		color: #969696;
		font: 14px verdana;
	}
	/*电子书价*/
	
	.price2 {
		display: inline-block;
		margin-left: 30px;
	}
	
	#yen5 {
		display: inline-block;
		width: 8px;
		height: 17px;
		color: #214C90;
		font: 14px verdana;
		text-decoration: none;
	}
	
	#yen6 {
		color: #214C90;
		text-decoration: none;
	}
	
	#yen6:hover {
		text-decoration: underline;
	}
	/*第二大模块*/
	
	.two {
		margin-top: 20px;
		margin-left: 5px;
		/*background-color: navajowhite;*/
	}
	/*配送模块*/
	
	.letter {
		display: inline-block;
	}
	
	.let {
		width: 68px;
		height: 20px;
		line-height: 20px;
		color: #969696;
		white-space: nowrap;
		display: inline-block;
	}
	
	.letter3 {
		letter-spacing: 6px;
		font-size: 14px;
	}
	
	.let2 {
		display: inline-block;
	}
	
	.beijing {
		border: 1px solid #ccc;
		height: 18px;
		line-height: 18px;
		padding: 0 14px 0 5px;
		cursor: pointer;
		margin: 3px 8px 0 0;
		display: inline-block;
		font-size: 10px;
	}
	
	.let3 {
		display: inline-block;
		position: relative;
	}
	
	.let3>a {
		margin-left: 5px;
		text-decoration: none;
		font-size: 14px;
		color: gray;
	}
	
	.let3>a:hover {
		text-decoration: underline;
	}
	
	.let3>a:hover.let3-ul {
		display: block;
	}
	
	.let3-ul {
		list-style: none;
		display: none;
		width: 220px;
		height: 48px;
		position: absolute;
		top: 20px;
		left: 10px;
		border: 1px gainsboro solid;
		background-color: white;
	}
	
	.ulshow {
		display: block !important;
	}
	
	.let3>ul>li {
		font-size: 14px;
		color: gray;
		margin-top: 3px;
		margin-left: 5px;
	}
	/*服务模块*/
	
	.service {
		margin-top: 12px;
		/*background-color: yellow;*/
	}
	
	.letter2 {
		letter-spacing: 24px;
		font-size: 14px;
	}
	
	.ser {
		display: inline-block;
		margin-left: 5px;
		font-size: 14px;
	}
	/*购物车模块*/
	
	.shopping {
		margin-top: 15px;
	}
	
	.shop {
		width: 80px;
		display: inline-block;
		/*background-color: indianred;*/
		vertical-align: middle;
	}
	
	.num {
		display: inline-block;
		width: 38px;
		height: 37px;
		line-height: 32px;
		text-align: center;
		border: 1px gainsboro solid;
		outline: none;
	}
	
	.add {
		display: block;
		width: 23px;
		height: 17px;
		outline: none;
	}
	
	.jian {
		width: 23px;
		height: 17px;
		outline: none;
	}
	
	.shop1 {
		display: inline-block;
		width: 23px;
		height: 37px;
		vertical-align: middle;
		margin-left: -4px;
		/*display: flex;
		flex-direction: column;
		justify-content: space-between;*/
	}
	
	.shop2 {
		display: inline-block;
	}
	
	.gouwu {
		display: inline-block;
		width: 134px;
		height: 36px;
		background-color: #FF2832;
		border-radius: 5px;
		margin-left: 5px;
	}
	
	.gouwu>a {
		text-decoration: none;
		color: white;
		font-size: 17px;
	}
	
	.gouwu:hover {
		background-color: red;
	}
	
	.mail {
		display: inline-block;
		width: 96px;
		height: 36px;
		background-color: #FFEDEE;
		border: 1px #FF2832 solid;
		border-radius: 5px;
		margin-left: 6px;
	}
	
	.mail>a {
		text-decoration: none;
		color: #FF2832;
		font-size: 17px;
	}
	
	.mail:hover {
		background-color: pink;
	}
	
	.book {
		display: inline-block;
		width: 96px;
		height: 36px;
		background-color: #1B82DA;
		border-radius: 5px;
		margin-left: 6px;
	}
	
	.book>a {
		text-decoration: none;
		color: white;
		font-size: 17px;
	}
	
	.book:hover {
		background-color: blue;
	}
	
	.xian {
		display: block;
		margin-top: 5px;
		font-size: 13px;
		color: grey;
	}
	
	.xian>span {
		color: red;
	}
	/*第三模块*/
	
	.three {
		padding-top: 10px;
		width: 695px;
		margin-left: 5px;
	}
	/*短图片*/
	
	.shortbook>a>img {
		display: inline-block;
		width: 590px;
		height: 315px;
	}
	/*分割线*/
	
	.title {
		border-bottom: 2px solid #e5e5e5;
		width: 677px;
		height: 22px;
		margin-top: 15px;
	}
	
	.title>span {
		width: 71px;
		height: 24px;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 12px;
		display: inline-block;
		background-color: #e5e5e5;
		border-left: 2px solid #ff2832;
		padding: 0 30px 0 6px;
		height: 22px;
		padding-bottom: 2px;
		margin-bottom: -2px;
		position: relative;
		font: 14px/22px "Microsoft Yahei";
		color: #323232;
	}
	/*长图*/
	
	.longbook {
		margin-top: 12px;
	}
	
	.longbook>img {
		display: inline-block;
		width: 680px;
		height: 10167px;
	}
	/*编辑推荐*/
	
	.bianji {
		color: #656565;
		line-height: 29px;
		padding: 14px 20px;
		font-size: 14px;
	}
	
	.suojin {
		text-indent: 2em;
	}
	/*右边内容部分*/
	
	.right {
		width: 105px;
		height: 354px;
		border-left: 1px solid gainsboro;
		display: inline-block;
		vertical-align: top;
	}
	
	.right>ul {
		list-style: none;
	}
	
	.right>ul>li>a {
		display: block;
		width: 92px;
		height: 36px;
		line-height: 36px;
		text-align: left;
		font-size: 14px;
		color: #646464;
		margin-top: 5px;
		margin-left: 5px;
		text-decoration: none;
	}
	
	.right>ul>li>a:hover {
		color: red;
	}
	
	.right>ul>li>.jianju {
		letter-spacing: 2em;
	}
	
	.right>ul>li>a>img {
		display: block;
		width: 70px;
	}
	
	.right>ul>li>.free {
		display: block;
		margin-top: 30px;
	}
	
	.right>ul>li>.free:hover {
		color: #646464;
		text-decoration: underline;
	}
	/*侧边栏部分*/
	
	.rightside {
		width: 60px;
		height: 150px;
		position: fixed;
		bottom: 50px;
		right: 0px;
	}
	
	.side {
		width: 50px;
		height: 50px;
		margin-top: 5px;
		background-color: #646464;
	}
	
	.side>a>img {
		display: inline-block;
		width: 45px;
		height: 45px;
	}
	
	.side2 {
		display: block;
		text-decoration: none;
		color: white;
		font-size: 12px;
		height: 50px;
		line-height: 45px;
	}
	
	.side2:hover {
		background-color: red;
	}
</style>