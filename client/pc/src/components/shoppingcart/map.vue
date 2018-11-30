<template>
	<div id="map">
		<select @change="provinceChange">
			<option v-for="province in provinceList">{{province}}</option>
		</select>
		<select @change="cityChange">
			<option v-for="city in cityList">{{city}}</option>
		</select>
		<select>
			<option v-for="district in districtList">{{district}}</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'map',
		mounted() {
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = 'https://webapi.amap.com/maps?v=1.4.8&key=a42f8fc982b7fcf299e5c4579ab2c419';
			document.body.appendChild(s);
			this.init();
		},
		data() {
			return {
				map: '',
				districtSearch: '',
				provinceList: [],
				cityList: [],
				districtList: []
			}
		},
		methods: {
			init: function() {
				var _this = this;
				AMap.plugin('AMap.DistrictSearch', function() {
					_this.districtSearch = new AMap.DistrictSearch({
						level: 'country',
						subdistrict: 1
					})
				});
				this.districtSearch.search('中国', function(status, result) {
					var list = result.districtList[0]['districtList'];
					for(var i = 0; i < list.length; i++) {
						_this.provinceList.push(list[i].name);
					}
				})
			},
			provinceChange: function(e) {
				var _this = this;
				var provinceName = e.target.value;
				this.cityList = [];
				this.districtSearch.search(provinceName, function(status, result) {
					var list = result.districtList[0]['districtList'];
					for(var i = 0; i < list.length; i++) {
						_this.cityList.push(list[i].name);
					}
				})
			},
			cityChange: function(e) {
				var _this = this;
				var cityName = e.target.value;
				this.districtList = [];
				this.districtSearch.search(cityName, function(status, result) {
					var list = result.districtList[0]['districtList'];
					for(var i = 0; i < list.length; i++) {
						_this.districtList.push(list[i].name);
					}
				})
			}
		}
	}
</script>

<style>

</style>