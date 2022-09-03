
import { BigMirror } from "./ClassBigMirror.js";


var data = {
    "goods_id": 1,
    "history": "中国军方于 2014 年启动了常规布局步枪的开发，多家制造商参与了开发和招标过程。新武器平台的各种原型在 2016 年和 2017 年在网上泄露。[3] [4]\r\n\r\nQBZ-191步枪由北方工业208研究所设计，该研究所还设计了QBZ-95突击步枪。据208研究所所长介绍，QBZ-191是新型“单兵综合作战系统”的组成部分，旨在对解放军的步兵装备进行大修。[5]\r\n\r\nQBZ-191 于 2019 年中国国庆阅兵中首次公布，将逐步取代 QBZ-95 步枪家族在中国军队服役。QBZ-191 具有多项改进，旨在解决 95 式平台的人机工程学等不令人满意的问题",
    "design": "与无托式 QBZ-95相比，QBZ-191 采用传统配置，大大改进了人体工程学、灵巧的可用性以及在不同环境中更好的可靠性。[3]该平台具有各种枪管长度和护木配置。在 2019 年的阅兵式期间，车辆工作人员携带了一个较短的卡宾枪版本。[7]\r\n\r\nQBZ-191 步枪的顶部有一个全长皮卡汀尼导轨，标配新的 3 倍日光棱镜光学元件，称为 QMK152 和 QMK-171A，同时还提供热瞄准器。DMR 变体配备了一个新的 4-15 倍低功率狙击镜，称为 QMK-191，[1]，还可以配备 IR5118 数字夜视/热镜。[8]步枪还配备了备用铁瞄准具，不用时可以折叠起来。[3]主体分为上机匣和下机匣，均由铝合金制成并由两个装配销连接，而护手、手枪式握把和伸缩枪托由聚合物材料制成。护手在其 3 点钟、6 点钟和 9 点钟位置有额外的装置，可以通过螺丝孔选择性地安装小部分皮卡汀尼导轨，以便安装各种配件，如手电筒、激光模块、前握把和两脚架. [3] [6]往复式 充电手柄位于右侧，而螺栓-释放按钮位于左侧，“锁定”弹匣插入井上方。该武器采用带有旋转螺栓的短行程活塞气体操作设计。[6] [5]\r\n\r\n该步枪改进了人体工程学，具有 4 位置可调节枪托、灵巧的火力选择器和位于扳机护罩前面的加长弹匣释放杆，以便在戴手套时快速重新加载或更容易操作。新的聚合物弹匣具有重新设计的表面纹理，以提供更好的抓握力，以及一个透明的弹药检查窗口。[5]武器平台还可以安装刺刀和消音器。[3] [6]\r\n\r\n据中国媒体报道，QBZ-191步枪采用中国专有的5.8×42mm口径，配备重新设计的DBP-191弹药，在中远程具有更好的弹道性能。[9] [10]步枪被设计成三种变体：标准步枪版本，368.3 毫米（14.5 英寸）枪管，卡宾枪版本，266.7 毫米（10.5 英寸）枪管，以及长管指定射手步枪名为QBU-191 的版本。[11]标准 QBZ-191 的全自动射速为每分钟 750 发。QBU-191 指定的射手步枪保留了全自动功能，可以轻松配置为带弹匣的轻型支援武器。",
    "describe_img_src": "describeQBZ191.png",
    "goods_img_src": "01QBZ191.png",
    "goods_name": "QBZ191",
    "goods_price": 200,
    "goods_describe": "QBZ-191自动步枪是一款由中华人民共和国研制生产的突击步枪。突击步枪型，枪管长14.5英寸（368.3 mm）"
}


export default
    class Describe {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
        this.render();
    }

    render() {
        let div = document.createElement("div");
        div.style.cssText = `
        position:relative;
        background:url(./images/goods/${this.describe_img_src});
        background-size: cover;
        width:399px;
        height:266px;
        `
        div.className = "box"
        document.body.appendChild(div);

        new BigMirror({
            imgBox: ".box",
            img: `./images/goods/${this.describe_img_src}`,
            multiple: 5
        });
    }
}


