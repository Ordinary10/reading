<template>
	<div class="leftaside">
		<div class="books">图书 <span>|</span> 小说</div>
		<div class="booklist">
		<ul class="lists">
			<li class='ul-li'><a href="">世界名著</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">作品集</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">中国古典小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">四大名著</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">中国当代小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">外国小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">科幻小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">侦探/悬疑/推理</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">情感</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">魔幻小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">社会</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">武侠</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">惊悚/恐怖</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">历史</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">影视小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">官场小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">职场小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">中国近现代小说</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">财经</a><i class="el-icon-arrow-right"></i></li>
			<li class='ul-li'><a href="">军事</a><i class="el-icon-arrow-right"></i></li>
		</ul>
		</div>
		<div class="bottom">
			<div class="bottom-t"><span>推荐分类</span></div>
			<div class="bottom-b">
				<ul>
					<li><a href="">特价小说</a><span>|</span><a href="">原版小说</a></li>
					<li><a href="">小说电子书</a><span>|</span><a href="">网络文学</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Leftaside"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}
.leftaside {
  width: 190px;
}

.books {
  width: 100%;
  height: 40px;
  color: rgb(102, 102, 102);
  font-weight: 900;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
}

.booklist {
  background-color: rgb(244, 243, 239);
  border: 3px solid rgb(187, 167, 158);
}

.lists {
  width: 185px;
}

.ul-li {
  height: 40px;
}

.ul-li::before {
  clear: both;
  content: "";
}

.ul-li::after {
  clear: both;
  content: "";
}

.lists a {
  height: 40px;
  line-height: 40px;
  color: rgb(134, 62, 24);
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  float: left;
}

.lists a:hover {
  color: orangered;
}

.lists i {
  color: rgb(127, 111, 77);
  float: right;
  line-height: 40px;
}

.bottom {
	width: 190px;
	height: 100px;
	border: 1px solid rgb(187, 167, 158);
	margin-top: 10px;
}

.bottom-t {
	width: 100%;
	height: 30px;
	background-color: rgb(244, 243, 239);
	color:rgb(134, 62, 24);
	font-weight: bold;
}

.bottom-t span {
	margin-left: 10px;
	line-height: 30px;
}

.bottom-b li {
	margin-top:12px;
	font-size: 12px;
}

.bottom-b a {
	height: 20px;
	color: rgb(115,94,64);
	padding: 0 15px 0 15px;
}

.bottom-b a:hover {
	color:orangered;
	text-decoration: underline;
	
}
</style>