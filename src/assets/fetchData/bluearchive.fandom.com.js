// links = []
// for(var link of document.getElementsByClassName("category-page__member-link")){
//     links.push(link.href)
// }
var links = [
  "https://bluearchive.fandom.com/wiki/Aikiyo_Fuuka",
  "https://bluearchive.fandom.com/wiki/Aikiyo_Fuuka_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Ajitani_Hifumi",
  "https://bluearchive.fandom.com/wiki/Ajitani_Hifumi_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Akashi_Junko",
  "https://bluearchive.fandom.com/wiki/Akashi_Junko_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Akeboshi_Himari",
  "https://bluearchive.fandom.com/wiki/Akeshiro_Rumi",
  "https://bluearchive.fandom.com/wiki/Amami_Nodoka",
  "https://bluearchive.fandom.com/wiki/Amami_Nodoka_(Hot_Spring_ver.)",
  "https://bluearchive.fandom.com/wiki/Amau_Ako",
  "https://bluearchive.fandom.com/wiki/Aomori_Mine",
  "https://bluearchive.fandom.com/wiki/Asagao_Hanae",
  "https://bluearchive.fandom.com/wiki/Asagao_Hanae_(Christmas_ver.)",
  "https://bluearchive.fandom.com/wiki/Asagi_Mutsuki",
  "https://bluearchive.fandom.com/wiki/Asagi_Mutsuki_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Asahina_Pina",
  "https://bluearchive.fandom.com/wiki/Asuma_Toki",
  "https://bluearchive.fandom.com/wiki/Asuma_Toki_(Bunny_Girl_ver.)",
  "https://bluearchive.fandom.com/wiki/Blue_Archive/Student_Profile",
  "https://bluearchive.fandom.com/wiki/Chidori_Michiru",
  "https://bluearchive.fandom.com/wiki/Endo_Shimiko",
  "https://bluearchive.fandom.com/wiki/Hakari_Atsuko",
  "https://bluearchive.fandom.com/wiki/Hanaoka_Yuzu",
  "https://bluearchive.fandom.com/wiki/Hanaoka_Yuzu_(Maid_ver.)",
  "https://bluearchive.fandom.com/wiki/Hanekawa_Hasumi",
  "https://bluearchive.fandom.com/wiki/Hanekawa_Hasumi_(Gym_ver.)",
  "https://bluearchive.fandom.com/wiki/Hayase_Yuuka",
  "https://bluearchive.fandom.com/wiki/Hayase_Yuuka_(Gym_ver.)",
  "https://bluearchive.fandom.com/wiki/Himuro_Sena",
  "https://bluearchive.fandom.com/wiki/Hinomiya_Chinatsu",
  "https://bluearchive.fandom.com/wiki/Hinomiya_Chinatsu_(Hot_Spring_ver.)",
  "https://bluearchive.fandom.com/wiki/Ibaragi_Yoshimi",
  "https://bluearchive.fandom.com/wiki/Ichinose_Asuna",
  "https://bluearchive.fandom.com/wiki/Ichinose_Asuna_(Bunny_Girl_ver.)",
  "https://bluearchive.fandom.com/wiki/Igusa_Haruka",
  "https://bluearchive.fandom.com/wiki/Igusa_Haruka_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Ikekura_Marina",
  "https://bluearchive.fandom.com/wiki/Imashino_Misaki",
  "https://bluearchive.fandom.com/wiki/Iochi_Mari",
  "https://bluearchive.fandom.com/wiki/Iochi_Mari_(Gym_ver.)",
  "https://bluearchive.fandom.com/wiki/Isami_Kaede",
  "https://bluearchive.fandom.com/wiki/Izayoi_Nonomi",
  "https://bluearchive.fandom.com/wiki/Izayoi_Nonomi_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Izumimoto_Eimi",
  "https://bluearchive.fandom.com/wiki/Joumae_Saori",
  "https://bluearchive.fandom.com/wiki/Kagami_Chihiro",
  "https://bluearchive.fandom.com/wiki/Kakudate_Karin",
  "https://bluearchive.fandom.com/wiki/Kakudate_Karin_(Bunny_Girl_ver.)",
  "https://bluearchive.fandom.com/wiki/Kasuga_Tsubaki",
  "https://bluearchive.fandom.com/wiki/Kasumizawa_Miyu",
  "https://bluearchive.fandom.com/wiki/Kasumizawa_Miyu_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Kawawa_Shizuko",
  "https://bluearchive.fandom.com/wiki/Kawawa_Shizuko_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Kazekura_Moe",
  "https://bluearchive.fandom.com/wiki/Kenzaki_Tsurugi",
  "https://bluearchive.fandom.com/wiki/Kenzaki_Tsurugi_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Kirifuji_Nagisa",
  "https://bluearchive.fandom.com/wiki/Konoe_Mina",
  "https://bluearchive.fandom.com/wiki/Konuri_Maki",
  "https://bluearchive.fandom.com/wiki/Kosaka_Wakamo",
  "https://bluearchive.fandom.com/wiki/Kosaka_Wakamo_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Kozeki_Ui",
  "https://bluearchive.fandom.com/wiki/Kuda_Izuna",
  "https://bluearchive.fandom.com/wiki/Kuda_Izuna_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Kurimura_Airi",
  "https://bluearchive.fandom.com/wiki/Kurodate_Haruna",
  "https://bluearchive.fandom.com/wiki/Kurodate_Haruna_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Kuromi_Serika",
  "https://bluearchive.fandom.com/wiki/Kuromi_Serika_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Kurosaki_Koyuki",
  "https://bluearchive.fandom.com/wiki/Kuwakami_Kaho",
  "https://bluearchive.fandom.com/wiki/Kyouyama_Kazusa",
  "https://bluearchive.fandom.com/wiki/Mayoi_Shigure",
  "https://bluearchive.fandom.com/wiki/Mikamo_Neru",
  "https://bluearchive.fandom.com/wiki/Mikamo_Neru_(Bunny_Girl_ver.)",
  "https://bluearchive.fandom.com/wiki/Misono_Mika",
  "https://bluearchive.fandom.com/wiki/Mizuha_Mimori",
  "https://bluearchive.fandom.com/wiki/Morizuki_Suzumi",
  "https://bluearchive.fandom.com/wiki/Murokasa_Akane",
  "https://bluearchive.fandom.com/wiki/Murokasa_Akane_(Bunny_Girl_ver.)",
  "https://bluearchive.fandom.com/wiki/Nakatsukasa_Kirino",
  "https://bluearchive.fandom.com/wiki/Natsume_Iroha",
  "https://bluearchive.fandom.com/wiki/Nekozuka_Hibiki",
  "https://bluearchive.fandom.com/wiki/Nekozuka_Hibiki_(Cheerleader_ver.)",
  "https://bluearchive.fandom.com/wiki/Nemugaki_Fubuki",
  "https://bluearchive.fandom.com/wiki/Ogata_Kanna",
  "https://bluearchive.fandom.com/wiki/Okusora_Ayane",
  "https://bluearchive.fandom.com/wiki/Okusora_Ayane_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Omagari_Hare",
  "https://bluearchive.fandom.com/wiki/Onikata_Kayoko",
  "https://bluearchive.fandom.com/wiki/Onikata_Kayoko_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Oono_Tsukuyo",
  "https://bluearchive.fandom.com/wiki/Otohana_Sumire",
  "https://bluearchive.fandom.com/wiki/Otose_Kotama",
  "https://bluearchive.fandom.com/wiki/Renkawa_Cherino",
  "https://bluearchive.fandom.com/wiki/Renkawa_Cherino_(Hot_Spring_ver.)",
  "https://bluearchive.fandom.com/wiki/Rikuhachima_Aru",
  "https://bluearchive.fandom.com/wiki/Rikuhachima_Aru_(New_Year_ver.)",
  "https://bluearchive.fandom.com/wiki/Saiba_Midori",
  "https://bluearchive.fandom.com/wiki/Saiba_Momoi",
  "https://bluearchive.fandom.com/wiki/Sashiro_Tomoe",
  "https://bluearchive.fandom.com/wiki/Shimoe_Koharu",
  "https://bluearchive.fandom.com/wiki/Shimokura_Megu",
  "https://bluearchive.fandom.com/wiki/Shiraishi_Utaha",
  "https://bluearchive.fandom.com/wiki/Shiraishi_Utaha_(Cheerleader_ver.)",
  "https://bluearchive.fandom.com/wiki/Shirasu_Azusa",
  "https://bluearchive.fandom.com/wiki/Shirasu_Azusa_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Shiromi_Iori",
  "https://bluearchive.fandom.com/wiki/Shiromi_Iori_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Shishidou_Izumi",
  "https://bluearchive.fandom.com/wiki/Shishidou_Izumi_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Shizuyama_Mashiro",
  "https://bluearchive.fandom.com/wiki/Shizuyama_Mashiro_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Sorai_Saki",
  "https://bluearchive.fandom.com/wiki/Sorai_Saki_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Sorasaki_Hina",
  "https://bluearchive.fandom.com/wiki/Sorasaki_Hina_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Student",
  "https://bluearchive.fandom.com/wiki/Student/Detailed_List",
  "https://bluearchive.fandom.com/wiki/Student/Gallery",
  "https://bluearchive.fandom.com/wiki/Student/Skills",
  "https://bluearchive.fandom.com/wiki/Get_Set,_Go!_Kivotos_Halo_Games",
  "https://bluearchive.fandom.com/wiki/Story/Event_Story",
  "https://bluearchive.fandom.com/wiki/Sumi_Serina",
  "https://bluearchive.fandom.com/wiki/Sumi_Serina_(Christmas_ver.)",
  "https://bluearchive.fandom.com/wiki/Sunaookami_Shiroko",
  "https://bluearchive.fandom.com/wiki/Sunaookami_Shiroko_(Riding_ver.)",
  "https://bluearchive.fandom.com/wiki/Sunohara_Kokona",
  "https://bluearchive.fandom.com/wiki/Sunohara_Shun",
  "https://bluearchive.fandom.com/wiki/Sunohara_Shun_(Young_ver.)",
  "https://bluearchive.fandom.com/wiki/Takanashi_Hoshino",
  "https://bluearchive.fandom.com/wiki/Takanashi_Hoshino_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Tendou_Alice",
  "https://bluearchive.fandom.com/wiki/Tendou_Alice_(Maid_ver.)",
  "https://bluearchive.fandom.com/wiki/Toyomi_Kotori",
  "https://bluearchive.fandom.com/wiki/Tsuchinaga_Hiyori",
  "https://bluearchive.fandom.com/wiki/Tsukiyuki_Miyako",
  "https://bluearchive.fandom.com/wiki/Tsukiyuki_Miyako_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Urawa_Hanako",
  "https://bluearchive.fandom.com/wiki/Ushimaki_Juri",
  "https://bluearchive.fandom.com/wiki/Ushio_Noa",
  "https://bluearchive.fandom.com/wiki/Utazumi_Sakurako",
  "https://bluearchive.fandom.com/wiki/Uzawa_Reisa",
  "https://bluearchive.fandom.com/wiki/Wakaba_Hinata",
  "https://bluearchive.fandom.com/wiki/Wanibuchi_Akari",
  "https://bluearchive.fandom.com/wiki/Waraku_Chise",
  "https://bluearchive.fandom.com/wiki/Waraku_Chise_(Swimsuit_ver.)",
  "https://bluearchive.fandom.com/wiki/Yakushi_Saya",
  "https://bluearchive.fandom.com/wiki/Yakushi_Saya_(Casual_ver.)",
  "https://bluearchive.fandom.com/wiki/Yasumori_Minori",
  "https://bluearchive.fandom.com/wiki/Yutori_Natsu",
];

var axios = require("axios");
var cheerio = require("cheerio");
const fs = require("fs");
var res = [];
for (var link of links) {
  axios.get(link).then((resp) => {
    var newRes = {};
    var imgsList = [];
    var $ = cheerio.load(resp.data);
    try {
      var name = $("#mw-content-text > div.mw-parser-output > aside > h2")[0].children[0].data;
    } catch (err) {
        var name = link
        console.log(link)
    }

    var imgs = $(".image-thumbnail");
    for (var img of imgs) {
      if (img.attribs.href.indexOf("Icon") != -1) imgsList.push(img.attribs.href);
    }
    newRes["name"] = name;
    newRes["icon"] = imgsList;
    res.push(newRes);
    fs.appendFileSync("./bluearchive.fandom.com.json", JSON.stringify(newRes)+',');
  });
}