(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', 'tslib'], factory) :
    (factory((global.Akarata = {}),global.tslib_1));
}(this, (function (exports,tslib_1) { 'use strict';

    var akhiranI = ["abadi", "abai", "abdi", "abdikasi", "abduksi", "aberasi", "ablasi", "aboi", "abolisi", "aborsi", "abrasi", "abreaksi", "abreviasi", "absensi", "absorpsi", "abstinensi", "abstraksi", "acawi", "aci", "aci-aci", "adaptasi", "adati", "adhesi", "adikodrati", "adiksi", "adipati", "adisi", "administrasi", "adopsi", "adpertensi", "adsorpsi", "aduhai", "aduksi", "adveksi", "advertensi", "advokasi", "aerasi", "afeksi", "afiksasi", "afiliasi", "afirmasi", "agamawi", "agami", "agitasi", "aglomerasi", "aglutinasi", "agradasi", "agregasi", "agresi", "agroekonomi", "agroindustri", "agronomi", "agrostologi", "ahli", "aji", "aji-aji", "ajnabi", "akademi", "akademisi", "aki", "aklamasi", "akli", "aklimasi", "aklimatisasi", "akomodasi", "akreditasi", "akromegali", "aksarawati", "akselerasi", "aksentologi", "aksentuasi", "akseptasi", "aksesori", "aksi", "aksiologi", "aktualisasi", "akuisisi", "akulturasi", "akumulasi", "akuntansi", "akurasi", "alami", "alegori", "alergi", "algologi", "ali", "ali-ali", "aliansi", "alibi", "alienasi", "alimentasi", "aliterasi", "alkali", "alkalometri", "aloi", "alokasi", "alotropi", "alternasi", "alumni", "alusi", "amalgamasi", "ambisi", "ambivalensi", "amboi", "ambulatori", "ameliorasi", "amfibi", "ami", "aminisasi", "amnesti", "amoi", "amonifikasi", "amortisasi", "ampai", "amperometri", "amplifikasi", "amputasi", "amunisi", "anai-anai", "analogi", "anarki", "anatomi", "andai", "andewi", "andragogi", "androgini", "andrologi", "aneksasi", "anemofili", "anestesi", "angiologi", "ani", "ani-ani", "animasi", "anisogami", "anomali", "anomi", "anotasi", "antari", "antariksawati", "antarpribadi", "anti", "antibodi", "antigravitasi", "antikonsepsi", "antikuari", "antimateri", "antinomi", "antipati", "antisipasi", "antoi", "antologi", "antonimi", "antri", "antropobiologi", "antropofagi", "antropogeografi", "antropologi", "antroponimi", "antroposofi", "apalagi", "apartemenisasi", "apati", "apendektomi", "apepsi", "apersepsi", "api", "aplasi", "aplikasi", "apogami", "apologi", "apopleksi", "aposisi", "apostasi", "aposteriori", "apraksi", "apresiasi", "apriori", "aptasi", "arai", "arbei", "ardi", "areografi", "arestasi", "argari", "argumentasi", "ari", "aristokrasi", "arkati", "arkeologi", "arloji", "arogansi", "arombai", "arteri", "arteriografi", "arti", "artikulasi", "artileri", "asai", "asali", "asasi", "asi", "asibilasi", "asimilasi", "asiri", "asistensi", "asli", "asoi", "asonansi", "asosiasi", "aspirasi", "asri", "astrologi", "astronomi", "asumsi", "asuransi", "atensi", "atenuasi", "ati", "atmologi", "atomisasi", "atraksi", "atrisi", "atrofi", "audiensi", "audiologi", "auksi", "auskultasi", "autarki", "autentikasi", "autobiografi", "autogami", "autografi", "autokrasi", "autopsi", "aversi", "aviari", "aviasi", "awai", "azali", "azospermi", "babi", "badai", "badani", "badari", "badasi", "badi", "Badui", "bagai", "bagasi", "bagi", "bahaduri", "bahari", "baiduri", "baji", "baki", "bakmi", "baksi", "bakteri", "bakteriologi", "bakti", "balai", "balneologi", "balneoterapi", "baluarti", "balui", "banci", "bangai", "bangkai", "bangsai", "bangsi", "bani", "banji", "bantai", "banzai", "barai", "barangkali", "bardi", "bari", "barli", "barologi", "barometri", "barongsai", "barunawati", "barzanji", "basi", "basilari", "basmi", "batai", "batari", "baterai", "bati", "batimetri", "bayangkari", "bayati", "bayi", "beatifikasi", "bebi", "bedawi", "begini", "belai", "belalai", "belantai", "belati", "beledi", "beli", "benci", "bendahari", "bendari", "bendawi", "bendi", "bengkalai", "bengkelai", "beni", "benyai", "berahi", "berai", "berangai", "berani", "berdikari", "beri", "beriani", "bermi", "beroci", "beroti", "berui", "beruri", "besi", "bestari", "betari", "beti", "betonisasi", "bi", "biadi", "biaperi", "biarawati", "bibi", "bibliografi", "bidadari", "bidai", "bidari", "biduri", "bigami", "bihi", "biji", "bikini", "biksuni", "bilai", "billahi", "bimasakti", "bingkai", "bini", "binjai", "binti", "biogeografi", "biografi", "bioklimatologi", "biologi", "bioluminesensi", "biomekani", "biometeorologi", "biometri", "biopsi", "bioteknologi", "birai", "birokrasi", "birokratisasi", "bisai", "biti", "biumbai", "bizurai", "bodhi", "bodi", "bogi", "boi", "bombai", "bonsai", "borci", "borjuasi", "botani", "bradikardi", "brahmani", "brahmi", "brakiasi", "brakilogi", "braseri", "bratawali", "breksi", "brendi", "briologi", "brokoli", "bronkioli", "bronkotomi", "brunai", "buai", "buani", "buari", "budi", "bui", "bukti", "bulai", "bumi", "bunglai", "buni", "bunjai", "bunyi", "bupati", "burai", "burgundi", "busai", "busi", "butongpai", "cabai", "caci", "cadai", "cahari", "cahi", "cakawari", "caki", "cakrawati", "caladi", "calui", "canai", "candai", "candi", "canggai", "capai", "capcai", "capjiki", "carakawati", "cari", "cawai", "cawi", "cecawi", "ceki", "celari", "celi", "cemani", "cemeti", "cemperai", "cencawi", "cenderai", "cenduai", "cengi", "cengkedi", "cengki", "cengkurai", "cengli", "cerai", "ceratai", "ceremai", "ceri", "cermai", "cerpelai", "cetai", "ceteri", "ceti", "ceuki", "ci", "cihui", "cilawagi", "cili", "cindai", "cintamani", "cipai", "ciri", "ciriwangi", "coli", "congki", "cuai", "cuci", "cukai", "cuki", "cukimai", "cupai", "curai", "curi", "cutbrai", "cuti", "dadali", "dadi", "dagi", "dahagi", "dahi", "dai", "daki", "daktilologi", "daktiloskopi", "damai", "dami", "dandapati", "dandi", "dangai", "dari", "darji", "darmabakti", "dasi", "dati", "dawai", "deaneksasi", "debarkasi", "debirokratisasi", "dedai", "dedikasi", "deduksi", "deeskalasi", "defekasi", "defensi", "definisi", "deflagrasi", "deflasi", "defleksi", "deflorasi", "defoliasi", "defonologisasi", "deforestasi", "deformasi", "degenerasi", "degradasi", "degresi", "dehidrasi", "dehidrogenasi", "dehumanisasi", "deideologisasi", "deifikasi", "deislamisasi", "dekadensi", "dekantasi", "deklamasi", "deklarasi", "deklasifikasi", "deklinasi", "dekolonisasi", "dekomposisi", "dekompresi", "dekonsentrasi", "dekontekstualisasi", "dekorasi", "dekreolisasi", "dekriminalisasi", "dekunci", "delabialisasi", "delegasi", "delegitimasi", "delineasi", "delinkuensi", "delusi", "demabrasi", "demagogi", "demarkasi", "dembai", "demi", "demiliterisasi", "demineralisasi", "demobilisasi", "demografi", "demokrasi", "demokratisasi", "demonopolisasi", "demonstrasi", "demoralisasi", "demosi", "denai", "denasalisasi", "denasionalisasi", "dendi", "dendrokronologi", "dendrologi", "denervasi", "dengki", "denominasi", "denotasi", "densitometri", "denudasi", "denuklirisasi", "deoknumisasi", "deontologi", "depalatalisasi", "deparpolisasi", "departementalisasi", "dependensi", "depersonalisasi", "depersonifikasi", "depigmentasi", "depilasi", "deplesi", "depolarisasi", "depolitisasi", "depopulasi", "deportasi", "depresi", "depresiasi", "deprotonasi", "deputasi", "deputi", "derai", "deregulasi", "deresi", "derivasi", "derji", "dermatologi", "desakralisasi", "desalinasi", "desegregasi", "deselerasi", "desensitisasi", "desentralisasi", "deserebrasi", "desersi", "desinfeksi", "deskripsi", "deskuamasi", "desorientasi", "desorpsi", "destabilisasi", "destinasi", "destruksi", "desulfurisasi", "deteksi", "detensi", "deteriorasi", "determinasi", "detoksifikasi", "detonasi", "devaluasi", "deviasi", "devosi", "dewanagari", "dewi", "di", "dialektologi", "diatermi", "diferensiasi", "difluensi", "difraksi", "difteri", "difusi", "digitalisasi", "digresi", "dikotomi", "diksi", "dilasi", "dilatasi", "dimensi", "dinasti", "dini", "dioptri", "diplomasi", "direksi", "diri", "disentri", "disertasi", "disfungsi", "disharmoni", "disimilasi", "disinformasi", "disintegrasi", "disjoki", "disjungsi", "diskrepansi", "diskresi", "diskriminasi", "diskualifikasi", "diskulpasi", "diskusi", "dislokasi", "dismutasi", "disonansi", "disoperasi", "disorganisasi", "disorientasi", "disosiasi", "dispensasi", "dispersi", "disposisi", "disrupsi", "distansi", "distilasi", "distingsi", "distorsi", "distribusi", "disuasi", "divergensi", "diversifikasi", "divestasi", "divisi", "dobi", "doi", "doksologi", "dokumentasi", "domestikasi", "dominansi", "dominasi", "domisili", "donasi", "doni", "dorbi", "dormansi", "drai", "dramatisasi", "dramaturgi", "draperi", "dropsi", "duai", "duhai", "duli", "dumi", "duniawi", "duopoli", "duplikasi", "durasi", "duri", "dwiarti", "dwifungsi", "dwisegi", "ebi", "eboni", "edafologi", "edisi", "edukasi", "efendi", "efisiensi", "efloresensi", "efusi", "egalisasi", "ejakulasi", "ekajati", "ekaristi", "ekatantri", "eklosi", "ekofisiologi", "ekografi", "ekoklimatologi", "ekokronologi", "ekologi", "ekonometri", "ekonomi", "ekostratigrafi", "ekotipifikasi", "ekrinologi", "eksaltasi", "eksaminasi", "eksarasi", "eksekusi", "eksenterasi", "eksepsi", "eksfoliasi", "ekshalasi", "ekshibisi", "eksisi", "eksistensi", "eksitasi", "ekskavasi", "ekskomunikasi", "ekskresi", "ekskursi", "eksobiologi", "eksogami", "eksoisogami", "ekspansi", "ekspatriasi", "ekspedisi", "ekspirasi", "eksplikasi", "eksploitasi", "eksplorasi", "eksplosi", "eksposisi", "ekspresi", "ekstasi", "ekstensi", "ekstensifikasi", "eksteriorisasi", "ekstradisi", "ekstraksi", "ekstranei", "ekstrapolasi", "ekstraversi", "ekstrospeksi", "ekstrusi", "eksudasi", "ekuiti", "ekuivalensi", "ekuivokasi", "elaborasi", "elegansi", "elegi", "elektrifikasi", "elektrokoagulasi", "elektrokusi", "elektrolisi", "elektrometalurgi", "elektromiografi", "elektropatologi", "elektroterapi", "elemi", "elevasi", "eliminasi", "elipsometri", "elokuensi", "elongasi", "elpiji", "elusi", "elutriasi", "eluviasi", "emanasi", "emansipasi", "emaskulasi", "embarkasi", "emboli", "embriologi", "embuai", "emendasi", "emigrasi", "eminensi", "emisi", "emosi", "empati", "empiri", "emulasi", "emulsi", "emulsifikasi", "endemi", "endogami", "endokrinologi", "endoskopi", "energi", "enjelai", "enkapsulasi", "enkripsi", "enkulturasi", "enologi", "ensefalografi", "entalpi", "enterologi", "enteropati", "enterostomi", "entomofili", "entomologi", "entri", "entropi", "enukleasi", "enumerasi", "envoi", "enzimologi", "epidemi", "epidemiologi", "epigrafi", "epilepsi", "epinasti", "episiotomi", "epistemologi", "epitaksi", "epoksi", "eradikasi", "ereksi", "ergonomi", "ergoterapi", "erosi", "erti", "erupsi", "esai", "esensi", "eskalasi", "eskatologi", "estimasi", "estuari", "etimologi", "etiologi", "etnobotani", "etnografi", "etnologi", "etnomusikologi", "etologi", "eufoni", "eulogi", "eutrofikasi", "evakuasi", "evaluasi", "evangeli", "evaporasi", "evapotranspirasi", "eversi", "eviserasi", "evokasi", "evolusi", "faali", "faksi", "falsafi", "famili", "fani", "fantasi", "faringalisasi", "farisi", "farji", "farmakologi", "farmasi", "fatri", "Februari", "federasi", "fekundasi", "fengsui", "fenologi", "fenomenologi", "feri", "fermentasi", "fertilisasi", "fi", "fibrasi", "fibrilasi", "fikli", "fikologi", "fiksasi", "fiksi", "filantropi", "filateli", "filharmoni", "filogeni", "filologi", "filosofi", "filtrasi", "firdausi", "fisi", "fisiognomi", "fisiologi", "fisioterapi", "fitogeni", "fitogeografi", "fitologi", "fitopatologi", "fitosanitasi", "fitososiologi", "fitotopografi", "fitri", "fleksi", "flotasi", "fluensi", "fluktuasi", "foli", "fonasi", "fondasi", "fonografi", "fonologi", "fonotipi", "formasi", "formulasi", "fornikasi", "fortifikasi", "fotoemisi", "fotografi", "fotokonduksi", "fotokopi", "fotokromi", "fotolitografi", "fotometri", "fotomikrografi", "fragmentasi", "fraksi", "fraksinasi", "fraseologi", "frekuensi", "frenologi", "friksi", "frustrasi", "fuli", "fumigasi", "fungi", "fungsi", "fungsionalisasi", "fusi", "futurologi", "gabai", "gadai", "gagai", "gahari", "gai", "gaji", "gakari", "galagasi", "galai", "galaksi", "galanggasi", "galbani", "galeri", "gali", "galvanisasi", "galvanometri", "gamalisasi", "gandasturi", "gandasuli", "gandi", "gangsi", "gani", "ganti", "gapai", "garai", "garansi", "garasi", "gari", "gasifikasi", "gastrektomi", "gastroenterologi", "gastronomi", "gastrulasi", "gawai", "gedembai", "gedi", "gegai", "geladeri", "geladi", "gelamai", "gelepai", "geli", "geligi", "gembili", "gemi", "Gemini", "gemulai", "gendarmeri", "genealogi", "generalisasi", "generasi", "gengsi", "gentrifikasi", "geobotani", "geodesi", "geognosi", "geografi", "geohidrologi", "geokronologi", "geologi", "geomansi", "geometri", "geomorfologi", "geonomi", "geoteknologi", "geotermi", "geradi", "geragai", "gerai", "gerapai", "gerejani", "gerejawi", "gergaji", "gergasi", "gerigi", "gerilyawati", "gerontokrasi", "gerontologi", "gestikulasi", "gigi", "gili", "ginekologi", "ginekomasti", "gipsi", "giri", "gitapati", "gizi", "globalisasi", "glotalisasi", "golbi", "gongli", "goni", "goniometri", "gontai", "gori", "gotri", "gradasi", "grafitasi", "grafologi", "granulasi", "grasi", "gratifikasi", "gravitasi", "grogi", "guci", "guderi", "gudi", "gulai", "gulali", "gulambai", "guli", "gunci", "gundi", "gunjai", "guntai", "gurami", "gurdi", "guri", "gusi", "gusti", "gutasi", "habibi", "habituasi", "Habsyi", "hagiografi", "hai", "hailai", "haji", "hakiki", "halofili", "halogenasi", "halusinasi", "Hambali", "Hanafi", "handai", "hantai", "haplografi", "haplologi", "harakiri", "harbi", "hari", "harini", "harmoni", "harmonisasi", "hasai", "hati", "hauri", "hawari", "hayati", "hegemoni", "helai", "heliofobi", "helioterapi", "helmintologi", "hematologi", "hematuri", "hemeralopi", "hemoragi", "henti", "heregistrasi", "heresi", "herpetologi", "heterofemi", "heterogami", "heterografi", "heteronimi", "heteronomi", "heterostili", "hewani", "hibernasi", "hibridisasi", "hidrasi", "hidrofili", "hidrogenasi", "hidrogeologi", "hidrografi", "hidrokori", "hidrologi", "hidrometeorologi", "hidrometri", "hidromini", "hidropati", "hidroterapi", "hierarki", "higrometri", "Hindi", "hiperamnesi", "hipergami", "hipertensi", "hipertrofi", "hipnoterapi", "hipokrisi", "hipotensi", "hipui", "histerektomi", "histogeni", "histologi", "histopatologi", "histori", "historiografi", "hobi", "hoi", "hoki", "holi", "hologami", "homili", "homofoni", "homogami", "homogeni", "homografi", "homologi", "homonimi", "honji", "hosti", "hudai", "huji", "humanisasi", "humidifikasi", "humifikasi", "huni", "ibni", "idealisasi", "identifikasi", "ideografi", "ideologi", "idiomatologi", "idiosi", "idiosinkrasi", "Idulfitri", "ikhtiari", "ikhtiogeografi", "ikonografi", "iktiografi", "iktiologi", "ilafi", "Ilahi", "ilai", "ili", "iluminasi", "ilusi", "ilustrasi", "imaji", "imajinasi", "imamologi", "imanensi", "imani", "imbibisi", "imigrasi", "imitasi", "imobilisasi", "impedansi", "imperfeksi", "impi", "implantasi", "implementasi", "implikasi", "importasi", "impotensi", "impregnasi", "impresi", "improvisasi", "imunisasi", "imunokompromi", "imunologi", "imunosupresi", "imunoterapi", "inai", "inaugurasi", "inci", "indehoi", "indikasi", "individualisasi", "individuasi", "indoktrinasi", "indolensi", "indologi", "indonesianisasi", "indriawi", "induksi", "induktansi", "industri", "industrialisasi", "inefisiensi", "infanteri", "infantilisasi", "infeksi", "inferensi", "infiltrasi", "infiradi", "inflamasi", "inflasi", "infleksi", "informasi", "inhibisi", "ini", "inisiasi", "injeksi", "inkarnasi", "inkarserasi", "inklinasi", "inkonsistensi", "inkorporasi", "inkubasi", "inokulasi", "inovasi", "insani", "insektari", "insektologi", "inseminasi", "insersi", "insinuasi", "inskripsi", "inspeksi", "inspirasi", "instalasi", "instansi", "institusi", "instruksi", "instrumentasi", "insubordinasi", "intai", "integrasi", "intelektualisasi", "inteligensi", "intensi", "intensifikasi", "interaksi", "interdiksi", "interelasi", "interferensi", "interjeksi", "interkoneksi", "internalisasi", "internasionalisasi", "interogasi", "interpelasi", "interpolasi", "interpretasi", "intersepsi", "interupsi", "intervensi", "inti", "intimasi", "intimidasi", "intipati", "intoksikasi", "intonasi", "introduksi", "introjeksi", "introspeksi", "intrusi", "intuisi", "intumesensi", "invaginasi", "invasi", "invensi", "inventarisasi", "inventori", "inversi", "investasi", "investigasi", "invitasi", "involusi", "ionisasi", "iradiasi", "iri", "irigasi", "iritasi", "ironi", "isi", "islami", "islamisasi", "islamologi", "isogami", "isokalori", "isokemi", "isolasi", "isonomi", "istanggi", "istri", "iterasi", "iudisasi", "jadi", "jagapati", "jaksi", "jali", "jampi", "janggi", "jangki", "jani", "janji", "Januari", "janubi", "jari", "jariji", "jasadi", "jasmani", "jaswadi", "jati", "jauhari", "jawi", "jebai", "jejuri", "jeksi", "jeladri", "jelai", "jeli", "jemari", "jemeki", "jenawi", "jengki", "jerabai", "jerambai", "jerami", "jeri", "jeriji", "jeruji", "jerumbai", "ji", "jibti", "johari", "joki", "joli", "jongki", "jori", "judi", "judogi", "juhi", "jujai", "jukstaposisi", "julai", "Juli", "jumbai", "jundai", "Juni", "juntai", "jurai", "juri", "justifikasi", "kaboi", "kabuki", "kacapuri", "kaci", "kacici", "kaderisasi", "kadi", "kafi", "kafiri", "kahwaji", "kajai", "kaji", "kaki", "kakofoni", "kakografi", "kakologi", "kakostokrasi", "kalai", "kalakanji", "kalakati", "kalamisani", "kalamkari", "kalbi", "kalempagi", "kali", "kalibrasi", "kaligrafi", "kaliki", "kalkulasi", "kalori", "kalorimetri", "kalsifikasi", "kalsinasi", "kalui", "kambeli", "kambi", "kami", "kampai", "kampanologi", "kanalisasi", "kandi", "kanibalisasi", "kanji", "kanopi", "kanselari", "kanti", "kapai", "kapi", "kapitulasi", "kapri", "karangkitri", "karategi", "karbonisasi", "karburasi", "kardiografi", "kardiologi", "kari", "karinasi", "karoseri", "karpai", "karsinologi", "karti", "kartografi", "karusi", "karyawati", "kasai", "kasasi", "kasi", "kasti", "kastrasi", "kastroli", "kasturi", "kasuari", "kasui", "katai", "katalepsi", "katalisasi", "katalogisasi", "katawi", "kategori", "kategorisasi", "katekisasi", "kati", "katiti", "kauli", "kaupui", "kavaleri", "kawi", "kayai", "kebaji", "kebiri", "kebuli", "kecai", "kecapi", "keci", "kecuali", "kedai", "kedangkai", "kedekai", "kedeki", "kedelai", "kedi", "kedidi", "kejai", "keji", "kekandi", "keki", "keladi", "kelahi", "kelai", "kelakanji", "kelambai", "kelamkari", "kelarai", "kelari", "kelasi", "kelati", "keledai", "kelembuai", "kelempai", "kelepai", "keli", "kelici", "keliki", "kelinci", "keliti", "keluai", "kelubi", "kelui", "keluli", "kemangi", "kemari", "kembali", "kembili", "kemi", "kemiri", "kemopsikiatri", "kemoterapi", "kempetai", "kemudi", "kemurgi", "kenari", "kendali", "kendati", "kenderi", "kendi", "kenduri", "kenidai", "kenyi", "kepai", "kepiri", "kerahi", "kerai", "kerampagi", "kerangkai", "kerani", "keranji", "kerawai", "keremi", "keri", "kerisi", "kermanici", "kermi", "kernai", "kerneli", "kerosi", "kerpai", "kerpubesi", "kersai", "kersani", "kertaaji", "kesambi", "kesi", "kesturi", "ketai", "ketampi", "keti", "ketumbi", "keweni", "khafi", "khali", "khasi", "khayali", "khi", "khuldi", "ki", "kiai", "kiani", "kiasi", "kici", "kijai", "kilai", "kili", "kilokalori", "kimiawi", "kinanti", "kinetokardiografi", "kini", "kipai", "kirai", "kiri", "kirmizi", "kisai", "kisi", "kitri", "kiwari", "kiwi", "klarifikasi", "klasifikasi", "kleidotomi", "kleistogami", "klemensi", "kleptofobi", "klimatografi", "klimatologi", "klinisi", "klorinasi", "koagregasi", "koagulasi", "koaksi", "koalisi", "koboi", "koci", "kodi", "kodifikasi", "kodrati", "koedukasi", "koeksistensi", "koersi", "kognisi", "kohabitasi", "koherensi", "kohesi", "koinsidensi", "kokainisasi", "koki", "kolaborasi", "koleksi", "kolektivisasi", "koli", "kolibri", "koligasi", "kolimasi", "kolokasi", "koloni", "kolonisasi", "kolorimetri", "kolostomi", "kolusi", "kombinasi", "komedi", "komersialisasi", "komidi", "kominusi", "komisi", "komparasi", "kompeni", "kompensasi", "kompetensi", "kompetisi", "kompi", "kompilasi", "komplikasi", "komposisi", "kompresi", "kompromi", "kompulsi", "komputerisasi", "komuni", "komunikasi", "kondensasi", "kondisi", "kondomisasi", "konduksi", "koneksi", "konfederasi", "konfeksi", "konferensi", "konfesi", "konfigurasi", "konfirmasi", "konfrontasi", "kongesti", "konglomerasi", "kongregasi", "kongsi", "konjugasi", "konjungsi", "konklusi", "konkologi", "konkordansi", "konkresi", "konkretisasi", "konkurensi", "konotasi", "konperensi", "konsekrasi", "konsekuensi", "konseli", "konsentrasi", "konsepsi", "konseptualisasi", "konservasi", "konservatori", "konsesi", "konsiderasi", "konsili", "konsiliasi", "konsinyasi", "konsistensi", "konsistori", "konsolasi", "konsolidasi", "konsonansi", "konspirasi", "konstantagravitasi", "konstatasi", "konstelasi", "konstipasi", "konstitusi", "konstriksi", "konstruksi", "konsultasi", "konsumsi", "kontaminasi", "kontemplasi", "kontradiksi", "kontraindikasi", "kontraksi", "kontrasepsi", "kontravensi", "kontribusi", "kontroversi", "konveksi", "konvensi", "konvergensi", "konversasi", "konversi", "konvoi", "konvolusi", "konvulsi", "kooperasi", "kooptasi", "koordinasi", "koperasi", "kopi", "kopulasi", "korduroi", "koreksi", "korelasi", "koreografi", "korespondensi", "korologi", "korosi", "korporasi", "korpulensi", "korupsi", "kosmetologi", "kosmogoni", "kosmografi", "kosmologi", "kosokbali", "kotai", "kovalensi", "kraniologi", "kraniometri", "kraniotomi", "kreasi", "kremasi", "krematori", "kreolisasi", "krifoli", "kriminalisasi", "kriminologi", "krioterapi", "kriptografi", "kristalisasi", "kristalografi", "kristiani", "kritisi", "kromatografi", "kromotropi", "kroni", "kroniometri", "kronobiologi", "kronologi", "krosboi", "ksi", "kuaci", "kuai", "kuali", "kualifikasi", "kuantifikasi", "kuari", "kuasi", "Kubti", "kucai", "kudai", "kueni", "kui", "kuini", "kuitansi", "kukai", "kulai", "kuli", "kulminasi", "kultivasi", "kulturisasi", "kumai", "kumpai", "kumpi", "kumulasi", "kunani", "kunci", "kundai", "kundi", "kungki", "kupi", "kupui", "kurai", "kurasani", "kurcaci", "kursi", "kuteri", "kuti", "kweni", "labialisasi", "laci", "ladi", "lagi", "lai", "laici", "lakeri", "laki", "laktasi", "lalai", "lali", "lambai", "lamdukpai", "laminasi", "lampai", "lampeni", "lamtoronisasi", "landai", "langgai", "langi", "langkai", "langlai", "langsai", "langsi", "lanjai", "lanji", "lantai", "lantesari", "laparoskopi", "lapili", "lapislazuli", "larai", "lari", "lasi", "latensi", "lawi", "lazuardi", "lebai", "leci", "legalisasi", "legasi", "legasteni", "Legi", "legislasi", "legitimasi", "lei", "leksikografi", "leksikologi", "lelai", "lelaki", "leli", "leluri", "lemari", "lembai", "lemidi", "lempai", "lempari", "lenci", "lengai", "lenggundi", "lengkai", "lenyai", "lepai", "leperi", "leproseri", "lerai", "lesbi", "lesi", "lestari", "letai", "letargi", "letoi", "libei", "liberalisasi", "liberasi", "librasi", "lici", "licurai", "lidi", "ligasi", "lihai", "likantropi", "likuidasi", "lili", "lillahi", "limbai", "limfografi", "limitasi", "limnologi", "linggi", "lini", "liofilisasi", "lipai", "lipektomi", "lisani", "lisensi", "litani", "litografi", "litologi", "litotomi", "liturgi", "loberci", "lobi", "loji", "lokalisasi", "lokasi", "lokastiti", "loki", "lokusi", "lontai", "lori", "lulai", "luli", "lumai", "lumpektomi", "luncai", "lundi", "lunglai", "lunyai", "lupi", "luti", "madali", "madani", "madewi", "madi", "magandi", "magersari", "magi", "magribi", "mahadewi", "mahamenteri", "maharani", "maharesi", "mahasiswi", "mahasuci", "mahdi", "mahligai", "mahoni", "mai", "majasi", "majati", "majusi", "makaroni", "maki", "maknawi", "makroekonomi", "makrofotografi", "makrohistori", "makrokriminologi", "makrometeorologi", "makrososiologi", "maksi", "malabsorpsi", "malafungsi", "malagizi", "malai", "malakofili", "malakologi", "malapari", "malasuai", "maldistribusi", "maligai", "Maliki", "malnutrisi", "maloklusi", "mamai", "mami", "mamografi", "mampai", "manai", "manalagi", "manci", "mandai", "mandi", "mandiri", "mangkubumi", "mangsi", "mani", "manifestasi", "manikdepresi", "manipulasi", "manjeri", "mantiki", "mantri", "manusiawi", "marapulai", "marginalisasi", "mari", "marketri", "markoni", "martini", "masai", "Masehi", "masektomi", "maserasi", "maskapai", "masnawi", "masohi", "masoi", "mastektomi", "mastuli", "masturbasi", "matahari", "materi", "mati", "matrikulasi", "maturasi", "maulai", "mazi", "medali", "mediasi", "medikasi", "meditasi", "Mei", "mekanisasi", "melabuai", "melati", "melitofili", "melodi", "melpari", "memedi", "memori", "mempelai", "mempelasari", "mendikai", "mengi", "mengkali", "mengkirai", "meni", "menjelai", "Menserendahi", "menstruasi", "mensurasi", "mentari", "menteri", "mentigi", "merambai", "meranggi", "merangsi", "meranti", "meri", "merkuri", "merogoni", "merpati", "merserisasi", "merubi", "merunggai", "meski", "mesofili", "mesometeorologi", "mesti", "metai", "metalografi", "metalurgi", "metari", "meteorologi", "meterai", "metodologi", "metonimi", "metrologi", "metromini", "metropolisasi", "mewari", "mi", "midi", "midodareni", "migrasi", "miiofili", "mikologi", "mikroangiopati", "mikrobiologi", "mikroekonomi", "mikrofotografi", "mikrohistori", "mikromanipulasi", "mikrometri", "milisi", "militansi", "mimi", "mimikri", "mimpi", "mindi", "mineralisasi", "mineralogi", "mini", "mirmekofili", "mirmekologi", "misai", "misi", "misiologi", "misogami", "mispersepsi", "misteri", "mistri", "mitasi", "mitologi", "mobilisasi", "mobokrasi", "mochi", "modernisasi", "modifikasi", "modulasi", "monarki", "monodi", "monogami", "monogini", "monografi", "monokini", "monokrasi", "monopoli", "monopsoni", "monospermi", "moralisasi", "morbili", "morfofonologi", "morfologi", "mori", "mosi", "motivasi", "motorisasi", "muai", "mubtadi", "mufti", "muhami", "mujari", "mulai", "multidimensi", "multifungsi", "multiplikasi", "multivalensi", "mumi", "mumifikasi", "mumpuni", "munci", "muncikari", "mungsi", "munsyi", "murai", "murakabi", "murbei", "muri", "murni", "museologi", "musikalisasi", "musikologi", "musisi", "musytari", "mutaki", "mutasi", "mutilasi", "muwari", "muzaki", "nabati", "nabi", "nadi", "nafi", "nafiri", "nafsi", "nagari", "nagasari", "nahi", "nali", "naluri", "nambi", "nangui", "nanti", "naqli", "narapati", "narasi", "narkolepsi", "narpati", "nasalisasi", "nasi", "nasionalisasi", "Nasrani", "nasti", "naturalisasi", "navigasi", "Nazi", "nealogi", "nefrektomi", "nefrologi", "negasi", "negosi", "negosiasi", "nekrofili", "nekrogeografi", "nekrologi", "nekromansi", "nekropsi", "nematologi", "neoiknologi", "neokarpi", "neologi", "neontologi", "neotipologi", "nervasi", "netralisasi", "neurologi", "neustonologi", "ngarai", "ngeri", "ni", "nidasi", "niktigami", "nilai", "nilakandi", "nini", "nisbi", "nitrifikasi", "nitrofili", "nominalisasi", "nominasi", "nomokrasi", "nonagresi", "nonekonomi", "nonfiksi", "noni", "nonindustri", "nonintervensi", "nonkooperasi", "nonpribumi", "normalisasi", "nosologi", "notasi", "notifikasi", "nurani", "nuri", "nutasi", "nutrisi", "nyai", "nyali", "nyanyi", "nyenyai", "Nyepi", "nyeri", "nyi", "nyiri", "obduksi", "obi", "oblasi", "obligasi", "observasi", "obsesi", "obstetri", "obstruksi", "odontologi", "oklokrasi", "oklusi", "oksidasi", "oktroi", "okulasi", "okupasi", "oleografi", "oli", "oligarki", "oligopoli", "oligopsoni", "onani", "ondoafi", "ongji", "onkologi", "onomasiologi", "onomatologi", "ontogeni", "ontologi", "operasi", "operasionalisasi", "opini", "oposisi", "opsi", "optometri", "orasi", "ordi", "ordinasi", "ordonansi", "organdi", "organisasi", "orientasi", "origami", "orkestrasi", "ornamentasi", "ornitologi", "orografi", "ortodoksi", "ortoepi", "ortografi", "ortopedi", "oseanografi", "oseanologi", "osifikasi", "osilasi", "osmoregulasi", "ostentasi", "osteologi", "osteopati", "otologi", "otomatisasi", "otonomi", "otorisasi", "ototipi", "ovasi", "overkompensasi", "overpopulasi", "overproduksi", "oversimplifikasi", "ovulasi", "pabrikasi", "pacai", "padi", "padmi", "padri", "pagi", "pai", "pakai", "pakansi", "pakihi", "pakpui", "paksi", "palai", "palari", "palatalisasi", "palatografi", "paleoantropologi", "paleobotani", "paleoekologi", "paleogeografi", "paleografi", "paleoklimatologi", "paleontologi", "palinologi", "palmistri", "palpasi", "panai", "pancaniti", "panci", "pandai", "pandemi", "pangabekti", "pangkai", "pangrukti", "pangsi", "paniki", "panji", "pantai", "panti", "pantri", "paparazi", "papi", "papui", "paralelisasi", "parapati", "parapsikologi", "parasitologi", "pari", "parodi", "paroki", "parolfaktori", "parsi", "partai", "partisi", "partisipasi", "pasai", "pasanggiri", "pascalikuidasi", "pascaoperasi", "pascaproduksi", "pascareformasi", "pasi", "pasifikasi", "pasigrafi", "pasimologi", "pasteurisasi", "pasti", "pati", "patiseri", "patologi", "patri", "patroli", "patronasi", "pauhi", "pawai", "pecai", "peci", "pedagogi", "pedati", "pediatri", "pedologi", "peduli", "pedusi", "pegari", "pei", "pekerti", "peksi", "pelabi", "pelangai", "pelanggi", "pelangi", "pelbagai", "pelpolisi", "pemali", "pemudi", "penalti", "penetrasi", "pengki", "peni", "penitensi", "peniti", "penologi", "pensi", "pentilasi", "peragawati", "perai", "peraji", "perangai", "peranti", "perbani", "perei", "perfeksi", "perforasi", "pergi", "peri", "peribudi", "peridi", "periferi", "perigi", "perinci", "peringgi", "periodisasi", "perisai", "perkolasi", "perkusi", "perli", "permadani", "permai", "permaisuri", "permisi", "permutasi", "peroi", "perpetuasi", "persekusi", "persepsi", "perseverasi", "persisi", "personifikasi", "persuasi", "pertiwi", "perturbasi", "perusi", "perversi", "pesai", "pesi", "petai", "petamari", "peterseli", "peti", "petisi", "petrografi", "petrologi", "petsai", "peyorasi", "pi", "piawai", "pidi", "pigmentasi", "pigmi", "pijinasi", "piktografi", "pindai", "pingai", "pinisi", "pipi", "pirai", "pirometalurgi", "planimetri", "planologi", "plastogami", "pleidoi", "pleiogami", "ploi", "ploidi", "plonci", "plutokrasi", "poci", "poksai", "polarimetri", "polarisasi", "poliandri", "polifoni", "poligami", "poligini", "polimerisasi", "polisemi", "polisi", "polispermi", "politisasi", "polivini", "polusi", "pomologi", "poni", "popi", "popularisasi", "populasi", "pori", "pornografi", "porsi", "posisi", "posologi", "potehi", "potensi", "pradini", "prairi", "prakondisi", "prakonsepsi", "praktisi", "pramenstruasi", "prameswari", "pramubakti", "pramubayi", "pramudi", "pramugari", "pramusaji", "pramusiwi", "prapromosi", "prasasti", "prasi", "prastudi", "predasi", "predestinasi", "prediksi", "predisposisi", "preferensi", "prehistori", "prei", "premi", "preposisi", "prepotensi", "presensi", "presentasi", "preservasi", "presesi", "presipitasi", "presisi", "preskripsi", "prestasi", "presumsi", "pretensi", "prevalensi", "priayi", "pribadi", "pribumi", "privasi", "privatisasi", "prodemokrasi", "produksi", "profesi", "progeni", "prohibisi", "proklamasi", "prokurasi", "proletarisasi", "proliferasi", "promosi", "pronominalisasi", "properti", "proporsi", "proposisi", "propulsi", "prosesi", "prosodi", "prospeksi", "prostitusi", "protandri", "proteksi", "provinsi", "provisi", "provokasi", "proyeksi", "psi", "psikiatri", "psikofarmakologi", "psikolepsi", "psikologi", "psikometri", "psikopati", "psikopatologi", "psikoterapi", "psikrofili", "psikrometri", "puadai", "publikasi", "pudi", "puisi", "puitisasi", "puji", "puki", "pulai", "pulasari", "pulsasi", "punai", "punci", "pundi", "punggai", "pungli", "pungsi", "pungtuasi", "punti", "purbani", "puri", "purifikasi", "purnabakti", "purnaintegrasi", "purwakanti", "puti", "putrawali", "putrefaksi", "putri", "puyonghai", "qari", "qi", "qudsi", "rabani", "rabi", "radai", "radi", "radiasi", "radikalisasi", "radiogoniometri", "radiografi", "radiologi", "radiolokasi", "radiotelefoni", "radiotelegrafi", "radioterapi", "radurisasi", "rafaksi", "rafi", "rafidi", "ragawi", "ragi", "rai", "rajapati", "rajawali", "raksabumi", "raksi", "ramai", "rambai", "rambuti", "rami", "ramirezi", "rampai", "randai", "randi", "rangai", "ranggi", "rangkai", "rani", "ranji", "rantai", "ranti", "rapai", "rapi", "rapsodi", "rarai", "rasai", "rasberi", "rasi", "rasionalisasi", "rasuli", "ratifikasi", "rawai", "rawi", "rayonisasi", "reaksi", "reaktansi", "reaktualisasi", "realisasi", "realokasi", "reasuransi", "reboisasi", "redaksi", "redefinisi", "reduksi", "reduplikasi", "reedukasi", "referensi", "reflasi", "refleksi", "reformasi", "refraksi", "regenerasi", "regi", "registrasi", "regresi", "regularisasi", "regulasi", "rehabilitasi", "rehidrasi", "reideologisasi", "reindoktrinasi", "reinkarnasi", "reintegrasi", "reinterpretasi", "reinvestasi", "rekalkulasi", "rekanalisasi", "rekapitalisasi", "rekapitulasi", "reklamasi", "reklasifikasi", "rekognisi", "rekoleksi", "rekombinasi", "rekomendasi", "rekonsiliasi", "rekonstruksi", "rekonvensi", "rekreasi", "rektifikasi", "rekuisisi", "relai", "relaksasi", "relasi", "relativisasi", "relevansi", "reli", "religi", "relikui", "relokasi", "remai", "rembunai", "remedi", "remediasi", "remi", "reminisensi", "remisi", "rempenai", "remunerasi", "remunggai", "renai", "renegosiasi", "renovasi", "renti", "renvoi", "reologi", "reometri", "reorganisasi", "reorientasi", "reparasi", "repatriasi", "repetisi", "repolarisasi", "reposisi", "representasi", "represi", "reproduksi", "reprografi", "repui", "reputasi", "rerugi", "resensi", "resepsi", "resesi", "resi", "resistansi", "resitasi", "resmi", "resolusi", "resonansi", "resorpsi", "resosialisasi", "respirasi", "responsi", "restitusi", "restorasi", "restriksi", "restrukturisasi", "resurjensi", "retardasi", "retensi", "retorsi", "retradisionalisasi", "retribusi", "retrofleksi", "retrogresi", "retrospeksi", "reuni", "reunifikasi", "revaksinasi", "revaluasi", "reverberasi", "revisi", "revitalisasi", "revolusi", "rezeki", "ridi", "rigai", "rimpi", "rinai", "ringkai", "rini", "rinyai", "risi", "rodi", "rohani", "roi", "roki", "Romawi", "rompi", "rotasi", "roti", "royalti", "ruai", "rubai", "rudi", "rugbi", "rugi", "ruji", "rumbai", "Rumi", "rumpi", "runtai", "runti", "sabasani", "sadai", "safari", "safi", "sagai", "sahi", "sai", "saji", "sakhi", "sakhsi", "saki", "sakrilegi", "sakristi", "saksi", "sakti", "salai", "sali", "salinisasi", "salivasi", "saltasi", "samawi", "sambi", "sami", "sampai", "samsiti", "samurai", "sandi", "sangai", "sanggarunggi", "sanggurdi", "sangli", "sangrai", "sangsi", "sanguifikasi", "sani", "sanitasi", "sanjai", "sanksi", "sansai", "santai", "santiaji", "santri", "santriwati", "sanubari", "sapai", "sapersi", "sapi", "sari", "sarkologi", "sasi", "sastrawi", "satai", "satanologi", "satori", "saudari", "sawai", "sawi", "sayidani", "sayidi", "sebai", "sedawai", "sedimentasi", "segani", "segi", "segmentasi", "segregasi", "seismologi", "sejari", "sejati", "sekendi", "sekeri", "sekoci", "sekoi", "sekresi", "seksi", "seksologi", "sekularisasi", "sekuriti", "selai", "selampai", "selebrasi", "selebriti", "selederi", "seledri", "seleguri", "seleksi", "selempuri", "selenografi", "selenologi", "selepi", "selesai", "seligi", "seliri", "seloki", "selui", "selumbari", "semadi", "semai", "semampai", "semanggi", "semarai", "semayi", "sembagi", "sembai", "sembari", "sembesi", "sembrani", "sembunyi", "sementasi", "semi", "seminai", "seminari", "semiologi", "sempalai", "senamaki", "senapati", "senarai", "senawi", "sendi", "sendiri", "sendratari", "sengsai", "seni", "senigai", "seniwati", "sensasi", "sentagi", "sentali", "senti", "sentralisasi", "sepai", "sepandri", "separasi", "sepersi", "seperti", "sepi", "sepoi", "seprai", "seprei", "serabi", "serahi", "serai", "serambi", "Serani", "serasi", "serati", "serbi", "serdi", "seremoni", "seri", "serimpi", "serindai", "seringai", "serkai", "serografi", "serologi", "sersi", "sertifikasi", "serudi", "serui", "serunai", "sesai", "sesanti", "sesi", "setai", "setanggi", "seti", "setinggi", "setori", "setti", "seturi", "seudati", "sfingofili", "si", "sianometri", "sidai", "sidamukti", "sidi", "sidomukti", "sigai", "sigi", "sigilografi", "signifikansi", "signifikasi", "sikai", "sikari", "sikudidi", "silaturahmi", "silologi", "simbai", "simetri", "simfoni", "simpai", "simpati", "simplifikasi", "simtomatologi", "simulasi", "Sinansari", "sindikasi", "sinematografi", "sinergi", "sini", "sinkretisasi", "sinkronisasi", "sinologi", "sinonimi", "sinrili", "sipahi", "sipi", "siri", "sirkulasi", "sisi", "sistematisasi", "sistemisasi", "siswi", "siti", "sitologi", "situasi", "sivilisasi", "sizigi", "skarifikasi", "skatologi", "ski", "skleroterapi", "skolastisi", "skripsi", "sodomi", "sofistri", "solilokui", "solusi", "somasi", "somatomegali", "sondai", "sopi", "sori", "sosi", "sosialisasi", "sosiodemokrasi", "sosiologi", "sosiometri", "spageti", "spalasi", "spasi", "spekulasi", "speleologi", "spermaseti", "spesialisasi", "spesifikasi", "spiralisasi", "spiritualisasi", "sri", "Srikandi", "srimanganti", "sriti", "stabilisasi", "stagnasi", "stalagmometri", "standardisasi", "stasi", "stenografi", "stereofoni", "stereografi", "stereometri", "sterilisasi", "stimulasi", "stipulasi", "stoikiometri", "stori", "strabotomi", "strategi", "stratifikasi", "stratigrafi", "stroberi", "strukturalisasi", "studi", "suai", "suami", "suangi", "suarawati", "suari", "subentri", "subgeneralisasi", "subirigasi", "subkategorisasi", "sublimasi", "subordinasi", "suborganisasi", "subsidi", "substansi", "substitusi", "subversi", "suci", "sudi", "sufi", "sugesti", "sugi", "suiseki", "suji", "sukamandi", "suki", "suksesi", "sulbi", "sulfanasi", "sulfurasi", "suli", "sultani", "sumasi", "sumbi", "sundai", "sundari", "sungai", "sunggi", "sungkai", "suni", "sunti", "sunyi", "superinfeksi", "superskripsi", "supervisi", "suplai", "suplementasi", "suplesi", "supraalami", "suprasasti", "supremasi", "surahi", "surai", "surati", "surgawi", "suri", "surili", "survei", "suryani", "suspensi", "suwarnabumi", "swadesi", "swakaji", "swakendali", "swakontradiksi", "swanggi", "swarabakti", "swarawati", "swastanisasi", "Syafii", "syairi", "syakhsi", "syamali", "syamsi", "syeti", "Syiwaratri", "tabii", "tabulasi", "taci", "tadi", "tahi", "tajali", "taji", "takeyari", "taki", "takigrafi", "takmurni", "taksasi", "taksi", "taksidermi", "taksologi", "taksonomi", "tali", "tambi", "tampi", "tanai", "tangkai", "tangki", "tangsi", "tani", "tanji", "tansi", "tanti", "taoci", "taosi", "tapai", "tapestri", "tapi", "tapui", "taraqi", "tari", "tasai", "tatai", "tatami", "tautofoni", "tautologi", "tautonimi", "tegari", "teji", "teki", "teknisi", "teknokrasi", "teknologi", "teknonimi", "tekpi", "telangkai", "telefoni", "telegrafi", "telekomedi", "telekomunikasi", "telemetri", "teleologi", "telepati", "televisi", "teliti", "teluki", "temali", "tematisasi", "tembikai", "tembuni", "tempilai", "tempui", "tempunai", "tendensi", "tenggadai", "tenggiri", "tengguli", "tensi", "teokrasi", "teologi", "teori", "teorisasi", "teosofi", "tepi", "terali", "terapi", "terasi", "teratai", "teratologi", "teri", "terminasi", "terminografi", "terminologi", "termofili", "terusi", "tetapi", "tezi", "tiangui", "tigari", "tikai", "tikpi", "timi", "timpani", "tinggi", "tingi", "tipi", "tipografi", "tipologi", "tirai", "tirani", "tiri", "tisotropi", "titi", "titilasi", "titrasi", "titrimetri", "toksikologi", "toleransi", "tomboi", "topi", "topiari", "topikalisasi", "topografi", "toponimi", "torani", "torsi", "tradisi", "tragedi", "tragikomedi", "traksi", "traktasi", "transaksi", "transduksi", "transfigurasi", "transformasi", "transfusi", "transisi", "transkripsi", "translasi", "transliterasi", "translokasi", "transmigrasi", "transmisi", "transmogrifikasi", "transmutasi", "transparansi", "transpirasi", "transplantasi", "transportasi", "transposisi", "travesti", "trembesi", "trendi", "tribologi", "trigonometri", "trikotomi", "trilogi", "trimurti", "triturasi", "trofi", "troi", "troli", "tsunami", "tuai", "tubektomi", "tubi", "tugi", "tui", "tuidi", "tuji", "tukai", "tuli", "tunagizi", "tunai", "tungganai", "tungkai", "tupai", "turbulensi", "turi", "turinisasi", "turnoi", "uai", "ubi", "udani", "udi", "ufti", "ugahari", "uji", "ukhrawi", "uli", "ultrasonografi", "umbai", "umbi", "umbisi", "umi", "undagi", "undi", "ungkai", "ungsi", "ungti", "uni", "unifikasi", "unsuri", "untai", "unti", "unyai", "upakarti", "upeti", "urai", "uranologi", "urbanisasi", "urgensi", "uri", "urologi", "uroskopi", "usai", "usali", "vakansi", "vakasi", "vaksinasi", "valensi", "valorisasi", "vanili", "variansi", "variasi", "vasektomi", "vaskularisasi", "vasodilasi", "vegetasi", "velarisasi", "ventilasi", "verbalisasi", "verifikasi", "vermiseli", "versi", "vibrasi", "vigili", "virologi", "virulensi", "visi", "visitasi", "visualisasi", "vitrifikasi", "vivifikasi", "voli", "volumetri", "vulkanisasi", "vulkanologi", "vulvektomi", "wadi", "wahai", "wai", "walabi", "wali", "wallahi", "wangi", "warakawuri", "wardi", "wari", "wartawati", "wazari", "wedani", "westernisasi", "widuri", "wiji", "wiski", "wisudawati", "wizurai", "wosi", "wudani", "xenofili", "xenokrasi", "xerografi", "xilografi", "xilologi", "Yahudi", "yakitori", "yakni", "yasti", "yogi", "yurisdiksi", "yurisprudensi", "yustisi", "zai", "Zanggi", "zeni", "zimi", "zimurgi", "zinkografi", "zonasi", "zoogani", "zoogeografi", "zoologi", "acapkali", "alihfungsi", "anaktiri", "bebasmurni", "cacimaki", "irihati", "jualbeli", "salaharti", "saripati", "teka-teki", "tumpangsari", "ubahsuai"];

    var k = ["kabat", "kabir", "kabit", "kabruk", "kacir", "kadahajat", "kais", "kakah", "kakok", "kalah", "kalai", "kalicau", "kalih", "kalingan", "kamban", "kambang", "kambuh", "kambus", "kamit", "kampai", "kampul", "kandar", "kandas", "kandut", "kansel", "kantil", "kapah", "kapai", "kaplok", "kapung", "karam", "karangwulu", "karau", "karih", "kasdu", "kasep", "kasi", "kasip", "kasmaran", "katah", "katiti", "katut", "kaut", "kaver", "kawin", "kayai", "kayau", "kayun", "keblangsak", "keblinger", "kebur", "kebut", "kecam", "kecamuk", "kecimik", "kedau", "kedek", "keduk", "kejan", "kejar", "kejuju", "kekas", "kekeh", "kekek", "kekol", "keladau", "kelai", "kelantang", "kelebat", "kelebu", "keledar", "kelejat", "kelelap", "kelelot", "kelemban", "kelempai", "kelemping", "kelengar", "kelenggara", "kelepai", "kelepat", "kelepek", "kelepur", "kelesot", "keliar", "kelibang", "kelikik", "kelimpanan", "kelincir", "kelinjat", "kelintar", "kelis", "kelit", "kelocak", "kelokak", "kelola", "kelolong", "kelon", "kelosok", "kelotok", "keloyak", "keloyor", "keluar", "kelubak", "kelukur", "kelun", "keluna", "kelupas", "kelupur", "keluron", "keluyur", "kemam", "kemari", "kemaruk", "kembali", "kembang", "kembangbiak", "kembeng", "kembol", "kembur", "kementam", "kemplang", "kemu", "kemut", "kena", "kenal", "kenan", "kenang", "kencing", "kendana", "kendong", "kensel", "kenyam", "kenyit", "kenyut", "kepai", "kepit", "keplak", "kepleset", "keplok", "kepoh", "kepol", "keprek", "kepret", "kepris", "kepruk", "kepuh", "kepung", "keram", "keramas", "keranjat", "kerbat", "kerbuk", "kercing", "kercit", "kerebok", "kereceng", "kerecik", "keremus", "kerenyot", "kerepes", "keriap", "keriau", "kericau", "kerikit", "kerinan", "kerinjang", "kerjap", "kerkah", "kerkap", "kerkau", "kerlap", "kernai", "kernying", "kerobek", "kerosi", "keroyok", "kerubung", "kerubut", "kerukut", "kerumit", "kerumun", "kerumus", "kerutak", "kesak", "kesam", "kesambet", "kesang", "kesek", "kesel", "keseleo", "keseser", "kesiap", "kesiur", "kesomplok", "kesot", "ketap", "ketaton", "ketemu", "keteter", "ketiban", "ketil", "ketis", "ketrek", "kewuh", "khalas", "khitan", "kiah", "kial", "kiam", "kiat", "kibar", "kibas", "kicut", "kidar", "kikih", "kikik", "kikis", "kilap", "kilir", "kimbah", "kimbang", "kimpus", "kincah", "kincak", "kincang", "kincau", "kincit", "kinja", "kinjat", "kintil", "kipai", "kiprat", "kirai", "kirap", "kirik", "kirim", "kirung", "kisai", "kitar", "kitik", "koaksi", "koar", "kobak", "kobar", "kobol", "kocok", "kocor", "koit", "kojol", "kojor", "kokang", "kolaps", "komit", "kompes", "konan", "kondangan", "kongko", "konstatir", "konter", "kopah", "kopyok", "kosek", "kosel", "kotes", "kover", "kowek", "kuadrisep", "kuai", "kuar", "kubak", "kubik", "kubistik", "kubit", "kucek", "kucil", "kucur", "kudang", "kuis", "kujut", "kulai", "kulum", "kumbah", "kumpar", "kumpul", "kumur", "kumut", "kuncup", "kundang", "kunduran", "kungkum", "kunjung", "kuntit", "kunyah", "kupas", "kupil", "kusal", "kusik", "kusruk", "kusu", "kuta", "kutak", "kutat", "kuti", "kutik", "kuting", "kutip", "kuudkabar", "kabul", "kabung", "kabur", "kabut", "kaca", "kacak", "kacang", "kacau", "kacip", "kadang", "kadar", "kadas", "kader", "kadim", "kafan", "kafir", "kaget", "kagum", "kail", "kait", "kajang", "kaji", "kakak", "kakap", "kakas", "kaki", "kaleng", "kali", "kalimantang", "kalkulasi", "kalung", "kalut", "kambi", "kampanye", "kampas", "kampung", "kamuflase", "kamus", "kanal", "kanan", "kancing", "kandang", "kandidat", "kandul", "kandung", "kangen", "kangkang", "kantang", "kanti", "kantong", "kantuk", "kanvas", "kaok", "kapal", "kapar", "kapit", "kapok", "kapten", "kapur", "karang", "karantina", "karbida", "karbol", "karet", "karib", "kartu", "karu", "karung", "karut", "karya", "kasad", "kasam", "kasar", "kasidah", "kasih", "kasihan", "kasim", "kastrasi", "kata", "katalisasi", "katalisis", "katalisit", "katalog", "kategori", "kati", "katrol", "katup", "kaul", "kaus", "kaveling", "kawal", "kawan", "kawang", "kawat", "kawih", "kaya", "kayuh", "kebal", "kebas", "kebat", "kebiri", "kecambah", "kecap", "kecek", "keceng", "kecewa", "kecil", "kecimus", "kecoh", "kecu", "kecuali", "kecup", "kecut", "kedai", "kedang", "kedik", "kedip", "kedut", "kejai", "kejam", "kejang", "kejap", "keji", "kejut", "kekah", "kekal", "kekang", "kekar", "keker", "kelabang", "kelabu", "kelah", "kelam", "kelamin", "kelana", "kelanjar", "kelar", "kelarai", "kelas", "kelat", "kelebek", "kelepik", "kelibat", "kelih", "kelik", "keliling", "kelim", "kelip", "kelodan", "kelok", "kelompok", "kelopak", "keluan", "keluh", "kelumun", "kemas", "kembar", "kembung", "kemendang", "kempa", "kempis", "kempit", "kemudi", "kemudian", "kemul", "kencan", "kencang", "kencong", "kencreng", "kendala", "kendali", "kendara", "kendur", "kenduri", "kengkeng", "kental", "kentara", "kentut", "kenyal", "kenyang", "kepah", "kepak", "kepal", "kepala", "kepang", "kepil", "keping", "kepot", "kepuk", "kepul", "kerabik", "kerabu", "kerah", "kerai", "kerakah", "kerakal", "keramat", "kerap", "keras", "kerat", "kerawang", "kerdom", "kerek", "keri", "kerih", "kerikil", "kering", "keringat", "kerip", "keris", "kerisik", "kerising", "kerit", "keriting", "kerja", "kerjang", "kerling", "kerlip", "kernet", "kernyih", "kernyit", "kernyut", "kerok", "kerokot", "keroncong", "keropeng", "kerosong", "kerpus", "kersik", "kertak", "kertang", "kerucut", "kerudung", "keruh", "kerul", "kerumuk", "keruntung", "kerut", "kesah", "kesal", "kesan", "kesat", "keset", "kesip", "kesumba", "kesup", "ketam", "ketat", "ketek", "ketes", "keti", "keting", "ketip", "ketok", "ketua", "ketuk", "ketul", "khalayak", "khas", "khasiat", "khatam", "khawatir", "khayal", "khianat", "khotbah", "khusus", "kias", "kiblat", "kibul", "kicu", "kidung", "kijing", "kikir", "kilah", "kilan", "kilang", "kilas", "kilat", "kilau", "kili", "kilo", "kimpal", "kinang", "kincup", "kipas", "kir", "kira", "kirab", "kiri", "kisa", "kisah", "kisar", "kisas", "kisat", "kisruh", "kisut", "kitab", "klaim", "klakson", "klarifikasi", "klasifikasi", "klik", "klir", "kliring", "klise", "klona", "klorin", "kocak", "kocong", "kode", "kodifikasi", "kodok", "kokol", "kokot", "kol", "kolak", "koleksi", "komando", "kombinasi", "komentar", "komersial", "komidi", "komisi", "kompas", "kompor", "kompos", "kompres", "komputer", "komunikasi", "komunis", "konde", "kondensasi", "kondisi", "konferensi", "konfirmasi", "kongkong", "konon", "konsentrasi", "konsep", "konsolidasi", "konsumsi", "kontak", "kontaminasi", "kontrak", "kontras", "kontrol", "konvergensi", "konversi", "kooptasi", "koordinasi", "kopak", "kopek", "kopi", "koran", "korban", "kored", "korek", "koreksi", "korelasi", "korok", "korting", "korup", "korupsi", "kosong", "kota", "kotak", "kotor", "koyak", "kredit", "krisis", "kristal", "kritik", "kritis", "kuah", "kualifikasi", "kuap", "kuasa", "kuat", "kubang", "kubra", "kubu", "kubur", "kucai", "kucak", "kucup", "kudap", "kudeta", "kudian", "kudung", "kudus", "kufur", "kuit", "kukuh", "kukus", "kuli", "kuliah", "kulit", "kultus", "kulub", "kumai", "kumal", "kumandang", "kumbang", "kumuh", "kunci", "kundai", "kungkang", "kungkung", "kuning", "kuntum", "kupak", "kuping", "kurang", "kuras", "kurator", "kurban", "kuret", "kursus", "kurung", "kurus", "kusa", "kusut", "kutil", "kutu", "kutuk", "kuyup"];

    var kah = ["bengkah", "berkah", "bingkah", "bongkah", "cekah", "firkah", "halakah", "halkah", "harakah", "ingkah", "jangkah", "jerkah", "kalah", "kekah", "kelakah", "kerakah", "kerkah", "khalikah", "langkah", "lukah", "markah", "mukah", "musyarakah", "nafkah", "naskah", "nikah", "pangkah", "rakah", "rekah", "rengkah", "sedekah", "sekah", "serakah", "serkah", "sungkah", "takah", "tekah", "telingkah", "tingkah", "tongkah"];

    var ku = ["awabeku", "baku", "bangku", "beku", "beluku", "biku", "buku", "ceku", "ciku", "cuku", "deku", "jibaku", "kaku", "laku", "leku", "liku", "luku", "paku", "pangku", "peku", "perilaku", "saku", "siku", "suku", "teleku", "terungku", "tungku", "waluku"];

    var lah = ["balah", "belah", "beslah", "bilah", "celah", "galah", "islah", "istilah", "jumlah", "kalah", "kelah", "kilah", "lalah", "lelah", "makalah", "malah", "masalah", "muamalah", "mujadalah", "mukabalah", "olah", "onslah", "oplah", "pecahbelah", "pecah-belah", "pilah", "milah", "sekolah", "rihlah", "risalah", "salah", "serlah", "silsilah", "sudah", "sulalah", "telah", "tulah", "ulah", "uzlah", "walah", "wasilah"];

    var mu = ["ilmu", "jamu", "jemu", "kemu", "ramu", "selumu", "tamu", "temu"];

    var n = ["nafar", "nahak", "naik", "naikkelas", "naka", "nala", "nanap", "nangkring", "nasakh", "naung", "nayap", "nebeng", "nenen", "nenes", "nganga", "ngebut", "ngeceng", "ngeden", "ngenas", "ngoyo", "nidera", "nimbrung", "nomplok", "nongol", "nukil", "nunut", "nuzul", "nyana", "nyanya", "nyanyah", "nyanyi", "nyanyu", "nyapnyap", "nyentrik", "nyenyeh", "nyerocos", "nyit", "nyolnyolan", "nyungsung", "nyunyut", "nyurengnafi", "nafkah", "najis", "nakal", "nalam", "nalar", "nama", "nanah", "nanar", "nanti", "napas", "nas", "nasihat", "nasional", "nasionalisasi", "naturalisasi", "nazam", "nazar", "negara", "negosiasi", "nekat", "neon", "neraka", "netral", "ngeong", "ngeri", "ngiang", "niaga", "niat", "nihil", "nikah", "nikmat", "nilai", "ninabobo", "ningrat", "nisbi", "nista", "nobat", "noda", "nominasi", "nomor", "nonaktif", "nonong", "normal", "normalisasi", "novel", "nubuat", "nujum", "nyala", "nyalang", "nyaman", "nyaring", "nyata", "nyawa", "nyonyong", "nyonyor"];

    var nya = ["tanya"];

    var p = ["pacek", "pacik", "pacok", "pacuk", "paes", "pagas", "pagut", "pajan", "pajang", "pakai", "paksa", "pakuk", "palar", "pale", "paling", "palis", "palun", "pamer", "pamit", "pampang", "pana", "pancakara", "pancal", "pancar", "pancit", "panco", "pancur", "pancut", "pangah", "panggang", "panggih", "panggil", "pangkah", "pangkas", "pangkek", "pangku", "pangkung", "pangling", "pangpet", "panguk", "panjat", "pantak", "pantik", "panting", "pantul", "papah", "papas", "papras", "parih", "parkir", "parun", "pasrah", "pasuk", "patungan", "paut", "payu", "pecah", "pecat", "peduli", "pegang", "pegari", "pegat", "pei", "pejam", "pekau", "peking", "pekis", "pelanting", "pelas", "pelaspas", "pelecok", "peleh", "pelekok", "pelencit", "pelengak", "pelesat", "peleset", "pelesir", "pelihara", "pelintir", "pelonco", "pelorot", "pelosot", "pelotot", "peluk", "pencar", "pencet", "pencil", "pencut", "penda", "pendam", "penggal", "pengin", "pengkis", "pensiun", "pental", "pentang", "peper", "pepet", "perah", "perai", "peram", "perangah", "peranjat", "perap", "peras", "perata", "perbal", "percaya", "percit", "percul", "perenyak", "peretel", "pergi", "pergok", "periksa", "perinci", "peringis", "perkosa", "perleng", "perlup", "perlus", "permak", "perogol", "perosok", "persekusi", "persil", "pertal", "peruak", "peruk", "perusa", "petal", "petia", "petik", "peting", "piara", "picing", "picit", "pidi", "pijah", "pijat", "pijit", "pikau", "piknik", "pilah", "pilih", "pimpin", "pinar", "pincut", "pinda", "pindah", "pindai", "pingit", "pingkal", "pingkau", "pingsan", "pinjam", "pintal", "pintang", "pintas", "pipil", "pipis", "pirau", "pirik", "pirsa", "pisit", "pitar", "piting", "pocok", "polah", "polang", "poldan", "polok", "porot", "poser", "potel", "potol", "prakira", "prangas", "pretel", "procot", "puasa", "puatang", "pugak", "pugar", "pugas", "pujut", "pukah", "pulang", "pulih", "pumpun", "punggah", "pungkang", "pungkas", "pungut", "puntal", "puntir", "punya", "pupuh", "purik", "puruk", "pusing", "putar", "putuspacak", "pacar", "pacu", "pacul", "pada", "padam", "padan", "padat", "padu", "pagar", "paham", "pahat", "pahit", "pair", "pajak", "pajuh", "pakal", "pakan", "pakat", "paku", "palai", "palak", "palam", "palang", "palit", "palsu", "palu", "palut", "pampas", "pampat", "panah", "panas", "pancang", "pancing", "pancung", "pandai", "pandak", "pandang", "pandu", "panen", "panggak", "panggul", "panggung", "pangkal", "pangkat", "pangkur", "pangsa", "pangur", "panitia", "panjang", "panjing", "panjut", "pantai", "pantang", "pantas", "pantat", "pantau", "pantek", "pantis", "pantun", "papak", "papan", "papar", "paraf", "parafrasa", "parah", "parak", "paran", "parang", "parap", "parit", "parodi", "paruh", "parut", "pasang", "pasar", "pasok", "pasti", "pasung", "patah", "patar", "paten", "patih", "patik", "patil", "pating", "patok", "patri", "patroli", "patuh", "patuk", "patung", "patut", "pauk", "payah", "payang", "payar", "payung", "pecak", "pecal", "pecut", "peda", "pedang", "pedas", "pedih", "pegal", "pegas", "pejal", "peka", "pekak", "pekat", "pekik", "pekuk", "pelan", "pelana", "pelet", "pelisit", "pelitur", "pelopor", "pemidang", "penat", "pencak", "pendak", "pendek", "pengap", "pengaruh", "pengat", "pengkol", "pengos", "pening", "penjara", "pentas", "pentil", "penting", "pentung", "penuh", "pepah", "pepak", "pepas", "pepat", "pepes", "peran", "perang", "perawan", "perban", "percik", "pergol", "peri", "perih", "perintah", "perkara", "perlahan", "perli", "perlu", "permisi", "pernis", "perosot", "persekot", "persen", "persepsi", "personifikasi", "persuasi", "pertama", "perum", "perun", "perut", "pesam", "pesan", "pesona", "pesong", "pesta", "pesuk", "peta", "petah", "petak", "petang", "peti", "petir", "petuah", "piagam", "pialang", "piang", "piat", "pica", "picik", "picu", "pidana", "pidato", "pihak", "pijak", "pijar", "pikat", "pikir", "pikul", "pilin", "pilis", "pilot", "pilu", "pinang", "pincang", "pincuk", "pinggang", "pinggir", "pipa", "pipih", "pipit", "pisah", "pistol", "piuh", "piutang", "plombir", "poces", "pohon", "pojok", "pokok", "pokrol", "poles", "polimer", "politik", "pompa", "pompong", "pondok", "pondong", "pongah", "ponten", "popok", "populer", "porah", "posisi", "positif", "potong", "potret", "prakarsa", "praktik", "praperadilan", "prasaran", "prediksi", "presentasi", "pribadi", "pribumi", "prihatin", "prioritas", "privatisasi", "produksi", "program", "proklamasi", "promosi", "propaganda", "prosa", "proses", "protes", "proyeksi", "puas", "publikasi", "pucat", "pudar", "pudi", "pudur", "puing", "puisi", "puja", "puji", "pujuk", "pukal", "pukang", "pukat", "pukau", "pulas", "pulau", "pulun", "pulung", "pulut", "punah", "puncak", "pundi", "punggal", "punggung", "pungkur", "pungli", "punjung", "punjut", "puntung", "pupuk", "pupur", "pupus", "puput", "pusaka", "pusat", "puso", "pusut", "puter", "putih", "putra", "puyeng", "pecahbelah", "putarbalik"];

    var pun = ["ampun", "depun", "himpun", "lapun", "rapun", "rumpun"];

    var r = ["raba", "rabet", "rabut", "racak", "racau", "racik", "racuh", "rada", "radah", "radak", "ragang", "ragas", "ragung", "ragut", "raib", "raih", "rajalela", "rajang", "rajuk", "rakap", "rakut", "rambah", "ramban", "rambat", "rambeh", "rames", "rampas", "rampat", "rampung", "ramu", "ranca", "randah", "randai", "randak", "randau", "randek", "randuk", "randung", "rangai", "ranggah", "ranggak", "ranggul", "rangkak", "rangkam", "rangkang", "rangket", "rangkit", "rangkul", "rangkung", "rangkus", "rangkut", "rangum", "rantam", "rantuk", "ranyah", "ranyau", "ranyun", "rapah", "rapai", "rapal", "rapu", "rapung", "rapus", "rarai", "rarak", "rasai", "ratap", "raun", "raup", "raut", "rawat", "rayah", "rayan", "rayau", "rebah", "rebak", "rebas", "rebat", "rebu", "rebus", "rebut", "recet", "recik", "reda", "redah", "redik", "redusir", "regah", "regas", "regat", "reguk", "regup", "rehat", "rejah", "rejan", "rejeng", "rejuk", "rekah", "rekat", "reken", "rekurs", "rela", "relai", "relaksasi", "relas", "remas", "rembah", "rembes", "rembih", "rembut", "remet", "rempa", "rempah", "rempuh", "renang", "rencah", "rencat", "rencet", "rendam", "rendeng", "rendong", "renek", "rengap", "rengeh", "rengek", "rengeng", "renggek", "renggut", "rengkeh", "rengket", "rengkudah", "rengkuh", "rengut", "renjeng", "renjong", "renta", "rentap", "rentas", "rentet", "renti", "rentik", "renung", "renyeh", "repek", "repes", "repet", "repormir", "rerot", "resan", "resap", "resek", "resik", "resonan", "retek", "retet", "retih", "retur", "rewak", "rewet", "riba", "ricau", "ricik", "rihat", "rileks", "rilis", "rincis", "ringih", "ringik", "ringis", "ringkik", "ringking", "ringkuk", "ringkus", "ringsing", "rintang", "rintas", "rintih", "risak", "risik", "ritul", "riung", "roboh", "robok", "robot", "rodok", "rogoh", "rogok", "rogol", "rojeng", "rojol", "rombak", "romet", "romok", "rompak", "rompal", "ronce", "ronda", "rondok", "roneo", "ronggok", "ronggong", "rongkok", "rongos", "rongrong", "ronta", "rontok", "ronyeh", "rorod", "rosok", "rosot", "rotok", "rowot", "royak", "royer", "ruak", "ruat", "rubung", "rujah", "rujuk", "rumpi", "rumrum", "rumuk", "rumung", "runduk", "rundung", "runggas", "runggut", "rungkau", "rungus", "rungut", "runjam", "runjang", "runtas", "runti", "runtih", "runtuh", "runtun", "runyut", "ruok", "rurut", "rutuk", "ruwat", "ruyakrabak", "raban", "rabas", "rabat", "rabit", "rabuk", "rabun", "racun", "radai", "radang", "radikal", "radu", "raga", "ragam", "ragi", "ragu", "raguk", "rahasia", "rahim", "rais", "raja", "rajah", "rajam", "rajin", "rajut", "rakah", "rakat", "rakit", "raksasa", "raksi", "rakuk", "rakyat", "ralat", "ralip", "ramah", "ramai", "ramal", "rambai", "rambang", "rambu", "rambut", "ramin", "rampai", "rampak", "rampang", "ramping", "rampok", "rampus", "ramus", "ranap", "rancah", "rancak", "rancang", "rancap", "rancu", "rancung", "randa", "randat", "rangah", "rangak", "rangga", "ranggas", "ranggi", "ranggit", "ranggung", "rangka", "rangkai", "rangkum", "rangkup", "rangsang", "ranjang", "ransum", "rantai", "rantas", "rantau", "ranting", "rapat", "rapi", "rapik", "rapuh", "rapun", "raras", "rasa", "rasi", "rasian", "rasio", "rasional", "rasionalisasi", "rasuk", "rata", "ratah", "ratib", "ratifikasi", "ratus", "raum", "raung", "rawa", "rawai", "rawak", "rawan", "rawi", "rawit", "raya", "rayang", "rayap", "rayon", "rayu", "reaksi", "realisasi", "rebab", "reban", "rebana", "rebeh", "rebes", "rebuk", "rebung", "recak", "recok", "recup", "redam", "redih", "reduksi", "redut", "reekspor", "refleksi", "refraksi", "regang", "rehab", "rejang", "reka", "rekam", "rekan", "rekayasa", "rekes", "reklamasi", "rekomendasi", "rekonstruksi", "rekreasi", "rekrut", "relang", "relap", "relevansi", "reli", "relokasi", "reluk", "relung", "rem", "remah", "remaja", "remang", "rembet", "rembuk", "remeh", "rempak", "remuk", "rencam", "rencana", "renceng", "renda", "rendah", "rendang", "rengas", "rengat", "renggang", "rengkah", "rengsa", "rengus", "renik", "renovasi", "rentak", "rentan", "rentang", "renteng", "renyah", "renyuk", "renyut", "repang", "reparasi", "repatriasi", "reportase", "repot", "reproduksi", "rerak", "resah", "resep", "resmi", "resosialisasi", "respons", "restorasi", "restrukturisasi", "restu", "resume", "retak", "retas", "revisi", "revolusi", "rewang", "ria", "riah", "riak", "riang", "riap", "rias", "ribu", "rida", "rikuh", "rima", "rimas", "rimba", "rimbas", "rimpuh", "rimpung", "rinai", "rincu", "rindang", "rinding", "rindu", "ringan", "ringgit", "ringkai", "ringkas", "rintik", "rintis", "risau", "riset", "riwayat", "robek", "roda", "rodi", "rodong", "roket", "rokok", "rombeng", "rombong", "rompong", "romusa", "rona", "roncet", "rongga", "ronggeng", "rongkol", "rongseng", "rontgen", "ronyok", "rotan", "rotasi", "royal", "royan", "rua", "ruang", "ruap", "ruas", "ruban", "rubu", "rudal", "rudu", "rugi", "ruing", "ruku", "rukuk", "rukun", "rumah", "rumbai", "rumbu", "rumit", "rumpon", "rumpun", "rumput", "rumus", "runcing", "runding", "rungguh", "rungkup", "runjau", "runjung", "runtai", "runut", "runyam", "rupa", "rusak", "rusuh", "rusuk", "rutin", "ruwet", "ruyup"];



    var mainFile = /*#__PURE__*/Object.freeze({
        akhiranI: akhiranI,
        k: k,
        kah: kah,
        ku: ku,
        lah: lah,
        mu: mu,
        n: n,
        nya: nya,
        p: p,
        pun: pun,
        r: r
    });

    // tslint:disable:no-any
    var IrregularWords = /** @class */ (function () {
        function IrregularWords() {
        }
        IrregularWords.loadWords = function (filename, chopped) {
            if (chopped === void 0) { chopped = false; }
            var contents = mainFile[filename];
            if (chopped) {
                contents = contents.map(function (word) { return word.slice(1, word.length); });
            }
            return contents;
        };
        IrregularWords.SPECIAL_LETTERS = ['K', 'P', 'N', 'R'];
        IrregularWords.ENDS_WITH_I = IrregularWords.loadWords('akhiranI');
        IrregularWords.ENDS_WITH_COMMON_CHARACTERS = {
            kah: IrregularWords.loadWords('kah'),
            lah: IrregularWords.loadWords('lah'),
            pun: IrregularWords.loadWords('pun'),
            ku: IrregularWords.loadWords('ku'),
            mu: IrregularWords.loadWords('mu'),
            nya: IrregularWords.loadWords('nya'),
        };
        IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS = ['majikan'].concat(IrregularWords.ENDS_WITH_I);
        return IrregularWords;
    }());
    IrregularWords.SPECIAL_LETTERS.map(function (letter) {
        IrregularWords["BEGINS_WITH_" + letter] = IrregularWords.loadWords("" + letter.toLowerCase(), true);
    });
    IrregularWords.ON_PREFIX_CHARACTERS = {
        meng: IrregularWords.BEGINS_WITH_K,
        peng: IrregularWords.BEGINS_WITH_K,
        mem: IrregularWords.BEGINS_WITH_P,
        pem: IrregularWords.BEGINS_WITH_P,
    };

    function isStartsWith(text, byTextLength, prefix) {
        var prefixLength = prefix.length;
        if (prefixLength > byTextLength)
            return false;
        for (var i = 0; i < prefixLength; i++) {
            if (text[i] !== prefix[i])
                return false;
        }
        return true;
    }
    function isEndsWith(text, byTextLength, suffix) {
        var suffixLength = suffix.length;
        if (suffixLength > byTextLength)
            return false;
        for (var i = 0; i < suffixLength; i++) {
            if (text.substring(text.length - suffixLength)[i] !== suffix[i]) {
                return false;
            }
        }
        return true;
    }
    var StemmerUtility = {
        isStartsWith: isStartsWith,
        isEndsWith: isEndsWith,
    };

    // tslint:disable:no-any
    var Position;
    (function (Position) {
        Position["start"] = "Start";
        Position["end"] = "End";
    })(Position || (Position = {}));
    var MorphologicalUtility = /** @class */ (function () {
        function MorphologicalUtility() {
            var _this = this;
            this.numberOfSyllables = 0;
            this.totalSyllables = function (word) {
                var result = 0;
                for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
                    var value = word_1[_i];
                    if (_this.isVowel(value))
                        result++;
                }
                return result;
            };
            this.removeParticle = function (word) {
                _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
                word = _this.removeCharactersMatchingCollection(word, _this.collectionFor('particle'), Position.end);
                return word;
            };
            this.removePossessivePronoun = function (word) {
                _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
                return _this.removeCharactersMatchingCollection(word, _this.collectionFor('possessive_pronoun'), Position.end);
            };
            this.removeFirstOrderPrefix = function (word) {
                _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
                var prevWord = word;
                word = _this.removeAndSubstituteCharactersMatchingCollection(word, _this.collectionFor('special_first_order_prefix'), Position.start);
                if (prevWord !== word) {
                    return word;
                }
                word = _this.removeCharactersMatchingCollection(word, _this.collectionFor('first_order_prefix'), Position.start);
                return word;
            };
            this.removeSecondOrderPrefix = function (word) {
                var REMOVED_BER = MorphologicalUtility.REMOVED_BER, SPECIAL_SECOND_ORDER_PREFIX_WORDS = MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_WORDS;
                _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
                var wordLength = word.length;
                if (SPECIAL_SECOND_ORDER_PREFIX_WORDS.includes(word)) {
                    if (word.slice(0, 2) === 'be') {
                        _this.flags = _this.flags || REMOVED_BER;
                    }
                    _this.reduceSyllable();
                    word = _this.sliceWordAtPosition(word, 3, Position.start);
                    return word;
                }
                if (StemmerUtility.isStartsWith(word, wordLength, 'be') &&
                    wordLength > 4 &&
                    !_this.isVowel(word[2]) &&
                    word.slice(3, 5) === 'er') {
                    _this.flags = _this.flags || REMOVED_BER;
                    _this.reduceSyllable();
                    word = _this.sliceWordAtPosition(word, 2, Position.start);
                    return word;
                }
                return _this.removeCharactersMatchingCollection(word, _this.collectionFor('non_special_second_order_prefix'), Position.start);
            };
            this.removeSuffix = function (word) {
                var REMOVED_KE = MorphologicalUtility.REMOVED_KE, REMOVED_PENG = MorphologicalUtility.REMOVED_PENG, REMOVED_PE = MorphologicalUtility.REMOVED_PE, REMOVED_DI = MorphologicalUtility.REMOVED_DI, REMOVED_MENG = MorphologicalUtility.REMOVED_MENG, REMOVED_TER = MorphologicalUtility.REMOVED_TER, REMOVED_BER = MorphologicalUtility.REMOVED_BER, SUFFIX_CHARACTERS = MorphologicalUtility.SUFFIX_CHARACTERS;
                if (_this.ambiguousWithSufficesEndingWords(word))
                    return word;
                _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
                var constantToCheck = [];
                // tslint:disable-next-line:prefer-for-of
                for (var index = 0; index < SUFFIX_CHARACTERS.length; index++) {
                    var character = SUFFIX_CHARACTERS[index];
                    switch (character) {
                        case 'kan':
                            constantToCheck = [REMOVED_KE, REMOVED_PENG, REMOVED_PE];
                            break;
                        case 'an':
                            constantToCheck = [REMOVED_DI, REMOVED_MENG, REMOVED_TER];
                            break;
                        case 'i':
                            constantToCheck = [REMOVED_BER, REMOVED_KE, REMOVED_PENG];
                            break;
                        default:
                            break;
                    }
                    if (StemmerUtility.isEndsWith(word, word.length, character) &&
                        // tslint:disable-next-line:no-bitwise
                        constantToCheck.every(function (cons) { return (_this.flags & cons) === 0; })) {
                        _this.reduceSyllable();
                        word = _this.sliceWordAtPosition(word, character.length, Position.end);
                    }
                }
                return word;
            };
        }
        Object.defineProperty(MorphologicalUtility.prototype, "flags", {
            get: function () {
                return this._flags;
            },
            set: function (v) {
                this._flags = v;
            },
            enumerable: true,
            configurable: true
        });
        MorphologicalUtility.prototype.ambiguousWithSufficesEndingWords = function (word) {
            return IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS.includes(word);
        };
        MorphologicalUtility.prototype.removeCharactersMatchingCollection = function (word, collection, position) {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < collection.length; index++) {
                var characters = collection[index];
                if (this.matchPositionAndNotAmbiguousWithCharacters(word, characters, position)) {
                    if (characters === 'mem' && this.isVowel(word[characters.length])) {
                        continue;
                    }
                    this.flags = this.flags || this.collectionFor(characters, 'removed');
                    this.reduceSyllable();
                    word = this.sliceWordAtPosition(word, characters.length, position);
                }
            }
            return word;
        };
        MorphologicalUtility.prototype.sliceWordAtPosition = function (word, characterSize, position) {
            var multiplier = position === Position.start ? 0 : -1;
            var wordSlice = word.split('');
            wordSlice.splice(multiplier * characterSize, characterSize);
            word = wordSlice.join('');
            return word;
        };
        MorphologicalUtility.prototype.removeAndSubstituteCharactersMatchingCollection = function (word, collection, position) {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < collection.length; index++) {
                var characters = collection[index];
                var matched = this.matchingCharactersRequiresSubstitution(word, characters, position);
                if (matched) {
                    this.flags = this.flags || this.collectionFor(characters, 'removed');
                    this.reduceSyllable();
                    word = this.substituteWordCharacter(word, characters);
                    word = this.sliceWordAtPosition(word, characters.length - 1, Position.start);
                }
            }
            return word;
        };
        MorphologicalUtility.prototype.matchingCharactersRequiresSubstitution = function (word, characters, position) {
            return (this.matchCharactersPositionFollowedByVowel(word, characters, position) &&
                this.substitutionRequired(word, characters));
        };
        MorphologicalUtility.prototype.matchCharactersPositionFollowedByVowel = function (word, characters, position) {
            var wordLength = word.length;
            var characterSize = characters.length;
            var Pos = "is" + position + "sWith";
            return (StemmerUtility[Pos](word, wordLength, characters) &&
                wordLength > characterSize &&
                this.isVowel(word[characterSize]));
        };
        MorphologicalUtility.prototype.substitutionRequired = function (word, characters) {
            return (MorphologicalUtility.WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS.includes(characters) || this.containsIrregularPrefix(word, characters));
        };
        MorphologicalUtility.prototype.containsIrregularPrefix = function (word, characters) {
            var irregularOnPrefix = Object.keys(IrregularWords.ON_PREFIX_CHARACTERS).includes(characters);
            if (irregularOnPrefix) {
                return this.choppedWordMatchWordsCollection(word.slice(characters.length, word.length), IrregularWords.ON_PREFIX_CHARACTERS[characters]);
            }
            return false;
        };
        MorphologicalUtility.prototype.substituteWordCharacter = function (word, characters) {
            var substituteChar = '';
            switch (true) {
                case ['meny', 'peny'].includes(characters):
                    substituteChar = 's';
                    break;
                case ['men', 'pen'].includes(characters):
                    substituteChar = this.choppedWordMatchWordsCollection(word.slice(characters.length, word.length), IrregularWords.BEGINS_WITH_N)
                        ? 'n'
                        : 't';
                    break;
                case ['meng', 'peng'].includes(characters):
                    substituteChar = 'k';
                    break;
                case ['mem', 'pem'].includes(characters):
                    substituteChar = 'p';
                    break;
                default:
                    break;
            }
            var reduceChars = characters.length - 1;
            var firstChar = word.slice(-word.length, reduceChars);
            var oldSubstituteChar = word[reduceChars];
            var resChar = word.slice(characters.length);
            return substituteChar ? firstChar + substituteChar + resChar : word;
        };
        MorphologicalUtility.prototype.isVowel = function (character) {
            return MorphologicalUtility.VOWEL.includes(character);
        };
        MorphologicalUtility.prototype.collectionFor = function (name, type) {
            if (type === void 0) { type = 'characters'; }
            var constantName;
            var col1 = ['meny', 'men', 'mem', 'me'];
            var col2 = ['peny', 'pen', 'pem'];
            if (type === 'characters') {
                constantName = name + "_" + type;
            }
            else {
                switch (true) {
                    case col1.includes(name):
                        name = 'meng';
                        break;
                    case col2.includes(name):
                        name = 'peng';
                        break;
                    default:
                        break;
                }
                constantName = type + "_" + name;
            }
            var staticMethod = constantName.toUpperCase();
            var collection = MorphologicalUtility[staticMethod];
            return collection;
        };
        MorphologicalUtility.prototype.matchPositionAndNotAmbiguousWithCharacters = function (word, characters, position) {
            var pos = "is" + position + "sWith";
            return (StemmerUtility[pos](word, word.length, characters) && !this.ambiguousWithCharacters(word, characters, position));
        };
        MorphologicalUtility.prototype.ambiguousWithCharacters = function (word, characters, position) {
            if (position === Position.start) {
                if (characters === 'per') {
                    return this.choppedWordMatchWordsCollection(word.slice(3, word.length), IrregularWords.BEGINS_WITH_R);
                }
                else {
                    return false;
                }
            }
            else {
                return IrregularWords.ENDS_WITH_COMMON_CHARACTERS[characters].some(function (ambiguousWord) {
                    var prefix = ['me', 'be', 'pe'];
                    if (!prefix.includes(word.slice(0, 2))) {
                        return false;
                    }
                    return StemmerUtility.isEndsWith(word, word.length, ambiguousWord);
                });
            }
        };
        MorphologicalUtility.prototype.choppedWordMatchWordsCollection = function (choppedWord, collection) {
            return collection.some(function (word) {
                return StemmerUtility.isStartsWith(choppedWord, choppedWord.length, word);
            });
        };
        MorphologicalUtility.prototype.reduceSyllable = function () {
            this.numberOfSyllables -= 1;
        };
        MorphologicalUtility.VOWEL = ['a', 'e', 'i', 'o', 'u'];
        MorphologicalUtility.PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
        MorphologicalUtility.POSSESSIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];
        MorphologicalUtility.FIRST_ORDER_PREFIX_CHARACTERS = [
            'meng',
            'meny',
            'men',
            'mem',
            'me',
            'peng',
            'peny',
            'pen',
            'pem',
            'di',
            'ter',
            'ke',
        ];
        MorphologicalUtility.SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS = [
            'meng',
            'peng',
            'meny',
            'peny',
            'pen',
            'men',
            'mem',
            'pem',
        ];
        MorphologicalUtility.SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'be', 'per', 'pe'];
        MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['be'];
        MorphologicalUtility.NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'per', 'pe'];
        MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_WORDS = ['belajar', 'pelajar', 'belunjur'];
        MorphologicalUtility.SUFFIX_CHARACTERS = ['kan', 'an', 'i'];
        MorphologicalUtility.WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS = [
            'meny',
            'peny',
            'men',
            'pen',
        ];
        MorphologicalUtility.REMOVED_KE = 1;
        MorphologicalUtility.REMOVED_PENG = 2;
        MorphologicalUtility.REMOVED_DI = 4;
        MorphologicalUtility.REMOVED_MENG = 8;
        MorphologicalUtility.REMOVED_TER = 16;
        MorphologicalUtility.REMOVED_BER = 32;
        MorphologicalUtility.REMOVED_PE = 64;
        return MorphologicalUtility;
    }());

    var Stemmer = /** @class */ (function (_super) {
        tslib_1.__extends(Stemmer, _super);
        function Stemmer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.stem = function (word, derivationalStemming) {
                if (derivationalStemming === void 0) { derivationalStemming = true; }
                _this.flags = undefined;
                if (word.match(/\s/)) {
                    word = word.split(/[,\n.\s+]+/)
                        .map(function (w) { return _this.stem(w.trim().toLowerCase()); }).join(', ');
                }
                else {
                    _this.numberOfSyllables = _this.totalSyllables(word);
                    if (_this.isStillHasManySyllables()) {
                        word = _this.removeParticle(word);
                    }
                    if (_this.isStillHasManySyllables()) {
                        word = _this.removePossessivePronoun(word);
                    }
                    if (derivationalStemming) {
                        word = _this.stemDerivational(word);
                    }
                }
                return word;
            };
            return _this;
        }
        Stemmer.prototype.stemDerivational = function (word) {
            var prevSize = word.length;
            if (this.isStillHasManySyllables()) {
                word = this.removeFirstOrderPrefix(word);
            }
            if (prevSize !== word.length) {
                prevSize = word.length;
                if (this.isStillHasManySyllables()) {
                    word = this.removeSuffix(word);
                }
                if (prevSize !== word.length) {
                    word = this.removeSecondOrderPrefix(word);
                }
            }
            else {
                if (this.isStillHasManySyllables()) {
                    word = this.removeSecondOrderPrefix(word);
                }
                if (this.isStillHasManySyllables()) {
                    word = this.removeSuffix(word);
                }
            }
            return word;
        };
        Stemmer.prototype.isStillHasManySyllables = function () {
            return this.numberOfSyllables > 2;
        };
        return Stemmer;
    }(MorphologicalUtility));
    var stemmer = new Stemmer();

    var stem = stemmer.stem;
    var index = { stem: stem };

    exports.stem = stem;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
