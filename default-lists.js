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
