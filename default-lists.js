// 默认单词列表数据
const DEFAULT_LISTS = {
  // 通用列表
  "默认列表": [
    { english: "apple", phonetic: "/ˈæpl/", chinese: "苹果" },
    { english: "banana", phonetic: "/bəˈnɑːnə/", chinese: "香蕉" },
    { english: "computer", phonetic: "/kəmˈpjuːtə/", chinese: "电脑" },
    { english: "elephant", phonetic: "/ˈelɪfənt/", chinese: "大象" },
    { english: "friend", phonetic: "/frend/", chinese: "朋友" },
    { english: "guitar", phonetic: "/ɡɪˈtɑː(r)/", chinese: "吉他" },
    { english: "hospital", phonetic: "/ˈhɒspɪtl/", chinese: "医院" },
    { english: "internet", phonetic: "/ˈɪntənet/", chinese: "互联网" },
    { english: "jungle", phonetic: "/ˈdʒʌŋɡl/", chinese: "丛林" },
    { english: "kangaroo", phonetic: "/ˌkæŋɡəˈruː/", chinese: "袋鼠" }
  ],
  "雅思列表1": [
    {
       english: "ability",
      phonetic: "/əˈbɪləti/",
      chinese: "能力"
    },
    {
       english: "acid",
      phonetic: "/ˈæsɪd/",
      chinese: "酸"
    },
    {
       english: "adults",
      phonetic: "/əˈdʌlts/",
      chinese: "成年人"
    },
    {
       english: "advice",
      phonetic: "/ədˈvaɪs/",
      chinese: "建议"
    },
    {
       english: "agriculture",
      phonetic: "/ˈæɡrɪkʌltʃər/",
      chinese: "农业"
    },
    {
       english: "allergic",
      phonetic: "/əˈlɜːdʒɪk/",
      chinese: "过敏的"
    },
    {
       english: "altitude",
      phonetic: "/ˈæltɪtjuːd/",
      chinese: "高度"
    },
    {
       english: "analysis",
      phonetic: "/əˈnæləsɪs/",
      chinese: "分析"
    },
    {
       english: "ankle",
      phonetic: "/ˈæŋkl/",
      chinese: "脚踝"
    },
    {
       english: "appearance",
      phonetic: "/əˈpɪərəns/",
      chinese: "外貌"
    },
    {
       english: "argument",
      phonetic: "/ˈˈɑːɡjʊmənt/",
      chinese: "争论"
    },
    {
       english: "article",
      phonetic: "/ˈɑːtɪkl/",
      chinese: "文章"
    },
    {
       english: "audience",
      phonetic: "/ˈɔːdiəns/",
      chinese: "观众"
    },
    {
       english: "average",
      phonetic: "/ˈævərɪdʒ/",
      chinese: "平均"
    },
    {
       english: "bacteria",
      phonetic: "/bækˈtɪəɹɪə/",
      chinese: "细菌"
    },
    {
       english: "baldness",
      phonetic: "/ˈbɔːldnəs/",
      chinese: "秃头"
    },
    {
       english: "bank",
      phonetic: "/bæŋk/",
      chinese: "银行"
    },
    {
       english: "bases",
      phonetic: "/ˈbeɪsiːz/",
      chinese: "基础"
    },
    {
       english: "battery",
      phonetic: "/ˈbætəri/",
      chinese: "电池"
    },
    {
       english: "beauty",
      phonetic: "/ˈbjuːti/",
      chinese: "美丽"
    },
    {
       english: "bedsit",
      phonetic: "/ˈbɛdsɪt/",
      chinese: "一室公寓"
    },
    {
       english: "beverage",
      phonetic: "/ˈbɛvərɪdʒ/",
      chinese: "饮料"
    },
    {
       english: "biologist",
      phonetic: "/baɪˈɒlədʒɪst/",
      chinese: "生物学家"
    },
    {
       english: "blast",
      phonetic: "/blæst/",
      chinese: "爆炸"
    },
    {
       english: "boarder",
      phonetic: "/ˈbɔːdə/",
      chinese: "住宿生"
    },
    {
       english: "bowling",
      phonetic: "/ˈbəʊlɪŋ/",
      chinese: "保龄球"
    },
    {
       english: "bridge",
      phonetic: "/brɪdʒ/",
      chinese: "桥"
    },
    {
       english: "burger",
      phonetic: "/ˈbɜːɡər/",
      chinese: "汉堡"
    },
    {
       english: "abstract",
      phonetic: "/ˈæbstrækt/",
      chinese: "抽象的"
    },
    {
       english: "action",
      phonetic: "/ˈækʃən/",
      chinese: "行动"
    },
    {
       english: "adventure",
      phonetic: "/ədˈvɛntʃər/",
      chinese: "冒险"
    },
    {
       english: "age",
      phonetic: "/eɪdʒ/",
      chinese: "年龄"
    },
    {
       english: "aid",
      phonetic: "/eɪd/",
      chinese: "援助"
    },
    {
       english: "alley",
      phonetic: "/ˈæli/",
      chinese: "小巷"
    },
    {
       english: "ambition",
      phonetic: "/æmˈbɪʃən/",
      chinese: "野心"
    },
    {
       english: "analyst",
      phonetic: "/ˈænəlɪst/",
      chinese: "分析员"
    },
    {
       english: "answer",
      phonetic: "/ˈɑːnsər/",
      chinese: "回答"
    },
    {
       english: "architect",
      phonetic: "/ˈɑːrkɪtɛkt/",
      chinese: "建筑师"
    },
    {
       english: "aristocrat",
      phonetic: "/ˈærɪstəkræt/",
      chinese: "贵族"
    },
    {
       english: "aspirin",
      phonetic: "/ˈæspərɪn/",
      chinese: "阿司匹林"
    },
    {
       english: "auditorium",
      phonetic: "/ˌɔːdɪˈtɔːrɪəm/",
      chinese: "礼堂"
    },
    {
       english: "award",
      phonetic: "/əˈwɔːd/",
      chinese: "奖项"
    },
    {
       english: "badge",
      phonetic: "/bædʒ/",
      chinese: "徽章"
    },
    {
       english: "band",
      phonetic: "/bænd/",
      chinese: "乐队"
    },
    {
       english: "banquet",
      phonetic: "/ˈbæŋkwɪt/",
      chinese: "宴会"
    },
    {
       english: "basis",
      phonetic: "/ˈbeɪsɪs/",
      chinese: "基础"
    },
    {
       english: "beach",
      phonetic: "/biːtʃ/",
      chinese: "海滩"
    },
    {
       english: "bed",
      phonetic: "/bɛd/",
      chinese: "床"
    },
    {
       english: "behaviors",
      phonetic: "/bɪˈheɪvjərz/",
      chinese: "行为"
    },
    {
       english: "bibliography",
      phonetic: "/ˌbɪblɪˈɒɡrəfi/",
      chinese: "参考书目"
    },
    {
       english: "birds",
      phonetic: "/bɜːdz/",
      chinese: "鸟"
    },
    {
       english: "block",
      phonetic: "/blɒk/",
      chinese: "阻塞"
    },
    {
       english: "boat",
      phonetic: "/bəʊt/",
      chinese: "船"
    },
    {
       english: "branch",
      phonetic: "/bræntʃ/",
      chinese: "树枝"
    },
    {
       english: "brochures",
      phonetic: "/broʊˈʃʊrz/",
      chinese: "宣传册"
    },
    {
       english: "burglar",
      phonetic: "/ˈbɜːɡlər/",
      chinese: "小偷"
    },
    {
       english: "accountant",
      phonetic: "/əˈkaʊntənt/",
      chinese: "会计"
    },
    {
       english: "activity",
      phonetic: "/ækˈtɪvəti/",
      chinese: "活动"
    },
    {
       english: "advertisements",
      phonetic: "/ədˈvɜːtɪzmənts/",
      chinese: "广告"
    },
    {
       english: "agency",
      phonetic: "/ˈeɪdʒənsi/",
      chinese: "代理机构"
    },
    {
       english: "aim",
      phonetic: "/eɪm/",
      chinese: "目标"
    },
    {
       english: "allowance",
      phonetic: "/əˈlaʊəns/",
      chinese: "津贴"
    },
    {
       english: "ambulance",
      phonetic: "/ˈæmbjʊləns/",
      chinese: "救护车"
    },
    {
       english: "anger",
      phonetic: "/ˈæŋɡər/",
      chinese: "生气"
    },
    {
       english: "Antarctica",
      phonetic: "/æntˈɑːrktɪkə/",
      chinese: "南极洲"
    },
    {
       english: "architectures",
      phonetic: "/ˈɑːrkɪtɛktjʊrz/",
      chinese: "建筑学"
    },
    {
       english: "army",
      phonetic: "/ˈɑːrmi/",
      chinese: "军队"
    },
    {
       english: "assignment",
      phonetic: "/əˈsaɪnmənt/",
      chinese: "任务"
    },
    {
       english: "author",
      phonetic: "/ˈɔːθər/",
      chinese: "作者"
    },
    {
       english: "bachelor",
      phonetic: "/ˈbætʃələr/",
      chinese: "学士"
    },
    {
       english: "badminton",
      phonetic: "/ˈbædmɪntən/",
      chinese: "羽毛球"
    },
    {
       english: "bandage",
      phonetic: "/ˈbændɪdʒ/",
      chinese: "绷带"
    },
    {
       english: "base",
      phonetic: "/beɪs/",
      chinese: "基地"
    },
    {
       english: "bath",
      phonetic: "/bɑːθ/",
      chinese: "浴缸"
    },
    {
       english: "beard",
      phonetic: "/bɪərd/",
      chinese: "胡须"
    },
    {
       english: "bedroom",
      phonetic: "/ˈbɛdrʊm/",
      chinese: "卧室"
    },
    {
       english: "belt",
      phonetic: "/bɛlt/",
      chinese: "皮带"
    },
    {
       english: "bicycle",
      phonetic: "/ˈbaɪsɪkəl/",
      chinese: "自行车"
    },
    {
       english: "birth",
      phonetic: "/bɜːrθ/",
      chinese: "出生"
    },
    {
       english: "blouse",
      phonetic: "/blaʊz/",
      chinese: "女衬衫"
    },
    {
       english: "bone",
      phonetic: "/boʊn/",
      chinese: "骨头"
    },
    {
       english: "breakfast",
      phonetic: "/ˈbrɛkfəst/",
      chinese: "早餐"
    },
    {
       english: "building",
      phonetic: "/ˈbɪldɪŋ/",
      chinese: "建筑物"
    },
    {
       english: "bus",
      phonetic: "/bʌs/",
      chinese: "公交车"
    },
    {
       english: "accuracy",
      phonetic: "/ˈækjʊrəsi/",
      chinese: "准确性"
    },
    {
       english: "actor",
      phonetic: "/ˈæktər/",
      chinese: "演员"
    },
    {
       english: "advertising",
      phonetic: "/ˈædvərˌtaɪzɪŋ/",
      chinese: "广告业"
    },
    {
       english: "agreement",
      phonetic: "/əˈɡriːmənt/",
      chinese: "协议"
    },
    {
       english: "air",
      phonetic: "/ɛər/",
      chinese: "空气"
    },
    {
       english: "alteration",
      phonetic: "/ˌɔːltəˈreɪʃən/",
      chinese: "改变"
    },
    {
       english: "amount",
      phonetic: "/əˈmaʊnt/",
      chinese: "数量"
    },
    {
       english: "animal",
      phonetic: "/ˈænɪməl/",
      chinese: "动物"
    },
    {
       english: "ape",
      phonetic: "/eɪp/",
      chinese: "猿"
    },
    {
       english: "area",
      phonetic: "/ˈɛəɹɪə/",
      chinese: "区域"
    },
    {
       english: "art",
      phonetic: "/ɑːrt/",
      chinese: "艺术"
    },
    {
       english: "atlas",
      phonetic: "/ˈætləs/",
      chinese: "地图册"
    },
    {
       english: "authority",
      phonetic: "/ɔːˈθɒrɪti/",
      chinese: "权威"
    },
    {
       english: "background",
      phonetic: "/ˈbækɡraʊnd/",
      chinese: "背景"
    },
    {
       english: "backpack",
      phonetic: "/ˈbækˌpæk/",
      chinese: "背包"
    },
    {
       english: "bands",
      phonetic: "/bændz/",
      chinese: "乐队"
    },
    {
       english: "basement",
      phonetic: "/ˈbeɪsmənt/",
      chinese: "地下室"
    },
    {
       english: "batteries",
      phonetic: "/ˈbætəriz/",
      chinese: "电池"
    },
    {
       english: "beats",
      phonetic: "/biːts/",
      chinese: "节拍"
    },
    {
       english: "bed-sheet",
      phonetic: "/ˈbɛdʃiːt/",
      chinese: "床单"
    },
    {
       english: "benefit",
      phonetic: "/ˈbɛnɪfɪt/",
      chinese: "好处"
    },
    {
       english: "bill",
      phonetic: "/bɪl/",
      chinese: "账单"
    },
    {
       english: "blanket",
      phonetic: "/ˈblæŋkɪt/",
      chinese: "毯子"
    },
    {
       english: "board",
      phonetic: "/bɔːrd/",
      chinese: "板"
    },
    {
       english: "bowl",
      phonetic: "/bəʊl/",
      chinese: "碗"
    },
    {
       english: "brick",
      phonetic: "/brɪk/",
      chinese: "砖"
    },
    {
       english: "bungalow",
      phonetic: "/ˈbʌŋɡəloʊ/",
      chinese: "平房"
    },
    {
        english: "cab",
      phonetic: "/kæb/",
      chinese: "出租车"
    }
  ],
  // 动物列表
  "动物列表": [
    { english: "cat", phonetic: "/kæt/", chinese: "猫" },
    { english: "dog", phonetic: "/dɒɡ/", chinese: "狗" },
    { english: "bird", phonetic: "/bɜːd/", chinese: "鸟" },
    { english: "fish", phonetic: "/fɪʃ/", chinese: "鱼" },
    { english: "rabbit", phonetic: "/ˈræbɪt/", chinese: "兔子" },
    { english: "tiger", phonetic: "/ˈtaɪɡə/", chinese: "老虎" },
    { english: "lion", phonetic: "/ˈlaɪən/", chinese: "狮子" },
    { english: "bear", phonetic: "/beə/", chinese: "熊" },
    { english: "monkey", phonetic: "/ˈmʌŋki/", chinese: "猴子" },
    { english: "panda", phonetic: "/ˈpændə/", chinese: "熊猫" }
  ],
  
  // 颜色列表
  "颜色列表": [
    { english: "red", phonetic: "/red/", chinese: "红色" },
    { english: "blue", phonetic: "/bluː/", chinese: "蓝色" },
    { english: "green", phonetic: "/ɡriːn/", chinese: "绿色" },
    { english: "yellow", phonetic: "/ˈjeləʊ/", chinese: "黄色" },
    { english: "black", phonetic: "/blæk/", chinese: "黑色" },
    { english: "white", phonetic: "/waɪt/", chinese: "白色" },
    { english: "purple", phonetic: "/ˈpɜːpl/", chinese: "紫色" },
    { english: "orange", phonetic: "/ˈɒrɪndʒ/", chinese: "橙色" },
    { english: "pink", phonetic: "/pɪŋk/", chinese: "粉色" },
    { english: "brown", phonetic: "/braʊn/", chinese: "棕色" }
  ],
  
  // 数字列表
  "数字列表": [
    { english: "one", phonetic: "/wʌn/", chinese: "一" },
    { english: "two", phonetic: "/tuː/", chinese: "二" },
    { english: "three", phonetic: "/θriː/", chinese: "三" },
    { english: "four", phonetic: "/fɔː/", chinese: "四" },
    { english: "five", phonetic: "/faɪv/", chinese: "五" },
    { english: "six", phonetic: "/sɪks/", chinese: "六" },
    { english: "seven", phonetic: "/ˈsevən/", chinese: "七" },
    { english: "eight", phonetic: "/eɪt/", chinese: "八" },
    { english: "nine", phonetic: "/naɪn/", chinese: "九" },
    { english: "ten", phonetic: "/ten/", chinese: "十" }
  ],
  
  // 食物列表
  "食物列表": [
    { english: "rice", phonetic: "/raɪs/", chinese: "米饭" },
    { english: "bread", phonetic: "/bred/", chinese: "面包" },
    { english: "milk", phonetic: "/mɪlk/", chinese: "牛奶" },
    { english: "egg", phonetic: "/eɡ/", chinese: "鸡蛋" },
    { english: "meat", phonetic: "/miːt/", chinese: "肉" },
    { english: "fish", phonetic: "/fɪʃ/", chinese: "鱼" },
    { english: "chicken", phonetic: "/ˈtʃɪkɪn/", chinese: "鸡肉" },
    { english: "beef", phonetic: "/biːf/", chinese: "牛肉" },
    { english: "pork", phonetic: "/pɔːk/", chinese: "猪肉" },
    { english: "vegetable", phonetic: "/ˈvedʒtəbl/", chinese: "蔬菜" }
  ],
  
  // 水果列表
  "水果列表": [
    { english: "apple", phonetic: "/ˈæpl/", chinese: "苹果" },
    { english: "banana", phonetic: "/bəˈnɑːnə/", chinese: "香蕉" },
    { english: "orange", phonetic: "/ˈɒrɪndʒ/", chinese: "橙子" },
    { english: "grape", phonetic: "/ɡreɪp/", chinese: "葡萄" },
    { english: "pear", phonetic: "/peə/", chinese: "梨" },
    { english: "peach", phonetic: "/piːtʃ/", chinese: "桃子" },
    { english: "watermelon", phonetic: "/ˈwɔːtəˌmelən/", chinese: "西瓜" },
    { english: "strawberry", phonetic: "/ˈstrɔːbəri/", chinese: "草莓" },
    { english: "mango", phonetic: "/ˈmæŋɡəʊ/", chinese: "芒果" },
    { english: "pineapple", phonetic: "/ˈpaɪnæpl/", chinese: "菠萝" }
  ],
  
  // 交通工具列表
  "交通工具列表": [
    { english: "car", phonetic: "/kɑː/", chinese: "汽车" },
    { english: "bus", phonetic: "/bʌs/", chinese: "公共汽车" },
    { english: "bike", phonetic: "/baɪk/", chinese: "自行车" },
    { english: "train", phonetic: "/treɪn/", chinese: "火车" },
    { english: "plane", phonetic: "/pleɪn/", chinese: "飞机" },
    { english: "ship", phonetic: "/ʃɪp/", chinese: "船" },
    { english: "boat", phonetic: "/bəʊt/", chinese: "小船" },
    { english: "taxi", phonetic: "/ˈtæksi/", chinese: "出租车" },
    { english: "subway", phonetic: "/ˈsʌbweɪ/", chinese: "地铁" },
    { english: "motorcycle", phonetic: "/ˈməʊtəˌsaɪkl/", chinese: "摩托车" }
  ],
  
  // 家庭成员列表
  "家庭成员列表": [
    { english: "father", phonetic: "/ˈfɑːðə/", chinese: "父亲" },
    { english: "mother", phonetic: "/ˈmʌðə/", chinese: "母亲" },
    { english: "brother", phonetic: "/ˈbrʌðə/", chinese: "兄弟" },
    { english: "sister", phonetic: "/ˈsɪstə/", chinese: "姐妹" },
    { english: "grandfather", phonetic: "/ˈɡræændˌfɑː/", chinese: "祖父" },
    { english: "grandmother", phonetic: "/ˈɡrænmʌðə/", chinese: "祖母" },
    { english: "uncle", phonetic: "/ˈʌŋkl/", chinese: "叔叔" },
    { english: "aunt", phonetic: "/ɑːnt/", chinese: "阿姨" },
    { english: "cousin", phonetic: "/ˈkʌzn/", chinese: "堂兄弟姐妹" },
    { english: "son", phonetic: "/sʌn/", chinese: "儿子" }
  ],
  
  // 学校列表
  "学校列表": [
    { english: "school", phonetic: "/skuːl/", chinese: "学校" },
    { english: "teacher", phonetic: "/ˈtiːtʃə/", chinese: "老师" },
    { english: "student", phonetic: "/ˈstjuːdənt/", chinese: "学生" },
    { english: "book", phonetic: "/bʊk/", chinese: "书" },
    { english: "pen", phonetic: "/pen/", chinese: "钢笔" },
    { english: "pencil", phonetic: "/ˈpensəl/", chinese: "铅笔" },
    { english: "classroom", phonetic: "/ˈklɑːsruːm/", chinese: "教室" },
    { english: "desk", phonetic: "/desk/", chinese: "课桌" },
    { english: "chair", phonetic: "/tʃeə/", chinese: "椅子" },
    { english: "blackboard", phonetic: "/ˈblækbɔːd/", chinese: "黑板" }
  ],
  
  // 职业列表
  "职业列表": [
    { english: "doctor", phonetic: "/ˈdɒktə/", chinese: "医生" },
    { english: "teacher", phonetic: "/ˈtiːtʃə/", chinese: "老师" },
    { english: "engineer", phonetic: "/ˌendʒɪˈnɪə/", chinese: "工程师" },
    { english: "police", phonetic: "/pəˈliːs/", chinese: "警察" },
    { english: "firefighter", phonetic: "/ˈaɪəˌfaɪtə/", chinese: "消防员" },
    { english: "nurse", phonetic: "/nɜːs/", chinese: "护士" },
    { english: "farmer", phonetic: "/ˈfɑːmə/", chinese: "农民" },
    { english: "cook", phonetic: "/kʊk/", chinese: "厨师" },
    { english: "artist", phonetic: "/ˈɑːtɪst/", chinese: "艺术家" },
    { english: "musician", phonetic: "/mjuːˈzɪʃən/", chinese: "音乐家" }
  ]
};

// 导出默认列表数据
const DEFAULT_WORDS = DEFAULT_LISTS["默认列表"];
const ANIMALS_WORDS = DEFAULT_LISTS["动物列表"];
const COLORS_WORDS = DEFAULT_LISTS["颜色列表"];
const NUMBERS_WORDS = DEFAULT_LISTS["数字列表"];
const FOOD_WORDS = DEFAULT_LISTS["食物列表"];
const FRUITS_WORDS = DEFAULT_LISTS["水果列表"];
const TRANSPORT_WORDS = DEFAULT_LISTS["交通工具列表"];
const FAMILY_WORDS = DEFAULT_LISTS["家庭列表"];
const SCHOOL_WORDS = DEFAULT_LISTS["学校列表"];
const OCCUPATIONS_WORDS = DEFAULT_LISTS["职业列表"];
