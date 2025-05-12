// Təkrar emal qutuları və onların məlumatları
// Import images
import paperBin from '../../../assets/images/bins/kagiz.png';
import plasticBin from '../../../assets/images/bins/plastik.png';
import metalBin from '../../../assets/images/bins/metal.png';
import glassBin from '../../../assets/images/bins/suse.png';
import organicBin from '../../../assets/images/bins/organik.png';
import electronicBin from '../../../assets/images/bins/elektron.png';

export const recyclingBins = {
  paper: {
    name: 'Kağız',
    image: paperBin,
    type: 'paper',
    color: '#0047AB',
    items: [
      'qəzet', 'jurnal', 'kitab', 'dəftər', 'kağız', 'karton', 'qutu', 'kağız paket',
      'bloknot', 'zərf', 'kağız torba', 'karton qutu', 'vizit kartı', 'qeyd kağızı',
      'kağız stakan', 'kağız boşqab', 'kağız dəsmal', 'kağız paket', 'broşür',
      'poster', 'karton yumurta qutusu', 'kağız qab', 'kağız qablaşdırma'
    ]
  },
  plastic: {
    name: 'Plastik',
    image: plasticBin,
    type: 'plastic',
    color: '#FFD700',
    items: [
      'plastik', 'plastik butulka', 'plastik qab', 'plastik paket', 'plastik qapaq', 'plastik stəkan',
      'plastik su butulkası', 'plastik şampun butulkası', 'plastik sabun qabı', 'plastik oyuncaq',
      'plastik konteyner', 'yoğurt qabı', 'krem qabı', 'plastik qapaqlı qab', 'plastik torba',
      'plastik vedrə', 'plastik dibçək', 'plastik dolça', 'plastik qapaqlı qab',
      'plastik qida qabı', 'plastik qab-qacaq', 'plastik məişət əşyaları'
    ]
  },
  metal: {
    name: 'Metal',
    image: metalBin,
    type: 'metal',
    color: '#C0C0C0',
    items: [
      'konserv qutusu', 'alüminium qutu', 'metal qapaq', 'metal banka', 'metal qab',
      'dəmir', 'alüminium', 'mis', 'polad', 'qalay', 'metal tənzimleyici',
      'metal boru', 'metal məftil', 'metal alət', 'metal qaycı', 'metal bıçaq',
      'metal qaşıq', 'çəngəl', 'metal saat', 'qol saatı', 'metal zərgirlik',
      'metal oyuncaq', 'metal konstruksiya', 'metal məişət əşyaları', 'metal qapı',
      'metal pəncərə', 'metal mebel', 'metal avadanlıq', 'metal alətlər',
      'metal qab-qacaq', 'metal zəncər', 'metal kilid', 'metal açar'
    ]
  },
  glass: {
    name: 'Şüşə',
    image: glassBin,
    type: 'glass',
    color: '#90EE90',
    items: [
      'şüşə', 'şüşə butulka', 'şüşə banka', 'şüşə qab', 'şüşə qırıntıları',
      'şüşə stəkan', 'şüşə vaza', 'şüşə güzgü', 'şüşə pəncərə',
      'şüşə qapı', 'şüşə masa', 'şüşə dolap', 'şüşə boşqab',
      'şüşə fincan', 'şüşə lampa', 'şüşə çıraq',
      'şüşə məişət əşyaları', 'şüşə qab-qacaq', 'cam'
    ]
  },
  organic: {
    name: 'Orqanik',
    image: organicBin,
    type: 'organic',
    color: '#8B4513',
    items: [
      // Əsas kateqoriyalar
      'qida', 'qida qalıqları', 'qida tullantıları', 'yemək', 'yemək qalıqları',
      'meyvə', 'tərəvəz', 'göyərti', 'bitki', 'ot',
      
      // Meyvələr
      'alma', 'armud', 'heyva', 'nar', 'üzüm', 'ərik', 'şaftalı', 'gavalı', 'alça',
      'gilas', 'banan', 'portağal', 'limon', 'mandarin', 'kivi', 'ananas', 'əncir',
      'xurma', 'tut', 'çiyələk', 'moruq', 'qarağat',
      
      // Tərəvəzlər
      'pomidor', 'xiyar', 'badımcan', 'bibər', 'kələm', 'kartof', 'soğan', 'sarımsaq',
      'yerkökü', 'çuğundur', 'turp', 'kahı', 'ispanaq', 'göyərti', 'cəfəri', 'şüyüd',
      
      // Qida məhsulları
      'çörək', 'ət', 'balıq', 'yumurta', 'süd', 'pendir', 'qatıq', 'kəsmik',
      'un məmulatları', 'makaron', 'düyü', 'yarma',
      
      // İçkilər və içki qalıqları
      'çay', 'qəhvə', 'çay təfləsi', 'qəhvə təfləsi',
      
      // Bitki hissələri
      'yarpaq', 'qabıq', 'toxum', 'çəyərdək', 'budaq', 'ağac budaqları',
      'gül', 'ot', 'kol', 'bitki kökləri',
      
      // Digər
      'taxta kəpəyi', 'kompost', 'bio tullantı', 'bio tərkibli',
      'həyət təmizliyi', 'bağ təmizliyi', 'park təmizliyi',
      'meyvə qabıqları', 'tərəvəz qabıqları', 'bitki qalıqları'
    ]
  },
  electronic: {
    name: 'Elektron',
    image: electronicBin,
    type: 'electronic',
    color: '#FF4500',
    items: [
      'batareya', 'telefon', 'kompüter', 'planşet', 'noutbuk', 'printer',
      'monitor', 'klaviatura', 'simsiz', 'adapter', 'şarj cihazı', 'powerbank',
      'elektron saat', 'elektron oyun', 'elektron oyuncaq', 'elektron cihaz',
      'elektron avadanlıq', 'elektron alət', 'elektron qurğu', 'elektron dəzgəh',
      'elektron məişət texnikası', 'elektron məişət cihazları', 'elektron avadanlıq',
      'radio', 'televizor', 'kondisioner', 'soyuducu', 'paltaryuyan', 'qabyuyan',
      'mikrodalqalı soba', 'elektrik çaydan', 'toster', 'blender', 'mikser',
      'fən', 'havalandırma', 'isidici', 'elektrik sobası', 'elektrik pilitası',
      'elektrik qizdirici', 'elektrik soyuducu', 'elektrik lampa', 'LED lampa'
    ]
  }
};

// Əşyanın hansı qutuda olduğunu tapmaq üçün funksiya
export function findBinForItem(item) {
  if (!item) return null;

  const searchItem = item.toLowerCase().trim();
  console.log('Searching for:', searchItem);
  let bestMatch = null;
  let maxScore = 0;

  // Bütün qutulara baxırıq
  for (const [binType, binData] of Object.entries(recyclingBins)) {
    for (const binItem of binData.items) {
      const binItemLower = binItem.toLowerCase();
      let score = 0;
      
      // Tam uyğunluq - ən yüksək prioritet
      if (searchItem === binItemLower) {
        console.log('Exact match found in bin:', binType);
        return { type: binType, ...binData };
      }

      // Söz sərhədləri ilə uyğunluq - ikinci prioritet
      const searchWords = searchItem.split(' ');
      const binWords = binItemLower.split(' ');
      
      for (const searchWord of searchWords) {
        if (binWords.includes(searchWord)) {
          score += searchWord.length * 2; // Söz sərhədlərinə görə daha çox xal
        }
      }

      // Sözün bir hissəsi kimi uyğunluq - ən aşağı prioritet
      if (binItemLower.includes(searchItem)) {
        score += searchItem.length;
      }
      
      if (score > maxScore) {
        maxScore = score;
        bestMatch = { type: binType, ...binData };
      }
    }
  }

  if (bestMatch) {
    console.log('Best match found in bin:', bestMatch.type);
    return bestMatch;
  }

  console.log('No match found')
  return null;
}

// Mesaj yaratmaq üçün funksiya
export const recyclingInfo = {
  paper: {
    details: 'Kağız tullantılar xam selluloza istehsalını azaldır və ağacların kəsilməsinin qarşısını alır. Təkrar emal edilən kağızdan yeni dəftər, qab və qablaşdırma məhsulları hazırlanır.'
  },
  plastic: {
    details: 'Plastik tullantılar xüsusi prosessdən keçərək yeni məhsullara çevrilir. Bu, neft istehsalını azaldır və təbiətin çirklənməsinin qarşısını alır.'
  },
  metal: {
    details: 'Metal tullantılar əridərək yeni məhsullar istehsal edilir. Bu proses yeni metal çıxarılmasına olan ehtiyacı azaldır və enerji sərfiyyatını 90%-ə qədər azaldır.'
  },
  glass: {
    details: 'Şüşə tullantılar sonsuz dəfə təkrar emal edilə bilər. Əridərək yeni şüşə məhsulları istehsal edilir və təbiətin qorunmasına yardım edir.'
  },
  organic: {
    details: 'Orqanik tullantılar kompost edilərək təbii gübrəyə çevrilir. Bu gübrə torpaq keyfiyyətini artırır və bitki böyüməsinə kömək edir.'
  },
  electronic: {
    details: 'Elektron tullantılar xüsusi emal mərkəzlərində təhlükəsiz şəkildə sökülür. Qızıl, gümüş və mis kimi qiymətli metallar çıxarılır və yenidən istifadə edilir.'
  }
};

export function generateRecyclingMessage(item, bin) {
  if (!bin) {
    return {
      text: `Bağışlayın, "${item}" üçün spesifik təkrar emal təlimatı tapa bilmədim. Zəhmət olmasa daha dəqiq təsvir edin və ya başqa bir əşya haqqında soruşun.`,
      bin: null
    };
  }

  return {
    text: `"${item}" ${bin.name.toLowerCase()} qutusuna atılmalıdır. ${recyclingInfo[bin.type].details}`,
    bin: bin
  };
}
