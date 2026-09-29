// 长沙实地调研厂家数据（坐标待填充：WGS-84，来自 OSM/Photon 地理编码）
// confidence: high=精确, medium=道路/片区近似, low=街道镇级近似, none=未定位
// dup: 调研名单中出现次数
window.CENTER = {
  name: "湘江科技创新院（湘江创智园）",
  address: "长沙市岳麓区麓景路751号",
  lng: 112.9089348,
  lat: 28.1696698,
  source: "OSM（Photon）：湘江创智园 POI，岳麓街道"
};

window.FACTORY_DATA = [
  { id: 1,  name: "长沙盈鑫机械钣金加工厂",         address: "岳麓区天顶街道青山村茅屋湾组3号", lng: 112.88373, lat: 28.2051221, confidence: "medium", source: "58同城招聘 + 邮编库 + OSM天顶街道", note: "58同城公司地址字段明确含该厂名；坐标为天顶街道级近似", dup: 1 },
  { id: 2,  name: "鑫诚模具机械加工厂",             address: "岳麓区（具体门牌未查到；百度地图POI“鑫诚模具机械”）", lng: 112.8443132, lat: 28.1360379, confidence: "low", source: "百度地图POI + OSM区级", note: "仅确认位于岳麓区，区级近似，具体门牌待确认", dup: 1 },
  { id: 3,  name: "长沙市博至机械制造有限公司",     address: "岳麓区（具体门牌未查到；百度地图POI标注岳麓区）", lng: 112.8473132, lat: 28.1380379, confidence: "low", source: "百度地图POI + OSM区级", note: "仅确认位于岳麓区，区级近似，具体门牌待确认", dup: 1 },
  { id: 4,  name: "长沙青鑫机械加工厂",             address: "岳麓区（百度地图POI“长沙青鑫机械加工厂”；可能关联：长沙青鑫机械有限公司，桐梓坡西路229号科研楼408-2房）", lng: 112.8503132, lat: 28.1400379, confidence: "low", source: "百度地图POI + 猎聘 + OSM区级", note: "仅确认位于岳麓区，区级近似；桐梓坡西路229号为同名有限公司注册地址，仅供参考", dup: 1 },
  { id: 5,  name: "长沙威达机械加工厂",             address: "岳麓区（对应工商主体：长沙市岳麓区威达机械加工厂，具体门牌未查到）", lng: 112.8413132, lat: 28.1340379, confidence: "low", source: "天眼查 + OSM区级", note: "仅确认位于岳麓区，区级近似，具体门牌待确认", dup: 1 },
  { id: 6,  name: "长沙宇橙精密机械有限公司",       address: "披塘割板市场片区（推测，具体门牌待补充）", lng: 112.9745, lat: 28.0810, confidence: "low", source: "用户确认片区", note: "用户确认位于披塘割板市场片区，推测标注，具体门牌待补充", dup: 1 },
  { id: 7,  name: "长沙佳硕精密机械有限公司",       address: "披塘割板市场片区（推测，具体门牌待补充）", lng: 112.9730, lat: 28.0823, confidence: "low", source: "用户确认片区", note: "用户确认位于披塘割板市场片区，推测标注，具体门牌待补充", dup: 1 },
  { id: 8,  name: "长沙高新开发区航杰机械厂",       address: "长沙高新开发区湖南涉外经济学院东院八栋负一层（岳麓区枫林三路）", lng: 112.8703051, lat: 28.2055356, confidence: "high", source: "猎聘/启信宝工商信息 + OSM涉外经济学院", note: "注册地址精确，位于涉外经济学院内", dup: 1 },
  { id: 9,  name: "长沙威铭机械设备有限公司",       address: "披塘割板市场片区（推测，具体门牌待补充）", lng: 112.9749, lat: 28.0800, confidence: "low", source: "用户确认片区", note: "用户确认位于披塘割板市场片区，推测标注，具体门牌待补充", dup: 1 },
  { id: 10, name: "诚实机械设计加工厂",             address: "雨花区洞井街道湘府东路二段200号华坤大楼1210房（对应：湖南诚实金属制品制造有限公司）", lng: 113.0263524, lat: 28.1151194, confidence: "medium", source: "猎聘/启信宝 + OSM湘府东路", note: "注册地址为写字楼，坐标为湘府东路道路级近似；曾用地址：岳麓区天顶街道青山村屋湾组26号", dup: 1 },
  { id: 11, name: "湘仪机械加工(湘仪家园店)",       address: "岳麓区望城坡街道湘仪路114号 湘仪家园（汽车西站商圈）", lng: 112.903298, lat: 28.2187807, confidence: "medium", source: "房天下 + OSM湘仪家园POI", note: "湘仪家园小区沿街门店，小区级定位", dup: 1 },
  { id: 12, name: "激光切割焊接加工",               address: "披塘割板市场片区（推测，具体门牌待补充）", lng: 112.9722, lat: 28.0812, confidence: "low", source: "用户确认片区", note: "用户确认位于披塘割板市场片区，推测标注，具体门牌待补充", dup: 1 },
  { id: 13, name: "披塘割板市场",                   address: "天心区先锋街道 天心大道", lng: 112.9737123, lat: 28.0814608, confidence: "high", source: "OSM（Photon）：建筑级 POI 直接命中", note: "", dup: 1 },
  { id: 14, name: "晶鑫钢构",                       address: "加工厂：天心区大托铺街道黄合村；注册地址：开福区双拥路301号如果爱1单元2101室", lng: 112.9485347, lat: 28.0591696, confidence: "low", source: "官网 hnjxgjg.net + OSM街道级", note: "黄合村OSM无数据，取大托铺街道中心点，建议现场核对", dup: 1 },
  { id: 15, name: "聚宝隆激光切割",                 address: "天心区披塘割板市场内B-07栋（湖南聚宝隆金属制品有限公司）", lng: 112.9737123, lat: 28.0814608, confidence: "high", source: "天贸信息网 + OSM披塘割板市场", note: "位于披塘割板市场内", dup: 1 },
  { id: 16, name: "大金大钢材加工",                 address: "天心区黑石铺街道披塘村刘家铺组 披塘割板市场A03栋（长沙大金大钢材模具有限公司）", lng: 112.9737123, lat: 28.0814608, confidence: "high", source: "企业库 qiyeku.cn + OSM披塘割板市场", note: "位于披塘割板市场内", dup: 2 },
  { id: 17, name: "湖南宏航钢材贸易有限公司",       address: "天心区大托镇披塘村 披塘割板市场2号门1栋（一力物流钢材大市场旁）", lng: 112.9737123, lat: 28.0814608, confidence: "high", source: "天贸信息网/电话邦 + OSM披塘割板市场", note: "位于披塘割板市场内", dup: 2 },
  { id: 18, name: "长沙北兆机械加工有限公司",       address: "天心区黑石铺街道披塘村刘家铺组B区7栋6号（披塘割板市场内；注册名：长沙北兆机械有限公司）", lng: 112.9737123, lat: 28.0814608, confidence: "high", source: "天贸钢铁网/天眼查/天心区政府公示 + OSM", note: "位于披塘割板市场内，门牌级近似市场中心", dup: 1 },
  { id: 19, name: "亚华兆龙加工部",                 address: "天心区黑石铺街道披塘村刘家铺组 披塘割板市场内（疑似“长沙市天心区兆龙金属材料加工部”）", lng: 112.9737123, lat: 28.0814608, confidence: "medium", source: "长沙晚报网/天眼查 + OSM", note: "名称未完全证实，位于披塘割板市场内，市场级定位", dup: 1 },
  { id: 20, name: "中锐钢构",                       address: "披塘割板市场片区（推测，具体门牌待补充）", lng: 112.9753, lat: 28.0828, confidence: "low", source: "用户确认片区", note: "用户确认位于披塘割板市场片区，推测标注，具体门牌待补充", dup: 1 },
  { id: 21, name: "泓胜激光切割",                   address: "天心区大托镇披塘村1栋（长沙泓胜金属制品有限公司）", lng: 112.9814949, lat: 28.0860937, confidence: "medium", source: "智联招聘 + OSM披塘路", note: "“披塘村1栋”无OSM门牌数据，取披塘路片区近似", dup: 1 }
];
