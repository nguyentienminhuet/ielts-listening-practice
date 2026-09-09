/**
 * IELTS READING PRACTICE DATA
 * Total Lessons: 13
 * Total Passages / Sets: 31
 * Total Questions: 137
 * Source: TAI-LIEU-KHOA-IELTS-READING-ONLINE-VIDEO-B
 */

const readingLessons = [
  {
    "id": "reading_1",
    "lessonNum": 1,
    "code": "V02",
    "title": "V02 – CÁCH TÌM TỪ KHÓA",
    "shortTitle": "Cách Tìm Từ Khóa",
    "category": "foundation",
    "categoryLabel": "Kỹ Năng Nền Tảng",
    "badge": "Kỹ năng cốt lõi",
    "description": "Chiến thuật nhận diện và gạch chân các từ khóa khó thay thế (Hard Keywords: tên riêng, số liệu, năm tháng, thuật ngữ) và từ khóa dễ bị paraphrase (Soft Keywords).",
    "examplesCount": 1,
    "totalQuestions": 10,
    "examples": [
      {
        "id": "r1_ex1",
        "exampleNum": 1,
        "title": "Chiến Thuật & Luyện Tập Xác Định Từ Khóa",
        "instructions": "Đọc 10 câu hỏi dưới đây. Xác định từ khóa quan trọng (từ khóa khó thay thế và từ khóa nội dung) để định vị thông tin trong bài đọc.",
        "passage": {
          "title": "Chiến Lược Tìm Từ Khóa Trong IELTS Reading",
          "paragraphs": [
            {
              "label": "A",
              "text": "Trong bài thi IELTS Reading, việc xác định đúng từ khóa (Keywords) trong câu hỏi là chìa khóa quyết định giúp bạn scan và định vị đoạn văn chứa đáp án nhanh chóng mà không cần phải đọc toàn bộ bài đọc."
            },
            {
              "label": "B",
              "text": "Có 2 nhóm từ khóa chính cần ghi nhớ:\n1. Từ khóa khó thay thế (Hard Keywords / Unchangeable): Tên người (ví dụ: Michael Eisenberg, Palladio), địa danh (California), số liệu, năm tháng, thuật ngữ khoa học đặt trong ngoặc kép ('serendipity', seed banks). Đây là những từ gần như không thể bị paraphrase, giúp bạn định vị đáp án trong vòng 3-5 giây.\n2. Từ khóa dễ bị paraphrase (Soft Keywords): Động từ chỉ hành động (diminished, persuade), tính từ, trạng từ hoặc danh từ chung. Những từ này sẽ thường được thay thế bằng từ đồng nghĩa trong bài đọc."
            },
            {
              "label": "C",
              "text": "Quy trình làm bài:\nBước 1: Đọc câu hỏi và gạch chân ngay lập tức các Hard Keywords.\nBước 2: Xác định ý chính của câu hỏi thông qua các Soft Keywords.\nBước 3: Dùng kỹ năng Scanning để dò tìm Hard Keywords trong bài đọc, sau đó đọc kỹ câu chứa từ khóa để tìm đáp án."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "keywords",
            "questionText": "1. Many seed banks are themselves under threat due to a lack of funds.",
            "acceptableAnswers": [
              "seed banks",
              "lack of funds",
              "funds",
              "threat"
            ],
            "explanation": "Từ khóa chính không thể thay thế là 'seed banks' (ngân hàng hạt giống). Từ khóa nội dung là 'lack of funds' (thiếu vốn) và 'under threat' (bị đe dọa).",
            "evidence": "Many seed banks are themselves under threat due to a lack of funds."
          },
          {
            "id": 2,
            "num": 2,
            "type": "keywords",
            "questionText": "2. The charity raises money to pay for education and the daily needs of poor people.",
            "acceptableAnswers": [
              "charity",
              "education",
              "daily needs",
              "poor people",
              "raises money"
            ],
            "explanation": "Từ khóa chính: 'charity' (tổ chức từ thiện), 'education' (giáo dục), 'daily needs' (nhu cầu hàng ngày), 'poor people' (người nghèo).",
            "evidence": "The charity raises money to pay for education and the daily needs of poor people."
          },
          {
            "id": 3,
            "num": 3,
            "type": "keywords",
            "questionText": "3. Persuading people to use trains and buses will always be an uphill struggle.",
            "acceptableAnswers": [
              "trains and buses",
              "trains",
              "buses",
              "uphill struggle",
              "persuading"
            ],
            "explanation": "Từ khóa cụ thể: 'trains and buses' (phương tiện công cộng), 'uphill struggle' (thách thức khó khăn, thành ngữ quan trọng).",
            "evidence": "Persuading people to use trains and buses will always be an uphill struggle."
          },
          {
            "id": 4,
            "num": 4,
            "type": "keywords",
            "questionText": "4. The amount of open space in California has diminished over the last ten years.",
            "acceptableAnswers": [
              "California",
              "open space",
              "diminished",
              "ten years",
              "last ten years"
            ],
            "explanation": "Hard Keyword: 'California' (tên riêng bang, viết hoa), 'ten years' (thời gian). Soft Keyword: 'open space', 'diminished' (giảm sút).",
            "evidence": "The amount of open space in California has diminished over the last ten years."
          },
          {
            "id": 5,
            "num": 5,
            "type": "keywords",
            "questionText": "5. The farmers of a tribe grow a wide range of plants.",
            "acceptableAnswers": [
              "farmers",
              "tribe",
              "wide range of plants",
              "grow"
            ],
            "explanation": "Từ khóa chính: 'farmers' (nông dân), 'tribe' (bộ lạc), 'wide range of plants' (đa dạng cây trồng).",
            "evidence": "The farmers of a tribe grow a wide range of plants."
          },
          {
            "id": 6,
            "num": 6,
            "type": "keywords",
            "questionText": "6. Who is the person that first used the word 'serendipity'?",
            "acceptableAnswers": [
              "serendipity",
              "first used",
              "person"
            ],
            "explanation": "Hard Keyword: 'serendipity' (từ để trong ngoặc kép, cực kỳ dễ tìm khi scan), 'first used' (lần đầu tiên sử dụng).",
            "evidence": "Who is the person that first used the word 'serendipity'?"
          },
          {
            "id": 7,
            "num": 7,
            "type": "keywords",
            "questionText": "7. What did eggs represent on the whole?",
            "acceptableAnswers": [
              "eggs",
              "represent",
              "on the whole"
            ],
            "explanation": "Từ khóa chính: 'eggs' (trứng), 'represent' (đại diện / tượng trưng cho điều gì).",
            "evidence": "What did eggs represent on the whole?"
          },
          {
            "id": 8,
            "num": 8,
            "type": "keywords",
            "questionText": "8. Who was the first non-Italian architect influenced by Palladio?",
            "acceptableAnswers": [
              "Palladio",
              "non-Italian architect",
              "first",
              "architect"
            ],
            "explanation": "Hard Keyword: 'Palladio' (tên riêng kiến trúc sư), 'non-Italian architect' (kiến trúc sư không phải người Ý), 'first' (đầu tiên).",
            "evidence": "Who was the first non-Italian architect influenced by Palladio?"
          },
          {
            "id": 9,
            "num": 9,
            "type": "keywords",
            "questionText": "9. Who arranged Palladio’s architectural studies?",
            "acceptableAnswers": [
              "Palladio",
              "architectural studies",
              "arranged"
            ],
            "explanation": "Hard Keyword: 'Palladio', từ khóa hành động: 'arranged' (sắp xếp), 'architectural studies' (việc học kiến trúc).",
            "evidence": "Who arranged Palladio’s architectural studies?"
          },
          {
            "id": 10,
            "num": 10,
            "type": "keywords",
            "questionText": "10. Michael Eisenberg believes in giving children financial incentives to do certain tasks.",
            "acceptableAnswers": [
              "Michael Eisenberg",
              "financial incentives",
              "children",
              "tasks"
            ],
            "explanation": "Hard Keyword: 'Michael Eisenberg' (tên riêng người), 'financial incentives' (ưu đãi/phần thưởng tài chính), 'children' (trẻ em).",
            "evidence": "Michael Eisenberg believes in giving children financial incentives to do certain tasks."
          }
        ],
        "vocabulary": [
          {
            "word": "hard keyword",
            "meaning": "Từ khóa bất biến (tên riêng, số, năm, thuật ngữ viết hoa)",
            "example": "California, Michael Eisenberg, 1996"
          },
          {
            "word": "soft keyword",
            "meaning": "Từ khóa có thể bị paraphrase (động từ, tính từ)",
            "example": "diminished = decreased, reduced"
          },
          {
            "word": "financial incentive",
            "meaning": "Động lực tài chính, khuyến khích bằng tiền bạc",
            "example": "giving children financial incentives"
          },
          {
            "word": "uphill struggle",
            "meaning": "Cuộc chiến cam go, thử thách vô cùng khó khăn",
            "example": "an uphill struggle to convince voters"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_2",
    "lessonNum": 2,
    "code": "V03",
    "title": "V03 – CÁCH ĐOÁN NGHĨA TỪ MỚI",
    "shortTitle": "Cách Đoán Nghĩa Từ Mới",
    "category": "foundation",
    "categoryLabel": "Kỹ Năng Nền Tảng",
    "badge": "Kỹ năng cốt lõi",
    "description": "Kỹ thuật đoán nghĩa từ vựng khó trong phòng thi thông qua ngữ cảnh, dấu câu, mệnh đề đồng vị (apposition), ví dụ minh họa và từ trái nghĩa.",
    "examplesCount": 1,
    "totalQuestions": 15,
    "examples": [
      {
        "id": "r2_ex1",
        "exampleNum": 1,
        "title": "15 Câu Luyện Đoán Nghĩa Từ Vựng Theo Dấu Hiệu Ngữ Cảnh",
        "instructions": "Vận dụng phương pháp phân tích ngữ cảnh (dấu ngoặc đơn, dấu gạch ngang, từ nối 'such as', 'e.g.', mệnh đề đồng vị) để đoán nghĩa từ in đậm gạch chân.",
        "passage": {
          "title": "5 Dấu Hiệu Đoán Nghĩa Từ Mới Trong IELTS Reading",
          "paragraphs": [
            {
              "label": "1. Mệnh đề đồng vị (Apposition)",
              "text": "Từ mới đứng ngay trước hoặc sau một danh từ/cụm danh từ giải thích cho nó, ngăn cách bởi dấu phẩy. Ví dụ: 'Metaphor, a kind of symbol, is...'"
            },
            {
              "label": "2. Dấu ngoặc đơn và gạch ngang (Punctuation)",
              "text": "Tác giả thường đặt định nghĩa hoặc giải thích trực tiếp bên trong dấu ngoặc đơn hoặc giữa hai dấu gạch ngang. Ví dụ: 'Sleet (half rain and half snow)...'"
            },
            {
              "label": "3. Cụm từ đưa ra ví dụ (Examples: such as, e.g., for example)",
              "text": "Dựa vào các ví dụ cụ thể đằng sau để suy luận ra nhóm nghĩa của từ tổng quát. Ví dụ: 'luxury items – e.g., Rolls Royces and Rolex watches'."
            },
            {
              "label": "4. Ngữ cảnh nhân quả / Tình huống (Context & Contrast)",
              "text": "Dựa vào hành động kế tiếp hoặc lý do. Ví dụ: 'tea was tepid, so she put it in the microwave' -> nước nguội/âm ấm nên mới hâm lò vi sóng."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "vocab-clue",
            "questionText": "1. Metaphor, a kind of symbol, is an important analytical concept.\nNghĩa của từ 'Metaphor' là gì?",
            "acceptableAnswers": [
              "a kind of symbol",
              "symbol",
              "phép ẩn dụ",
              "ẩn dụ",
              "biểu tượng"
            ],
            "explanation": "Dấu hiệu mệnh đề đồng vị đứng giữa 2 dấu phẩy ', a kind of symbol,'. Nghĩa: một dạng biểu tượng / phép ẩn dụ.",
            "evidence": "Metaphor, a kind of symbol, is an important analytical concept."
          },
          {
            "id": 2,
            "num": 2,
            "type": "vocab-clue",
            "questionText": "2. The deluge, a flood of rain, threatened to drown the little town.\nNghĩa của từ 'The deluge' là gì?",
            "acceptableAnswers": [
              "a flood of rain",
              "flood",
              "mưa lũ",
              "trận lụt",
              "lũ lụt"
            ],
            "explanation": "Mệnh đề đồng vị ', a flood of rain,' giải thích trực tiếp. Nghĩa: trận mưa lớn như trút nước / lũ lụt.",
            "evidence": "The deluge, a flood of rain, threatened to drown the little town."
          },
          {
            "id": 3,
            "num": 3,
            "type": "vocab-clue",
            "questionText": "3. They buy real estate such as houses, office buildings, and land.\nNghĩa của từ 'real estate' là gì?",
            "acceptableAnswers": [
              "houses, office buildings, and land",
              "bất động sản",
              "nhà đất",
              "địa ốc",
              "houses and land"
            ],
            "explanation": "Dấu hiệu 'such as houses, office buildings, and land' liệt kê ví dụ về nhà cửa, tòa nhà, đất đai -> Bất động sản.",
            "evidence": "They buy real estate such as houses, office buildings, and land."
          },
          {
            "id": 4,
            "num": 4,
            "type": "vocab-clue",
            "questionText": "4. They bought luxury items – e.g., Rolls Royces and Rolex watches.\nNghĩa của từ 'luxury items' là gì?",
            "acceptableAnswers": [
              "Rolls Royces and Rolex watches",
              "đồ xa xỉ",
              "hàng xa xỉ",
              "đồ đắt tiền",
              "hàng cao cấp"
            ],
            "explanation": "Dấu gạch ngang và 'e.g., Rolls Royces and Rolex watches' đưa ví dụ về xe sang và đồng hồ đắt tiền -> Đồ xa xỉ, cao cấp.",
            "evidence": "They bought luxury items – e.g., Rolls Royces and Rolex watches."
          },
          {
            "id": 5,
            "num": 5,
            "type": "vocab-clue",
            "questionText": "5. Black is the colour of mourning; at a funeral people wear black clothing.\nNghĩa của từ 'mourning' là gì?",
            "acceptableAnswers": [
              "tang tóc",
              "đau buồn",
              "đám tang",
              "sự để tang",
              "grief at a funeral"
            ],
            "explanation": "Dấu chấm phẩy nối với mệnh đề 'at a funeral people wear black clothing' (ở đám tang mọi người mặc đồ đen) -> Sự để tang, tang tóc.",
            "evidence": "Black is the colour of mourning; at a funeral people wear black clothing."
          },
          {
            "id": 6,
            "num": 6,
            "type": "vocab-clue",
            "questionText": "6. Her tea was tepid, so she put it in the microwave.\nNghĩa của từ 'tepid' là gì?",
            "acceptableAnswers": [
              "lukewarm",
              "âm ấm",
              "nguội",
              "hơi ấm",
              "not hot enough"
            ],
            "explanation": "Hành động hệ quả 'so she put it in the microwave' (cho vào lò vi sóng để hâm nóng) suy ra nước trà bị nguội, âm ấm (lukewarm).",
            "evidence": "Her tea was tepid, so she put it in the microwave."
          },
          {
            "id": 7,
            "num": 7,
            "type": "vocab-clue",
            "questionText": "7. Sleet (half rain and half snow) can be very difficult to drive in due to poor visibility.\nNghĩa của từ 'Sleet' là gì?",
            "acceptableAnswers": [
              "half rain and half snow",
              "mưa tuyết",
              "mưa đá nhỏ",
              "mưa lẫn tuyết"
            ],
            "explanation": "Định nghĩa đặt trực tiếp trong dấu ngoặc đơn: '(half rain and half snow)' -> mưa tuyết (vừa mưa vừa tuyết).",
            "evidence": "Sleet (half rain and half snow) can be very difficult to drive in"
          },
          {
            "id": 8,
            "num": 8,
            "type": "vocab-clue",
            "questionText": "8. The podiatrist told the woman to take the medicine for 5 days and call him if she did not feel better.\nNghĩa của từ 'podiatrist' là gì?",
            "acceptableAnswers": [
              "foot doctor",
              "bác sĩ",
              "bác sĩ chữa chân",
              "doctor"
            ],
            "explanation": "Ngữ cảnh kê đơn thuốc ('told to take medicine for 5 days and call him') -> Bác sĩ (chuyên khoa bàn chân).",
            "evidence": "The podiatrist told the woman to take the medicine for 5 days"
          },
          {
            "id": 9,
            "num": 9,
            "type": "vocab-clue",
            "questionText": "9. A tornado (a violent storm of twisting wind) struck Edmonton and caused a lot of damage.\nNghĩa của từ 'tornado' là gì?",
            "acceptableAnswers": [
              "a violent storm of twisting wind",
              "lốc xoáy",
              "cơn lốc xoáy",
              "bão lốc"
            ],
            "explanation": "Định nghĩa trong ngoặc đơn: '(a violent storm of twisting wind)' -> Cơn bão gió xoáy dữ dội (Lốc xoáy).",
            "evidence": "A tornado (a violent storm of twisting wind) struck Edmonton"
          },
          {
            "id": 10,
            "num": 10,
            "type": "vocab-clue",
            "questionText": "10. In spite of the adversity of the environment, the small desert plant continued to grow.\nNghĩa của từ 'adversity' là gì?",
            "acceptableAnswers": [
              "hardship",
              "difficulties",
              "khó khăn",
              "nghịch cảnh",
              "khắc nghiệt"
            ],
            "explanation": "Cụm 'In spite of... the small desert plant continued to grow' (mặc dù... cây sa mạc vẫn tiếp tục lớn) -> Sự khắc nghiệt, nghịch cảnh, khó khăn.",
            "evidence": "In spite of the adversity of the environment, the small desert plant continued to grow."
          },
          {
            "id": 11,
            "num": 11,
            "type": "vocab-clue",
            "questionText": "11. The room had a somber atmosphere because the curtains were drawn and everyone spoke in whispers.\nNghĩa của từ 'somber' là gì?",
            "acceptableAnswers": [
              "dark and gloomy",
              "u ám",
              "ảm đạm",
              "buồn bã",
              "serious"
            ],
            "explanation": "Ngữ cảnh 'curtains were drawn and everyone spoke in whispers' (kéo rèm tối, nói thì thào) -> Bầu không khí u ám, ảm đạm.",
            "evidence": "The room had a somber atmosphere because the curtains were drawn"
          },
          {
            "id": 12,
            "num": 12,
            "type": "vocab-clue",
            "questionText": "12. Owls are nocturnal birds; they sleep during the day and hunt at night.\nNghĩa của từ 'nocturnal' là gì?",
            "acceptableAnswers": [
              "active at night",
              "hunt at night",
              "hoạt động về đêm",
              "sống về đêm"
            ],
            "explanation": "Giải thích sau dấu chấm phẩy: 'they sleep during the day and hunt at night' -> Hoạt động về đêm.",
            "evidence": "Owls are nocturnal birds; they sleep during the day and hunt at night."
          },
          {
            "id": 13,
            "num": 13,
            "type": "vocab-clue",
            "questionText": "13. Unlike her gregarious sister who loved parties, Emma preferred staying home alone.\nNghĩa của từ 'gregarious' là gì?",
            "acceptableAnswers": [
              "sociable",
              "outgoing",
              "thích giao du",
              "hòa đồng",
              "fond of company"
            ],
            "explanation": "Từ đối lập 'Unlike... who loved parties' tương phản với 'preferred staying home alone' -> Thích giao lưu, hòa đồng, thích tiệc tùng.",
            "evidence": "Unlike her gregarious sister who loved parties, Emma preferred staying home alone."
          },
          {
            "id": 14,
            "num": 14,
            "type": "vocab-clue",
            "questionText": "14. The events in the history textbook are arranged in chronological order, starting from 1900 to 2000.\nNghĩa của từ 'chronological' là gì?",
            "acceptableAnswers": [
              "in order of time",
              "theo thứ tự thời gian",
              "theo thời gian"
            ],
            "explanation": "Diễn giải 'starting from 1900 to 2000' -> Sắp xếp theo trình tự thời gian.",
            "evidence": "arranged in chronological order, starting from 1900 to 2000."
          },
          {
            "id": 15,
            "num": 15,
            "type": "vocab-clue",
            "questionText": "15. The beauty of the cherry blossoms is ephemeral; they only last for a single week before falling.\nNghĩa của từ 'ephemeral' là gì?",
            "acceptableAnswers": [
              "short-lived",
              "lasting a short time",
              "phù du",
              "chóng tàn",
              "ngắn ngủi"
            ],
            "explanation": "Giải thích sau dấu chấm phẩy: 'they only last for a single week before falling' -> Tồn tại trong thời gian rất ngắn, chóng tàn, phù du.",
            "evidence": "The beauty of the cherry blossoms is ephemeral; they only last for a single week"
          }
        ],
        "vocabulary": [
          {
            "word": "apposition",
            "meaning": "Mệnh đề đồng vị (dùng giải thích danh từ đứng trước)",
            "example": "Paris, the capital of France"
          },
          {
            "word": "context clue",
            "meaning": "Manh mối ngữ cảnh để suy luận nghĩa từ",
            "example": "Using context clues to infer meaning"
          },
          {
            "word": "tepid",
            "meaning": "Âm ấm, nguội (nước/chất lỏng)",
            "example": "tepid water"
          },
          {
            "word": "ephemeral",
            "meaning": "Phù du, ngắn ngủi, chóng tàn",
            "example": "ephemeral pleasure"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_3",
    "lessonNum": 3,
    "code": "V05",
    "title": "V05 - SHORT ANSWER QUESTIONS",
    "shortTitle": "Short Answer Questions",
    "category": "completion",
    "categoryLabel": "Dạng Điền Từ",
    "badge": "Trả lời câu hỏi ngắn",
    "description": "Chiến thuật trả lời câu hỏi ngắn: Đọc kỹ giới hạn số từ (NO MORE THAN TWO WORDS), xác định từ để hỏi (Who, What, Where, When) và scan từ khóa.",
    "examplesCount": 2,
    "totalQuestions": 9,
    "examples": [
      {
        "id": "r3_ex1",
        "exampleNum": 1,
        "title": "Example 1: STEPWELLS (Giếng bậc thang Ấn Độ)",
        "instructions": "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
        "passage": {
          "title": "STEPWELLS",
          "paragraphs": [
            {
              "label": "A",
              "text": "Some wells are vast, open craters with hundreds of steps paving each sloping side, often in tiers. Others are more elaborate, with long stepped passages leading to the water via several storeys built from stone and supported by pillars, they also included pavilions that sheltered visitors from the relentless heat. But perhaps the most impressive features are the intricate decorative sculptures that embellish many of the monuments, displaying fine craftsmanship and depicting scenes from Hindu mythology."
            },
            {
              "label": "B",
              "text": "Maximum levels of rainfall occur between July and September, when the southwest monsoon floods the land with precious water. For the remaining nine months, however, barely a drop falls, and groundwater is the only reliable resource. Stepwells were engineered to collect rainwater as well as gain access to the deep subterranean water table during dry periods."
            },
            {
              "label": "C",
              "text": "However, in the late nineteenth century, stepwells suffered a dramatic decline in importance. The British raj introduced piped water and sanitation systems, and the ancient wells were considered unhygienic breeding grounds for disease. Many were filled in or neglected. Recently, however, southern Rajasthan suffered an eight-year drought between 1996 and 2004, causing severe water crises. This crisis prompted local communities and historians to rediscover the wisdom of ancient water architecture."
            },
            {
              "label": "D",
              "text": "Today, following years of neglect, many of these monuments to medieval engineering have been saved by the Archaeological Survey of India. The government has recognized their cultural value, and tourists flock to wells in far-flung corners of north-western India to admire their stunning architecture. Furthermore, the state government of Rajasthan is now funding a project to restore several stepwells, while also encouraging a revival of traditional rainwater harvesting to safeguard the region's agricultural future."
            }
          ]
        },
        "questions": [
          {
            "id": 6,
            "num": 6,
            "type": "gap-fill",
            "questionText": "6. What type of serious climatic event, which took place in southern Rajasthan, is mentioned in the article?",
            "acceptableAnswers": [
              "drought",
              "droughts",
              "an eight-year drought",
              "eight-year drought"
            ],
            "explanation": "Đoạn C có câu: 'southern Rajasthan suffered an eight-year drought between 1996 and 2004'. Sự kiện khí hậu nghiêm trọng là hạn hán ('drought').",
            "evidence": "southern Rajasthan suffered an eight-year drought between 1996 and 2004"
          },
          {
            "id": 7,
            "num": 7,
            "type": "gap-fill",
            "questionText": "7. Who are frequent visitors to stepwells nowadays?",
            "acceptableAnswers": [
              "tourists",
              "tourist"
            ],
            "explanation": "Đoạn D có câu: 'tourists flock to wells in far-flung corners of north-western India'. 'Flock to' đồng nghĩa với 'frequent visitors'. Đáp án là 'tourists'.",
            "evidence": "tourists flock to wells in far-flung corners of north-western India"
          },
          {
            "id": 8,
            "num": 8,
            "type": "gap-fill",
            "questionText": "8. What is the term for water collection that has recently been reintroduced in India?",
            "acceptableAnswers": [
              "rainwater harvesting",
              "traditional rainwater harvesting"
            ],
            "explanation": "Đoạn D có câu: 'encouraging a revival of traditional rainwater harvesting'. 'Revival' đồng nghĩa với 'reintroduced' (tái áp dụng). Đáp án là 'rainwater harvesting'.",
            "evidence": "encouraging a revival of traditional rainwater harvesting"
          }
        ],
        "vocabulary": [
          {
            "word": "stepwell",
            "meaning": "Giếng bậc thang truyền thống ở Ấn Độ",
            "example": "Ancient stepwells were architectural wonders."
          },
          {
            "word": "drought",
            "meaning": "Hạn hán kéo dài",
            "example": "suffered an eight-year drought"
          },
          {
            "word": "rainwater harvesting",
            "meaning": "Hệ thống thu thập và lưu trữ nước mưa",
            "example": "revival of rainwater harvesting"
          },
          {
            "word": "subterranean",
            "meaning": "Dưới lòng đất, ngầm",
            "example": "subterranean water table"
          }
        ]
      },
      {
        "id": "r3_ex2",
        "exampleNum": 2,
        "title": "Example 2: WILLIAM HENRY PERKIN (Nhà Hóa Học Phát Minh Phẩm Nhuộm)",
        "instructions": "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "WILLIAM HENRY PERKIN - The man who invented synthetic dyes",
          "paragraphs": [
            {
              "label": "A",
              "text": "Historically, textile dyes were made from such natural sources as plants and animal excretions. Some of these, such as the glandular mucus of snails, were difficult to obtain and outrageously expensive. Indeed, the purple colour extracted from a snail was once so prized by the ancient Greeks and Romans that only the imperial family could afford to wear garments dyed in it."
            },
            {
              "label": "B",
              "text": "In 1856, William Henry Perkin was an eighteen-year-old student at the Royal College of Chemistry in London. At the time, quinine was the only viable medical treatment for malaria, a deadly disease that afflicted thousands of European troops stationed in tropical regions. The drug was derived from the bark of the cinchona tree, native to South America, and supplies were scarce. Perkin's tutor, August Wilhelm von Hofmann, believed quinine might be synthesized artificially in a laboratory."
            },
            {
              "label": "C",
              "text": "During his Easter vacation, Perkin set to work in his makeshift laboratory at home. Attempting to manufacture quinine from coal tar, he began incorporating potassium dichromate and aniline into the mix. At the end of his attempt, he did not get the intended clear quinine crystals, but instead produced a dark, murky sludge. When he cleaned the flask with alcohol, the solution unexpectedly turned a rich purple."
            },
            {
              "label": "D",
              "text": "Recognizing that the substance had potential as a colorant, Perkin tested it on pieces of silk and found that the colour did not fade when washed or exposed to light. He initially named the colour Tyrian purple, but later it became known simply as mauve. A prominent Scottish textile producer named Robert Pullar recognized its enormous commercial potential and urged Perkin to patent his invention and build a factory."
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "num": 8,
            "type": "gap-fill",
            "questionText": "8. Before synthetic dyes were discovered, what had been used to produce the colour purple?",
            "acceptableAnswers": [
              "snails",
              "snail",
              "mucus of snails",
              "glandular mucus"
            ],
            "explanation": "Đoạn A nêu: 'the purple colour extracted from a snail was once so prized...'. Đáp án là 'snails' hoặc 'mucus of snails'.",
            "evidence": "the purple colour extracted from a snail was once so prized"
          },
          {
            "id": 9,
            "num": 9,
            "type": "gap-fill",
            "questionText": "9. What disease did Perkin’s research hope to treat?",
            "acceptableAnswers": [
              "malaria"
            ],
            "explanation": "Đoạn B nêu: 'quinine was the only viable medical treatment for malaria... Perkin's tutor believed quinine might be synthesized'. Nghiên cứu nhằm điều trị bệnh sốt rét ('malaria').",
            "evidence": "quinine was the only viable medical treatment for malaria"
          },
          {
            "id": 10,
            "num": 10,
            "type": "gap-fill",
            "questionText": "10. What was the extract from coal tar that Perkin intended to use?",
            "acceptableAnswers": [
              "aniline",
              "potassium dichromate and aniline"
            ],
            "explanation": "Đoạn C nêu: 'he began incorporating potassium dichromate and aniline into the mix'. Chiết xuất từ than đá là 'aniline'.",
            "evidence": "incorporating potassium dichromate and aniline into the mix"
          },
          {
            "id": 11,
            "num": 11,
            "type": "gap-fill",
            "questionText": "11. What was the colour of the extract that Perkin produced from coal tar?",
            "acceptableAnswers": [
              "purple",
              "rich purple"
            ],
            "explanation": "Đoạn C nêu: 'the solution unexpectedly turned a rich purple'. Màu sắc dung dịch là 'purple'.",
            "evidence": "the solution unexpectedly turned a rich purple"
          },
          {
            "id": 12,
            "num": 12,
            "type": "gap-fill",
            "questionText": "12. What was the name of the synthetic dye originally given by Perkin?",
            "acceptableAnswers": [
              "Tyrian purple",
              "mauve"
            ],
            "explanation": "Đoạn D nêu: 'He initially named the colour Tyrian purple, but later it became known simply as mauve'. Đáp án ban đầu là 'Tyrian purple' (hoặc 'mauve').",
            "evidence": "He initially named the colour Tyrian purple"
          },
          {
            "id": 13,
            "num": 13,
            "type": "gap-fill",
            "questionText": "13. Who was the person who suggested Perkin open a factory?",
            "acceptableAnswers": [
              "Robert Pullar"
            ],
            "explanation": "Đoạn D nêu: 'A prominent Scottish textile producer named Robert Pullar recognized its enormous commercial potential and urged Perkin to patent his invention and build a factory'.",
            "evidence": "Robert Pullar recognized its enormous commercial potential and urged Perkin to patent his invention and build a factory"
          }
        ],
        "vocabulary": [
          {
            "word": "synthetic dye",
            "meaning": "Phẩm nhuộm nhân tạo / hóa học",
            "example": "invention of synthetic dye"
          },
          {
            "word": "malaria",
            "meaning": "Bệnh sốt rét",
            "example": "quinine was used to treat malaria"
          },
          {
            "word": "makeshift laboratory",
            "meaning": "Phòng thí nghiệm dã chiến, tự chế tại nhà",
            "example": "worked in his makeshift laboratory"
          },
          {
            "word": "patent",
            "meaning": "Bằng sáng chế độc quyền",
            "example": "patent his invention"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_4",
    "lessonNum": 4,
    "code": "V06",
    "title": "V06 - SENTENCE COMPLETION",
    "shortTitle": "Sentence Completion",
    "category": "completion",
    "categoryLabel": "Dạng Điền Từ",
    "badge": "Hoàn thành câu",
    "description": "Chiến thuật điền từ vào câu: Phân tích ngữ pháp của từ cần điền (danh từ số ít/nhiều, tính từ, động từ), tìm từ khóa xung quanh chỗ trống và định vị câu trong bài đọc.",
    "examplesCount": 3,
    "totalQuestions": 11,
    "examples": [
      {
        "id": "r4_ex1",
        "exampleNum": 1,
        "title": "Example 1: THE CONTEXT, MEANING AND SCOPE OF TOURISM",
        "instructions": "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        "passage": {
          "title": "THE CONTEXT, MEANING AND SCOPE OF TOURISM",
          "paragraphs": [
            {
              "label": "A",
              "text": "Once the exclusive province of the wealthy, travel and tourism have become an institutionalised way of life for most of the population. In fact, McIntosh and Goeldner (1990) suggest that tourism has become the largest commodity in international trade for many nations and, for a significant number of other countries, it ranks second or third."
            },
            {
              "label": "B",
              "text": "For example, in Greece, tourism is the primary source of income and foreign exchange earnings, underpinning their whole economy. In Jamaica, travel and tourism is the major employer, with over 25 percent of the working population employed directly or indirectly in hotels, tour operations, and transportation services."
            },
            {
              "label": "C",
              "text": "However, the task of accurately assessing the economic significance of tourism is extremely complex. Many businesses serve both tourists and local residents, making separation difficult. Furthermore, the problems and complications associated with measuring international tourism are greatly magnified in domestic tourism, because travellers within a country rarely pass through border controls where statistics can easily be logged."
            }
          ]
        },
        "questions": [
          {
            "id": 11,
            "num": 11,
            "type": "gap-fill",
            "questionText": "11. In Greece, tourism is the most important _______",
            "acceptableAnswers": [
              "source of income",
              "source of foreign exchange"
            ],
            "explanation": "Đoạn B nêu: 'in Greece, tourism is the primary source of income'. 'Primary' = 'most important'. Đáp án là 'source of income'.",
            "evidence": "in Greece, tourism is the primary source of income"
          },
          {
            "id": 12,
            "num": 12,
            "type": "gap-fill",
            "questionText": "12. The travel and tourism industry in Jamaica is the major _______",
            "acceptableAnswers": [
              "employer"
            ],
            "explanation": "Đoạn B nêu: 'In Jamaica, travel and tourism is the major employer'. Đáp án là 'employer'.",
            "evidence": "In Jamaica, travel and tourism is the major employer"
          },
          {
            "id": 13,
            "num": 13,
            "type": "gap-fill",
            "questionText": "13. The problems associated with measuring international tourism are often reflected in the measurement of _______",
            "acceptableAnswers": [
              "domestic tourism"
            ],
            "explanation": "Đoạn C nêu: 'measuring international tourism are greatly magnified in domestic tourism'. Đáp án là 'domestic tourism'.",
            "evidence": "measuring international tourism are greatly magnified in domestic tourism"
          }
        ],
        "vocabulary": [
          {
            "word": "commodity",
            "meaning": "Hàng hóa thương mại",
            "example": "largest commodity in international trade"
          },
          {
            "word": "underpin",
            "meaning": "Chống đỡ, làm nền tảng cho",
            "example": "underpinning their whole economy"
          },
          {
            "word": "domestic tourism",
            "meaning": "Du lịch nội địa",
            "example": "measuring domestic tourism is challenging"
          }
        ]
      },
      {
        "id": "r4_ex2",
        "exampleNum": 2,
        "title": "Example 2: AUTUMN LEAVES (Sắc Đỏ Của Lá Mùa Thu)",
        "instructions": "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "AUTUMN LEAVES - Why leaves turn red in the fall",
          "paragraphs": [
            {
              "label": "A",
              "text": "Chlorophyll, although exquisitely evolved to capture the energy of sunlight, can sometimes be overwhelmed by it, especially in situations of drought, low temperatures, or nutrient deficiency. Moreover, the problem of oversensitivity to light is even more acute in the fall, when leaves are busy preparing for winter by dismantling their internal machinery."
            },
            {
              "label": "B",
              "text": "The energy absorbed by the chlorophyll molecules of the unstable autumn leaf is not immediately channeled into useful products and processes, as it would be in summer. Instead, vulnerable internal structures become damaged. To protect themselves, trees synthesize red pigments called anthocyanins, which act as a solar shield."
            },
            {
              "label": "C",
              "text": "Field studies have shown that trees exposed to brighter sunlight generate substantially higher amounts of anthocyanin than shaded trees. Furthermore, scientists discovered that when trees suffer from nitrogen deficiency in the soil, they dramatically boost anthocyanin production to salvage every scrap of nutrient before winter sets in."
            }
          ]
        },
        "questions": [
          {
            "id": 19,
            "num": 19,
            "type": "gap-fill",
            "questionText": "19. It is in situations of _______ that trees are at greater risk of being damaged by sunlight.",
            "acceptableAnswers": [
              "drought",
              "nutrient deficiency",
              "low temperatures"
            ],
            "explanation": "Đoạn A: 'especially in situations of drought, low temperatures, or nutrient deficiency'. Đáp án chuẩn xác là 'drought'.",
            "evidence": "especially in situations of drought, low temperatures, or nutrient deficiency"
          },
          {
            "id": 20,
            "num": 20,
            "type": "gap-fill",
            "questionText": "20. The effect of intense sunlight is more severe on trees in autumn than in _______",
            "acceptableAnswers": [
              "summer",
              "the summer"
            ],
            "explanation": "Đoạn A & B so sánh: 'even more acute in the fall than in summer'. Đáp án là 'summer'.",
            "evidence": "acute in the fall... as it would be in summer"
          },
          {
            "id": 21,
            "num": 21,
            "type": "gap-fill",
            "questionText": "21. Plants which produce more anthocyanin grow in areas where sunlight is _______",
            "acceptableAnswers": [
              "brighter",
              "more bright"
            ],
            "explanation": "Đoạn C: 'trees exposed to brighter sunlight generate substantially higher amounts of anthocyanin'. Đáp án là 'brighter'.",
            "evidence": "trees exposed to brighter sunlight generate substantially higher amounts of anthocyanin"
          },
          {
            "id": 22,
            "num": 22,
            "type": "gap-fill",
            "questionText": "22. The production of anthocyanin may be a response to a deficiency in _______",
            "acceptableAnswers": [
              "nitrogen",
              "nutrients"
            ],
            "explanation": "Đoạn C: 'when trees suffer from nitrogen deficiency in the soil, they dramatically boost anthocyanin production'. Đáp án là 'nitrogen'.",
            "evidence": "suffer from nitrogen deficiency in the soil, they dramatically boost anthocyanin production"
          }
        ],
        "vocabulary": [
          {
            "word": "chlorophyll",
            "meaning": "Chất diệp lục trong lá cây",
            "example": "Chlorophyll captures sunlight energy."
          },
          {
            "word": "anthocyanin",
            "meaning": "Hợp chất tạo sắc tố đỏ ở thực vật",
            "example": "anthocyanins act as a sunscreen for leaves"
          },
          {
            "word": "deficiency",
            "meaning": "Sự thiếu hụt (chất dinh dưỡng)",
            "example": "nitrogen deficiency in the soil"
          }
        ]
      },
      {
        "id": "r4_ex3",
        "exampleNum": 3,
        "title": "Example 3: GIFTED CHILDREN AND LEARNING (Trẻ Năng Khiếu)",
        "instructions": "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        "passage": {
          "title": "GIFTED CHILDREN AND LEARNING",
          "paragraphs": [
            {
              "label": "A",
              "text": "Internationally, 'giftedness' is most frequently determined by a score on a general intelligence test, known as an IQ test, which is above a chosen cutoff point, usually at around the top 2-5%. Children's educational environment contributes enormously to their IQ score and the way intelligence is exercised. For example, a very close positive relationship was found between children's intellectual achievement and the availability of books and learning resources at home."
            },
            {
              "label": "B",
              "text": "However, emotional wellbeing also plays an integral role. Negative feelings such as intense anxiety can disrupt a child's mental processing and completely inhibit their ability to engage in complex learning activities. Children who feel overwhelmed fail to convert their innate potential into tangible performance."
            },
            {
              "label": "C",
              "text": "In addition, research indicates that high-ability children demonstrate advanced self-regulatory habits. Consequently, highly gifted children may not require as much continuous supervision from adults as children of average ability. Therefore, strategies used to nurture gifted learners should emulate the flexible methods used by teachers who cultivate independent thinking."
            }
          ]
        },
        "questions": [
          {
            "id": 23,
            "num": 23,
            "type": "gap-fill",
            "questionText": "23. Less-privileged children may need more _______ than other children in order to achieve high educational standards.",
            "acceptableAnswers": [
              "books",
              "learning resources",
              "books and learning resources"
            ],
            "explanation": "Đoạn A: 'availability of books and learning resources at home'. Đáp án là 'books' hoặc 'learning resources'.",
            "evidence": "availability of books and learning resources at home"
          },
          {
            "id": 24,
            "num": 24,
            "type": "gap-fill",
            "questionText": "24. A child’s emotional state may prevent them from succeeding in certain educational _______",
            "acceptableAnswers": [
              "activities",
              "learning activities",
              "tasks"
            ],
            "explanation": "Đoạn B: 'anxiety can disrupt... and completely inhibit their ability to engage in complex learning activities'. Đáp án là 'activities' hoặc 'learning activities'.",
            "evidence": "inhibit their ability to engage in complex learning activities"
          },
          {
            "id": 25,
            "num": 25,
            "type": "gap-fill",
            "questionText": "25. Highly gifted children may not require as much help from adults as children of _______",
            "acceptableAnswers": [
              "average ability"
            ],
            "explanation": "Đoạn C: 'may not require as much continuous supervision from adults as children of average ability'. Đáp án là 'average ability'.",
            "evidence": "supervision from adults as children of average ability"
          },
          {
            "id": 26,
            "num": 26,
            "type": "gap-fill",
            "questionText": "26. The methods used to support gifted children should be based on techniques used by _______",
            "acceptableAnswers": [
              "teachers"
            ],
            "explanation": "Đoạn C: 'emulate the flexible methods used by teachers'. Đáp án là 'teachers'.",
            "evidence": "emulate the flexible methods used by teachers"
          }
        ],
        "vocabulary": [
          {
            "word": "giftedness",
            "meaning": "Tố chất năng khiếu, sự thông minh bẩm sinh",
            "example": "identifying children with giftedness"
          },
          {
            "word": "inhibit",
            "meaning": "Kìm hãm, ngăn chặn",
            "example": "fear can inhibit intellectual performance"
          },
          {
            "word": "average ability",
            "meaning": "Năng lực trung bình",
            "example": "students of average ability"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_5",
    "lessonNum": 5,
    "code": "V07",
    "title": "V07 - SUMMARY COMPLETION",
    "shortTitle": "Summary Completion",
    "category": "completion",
    "categoryLabel": "Dạng Điền Từ",
    "badge": "Điền tóm tắt",
    "description": "Chiến thuật điền từ vào đoạn tóm tắt: Đoán từ loại của chỗ trống, nhận diện paraphrase trong văn bản tóm tắt và quét từ khóa định vị vùng bài đọc.",
    "examplesCount": 4,
    "totalQuestions": 19,
    "examples": [
      {
        "id": "r5_ex1",
        "exampleNum": 1,
        "title": "Example 1: Young Children’s Sense of Identity",
        "instructions": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "Young Children's Developing Sense of Self",
          "paragraphs": [
            {
              "label": "A",
              "text": "Lewis and Brooks-Gunn (1979) suggest that infants' developing understanding that the movements they see in the mirror are contingent on their own, leads to a growing awareness that they are distinct from other people. This is because they, and only they, can change the reflection in the mirror."
            },
            {
              "label": "B",
              "text": "This understanding that children gain of themselves as active agents continues to develop in their day-to-day social interactions with caregivers. Through social communication, toddlers begin to realise that other people have perspectives and desires different from their own."
            },
            {
              "label": "C",
              "text": "Another powerful indicator of a child's emergent sense of identity is the burgeoning assertion of ownership over personal possessions. Toddlers frequently claim toys by shouting 'Mine!' to mark boundaries between self and others. Research demonstrates that this cognitive leap typically consolidates at around eighteen months to two years of age."
            },
            {
              "label": "D",
              "text": "However, with self-awareness comes a surge of emotional volatility. When a child's strong will is frustrated by parental boundaries, expressions of intense anger and temper tantrums often emerge as the child struggles to reconcile autonomy with external limits."
            }
          ]
        },
        "questions": [
          {
            "id": 27,
            "num": 27,
            "type": "gap-fill",
            "questionText": "27. Infants develop self-awareness by realizing that visual feedback in a _______ reflects their physical actions.",
            "acceptableAnswers": [
              "mirror",
              "the mirror"
            ],
            "explanation": "Đoạn A: 'movements they see in the mirror are contingent on their own'. Đáp án là 'mirror'.",
            "evidence": "movements they see in the mirror are contingent on their own"
          },
          {
            "id": 28,
            "num": 28,
            "type": "gap-fill",
            "questionText": "28. Children expand their understanding through social _______ with people around them.",
            "acceptableAnswers": [
              "communication",
              "interactions",
              "social interactions"
            ],
            "explanation": "Đoạn B: 'Through social communication... realise that other people have perspectives'. Đáp án là 'communication'.",
            "evidence": "Through social communication, toddlers begin to realise"
          },
          {
            "id": 29,
            "num": 29,
            "type": "gap-fill",
            "questionText": "29. Toddlers often assert their individuality by expressing _______ over their toys and objects.",
            "acceptableAnswers": [
              "ownership"
            ],
            "explanation": "Đoạn C: 'assertion of ownership over personal possessions'. Đáp án là 'ownership'.",
            "evidence": "burgeoning assertion of ownership over personal possessions"
          },
          {
            "id": 30,
            "num": 30,
            "type": "gap-fill",
            "questionText": "30. This landmark developmental stage usually stabilizes at a particular _______ between 18 months and two years.",
            "acceptableAnswers": [
              "age"
            ],
            "explanation": "Đoạn C: 'typically consolidates at around eighteen months to two years of age'. Đáp án là 'age'.",
            "evidence": "eighteen months to two years of age"
          },
          {
            "id": 31,
            "num": 31,
            "type": "gap-fill",
            "questionText": "31. The conflict between autonomy and restrictions can manifest as outbursts of _______",
            "acceptableAnswers": [
              "anger",
              "intense anger"
            ],
            "explanation": "Đoạn D: 'expressions of intense anger and temper tantrums often emerge'. Đáp án là 'anger'.",
            "evidence": "expressions of intense anger and temper tantrums often emerge"
          }
        ],
        "vocabulary": [
          {
            "word": "contingent on",
            "meaning": "Phụ thuộc vào, gắn liền với",
            "example": "movements are contingent on their own"
          },
          {
            "word": "assertion of ownership",
            "meaning": "Sự khẳng định quyền sở hữu",
            "example": "assertion of ownership over toys"
          },
          {
            "word": "autonomy",
            "meaning": "Tính tự chủ, độc lập",
            "example": "striving for personal autonomy"
          }
        ]
      },
      {
        "id": "r5_ex2",
        "exampleNum": 2,
        "title": "Example 2: Pulling Strings to Build Pyramids",
        "instructions": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "Harnessing the Wind to Build the Pyramids",
          "paragraphs": [
            {
              "label": "A",
              "text": "Others feel there is more of a case for the theory. Harnessing the wind would not have been a problem for accomplished sailors like the ancient Egyptians. And they are known to have used strong ropes and wooden pulleys, which could have been made sturdy enough to bear the weight of massive blocks of stone."
            },
            {
              "label": "B",
              "text": "In addition, there is intriguing physical evidence that the ancient Egyptians were fascinated by mechanical flight. A carved wooden glider found inside the step pyramid at Saqqara looks uncannily aerodynamic. Moreover, hieroglyphs demonstrate that builders studied the aerodynamic wing shapes of soaring birds."
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "num": 8,
            "type": "gap-fill",
            "questionText": "8. Sailors could exploit the energy of the _______ to facilitate heavy construction.",
            "acceptableAnswers": [
              "wind",
              "the wind"
            ],
            "explanation": "Đoạn A: 'Harnessing the wind would not have been a problem'. Đáp án là 'wind'.",
            "evidence": "Harnessing the wind would not have been a problem"
          },
          {
            "id": 9,
            "num": 9,
            "type": "gap-fill",
            "questionText": "9. Heavy stones were lifted using durable _______ attached to mechanical systems.",
            "acceptableAnswers": [
              "ropes"
            ],
            "explanation": "Đoạn A: 'used strong ropes and wooden pulleys'. Đáp án là 'ropes'.",
            "evidence": "used strong ropes and wooden pulleys"
          },
          {
            "id": 10,
            "num": 10,
            "type": "gap-fill",
            "questionText": "10. These rigging systems were engineered to support the immense _______ of limestone blocks.",
            "acceptableAnswers": [
              "weight",
              "weights"
            ],
            "explanation": "Đoạn A: 'bear the weight of massive blocks of stone'. Đáp án là 'weight'.",
            "evidence": "bear the weight of massive blocks of stone"
          },
          {
            "id": 11,
            "num": 11,
            "type": "gap-fill",
            "questionText": "11. Friction was minimized by utilizing wooden _______",
            "acceptableAnswers": [
              "pulleys",
              "wooden pulleys"
            ],
            "explanation": "Đoạn A: 'used strong ropes and wooden pulleys'. Đáp án là 'pulleys'.",
            "evidence": "used strong ropes and wooden pulleys"
          },
          {
            "id": 12,
            "num": 12,
            "type": "gap-fill",
            "questionText": "12. Evidence of an interest in flight includes a small _______ discovered in Saqqara.",
            "acceptableAnswers": [
              "wooden glider",
              "glider"
            ],
            "explanation": "Đoạn B: 'A carved wooden glider found inside the step pyramid at Saqqara'. Đáp án là 'wooden glider' hoặc 'glider'.",
            "evidence": "A carved wooden glider found inside the step pyramid at Saqqara"
          },
          {
            "id": 13,
            "num": 13,
            "type": "gap-fill",
            "questionText": "13. Egyptian engineers were inspired by observing the natural flight of _______",
            "acceptableAnswers": [
              "birds",
              "soaring birds"
            ],
            "explanation": "Đoạn B: 'studied the aerodynamic wing shapes of soaring birds'. Đáp án là 'birds'.",
            "evidence": "studied the aerodynamic wing shapes of soaring birds"
          }
        ],
        "vocabulary": [
          {
            "word": "harness",
            "meaning": "Khai thác (năng lượng tự nhiên)",
            "example": "harnessing the wind"
          },
          {
            "word": "pulley",
            "meaning": "Ròng rọc",
            "example": "wooden pulleys for lifting heavy stone"
          },
          {
            "word": "aerodynamic",
            "meaning": "Khí động học (lướt gió tốt)",
            "example": "aerodynamic wing shape"
          }
        ]
      },
      {
        "id": "r5_ex3",
        "exampleNum": 3,
        "title": "Example 3: Beyond the Blue Horizon (Lapita Seafarers)",
        "instructions": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "BEYOND THE BLUE HORIZON",
          "paragraphs": [
            {
              "label": "A",
              "text": "An important archaeological discovery on the island of Efate in the Pacific archipelago of Vanuatu has revealed traces of an ancient seafaring people, the Lapita, distant ancestors of today's Polynesians. An agricultural worker accidentally unearthed a vast ancient cemetery containing dozens of well-preserved human skeletons."
            },
            {
              "label": "B",
              "text": "The discovery was miraculous because human bones deteriorate quickly in tropical acidic soil. However, the remains had been buried underneath a protective blanket of volcanic ash from a nearby eruption, shielding the bones from decay."
            },
            {
              "label": "C",
              "text": "The Lapita were master navigators who traversed thousands of nautical miles in double-hulled wooden canoes. Rather than drifting aimlessly, they deliberately sailed into prevailing trade winds, knowing that if they failed to sight land, they could turn around and swiftly return home with the wind behind them."
            }
          ]
        },
        "questions": [
          {
            "id": 27,
            "num": 27,
            "type": "gap-fill",
            "questionText": "27. The site on Efate turned out to be an expansive prehistoric _______",
            "acceptableAnswers": [
              "cemetery",
              "ancient cemetery"
            ],
            "explanation": "Đoạn A: 'unearthed a vast ancient cemetery'. Đáp án là 'cemetery'.",
            "evidence": "unearthed a vast ancient cemetery containing dozens of skeletons"
          },
          {
            "id": 28,
            "num": 28,
            "type": "gap-fill",
            "questionText": "28. Skeletons were remarkable because human _______ typically disintegrate rapidly in the tropics.",
            "acceptableAnswers": [
              "bones",
              "human bones"
            ],
            "explanation": "Đoạn B: 'human bones deteriorate quickly in tropical acidic soil'. Đáp án là 'bones'.",
            "evidence": "human bones deteriorate quickly in tropical acidic soil"
          },
          {
            "id": 29,
            "num": 29,
            "type": "gap-fill",
            "questionText": "29. The skeletons survived owing to a thick deposit of _______",
            "acceptableAnswers": [
              "volcanic ash",
              "ash"
            ],
            "explanation": "Đoạn B: 'buried underneath a protective blanket of volcanic ash'. Đáp án là 'volcanic ash'.",
            "evidence": "protective blanket of volcanic ash from a nearby eruption"
          },
          {
            "id": 30,
            "num": 30,
            "type": "gap-fill",
            "questionText": "30. Voyagers explored remote Pacific islands using specialized ocean-going _______",
            "acceptableAnswers": [
              "canoes",
              "wooden canoes"
            ],
            "explanation": "Đoạn C: 'traversed thousands of nautical miles in double-hulled wooden canoes'. Đáp án là 'canoes'.",
            "evidence": "traversed thousands of nautical miles in double-hulled wooden canoes"
          },
          {
            "id": 31,
            "num": 31,
            "type": "gap-fill",
            "questionText": "31. Their navigation strategy relied on the predictability of the _______",
            "acceptableAnswers": [
              "trade winds",
              "prevailing trade winds"
            ],
            "explanation": "Đoạn C: 'deliberately sailed into prevailing trade winds'. Đáp án là 'trade winds'.",
            "evidence": "deliberately sailed into prevailing trade winds"
          }
        ],
        "vocabulary": [
          {
            "word": "cemetery",
            "meaning": "Nghĩa trang, khu mộ cổ",
            "example": "prehistoric cemetery"
          },
          {
            "word": "volcanic ash",
            "meaning": "Tro bụi núi lửa",
            "example": "preserved under volcanic ash"
          },
          {
            "word": "trade winds",
            "meaning": "Gió mậu dịch / gió mùa",
            "example": "navigating by trade winds"
          }
        ]
      },
      {
        "id": "r5_ex4",
        "exampleNum": 4,
        "title": "Example 4: The Little Ice Age",
        "instructions": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "THE LITTLE ICE AGE - Climatic Shifts and Human History",
          "paragraphs": [
            {
              "label": "A",
              "text": "To reconstruct historical temperatures before modern thermometers existed, paleoclimatologists analyze annual growth patterns in tree rings, which record summer temperatures with extraordinary precision. Scientists also drill deep into polar glaciers to extract ice cores, revealing ancient atmospheric gas compositions."
            },
            {
              "label": "B",
              "text": "Physical markers left by mountain glaciers corroborate this data: between 1300 and 1850, a sudden climate cooling enveloped Europe, known as the Little Ice Age. Freezing winters caused rivers like the Thames to freeze solid, and shortened growing seasons triggered severe agricultural crises across the continent."
            }
          ]
        },
        "questions": [
          {
            "id": 18,
            "num": 18,
            "type": "gap-fill",
            "questionText": "18. Past climate variations can be measured by studying the thickness of _______",
            "acceptableAnswers": [
              "tree rings",
              "rings"
            ],
            "explanation": "Đoạn A: 'analyze annual growth patterns in tree rings'. Đáp án là 'tree rings'.",
            "evidence": "analyze annual growth patterns in tree rings"
          },
          {
            "id": 19,
            "num": 19,
            "type": "gap-fill",
            "questionText": "19. Ancient gas samples are retrieved by extracting polar _______",
            "acceptableAnswers": [
              "ice cores"
            ],
            "explanation": "Đoạn A: 'drill deep into polar glaciers to extract ice cores'. Đáp án là 'ice cores'.",
            "evidence": "drill deep into polar glaciers to extract ice cores"
          },
          {
            "id": 20,
            "num": 20,
            "type": "gap-fill",
            "questionText": "20. The historical boundaries of Alpine _______ provide evidence of frozen periods.",
            "acceptableAnswers": [
              "glaciers",
              "mountain glaciers"
            ],
            "explanation": "Đoạn B: 'markers left by mountain glaciers corroborate this data'. Đáp án là 'glaciers'.",
            "evidence": "markers left by mountain glaciers corroborate this data"
          },
          {
            "id": 21,
            "num": 21,
            "type": "gap-fill",
            "questionText": "21. Between the 14th and 19th centuries, Europe experienced an era of significant _______",
            "acceptableAnswers": [
              "cooling",
              "climate cooling"
            ],
            "explanation": "Đoạn B: 'a sudden climate cooling enveloped Europe'. Đáp án là 'cooling'.",
            "evidence": "a sudden climate cooling enveloped Europe, known as the Little Ice Age"
          },
          {
            "id": 22,
            "num": 22,
            "type": "gap-fill",
            "questionText": "22. The extended chill caused serious devastation to European _______",
            "acceptableAnswers": [
              "agriculture",
              "harvests"
            ],
            "explanation": "Đoạn B: 'shortened growing seasons triggered severe agricultural crises'. Đáp án là 'agriculture'.",
            "evidence": "triggered severe agricultural crises across the continent"
          }
        ],
        "vocabulary": [
          {
            "word": "paleoclimatologist",
            "meaning": "Nhà cổ khí hậu học (nghiên cứu khí hậu quá khứ)",
            "example": "Paleoclimatologists analyze ice cores."
          },
          {
            "word": "ice core",
            "meaning": "Lõi băng lấy từ sông băng / địa cực",
            "example": "drilling ice cores in Antarctica"
          },
          {
            "word": "glacier",
            "meaning": "Sông băng",
            "example": "retreating glaciers"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_6",
    "lessonNum": 6,
    "code": "V08",
    "title": "V08 - TABLE/ FLOW CHART COMPLETION",
    "shortTitle": "Table & Flow Chart",
    "category": "completion",
    "categoryLabel": "Dạng Điền Từ",
    "badge": "Bảng & Lưu đồ",
    "description": "Chiến thuật hoàn thành bảng và sơ đồ quy trình: Theo dõi mũi tên tuần tự của quy trình (chronological order) và tiêu đề các cột mốc trong bảng.",
    "examplesCount": 3,
    "totalQuestions": 18,
    "examples": [
      {
        "id": "r6_ex1",
        "exampleNum": 1,
        "title": "Example 1: Sheet Glass Manufacture (Quy trình sản xuất kính nổi)",
        "instructions": "Complete the flow chart below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
        "passage": {
          "title": "SHEET GLASS MANUFACTURE: THE FLOAT PROCESS",
          "paragraphs": [
            {
              "label": "A",
              "text": "Glass, which has been made since the time of the Mesopotamians and Egyptians, is little more than a mixture of sand, soda ash and lime. When heated to about 1500 degrees Celsius (°C) this becomes a molten mass that hardens when slowly cooled. The first successful method for making clear, flat glass involved spinning. This method was very effective as the glass had an unblemished surface, but the process was slow and expensive."
            },
            {
              "label": "B",
              "text": "The breakthrough came in the 1950s when Alastair Pilkington invented the float glass process. Molten glass is poured continuously from a furnace onto the surface of a shallow bath of molten tin. Because tin is denser than glass and does not mix with it, the glass floats, spreading out under its own weight to form a level ribbon of uniform thickness."
            },
            {
              "label": "C",
              "text": "As the ribbon travels over the tin, it cools gradually from 1100°C to 600°C, solidifying into a rigid sheet. It is then lifted clear of the tin bath onto motorized rollers and enters an annealing lehr, a controlled cooling zone where internal stresses are relieved. Finally, computer-controlled optical inspection cameras examine the sheet for any microscopic imperfections before diamond cutters slice it into custom sheets."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "gap-fill",
            "questionText": "1. Early flat glass production relied on a method called _______",
            "acceptableAnswers": [
              "spinning"
            ],
            "explanation": "Đoạn A: 'first successful method for making clear, flat glass involved spinning'. Đáp án là 'spinning'.",
            "evidence": "making clear, flat glass involved spinning"
          },
          {
            "id": 2,
            "num": 2,
            "type": "gap-fill",
            "questionText": "2. Spinning produced glass with an _______ surface, although cost remained high.",
            "acceptableAnswers": [
              "unblemished",
              "unblemished surface",
              "clear"
            ],
            "explanation": "Đoạn A: 'the glass had an unblemished surface'. Đáp án là 'unblemished'.",
            "evidence": "the glass had an unblemished surface"
          },
          {
            "id": 3,
            "num": 3,
            "type": "gap-fill",
            "questionText": "3. The modern process begins by pouring _______ from a furnace.",
            "acceptableAnswers": [
              "molten glass",
              "liquid glass"
            ],
            "explanation": "Đoạn B: 'Molten glass is poured continuously from a furnace'. Đáp án là 'molten glass'.",
            "evidence": "Molten glass is poured continuously from a furnace"
          },
          {
            "id": 4,
            "num": 4,
            "type": "gap-fill",
            "questionText": "4. The liquid floats across a bath of denser _______",
            "acceptableAnswers": [
              "molten tin",
              "tin"
            ],
            "explanation": "Đoạn B: 'onto the surface of a shallow bath of molten tin'. Đáp án là 'molten tin' hoặc 'tin'.",
            "evidence": "onto the surface of a shallow bath of molten tin"
          },
          {
            "id": 5,
            "num": 5,
            "type": "gap-fill",
            "questionText": "5. Solidified glass is drawn across motorized _______ into the annealing lehr.",
            "acceptableAnswers": [
              "rollers",
              "motorized rollers"
            ],
            "explanation": "Đoạn C: 'lifted clear of the tin bath onto motorized rollers'. Đáp án là 'rollers'.",
            "evidence": "onto motorized rollers and enters an annealing lehr"
          },
          {
            "id": 6,
            "num": 6,
            "type": "gap-fill",
            "questionText": "6. The sheet leaves the float chamber once temperature falls to approximately _______",
            "acceptableAnswers": [
              "600°C",
              "600 degrees Celsius",
              "600 degrees",
              "600 C"
            ],
            "explanation": "Đoạn C: 'cools gradually from 1100°C to 600°C'. Đáp án là '600°C'.",
            "evidence": "cools gradually from 1100°C to 600°C"
          },
          {
            "id": 7,
            "num": 7,
            "type": "gap-fill",
            "questionText": "7. The annealing lehr functions as a specialized _______ to remove internal tension.",
            "acceptableAnswers": [
              "cooling zone",
              "controlled cooling zone"
            ],
            "explanation": "Đoạn C: 'annealing lehr, a controlled cooling zone where internal stresses are relieved'. Đáp án là 'cooling zone'.",
            "evidence": "an annealing lehr, a controlled cooling zone"
          },
          {
            "id": 8,
            "num": 8,
            "type": "gap-fill",
            "questionText": "8. Before cutting, sheets undergo _______ to detect any structural flaws.",
            "acceptableAnswers": [
              "optical inspection",
              "inspection"
            ],
            "explanation": "Đoạn C: 'computer-controlled optical inspection cameras examine the sheet'. Đáp án là 'optical inspection'.",
            "evidence": "computer-controlled optical inspection cameras examine the sheet for any microscopic imperfections"
          }
        ],
        "vocabulary": [
          {
            "word": "molten",
            "meaning": "Nóng chảy (ở nhiệt độ cao)",
            "example": "molten glass poured onto molten tin"
          },
          {
            "word": "unblemished",
            "meaning": "Không tì vết, hoàn hảo",
            "example": "an unblemished glass surface"
          },
          {
            "word": "annealing lehr",
            "meaning": "Lò ủ làm nguội kính có kiểm soát nhiệt",
            "example": "entering the annealing lehr"
          }
        ]
      },
      {
        "id": "r6_ex2",
        "exampleNum": 2,
        "title": "Example 2: Secrets of the Swarm (Trí tuệ bầy đàn)",
        "instructions": "Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "SECRETS OF THE SWARM",
          "paragraphs": [
            {
              "label": "A",
              "text": "Miller explains that he first really understood the impact that swarm behaviour could have on humans when he read a study of honeybees by Tom Seeley, a biologist at Cornell University. When honeybees choose a new nest, hundreds of scouts fly off to investigate multiple potential sites. Upon their return, scouts perform a specialized 'waggle dance' on the surface of the cluster to advertise their chosen location."
            },
            {
              "label": "B",
              "text": "The enthusiasm of the dance communicates the suitability of the cavity. If other scouts are persuaded, they visit the recommended site and, if impressed, perform the waggle dance themselves. In this manner, positive feedback builds a democratic consensus until a quorum is reached, whereupon the entire swarm takes off to their new home."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "gap-fill",
            "questionText": "1. Honeybee foraging colonies delegate the search for nests to experienced _______",
            "acceptableAnswers": [
              "scouts"
            ],
            "explanation": "Đoạn A: 'hundreds of scouts fly off to investigate'. Đáp án là 'scouts'.",
            "evidence": "hundreds of scouts fly off to investigate multiple potential sites"
          },
          {
            "id": 2,
            "num": 2,
            "type": "gap-fill",
            "questionText": "2. Returned explorers communicate potential destinations by demonstrating a _______",
            "acceptableAnswers": [
              "waggle dance"
            ],
            "explanation": "Đoạn A: 'perform a specialized waggle dance'. Đáp án là 'waggle dance'.",
            "evidence": "perform a specialized waggle dance on the surface of the cluster"
          },
          {
            "id": 3,
            "num": 3,
            "type": "gap-fill",
            "questionText": "3. Dance vigor reflects the overall quality and _______ of the prospective nesting cavity.",
            "acceptableAnswers": [
              "suitability",
              "volume"
            ],
            "explanation": "Đoạn B: 'communicates the suitability of the cavity'. Đáp án là 'suitability'.",
            "evidence": "communicates the suitability of the cavity"
          },
          {
            "id": 4,
            "num": 4,
            "type": "gap-fill",
            "questionText": "4. The colony reaches an agreement through democratic _______",
            "acceptableAnswers": [
              "consensus",
              "a consensus"
            ],
            "explanation": "Đoạn B: 'positive feedback builds a democratic consensus'. Đáp án là 'consensus'.",
            "evidence": "positive feedback builds a democratic consensus until a quorum is reached"
          },
          {
            "id": 5,
            "num": 5,
            "type": "gap-fill",
            "questionText": "5. Once verified by quorum, the full _______ departs together.",
            "acceptableAnswers": [
              "swarm",
              "entire swarm"
            ],
            "explanation": "Đoạn B: 'the entire swarm takes off to their new home'. Đáp án là 'swarm'.",
            "evidence": "the entire swarm takes off to their new home"
          }
        ],
        "vocabulary": [
          {
            "word": "swarm behaviour",
            "meaning": "Tập tính bầy đàn (ong, kiến, chim)",
            "example": "studying swarm behaviour in nature"
          },
          {
            "word": "waggle dance",
            "meaning": "Vũ điệu lắc bụng của ong thợ báo hiệu vị trí thức ăn/tổ",
            "example": "honeybees perform a waggle dance"
          },
          {
            "word": "quorum",
            "meaning": "Túc số, số lượng tối thiểu để thông qua quyết định",
            "example": "until a quorum is reached"
          }
        ]
      },
      {
        "id": "r6_ex3",
        "exampleNum": 3,
        "title": "Example 3: The Dover Bronze-Age Boat (Con thuyền thời đồ đồng)",
        "instructions": "Complete the flow chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "THE DOVER BRONZE-AGE BOAT",
          "paragraphs": [
            {
              "label": "A",
              "text": "In 1992, workmen excavating a new underpass through Dover discovered prehistoric oak timbers buried six meters below ground. Recognizing its significance, archaeologists rushed in to preserve the waterlogged remains of a Bronze Age boat dating back roughly 3,500 years."
            },
            {
              "label": "B",
              "text": "The boat had been fashioned out of massive oak planks, carved and fastened together using yew stitches. To ensure waterproofing, the seams between the planks had been caulked with moss and sealed with tree resin. In subsequent years, researchers constructed a full-scale reconstruction to test its seafaring stability in the English Channel."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "gap-fill",
            "questionText": "1. Timbers were exceptionally preserved because they remained _______ deep in the soil.",
            "acceptableAnswers": [
              "waterlogged"
            ],
            "explanation": "Đoạn A: 'preserve the waterlogged remains of a Bronze Age boat'. Đáp án là 'waterlogged'.",
            "evidence": "preserve the waterlogged remains of a Bronze Age boat"
          },
          {
            "id": 2,
            "num": 2,
            "type": "gap-fill",
            "questionText": "2. Construction utilized enormous carved oak _______",
            "acceptableAnswers": [
              "planks",
              "oak planks"
            ],
            "explanation": "Đoạn B: 'fashioned out of massive oak planks'. Đáp án là 'planks'.",
            "evidence": "fashioned out of massive oak planks"
          },
          {
            "id": 3,
            "num": 3,
            "type": "gap-fill",
            "questionText": "3. The hull panels were bound together with strong yew _______",
            "acceptableAnswers": [
              "stitches",
              "yew stitches"
            ],
            "explanation": "Đoạn B: 'fastened together using yew stitches'. Đáp án là 'stitches'.",
            "evidence": "fastened together using yew stitches"
          },
          {
            "id": 4,
            "num": 4,
            "type": "gap-fill",
            "questionText": "4. Gaps in the joints were insulated with packed _______",
            "acceptableAnswers": [
              "moss"
            ],
            "explanation": "Đoạn B: 'caulked with moss and sealed with tree resin'. Đáp án là 'moss'.",
            "evidence": "caulked with moss and sealed with tree resin"
          },
          {
            "id": 5,
            "num": 5,
            "type": "gap-fill",
            "questionText": "5. Marine capability was evaluated by building a full-size _______",
            "acceptableAnswers": [
              "reconstruction",
              "full-scale reconstruction"
            ],
            "explanation": "Đoạn B: 'constructed a full-scale reconstruction to test its seafaring stability'. Đáp án là 'reconstruction'.",
            "evidence": "constructed a full-scale reconstruction to test its seafaring stability"
          }
        ],
        "vocabulary": [
          {
            "word": "waterlogged",
            "meaning": "Úng nước, ngập nước (giúp bảo quản gỗ cổ)",
            "example": "waterlogged timber preserves well"
          },
          {
            "word": "caulked",
            "meaning": "Trét kín, xảm kín kẽ hở chống thấm nước",
            "example": "caulked with moss and resin"
          },
          {
            "word": "yew stitches",
            "meaning": "Mũi khâu làm từ cành cây thủy tùng dẻo dai",
            "example": "fastened by yew stitches"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_7",
    "lessonNum": 7,
    "code": "V09",
    "title": "V09 - PLAN/MAP/DIAGRAM COMPLETION",
    "shortTitle": "Plan, Map & Diagram",
    "category": "completion",
    "categoryLabel": "Dạng Điền Từ",
    "badge": "Sơ đồ & Bản đồ",
    "description": "Chiến thuật điền nhãn sơ đồ cấu tạo và bản đồ: Quan sát các bộ phận liên kết cơ học, phương hướng di chuyển và chú thích hình vẽ.",
    "examplesCount": 3,
    "totalQuestions": 12,
    "examples": [
      {
        "id": "r7_ex1",
        "exampleNum": 1,
        "title": "Example 1: Anchor Escapement in Timekeeping (Bộ hồi mỏ neo đồng hồ)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "A CHRONICLE OF TIMEKEEPING - The Anchor Escapement",
          "paragraphs": [
            {
              "label": "A",
              "text": "To address the inaccuracy of early pendulum clocks, a variation on the original escapement was invented in 1670 in England. It was called the anchor escapement, which was a lever-based device shaped like a ship's anchor. The continuous swinging motion of a weighted pendulum rocks this device from side to side."
            },
            {
              "label": "B",
              "text": "As the anchor rocks, its curved pallets catch and then release each tooth of the rotating escape wheel, allowing the wheel to advance by a precise, consistent increment. This revolutionary mechanism significantly reduced the swing arc of the pendulum, improving accuracy tenfold."
            }
          ]
        },
        "questions": [
          {
            "id": 9,
            "num": 9,
            "type": "gap-fill",
            "questionText": "9. The pivoting upper rocking lever resembles a ship’s _______",
            "acceptableAnswers": [
              "anchor",
              "ship's anchor"
            ],
            "explanation": "Đoạn A: 'a lever-based device shaped like a ship's anchor'. Đáp án là 'anchor'.",
            "evidence": "lever-based device shaped like a ship's anchor"
          },
          {
            "id": 10,
            "num": 10,
            "type": "gap-fill",
            "questionText": "10. Controlled rotational energy is governed by the notched _______",
            "acceptableAnswers": [
              "escape wheel",
              "wheel"
            ],
            "explanation": "Đoạn B: 'each tooth of the rotating escape wheel'. Đáp án là 'escape wheel'.",
            "evidence": "each tooth of the rotating escape wheel"
          },
          {
            "id": 11,
            "num": 11,
            "type": "gap-fill",
            "questionText": "11. The anchor arms engage with each individual gear _______",
            "acceptableAnswers": [
              "tooth",
              "teeth"
            ],
            "explanation": "Đoạn B: 'catches and then releases each tooth of the escape wheel'. Đáp án là 'tooth'.",
            "evidence": "catches and then releases each tooth"
          },
          {
            "id": 12,
            "num": 12,
            "type": "gap-fill",
            "questionText": "12. Continuous periodic oscillation is driven by the swinging _______",
            "acceptableAnswers": [
              "pendulum",
              "weighted pendulum"
            ],
            "explanation": "Đoạn A: 'swinging motion of a weighted pendulum'. Đáp án là 'pendulum'.",
            "evidence": "swinging motion of a weighted pendulum rocks this device"
          }
        ],
        "vocabulary": [
          {
            "word": "anchor escapement",
            "meaning": "Bộ hồi mỏ neo trong đồng hồ quả lắc",
            "example": "invented the anchor escapement"
          },
          {
            "word": "pendulum",
            "meaning": "Quả lắc đồng hồ",
            "example": "the swinging pendulum maintains rhythm"
          },
          {
            "word": "escape wheel",
            "meaning": "Bánh cóc, bánh xe thoát",
            "example": "advancing the escape wheel"
          }
        ]
      },
      {
        "id": "r7_ex2",
        "exampleNum": 2,
        "title": "Example 2: Tidal Power Turbines (Tua bin điện thủy triều)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
        "passage": {
          "title": "TIDAL POWER - Harnessing Ocean Currents",
          "paragraphs": [
            {
              "label": "A",
              "text": "A marine turbine blade needs to be only one third of the size of a wind generator to produce three times as much power. The submerged blades will be about 20 metres in diameter, operating in sea water around 30 metres deep. Unlike wind power, tidal generators are concealed beneath the sea surface and create no visual impact on the landscape."
            },
            {
              "label": "B",
              "text": "The rotating blades turn a drive shaft connected to an electrical generator housed within the central nacelle atop a robust support tower. Heavy underwater transmission cables anchored to the seabed carry the generated electricity safely to an onshore substation."
            }
          ]
        },
        "questions": [
          {
            "id": 23,
            "num": 23,
            "type": "gap-fill",
            "questionText": "23. Submerged revolving propeller components: _______ (approx. 20m diameter)",
            "acceptableAnswers": [
              "blades",
              "turbine blades"
            ],
            "explanation": "Đoạn A: 'marine turbine blade... blades will be about 20 metres in diameter'. Đáp án là 'blades'.",
            "evidence": "marine turbine blade... blades will be about 20 metres in diameter"
          },
          {
            "id": 24,
            "num": 24,
            "type": "gap-fill",
            "questionText": "24. Structural column anchoring the unit to sea floor: support _______",
            "acceptableAnswers": [
              "tower",
              "support tower"
            ],
            "explanation": "Đoạn B: 'atop a robust support tower'. Đáp án là 'tower'.",
            "evidence": "central nacelle atop a robust support tower"
          },
          {
            "id": 25,
            "num": 25,
            "type": "gap-fill",
            "questionText": "25. Power conversion equipment inside the housing: _______",
            "acceptableAnswers": [
              "generator",
              "electrical generator"
            ],
            "explanation": "Đoạn B: 'electrical generator housed within the central nacelle'. Đáp án là 'generator'.",
            "evidence": "electrical generator housed within the central nacelle"
          },
          {
            "id": 26,
            "num": 26,
            "type": "gap-fill",
            "questionText": "26. High-voltage power conduits routed across the seabed: _______",
            "acceptableAnswers": [
              "cables",
              "transmission cables"
            ],
            "explanation": "Đoạn B: 'underwater transmission cables anchored to the seabed'. Đáp án là 'cables' hoặc 'transmission cables'.",
            "evidence": "underwater transmission cables anchored to the seabed"
          }
        ],
        "vocabulary": [
          {
            "word": "tidal generator",
            "meaning": "Máy phát điện thủy triều",
            "example": "submerged tidal generators"
          },
          {
            "word": "nacelle",
            "meaning": "Vỏ chứa động cơ/máy phát",
            "example": "generator housed in the nacelle"
          },
          {
            "word": "transmission cable",
            "meaning": "Cáp truyền tải điện ngầm",
            "example": "underwater transmission cables"
          }
        ]
      },
      {
        "id": "r7_ex3",
        "exampleNum": 3,
        "title": "Example 3: Collecting Ant Specimens (Phương pháp thu mẫu kiến)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        "passage": {
          "title": "COLLECTING ANT SPECIMENS",
          "paragraphs": [
            {
              "label": "A",
              "text": "For entomologists surveying biodiversity, various sampling techniques exist. Baits can be placed on tree trunks or on the ground to attract foraging species. Ground-dwelling ants can be captured passively using a pitfall trap, which consists of a small plastic cup sunk level with the surrounding soil, partially filled with preservative fluid."
            },
            {
              "label": "B",
              "text": "To capture elusive subterranean species, researchers collect decomposing leaf litter and place it into a specialized Berlese funnel. A bright light bulb suspended above heats and dries the leaf matter, driving the moisture-seeking ants downwards through a wire mesh into a collection vial below."
            }
          ]
        },
        "questions": [
          {
            "id": 37,
            "num": 37,
            "type": "gap-fill",
            "questionText": "37. Chemical food attractants used to lure foraging colonies: _______",
            "acceptableAnswers": [
              "baits",
              "bait"
            ],
            "explanation": "Đoạn A: 'Baits can be placed on tree trunks or on the ground'. Đáp án là 'baits'.",
            "evidence": "Baits can be placed on tree trunks or on the ground"
          },
          {
            "id": 38,
            "num": 38,
            "type": "gap-fill",
            "questionText": "38. In-ground sunk reservoir cup device: _______",
            "acceptableAnswers": [
              "pitfall trap",
              "trap"
            ],
            "explanation": "Đoạn A: 'captured passively using a pitfall trap, which consists of a small plastic cup sunk level'. Đáp án là 'pitfall trap'.",
            "evidence": "captured passively using a pitfall trap"
          },
          {
            "id": 39,
            "num": 39,
            "type": "gap-fill",
            "questionText": "39. Organic forest floor organic matter sampled: _______",
            "acceptableAnswers": [
              "leaf litter"
            ],
            "explanation": "Đoạn B: 'researchers collect decomposing leaf litter'. Đáp án là 'leaf litter'.",
            "evidence": "researchers collect decomposing leaf litter"
          },
          {
            "id": 40,
            "num": 40,
            "type": "gap-fill",
            "questionText": "40. Heat-driven separation apparatus: _______",
            "acceptableAnswers": [
              "Berlese funnel"
            ],
            "explanation": "Đoạn B: 'place it into a specialized Berlese funnel'. Đáp án là 'Berlese funnel'.",
            "evidence": "place it into a specialized Berlese funnel"
          }
        ],
        "vocabulary": [
          {
            "word": "pitfall trap",
            "meaning": "Bẫy hố (bẫy côn trùng đào ngang mặt đất)",
            "example": "capturing ground insects in a pitfall trap"
          },
          {
            "word": "leaf litter",
            "meaning": "Lớp lá rụng mục nát trên mặt đất rừng",
            "example": "ants residing in moist leaf litter"
          },
          {
            "word": "Berlese funnel",
            "meaning": "Phễu Berlese (dụng cụ tách chiết vi sinh vật đất bằng bóng đèn nhiệt)",
            "example": "extracting fauna using a Berlese funnel"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_8",
    "lessonNum": 8,
    "code": "V10",
    "title": "V10 - TRUE/ FALSE/ NOT GIVEN – YES/ NO/ NOT GIVEN",
    "shortTitle": "True / False / Not Given",
    "category": "tfng",
    "categoryLabel": "Đúng / Sai / Không Có",
    "badge": "Dạng bài kinh điển",
    "description": "Chiến thuật làm bài True/False/Not Given & Yes/No/Not Given: Phân biệt rõ ràng giữa FALSE (thông tin đối lập/sai lệch trực tiếp) và NOT GIVEN (thông tin không được đề cập hoặc suy diễn thiếu căn cứ).",
    "examplesCount": 3,
    "totalQuestions": 16,
    "examples": [
      {
        "id": "r8_ex1",
        "exampleNum": 1,
        "title": "Example 1: Stepwells (Kiến trúc giếng cổ Ấn Độ)",
        "instructions": "Do the following statements agree with the information given in the passage? Write TRUE (if statement agrees), FALSE (if statement contradicts), or NOT GIVEN (if no information).",
        "passage": {
          "title": "STEPWELLS OF NORTH-WESTERN INDIA",
          "paragraphs": [
            {
              "label": "A",
              "text": "A millennium ago, stepwells were fundamental to life in the driest parts of India. Unique to this region of South Asia, they are monumental subterranean waterworks engineered to cope with the extreme seasonal cycles of monsoon downpours followed by prolonged drought."
            },
            {
              "label": "B",
              "text": "Beyond their practical utility as reservoirs and communal water collection points, stepwells served as vibrant social gathering hubs and places of cool respite during blistering summer heat. Furthermore, because water held divine significance in Hinduism, many stepwells were consecrated as temples, featuring richly sculpted shrines honoring deities."
            },
            {
              "label": "C",
              "text": "During the eleventh to fourteenth centuries, under the patronage of regional dynasties in Gujarat and Rajasthan, stepwell architecture reached its artistic zenith. The famous Rani ki Vav in Patan, built in the late eleventh century, features over five hundred major relief sculptures celebrating Vishnu."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "tfng",
            "questionText": "1. Examples of ancient stepwells can be found all over the world.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn A khẳng định: 'Unique to this region of South Asia' (Chỉ có duy nhất ở khu vực Nam Á này). Do đó, việc tìm thấy trên khắp thế giới là FALSE.",
            "evidence": "Unique to this region of South Asia"
          },
          {
            "id": 2,
            "num": 2,
            "type": "tfng",
            "questionText": "2. Stepwells had a range of functions, in addition to tracking water levels and storage.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn B nêu rõ: 'Beyond their practical utility... served as vibrant social gathering hubs and places of cool respite... consecrated as temples'. Có nhiều công dụng xã hội và tôn giáo -> TRUE.",
            "evidence": "Beyond their practical utility... served as vibrant social gathering hubs and places of cool respite"
          },
          {
            "id": 3,
            "num": 3,
            "type": "tfng",
            "questionText": "3. The few existing stepwells in Delhi are considered more attractive than those in Rajasthan.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Bài đọc nhắc đến Gujarat và Rajasthan, nhưng không hề so sánh mức độ thẩm mỹ của giếng ở Delhi so với giếng ở Rajasthan -> NOT GIVEN.",
            "evidence": "No mention or comparison regarding stepwells in Delhi."
          },
          {
            "id": 4,
            "num": 4,
            "type": "tfng",
            "questionText": "4. Construction of the Rani ki Vav took place in the late eleventh century.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn C có câu: 'The famous Rani ki Vav in Patan, built in the late eleventh century...'. Hoàn toàn trùng khớp -> TRUE.",
            "evidence": "The famous Rani ki Vav in Patan, built in the late eleventh century"
          },
          {
            "id": 5,
            "num": 5,
            "type": "tfng",
            "questionText": "5. The state of Gujarat is known for producing the finest sandstone in South Asia.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Bài đọc có nhắc Gujarat là nơi xây dựng nhiều giếng bậc thang, nhưng không hề nói rằng Gujarat nổi tiếng vì sản xuất loại đá sa thạch tốt nhất -> NOT GIVEN.",
            "evidence": "Gujarat mentioned as a location, but sandstone quality not evaluated."
          }
        ],
        "vocabulary": [
          {
            "word": "unique to",
            "meaning": "Chỉ có duy nhất ở",
            "example": "unique to this region"
          },
          {
            "word": "respite",
            "meaning": "Sự nghỉ ngơi, thư giãn xua tan mệt mỏi",
            "example": "cool respite from the summer heat"
          },
          {
            "word": "zenith",
            "meaning": "Đỉnh cao, cực thịnh",
            "example": "reached its artistic zenith"
          }
        ]
      },
      {
        "id": "r8_ex2",
        "exampleNum": 2,
        "title": "Example 2: European Transport Systems 1990-2010",
        "instructions": "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
        "passage": {
          "title": "EUROPEAN TRANSPORT SYSTEMS 1990-2010",
          "paragraphs": [
            {
              "label": "A",
              "text": "It is difficult to conceive of vigorous economic growth without an efficient transport system. Although modern information technologies can reduce the demand for physical transport by facilitating teleworking and teleservices, the requirement for transport continues to increase worldwide."
            },
            {
              "label": "B",
              "text": "Between 1990 and 1998, road freight transport expanded dramatically across the European Union, growing by over 19%. During the same decade, rail freight saw its market share decline from 21% to a meager 8%."
            },
            {
              "label": "C",
              "text": "If nothing is done to shift modal share, transport-related CO2 emissions are projected to rise by up to 50% by 2010. Therefore, the European Community proposes ambitious policies to revitalize rail transport and coastal shipping."
            }
          ]
        },
        "questions": [
          {
            "id": 22,
            "num": 22,
            "type": "tfng",
            "questionText": "22. The demand for physical transport has declined rapidly owing to internet technology.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn A nêu: 'the requirement for transport continues to increase worldwide'. Trái ngược với khẳng định 'has declined' -> FALSE.",
            "evidence": "the requirement for transport continues to increase worldwide"
          },
          {
            "id": 23,
            "num": 23,
            "type": "tfng",
            "questionText": "23. Road freight transport expanded significantly between 1990 and 1998 in Europe.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn B: 'road freight transport expanded dramatically across the European Union, growing by over 19%'. 'Dramatically' tương đồng với 'significantly' -> TRUE.",
            "evidence": "road freight transport expanded dramatically across the European Union, growing by over 19%"
          },
          {
            "id": 24,
            "num": 24,
            "type": "tfng",
            "questionText": "24. Carbon dioxide emissions from transport will experience a surge by 2010 if existing trends persist.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn C: 'If nothing is done... CO2 emissions are projected to rise by up to 50% by 2010'. Trùng khớp -> TRUE.",
            "evidence": "If nothing is done to shift modal share, transport-related CO2 emissions are projected to rise by up to 50%"
          },
          {
            "id": 25,
            "num": 25,
            "type": "tfng",
            "questionText": "25. Rail transport in Europe is considered safer and more punctual than highway shipping.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn B chỉ nói về thị phần đường sắt giảm từ 21% xuống 8%, không so sánh độ an toàn hay đúng giờ của tàu hỏa so với đường bộ -> NOT GIVEN.",
            "evidence": "No comparison of safety or punctuality."
          },
          {
            "id": 26,
            "num": 26,
            "type": "tfng",
            "questionText": "26. The European Community aims to revive rail infrastructure to counteract environmental deterioration.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn C: 'the European Community proposes ambitious policies to revitalize rail transport'. Trùng khớp -> TRUE.",
            "evidence": "the European Community proposes ambitious policies to revitalize rail transport"
          }
        ],
        "vocabulary": [
          {
            "word": "teleworking",
            "meaning": "Làm việc từ xa (qua mạng internet)",
            "example": "teleworking reduces the need to commute"
          },
          {
            "word": "freight",
            "meaning": "Hàng hóa vận chuyển (đường bộ, đường sắt, tàu biển)",
            "example": "road freight transport"
          },
          {
            "word": "revitalize",
            "meaning": "Hồi sinh, đem lại sức sống mới",
            "example": "revitalize the railway sector"
          }
        ]
      },
      {
        "id": "r8_ex3",
        "exampleNum": 3,
        "title": "Example 3: Tea and the Industrial Revolution (Trà và Cách mạng công nghiệp)",
        "instructions": "Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.",
        "passage": {
          "title": "TEA AND THE INDUSTRIAL REVOLUTION",
          "paragraphs": [
            {
              "label": "A",
              "text": "Alan Macfarlane compares the emergence of the Industrial Revolution to a combination lock. Over twenty necessary factors had to coincide simultaneously. Great Britain was the pioneer nation where coal energy, technological inventions, and a market economy came together."
            },
            {
              "label": "B",
              "text": "Yet historians had long puzzled over another mystery: between 1740 and 1780, infant mortality rates in Britain plummeted dramatically, despite overcrowded, filthy slums. Macfarlane discovered that the sudden national obsession with drinking boiled tea, which contains natural antibacterial tannins, purified drinking water and decimated water-borne diseases."
            },
            {
              "label": "C",
              "text": "At the time, British citizens were completely oblivious to the antiseptic qualities of tea; they simply drank it because they enjoyed the taste and the mild caffeine stimulation."
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "num": 8,
            "type": "tfng",
            "questionText": "8. Industrialization occurred in Britain prior to other European nations.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn A nêu: 'Great Britain was the pioneer nation'. 'Pioneer' = đi đầu tiên -> TRUE.",
            "evidence": "Great Britain was the pioneer nation where coal energy, technological inventions... came together"
          },
          {
            "id": 9,
            "num": 9,
            "type": "tfng",
            "questionText": "9. Britain’s overall population in 1700 was substantially smaller than France’s.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn văn không đưa ra dữ liệu so sánh dân số giữa Anh và Pháp vào năm 1700 -> NOT GIVEN.",
            "evidence": "No population comparison between Britain and France."
          },
          {
            "id": 10,
            "num": 10,
            "type": "tfng",
            "questionText": "10. Britain was the only country possessing accessible coal deposits during the 18th century.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn A nói than đá là một yếu tố ở Anh, nhưng không hề nói Anh là nước duy nhất ('only country') có than đá. Trong thực tế lịch sử các nước khác cũng có than đá -> FALSE.",
            "evidence": "coal energy mentioned as one of 20 factors in Britain, not exclusive globally."
          },
          {
            "id": 11,
            "num": 11,
            "type": "tfng",
            "questionText": "11. British consumers in the 18th century were unaware that tea possessed antiseptic health benefits.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn C khẳng định: 'British citizens were completely oblivious to the antiseptic qualities of tea'. 'Oblivious' = 'unaware' (không hề hay biết) -> TRUE.",
            "evidence": "British citizens were completely oblivious to the antiseptic qualities of tea"
          },
          {
            "id": 12,
            "num": 12,
            "type": "tfng",
            "questionText": "12. Infant mortality in British urban centers increased noticeably after 1740.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn B khẳng định: 'infant mortality rates in Britain plummeted dramatically' (tỷ lệ tử vong ở trẻ sơ sinh giảm mạnh). Câu hỏi nói 'increased' là hoàn toàn sai -> FALSE.",
            "evidence": "infant mortality rates in Britain plummeted dramatically"
          },
          {
            "id": 13,
            "num": 13,
            "type": "tfng",
            "questionText": "13. Macfarlane’s conclusions have been unanimously endorsed by all British historians.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Bài đọc giới thiệu lý thuyết của Macfarlane nhưng không đề cập việc toàn bộ các sử gia có đồng thuận hoàn toàn hay không -> NOT GIVEN.",
            "evidence": "Consensus among all historians is not stated."
          }
        ],
        "vocabulary": [
          {
            "word": "infant mortality",
            "meaning": "Tỷ lệ tử vong ở trẻ sơ sinh",
            "example": "infant mortality plummeted dramatically"
          },
          {
            "word": "antiseptic",
            "meaning": "Có tính kháng khuẩn, khử trùng",
            "example": "antiseptic properties of boiled tea"
          },
          {
            "word": "oblivious to",
            "meaning": "Hoàn toàn không hay biết, lãng quên",
            "example": "completely oblivious to the dangers"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_9",
    "lessonNum": 9,
    "code": "V11",
    "title": "V11 - MATCHING FEATURES",
    "shortTitle": "Matching Features",
    "category": "matching",
    "categoryLabel": "Nối Thông Tin",
    "badge": "Nối đặc điểm / Tên người",
    "description": "Chiến thuật nối đặc điểm: Scan danh sách tên riêng/nhóm đối tượng trong bài đọc, đọc câu chứa quan điểm và nối với nhận định tương ứng.",
    "examplesCount": 3,
    "totalQuestions": 12,
    "examples": [
      {
        "id": "r9_ex1",
        "exampleNum": 1,
        "title": "Example 1: Second Nature (Thay đổi tính cách)",
        "instructions": "Match each statement with the correct psychologist/researcher (A-D). Write the correct letter.",
        "passage": {
          "title": "SECOND NATURE - Can Personality Be Altered?",
          "paragraphs": [
            {
              "label": "A",
              "text": "'The evidence is good that most personality traits can be altered,' says Christopher Peterson, professor of psychology at the University of Michigan. Inherently introverted, he realized early on that as an academic, shyness would prove disastrous in lecture halls. So he deliberately trained himself to be more extroverted and engaging."
            },
            {
              "label": "B",
              "text": "Psychologist Martin Seligman points out that positive emotions and optimism are skills that can be cultivated through deliberate practice. His research at the University of Pennsylvania showed that people who practiced recording three good things each day experienced sustained increases in happiness."
            },
            {
              "label": "C",
              "text": "Meanwhile, Suzanne Segerstrom cautions that striving for drastic behavioral change requires significant mental effort, and that overexertion can lead to fatigue if people do not allow themselves adequate downtime to recharge."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "matching-features",
            "questionText": "1. Used personal experience as an illustration of deliberate personality modification.",
            "options": [
              {
                "letter": "A",
                "desc": "Christopher Peterson"
              },
              {
                "letter": "B",
                "desc": "Martin Seligman"
              },
              {
                "letter": "C",
                "desc": "Suzanne Segerstrom"
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: Christopher Peterson 'cites himself as an example' khi tự rèn luyện tính cách hướng ngoại.",
            "evidence": "Christopher Peterson... Inherently introverted, he realized early on... trained himself"
          },
          {
            "id": 2,
            "num": 2,
            "type": "matching-features",
            "questionText": "2. Demonstrated that simple daily gratitude exercises measurably elevate long-term optimism.",
            "options": [
              {
                "letter": "A",
                "desc": "Christopher Peterson"
              },
              {
                "letter": "B",
                "desc": "Martin Seligman"
              },
              {
                "letter": "C",
                "desc": "Suzanne Segerstrom"
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: Martin Seligman nghiên cứu bài tập 'recording three good things each day experienced sustained increases in happiness'.",
            "evidence": "Martin Seligman points out that positive emotions and optimism are skills that can be cultivated"
          },
          {
            "id": 3,
            "num": 3,
            "type": "matching-features",
            "questionText": "3. Warned that excessive effort to modify habits may produce psychological exhaustion.",
            "options": [
              {
                "letter": "A",
                "desc": "Christopher Peterson"
              },
              {
                "letter": "B",
                "desc": "Martin Seligman"
              },
              {
                "letter": "C",
                "desc": "Suzanne Segerstrom"
              }
            ],
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn C: Suzanne Segerstrom cảnh báo 'overexertion can lead to fatigue'.",
            "evidence": "Suzanne Segerstrom cautions that... overexertion can lead to fatigue"
          }
        ],
        "vocabulary": [
          {
            "word": "personality trait",
            "meaning": "Nét tính cách",
            "example": "altering personality traits"
          },
          {
            "word": "introverted",
            "meaning": "Hướng nội, rụt rè",
            "example": "an inherently introverted academic"
          },
          {
            "word": "overexertion",
            "meaning": "Sự gắng sức quá mức dẫn đến kiệt sức",
            "example": "overexertion can cause burnout"
          }
        ]
      },
      {
        "id": "r9_ex2",
        "exampleNum": 2,
        "title": "Example 2: Gifted Children and Academic Excellence",
        "instructions": "Match each finding with the correct researcher group (A-C).",
        "passage": {
          "title": "RESEARCH ON GIFTED LEARNERS",
          "paragraphs": [
            {
              "label": "A",
              "text": "Freeman (2001) observed that gifted children whose parents provided rich intellectual stimulation at home displayed remarkable cognitive transfer when tackling unfamiliar school problems."
            },
            {
              "label": "B",
              "text": "Shore and Kanevsky (1993) reported that high achievers naturally employ self-regulatory metacognitive strategies, spending more time planning their approach before executing tasks compared to average peers."
            },
            {
              "label": "C",
              "text": "Simonton (1999) argued that exceptional talent requires years of deliberate domain-specific practice rather than purely innate genetic genius."
            }
          ]
        },
        "questions": [
          {
            "id": 4,
            "num": 4,
            "type": "matching-features",
            "questionText": "4. Emphasized the critical role of self-regulatory metacognition and upfront planning.",
            "options": [
              {
                "letter": "A",
                "desc": "Freeman"
              },
              {
                "letter": "B",
                "desc": "Shore and Kanevsky"
              },
              {
                "letter": "C",
                "desc": "Simonton"
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B nêu rõ Shore and Kanevsky nghiên cứu về self-regulatory metacognitive strategies và planning.",
            "evidence": "Shore and Kanevsky (1993) reported that high achievers naturally employ self-regulatory metacognitive strategies"
          },
          {
            "id": 5,
            "num": 5,
            "type": "matching-features",
            "questionText": "5. Highlighted the influence of parental intellectual stimulation at home.",
            "options": [
              {
                "letter": "A",
                "desc": "Freeman"
              },
              {
                "letter": "B",
                "desc": "Shore and Kanevsky"
              },
              {
                "letter": "C",
                "desc": "Simonton"
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: Freeman (2001) nghiên cứu về sự hỗ trợ và môi trường học tập tại gia đình của phụ huynh.",
            "evidence": "Freeman (2001) observed that gifted children whose parents provided rich intellectual stimulation"
          },
          {
            "id": 6,
            "num": 6,
            "type": "matching-features",
            "questionText": "6. Asserted that sustained practice outweighs raw genetic giftedness.",
            "options": [
              {
                "letter": "A",
                "desc": "Freeman"
              },
              {
                "letter": "B",
                "desc": "Shore and Kanevsky"
              },
              {
                "letter": "C",
                "desc": "Simonton"
              }
            ],
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn C: Simonton khẳng định tài năng vượt trội đòi hỏi sự rèn luyện miệt mài ('deliberate practice') hơn là gen bẩm sinh.",
            "evidence": "Simonton (1999) argued that exceptional talent requires years of deliberate practice"
          }
        ],
        "vocabulary": [
          {
            "word": "metacognition",
            "meaning": "Siêu nhận thức (nhận thức về quá trình tư duy của bản thân)",
            "example": "metacognitive strategies"
          },
          {
            "word": "deliberate practice",
            "meaning": "Luyện tập có chủ đích và kỷ luật",
            "example": "deliberate practice yields mastery"
          }
        ]
      },
      {
        "id": "r9_ex3",
        "exampleNum": 3,
        "title": "Example 3: Urban Transportation Study",
        "instructions": "Match each city or group with the corresponding finding (A-C).",
        "passage": {
          "title": "GLOBAL URBAN TRANSPORT EFFICIENCY",
          "paragraphs": [
            {
              "label": "A",
              "text": "The study by Murdoch University compared thirty-seven global cities. European cities like Zurich and Copenhagen invested heavily in integrated rail networks, achieving high transit ridership while expending less than 6% of regional GDP on transport."
            },
            {
              "label": "B",
              "text": "By contrast, sprawling North American cities like Houston and Phoenix committed overwhelmingly to private highways, resulting in traffic congestion and transport expenditures exceeding 12% of economic wealth."
            }
          ]
        },
        "questions": [
          {
            "id": 7,
            "num": 7,
            "type": "matching-features",
            "questionText": "7. Dedicated massive funds to highway systems resulting in economic waste.",
            "options": [
              {
                "letter": "A",
                "desc": "European cities (Zurich/Copenhagen)"
              },
              {
                "letter": "B",
                "desc": "North American cities (Houston/Phoenix)"
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B chỉ ra các thành phố Bắc Mỹ chi hơn 12% GDP vì ưu tiên đường cao tốc tư nhân.",
            "evidence": "North American cities like Houston and Phoenix committed overwhelmingly to private highways"
          },
          {
            "id": 8,
            "num": 8,
            "type": "matching-features",
            "questionText": "8. Integrated rail systems that minimized municipal transportation expenditure.",
            "options": [
              {
                "letter": "A",
                "desc": "European cities (Zurich/Copenhagen)"
              },
              {
                "letter": "B",
                "desc": "North American cities (Houston/Phoenix)"
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A nêu các thành phố châu Âu chi dưới 6% GDP nhờ mạng lưới tàu hỏa thông suốt.",
            "evidence": "European cities like Zurich and Copenhagen invested heavily in integrated rail networks"
          }
        ],
        "vocabulary": [
          {
            "word": "transit ridership",
            "meaning": "Lượng hành khách đi phương tiện công cộng",
            "example": "high transit ridership"
          },
          {
            "word": "sprawling",
            "meaning": "Đô thị mở rộng ngổn ngang, phân tán",
            "example": "sprawling metropolitan areas"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_10",
    "lessonNum": 10,
    "code": "V12",
    "title": "V12 - MATCHING SENTENCE ENDINGS",
    "shortTitle": "Matching Sentence Endings",
    "category": "matching",
    "categoryLabel": "Nối Thông Tin",
    "badge": "Nối vế câu",
    "description": "Chiến thuật nối đuôi câu: Đọc nửa câu đầu để xác định ngữ pháp và ý nghĩa, quét định vị trong bài đọc, rồi chọn vế đuôi phù hợp logic nhất.",
    "examplesCount": 3,
    "totalQuestions": 10,
    "examples": [
      {
        "id": "r10_ex1",
        "exampleNum": 1,
        "title": "Example 1: What’s So Funny? (Bản chất sinh học của tiếng cười)",
        "instructions": "Complete each sentence with the correct ending (A-E) from the box below.",
        "passage": {
          "title": "WHAT'S SO FUNNY? - The Psychology of Humour",
          "paragraphs": [
            {
              "label": "A",
              "text": "Making a rapid emotional assessment of ongoing events is a demanding task for the human brain. Abrupt changes in environment prompt rapid shifts in neurotransmitter levels. Neuroscientists believe that laughter evolved as an auditory safety signal to notify others that an apparent danger was actually harmless."
            },
            {
              "label": "B",
              "text": "Furthermore, humor involves cognitive incongruity: when an expected pattern is playfully broken, the prefrontal cortex resolves the puzzle, triggering a burst of dopamine that creates the sensation of amusement."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "sentence-endings",
            "questionText": "1. The human brain makes rapid emotional assessments _______",
            "options": [
              {
                "letter": "A",
                "desc": "to alert fellow group members that a potential threat is benign."
              },
              {
                "letter": "B",
                "desc": "to handle abrupt fluctuations in sensory stimuli."
              },
              {
                "letter": "C",
                "desc": "when unexpected mental patterns are successfully decoded."
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn A: 'demanding job for the brain... Abrupt changes in environment prompt rapid shifts'. Nối với B.",
            "evidence": "Making a rapid emotional assessment of ongoing events... Abrupt changes"
          },
          {
            "id": 2,
            "num": 2,
            "type": "sentence-endings",
            "questionText": "2. Laughter originally functioned in early humans _______",
            "options": [
              {
                "letter": "A",
                "desc": "to alert fellow group members that a potential threat is benign."
              },
              {
                "letter": "B",
                "desc": "to handle abrupt fluctuations in sensory stimuli."
              },
              {
                "letter": "C",
                "desc": "when unexpected mental patterns are successfully decoded."
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: 'safety signal to notify others that an apparent danger was actually harmless'. Nối với A.",
            "evidence": "laughter evolved as an auditory safety signal to notify others that an apparent danger was actually harmless"
          },
          {
            "id": 3,
            "num": 3,
            "type": "sentence-endings",
            "questionText": "3. The feeling of amusement is triggered _______",
            "options": [
              {
                "letter": "A",
                "desc": "to alert fellow group members that a potential threat is benign."
              },
              {
                "letter": "B",
                "desc": "to handle abrupt fluctuations in sensory stimuli."
              },
              {
                "letter": "C",
                "desc": "when unexpected mental patterns are successfully decoded."
              }
            ],
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn B: 'when an expected pattern is playfully broken, the prefrontal cortex resolves the puzzle... burst of dopamine'. Nối với C.",
            "evidence": "when an expected pattern is playfully broken, the prefrontal cortex resolves the puzzle"
          }
        ],
        "vocabulary": [
          {
            "word": "cognitive incongruity",
            "meaning": "Sự bất hòa nhận thức (yếu tố bất ngờ gây cười)",
            "example": "humor relies on cognitive incongruity"
          },
          {
            "word": "benign",
            "meaning": "Lành tính, vô hại",
            "example": "a benign threat"
          }
        ]
      },
      {
        "id": "r10_ex2",
        "exampleNum": 2,
        "title": "Example 2: Greying Population Stays in the Pink (Sức khỏe người cao tuổi)",
        "instructions": "Complete each sentence with the correct ending (A-D).",
        "passage": {
          "title": "GREYING POPULATION STAYS IN THE PINK",
          "paragraphs": [
            {
              "label": "A",
              "text": "The increasing self-reliance of elderly citizens in western nations is directly connected to the widespread adoption of simple home medical aids. Assistive devices like bath seats and raised toilet seats have reduced domestic falls by more than half, enabling older individuals to remain in their homes rather than moving into nursing institutions."
            }
          ]
        },
        "questions": [
          {
            "id": 4,
            "num": 4,
            "type": "sentence-endings",
            "questionText": "4. Senior citizens maintain greater daily independence _______",
            "options": [
              {
                "letter": "A",
                "desc": "by using straightforward domestic adaptive equipment."
              },
              {
                "letter": "B",
                "desc": "by moving into assisted living communities."
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: 'increasing self-reliance... connected to the widespread adoption of simple home medical aids'. Nối với A.",
            "evidence": "increasing self-reliance of elderly citizens... connected to the widespread adoption of simple home medical aids"
          }
        ],
        "vocabulary": [
          {
            "word": "self-reliance",
            "meaning": "Sự tự lực, độc lập tự lo được cho bản thân",
            "example": "maintaining elderly self-reliance"
          },
          {
            "word": "in the pink",
            "meaning": "Sức khỏe dồi dào, hồng hào (thành ngữ)",
            "example": "staying in the pink"
          }
        ]
      },
      {
        "id": "r10_ex3",
        "exampleNum": 3,
        "title": "Example 3: The Psychology of Innovation (Tâm lý học đổi mới)",
        "instructions": "Complete each sentence with the correct ending (A-C).",
        "passage": {
          "title": "THE PSYCHOLOGY OF INNOVATION",
          "paragraphs": [
            {
              "label": "A",
              "text": "For Robert Cialdini, corporate innovation begins with hiring policies. When recruitment selects for ideological conformity, teams suffer from groupthink. Breakthrough innovation flourishes when leaders actively encourage contrarian viewpoints and protect dissenters from social censure."
            }
          ]
        },
        "questions": [
          {
            "id": 5,
            "num": 5,
            "type": "sentence-endings",
            "questionText": "5. Corporate breakthrough discovery thrives _______",
            "options": [
              {
                "letter": "A",
                "desc": "when managerial teams reward conventional thinking."
              },
              {
                "letter": "B",
                "desc": "when organizations welcome opposing viewpoints and intellectual diversity."
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn A: 'flourishes when leaders actively encourage contrarian viewpoints'. Nối với B.",
            "evidence": "Breakthrough innovation flourishes when leaders actively encourage contrarian viewpoints"
          }
        ],
        "vocabulary": [
          {
            "word": "groupthink",
            "meaning": "Tư duy bầy đàn, suy nghĩ rập khuôn theo số đông",
            "example": "teams suffer from groupthink"
          },
          {
            "word": "contrarian",
            "meaning": "Ý kiến trái chiều, đi ngược lại đám đông",
            "example": "contrarian viewpoints"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_11",
    "lessonNum": 11,
    "code": "V13",
    "title": "V13 - MATCHING HEADINGS",
    "shortTitle": "Matching Headings",
    "category": "matching",
    "categoryLabel": "Nối Thông Tin",
    "badge": "Chọn tiêu đề đoạn",
    "description": "Chiến thuật nối tiêu đề đoạn văn: Đọc lướt câu chủ đề (topic sentence) ở đầu hoặc cuối đoạn, tóm tắt ý chính của đoạn và đối chiếu với danh sách Headings (i - x).",
    "examplesCount": 3,
    "totalQuestions": 15,
    "examples": [
      {
        "id": "r11_ex1",
        "exampleNum": 1,
        "title": "Example 1: The Environmental Challenge (Cambridge Reading)",
        "instructions": "Reading Passage has 5 paragraphs (A-E). Choose the correct heading for each paragraph from the list of headings (i-vii) below.",
        "passage": {
          "title": "ENVIRONMENTAL CHALLENGES IN THE 21ST CENTURY",
          "paragraphs": [
            {
              "label": "A",
              "text": "Over the past fifty years, humanity has altered global ecosystems more rapidly and extensively than in any comparable period in history. The primary driver has been the escalating demand for food, fresh water, timber, and fuel. While these transformations have yielded substantial net gains in human development, they have entailed growing costs in the form of ecosystem degradation."
            },
            {
              "label": "B",
              "text": "The degradation of ecosystem services could grow significantly worse during the first half of this century. Projections suggest that freshwater withdrawals will double by 2050, putting severe strain on agricultural production in arid zones. If current consumption patterns continue unabated, irreversible tipping points may be crossed."
            },
            {
              "label": "C",
              "text": "Crucially, the harmful impacts of ecosystem degradation are borne disproportionately by the poor. Vulnerable rural communities rely directly on forest resources and clean water for their subsistence. When regional watersheds dry up, it is impoverished populations who lack the financial capital to purchase alternatives."
            },
            {
              "label": "D",
              "text": "Traditional single-sector governance models have proven largely ineffective at stemming environmental decline. Historically, ministries of agriculture, water, and forestry operated in silos with conflicting targets. A holistic, cross-disciplinary framework is urgently required to balance conservation with economic development."
            },
            {
              "label": "E",
              "text": "Promising market-based mechanisms have emerged to incentivize conservation. Programs that compensate landowners for preserving watershed vegetation, known as payments for ecosystem services (PES), have demonstrated remarkable success in nations like Costa Rica and Mexico."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "matching-headings",
            "questionText": "Paragraph A",
            "options": [
              {
                "letter": "i",
                "desc": "Unprecedented scale of global ecosystem transformation"
              },
              {
                "letter": "ii",
                "desc": "Worsening environmental projections for the future"
              },
              {
                "letter": "iii",
                "desc": "Disproportionate burden inflicted upon impoverished communities"
              },
              {
                "letter": "iv",
                "desc": "Failure of fragmented institutional management"
              },
              {
                "letter": "v",
                "desc": "Financial incentives promoting conservation"
              },
              {
                "letter": "vi",
                "desc": "Technological innovations in irrigation"
              },
              {
                "letter": "vii",
                "desc": "Urban migration and waste disposal"
              }
            ],
            "acceptableAnswers": [
              "i"
            ],
            "explanation": "Đoạn A nói về tốc độ biến đổi sinh thái nhanh nhất lịch sử nhân loại -> Heading i.",
            "evidence": "humanity has altered global ecosystems more rapidly and extensively than in any comparable period"
          },
          {
            "id": 2,
            "num": 2,
            "type": "matching-headings",
            "questionText": "Paragraph B",
            "options": [
              {
                "letter": "i",
                "desc": "Unprecedented scale of global ecosystem transformation"
              },
              {
                "letter": "ii",
                "desc": "Worsening environmental projections for the future"
              },
              {
                "letter": "iii",
                "desc": "Disproportionate burden inflicted upon impoverished communities"
              },
              {
                "letter": "iv",
                "desc": "Failure of fragmented institutional management"
              },
              {
                "letter": "v",
                "desc": "Financial incentives promoting conservation"
              }
            ],
            "acceptableAnswers": [
              "ii"
            ],
            "explanation": "Đoạn B đưa ra dự báo tiêu cực trong tương lai ('could grow significantly worse', 'by 2050') -> Heading ii.",
            "evidence": "The degradation of ecosystem services could grow significantly worse during the first half of this century."
          },
          {
            "id": 3,
            "num": 3,
            "type": "matching-headings",
            "questionText": "Paragraph C",
            "options": [
              {
                "letter": "i",
                "desc": "Unprecedented scale of global ecosystem transformation"
              },
              {
                "letter": "ii",
                "desc": "Worsening environmental projections for the future"
              },
              {
                "letter": "iii",
                "desc": "Disproportionate burden inflicted upon impoverished communities"
              },
              {
                "letter": "iv",
                "desc": "Failure of fragmented institutional management"
              },
              {
                "letter": "v",
                "desc": "Financial incentives promoting conservation"
              }
            ],
            "acceptableAnswers": [
              "iii"
            ],
            "explanation": "Đoạn C nhấn mạnh tác hại đè nặng lên người nghèo ('borne disproportionately by the poor') -> Heading iii.",
            "evidence": "the harmful impacts of ecosystem degradation are borne disproportionately by the poor"
          },
          {
            "id": 4,
            "num": 4,
            "type": "matching-headings",
            "questionText": "Paragraph D",
            "options": [
              {
                "letter": "i",
                "desc": "Unprecedented scale of global ecosystem transformation"
              },
              {
                "letter": "ii",
                "desc": "Worsening environmental projections for the future"
              },
              {
                "letter": "iii",
                "desc": "Disproportionate burden inflicted upon impoverished communities"
              },
              {
                "letter": "iv",
                "desc": "Failure of fragmented institutional management"
              },
              {
                "letter": "v",
                "desc": "Financial incentives promoting conservation"
              }
            ],
            "acceptableAnswers": [
              "iv"
            ],
            "explanation": "Đoạn D nói về sự bất cập của các cơ quan quản lý đơn lẻ ('operated in silos', 'ineffective') -> Heading iv.",
            "evidence": "Traditional single-sector governance models have proven largely ineffective"
          },
          {
            "id": 5,
            "num": 5,
            "type": "matching-headings",
            "questionText": "Paragraph E",
            "options": [
              {
                "letter": "i",
                "desc": "Unprecedented scale of global ecosystem transformation"
              },
              {
                "letter": "ii",
                "desc": "Worsening environmental projections for the future"
              },
              {
                "letter": "iii",
                "desc": "Disproportionate burden inflicted upon impoverished communities"
              },
              {
                "letter": "iv",
                "desc": "Failure of fragmented institutional management"
              },
              {
                "letter": "v",
                "desc": "Financial incentives promoting conservation"
              }
            ],
            "acceptableAnswers": [
              "v"
            ],
            "explanation": "Đoạn E nói về cơ chế thị trường chi trả tiền cho chủ đất bảo vệ rừng ('payments for ecosystem services') -> Heading v.",
            "evidence": "Promising market-based mechanisms have emerged to incentivize conservation"
          }
        ],
        "vocabulary": [
          {
            "word": "ecosystem degradation",
            "meaning": "Sự suy thoái hệ sinh thái",
            "example": "stemming ecosystem degradation"
          },
          {
            "word": "disproportionately",
            "meaning": "Một cách không tương xứng, nặng nề hơn hẳn",
            "example": "borne disproportionately by the poor"
          },
          {
            "word": "operate in silos",
            "meaning": "Hoạt động cục bộ, chia rẽ thiếu liên kết",
            "example": "government departments operating in silos"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_12",
    "lessonNum": 12,
    "code": "V14",
    "title": "V14 - WHICH PARAGRAPH CONTAINS?",
    "shortTitle": "Which Paragraph Contains?",
    "category": "matching",
    "categoryLabel": "Nối Thông Tin",
    "badge": "Đoạn văn chứa thông tin",
    "description": "Chiến thuật tìm đoạn văn chứa thông tin cụ thể: Chú ý các từ chỉ loại thông tin (a description of, an explanation of, a reference to, examples of) để định vị đúng phong cách trình bày của đoạn.",
    "examplesCount": 3,
    "totalQuestions": 12,
    "examples": [
      {
        "id": "r12_ex1",
        "exampleNum": 1,
        "title": "Example 1: Early Modern Policing (Lịch sử cảnh sát)",
        "instructions": "Reading Passage has 5 paragraphs marked A-E. Which paragraph contains the following information? Write the correct letter A-E.",
        "passage": {
          "title": "THE ORIGINS OF MODERN POLICING",
          "paragraphs": [
            {
              "label": "A",
              "text": "The first centrally organized police force in Europe was created by King Louis XIV in 1667 to maintain order in Paris, then Europe's largest city. The police Lieutenant was tasked with purging the city of thieves, illuminating streets with lanterns, and securing grain supply lines during food shortages."
            },
            {
              "label": "B",
              "text": "Across the Channel in London, public hostility to royal standing armies delayed a professional police force for over a century. Citizens feared that armed officers would erode civil liberties, relying instead on voluntary parish constables and commercial 'thief-takers' who were notoriously corrupt."
            },
            {
              "label": "C",
              "text": "It was not until 1829 that Sir Robert Peel persuaded Parliament to establish the Metropolitan Police. Peel insisted that police wear distinctive blue tailcoats rather than military red, carry wooden truncheons instead of firearms, and derive their authority from public trust rather than fear."
            },
            {
              "label": "D",
              "text": "Peel formulated nine core ethical principles, the most famous being 'the police are the public and the public are the police'. Early officers quickly earned the affectionate nickname 'Bobbies' after their founder."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "matching-features",
            "questionText": "1. a reference to the public anxiety that policing would compromise personal freedoms",
            "options": [
              {
                "letter": "A",
                "desc": "Paragraph A"
              },
              {
                "letter": "B",
                "desc": "Paragraph B"
              },
              {
                "letter": "C",
                "desc": "Paragraph C"
              },
              {
                "letter": "D",
                "desc": "Paragraph D"
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: 'Citizens feared that armed officers would erode civil liberties'. Đoạn B chứa thông tin này.",
            "evidence": "Citizens feared that armed officers would erode civil liberties"
          },
          {
            "id": 2,
            "num": 2,
            "type": "matching-features",
            "questionText": "2. details of the distinct non-military uniform and equipment adopted by early officers",
            "options": [
              {
                "letter": "A",
                "desc": "Paragraph A"
              },
              {
                "letter": "B",
                "desc": "Paragraph B"
              },
              {
                "letter": "C",
                "desc": "Paragraph C"
              },
              {
                "letter": "D",
                "desc": "Paragraph D"
              }
            ],
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn C miêu tả chi tiết đồng phục áo đuôi tôm màu xanh ('blue tailcoats') và dùi cui gỗ ('wooden truncheons').",
            "evidence": "wear distinctive blue tailcoats rather than military red, carry wooden truncheons instead of firearms"
          },
          {
            "id": 3,
            "num": 3,
            "type": "matching-features",
            "questionText": "3. an explanation of the initial urban duties assigned to the French police force",
            "options": [
              {
                "letter": "A",
                "desc": "Paragraph A"
              },
              {
                "letter": "B",
                "desc": "Paragraph B"
              },
              {
                "letter": "C",
                "desc": "Paragraph C"
              },
              {
                "letter": "D",
                "desc": "Paragraph D"
              }
            ],
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A giải thích các nhiệm vụ của cảnh sát Pháp (bắt trộm, thắp đèn lồng, bảo đảm nguồn cung lương thực).",
            "evidence": "tasked with purging the city of thieves, illuminating streets with lanterns, and securing grain supply"
          }
        ],
        "vocabulary": [
          {
            "word": "civil liberties",
            "meaning": "Quyền tự do công dân",
            "example": "erode civil liberties"
          },
          {
            "word": "truncheon",
            "meaning": "Dùi cui của cảnh sát",
            "example": "carrying wooden truncheons"
          }
        ]
      }
    ]
  },
  {
    "id": "reading_13",
    "lessonNum": 13,
    "code": "V15",
    "title": "V15 - MULTIPLE CHOICE",
    "shortTitle": "Multiple Choice",
    "category": "mcq",
    "categoryLabel": "Trắc Nghiệm",
    "badge": "Lựa chọn đáp án A/B/C/D",
    "description": "Chiến thuật làm bài Multiple Choice: Loại trừ các bẫy thông thường (bẫy thông tin đối lập, bẫy thông tin cực đoan always/never, bẫy từ vựng trùng lặp nhưng sai ý).",
    "examplesCount": 3,
    "totalQuestions": 8,
    "examples": [
      {
        "id": "r13_ex1",
        "exampleNum": 1,
        "title": "Example 1: Richard Feynman’s Philosophy of Physics",
        "instructions": "Choose the correct letter, A, B, C or D.",
        "passage": {
          "title": "FEYNMAN'S LOST LECTURE",
          "paragraphs": [
            {
              "label": "A",
              "text": "Physicist Richard Feynman returned over and over to an idea that drove his groundbreaking discoveries. His approach was documented by his Caltech colleague David Goodstein in the book Feynman’s Lost Lecture: 'Once, I said to him, \"Dick, explain to me, so that I can understand it, why spin one-half particles obey Fermi-Dirac statistics.\" Feynman replied, \"I’ll prepare a freshman lecture on it.\" But a few days later he returned and admitted, \"I couldn’t do it. I couldn't reduce it to the freshman level. That means we don't really understand it.\"'"
            },
            {
              "label": "B",
              "text": "Feynman believed that true scientific understanding requires mastery of first principles. If an expert cannot explain a concept using simple, intuitive analogies to a beginner, it reveals that the scientific community's own grasp of the fundamental underlying mechanism is incomplete."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "multiple-choice",
            "questionText": "1. Feynman conceded that he could not teach the physics concept to freshmen because",
            "options": [
              {
                "letter": "A",
                "desc": "first-year students lacked the prerequisite mathematical skills."
              },
              {
                "letter": "B",
                "desc": "he did not yet understand the principle deeply enough himself."
              },
              {
                "letter": "C",
                "desc": "David Goodstein’s textbook contained factual errors."
              },
              {
                "letter": "D",
                "desc": "Caltech prohibited advanced quantum lectures for undergraduates."
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn A: Feynman thừa nhận 'I couldn't reduce it to the freshman level. That means we don't really understand it'. Tức là chính bản thân chưa hiểu đủ sâu sắc -> B.",
            "evidence": "I couldn't reduce it to the freshman level. That means we don't really understand it."
          },
          {
            "id": 2,
            "num": 2,
            "type": "multiple-choice",
            "questionText": "2. According to paragraph B, Feynman argued that authentic comprehension is proven when a specialist",
            "options": [
              {
                "letter": "A",
                "desc": "formulates complex mathematical proofs without using analogies."
              },
              {
                "letter": "B",
                "desc": "can clearly articulate core ideas to someone with no background knowledge."
              },
              {
                "letter": "C",
                "desc": "wins international recognition such as the Nobel Prize."
              },
              {
                "letter": "D",
                "desc": "publishes groundbreaking research in academic journals."
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: 'explain a concept using simple, intuitive analogies to a beginner' -> B (giải thích cho người chưa có chuyên môn).",
            "evidence": "If an expert cannot explain a concept using simple, intuitive analogies to a beginner"
          }
        ],
        "vocabulary": [
          {
            "word": "first principles",
            "meaning": "Nguyên lý cơ bản khởi thủy",
            "example": "reasoning from first principles"
          },
          {
            "word": "freshman",
            "meaning": "Sinh viên năm nhất đại học",
            "example": "freshman physics class"
          }
        ]
      },
      {
        "id": "r13_ex2",
        "exampleNum": 2,
        "title": "Example 2: Museums of Fine Art and Their Public",
        "instructions": "Choose the correct letter, A, B, C or D.",
        "passage": {
          "title": "MUSEUMS OF FINE ART AND THEIR PUBLIC",
          "paragraphs": [
            {
              "label": "A",
              "text": "A fundamental difference between paintings and other art forms is that there is no prescribed duration over which a painting must be viewed. By contrast, an audience member attends an opera or theatrical play for a specific duration. Similarly, novels and poems are read in an inherently temporal sequence."
            },
            {
              "label": "B",
              "text": "A painted canvas, however, presents no fixed starting point and no mandatory conclusion. Consequently, gallery visitors are tempted to gaze superficially, glancing at masterpieces for mere seconds without appreciating the profound labor and subtlety involved."
            }
          ]
        },
        "questions": [
          {
            "id": 35,
            "num": 35,
            "type": "multiple-choice",
            "questionText": "35. The writer states that unlike theatrical plays or novels, a painting does not",
            "options": [
              {
                "letter": "A",
                "desc": "involve direct emotional engagement with its audience."
              },
              {
                "letter": "B",
                "desc": "require a designated indoor venue for display."
              },
              {
                "letter": "C",
                "desc": "compel the viewer to follow a predetermined timeline or sequence."
              },
              {
                "letter": "D",
                "desc": "require expensive conservation materials."
              }
            ],
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn A & B khẳng định: 'there is no prescribed duration... no fixed starting point and no mandatory conclusion' -> C.",
            "evidence": "there is no prescribed duration over which a painting must be viewed... presents no fixed starting point and no mandatory conclusion"
          }
        ],
        "vocabulary": [
          {
            "word": "prescribed duration",
            "meaning": "Khoảng thời gian được quy định trước",
            "example": "viewing without a prescribed duration"
          },
          {
            "word": "temporal sequence",
            "meaning": "Trình tự thời gian tuần tự",
            "example": "reading in a temporal sequence"
          }
        ]
      },
      {
        "id": "r13_ex3",
        "exampleNum": 3,
        "title": "Example 3: Beyond the Blue Horizon (Lapita Geography)",
        "instructions": "Choose the correct letter, A, B, C or D.",
        "passage": {
          "title": "THE GEOGRAPHY OF THE SOUTH PACIFIC",
          "paragraphs": [
            {
              "label": "A",
              "text": "For returning Lapita explorers, the geographic configuration of their home archipelagoes provided an indispensable safety net. The islands of Vanuatu, for instance, stretch across more than five hundred miles in a continuous northwest-southeast chain, forming a gigantic geographical net across the ocean."
            },
            {
              "label": "B",
              "text": "Even with primitive sails, returning voyagers would almost certainly strike one of the interconnected islands rather than sailing blindly into the boundless expanse of the open Pacific."
            }
          ]
        },
        "questions": [
          {
            "id": 36,
            "num": 36,
            "type": "multiple-choice",
            "questionText": "36. According to the passage, the geography of the island archipelago was significant because it",
            "options": [
              {
                "letter": "A",
                "desc": "ensured calm sailing waters with minimal tropical storm activity."
              },
              {
                "letter": "B",
                "desc": "acted as an expansive physical barrier that caught returning voyagers."
              },
              {
                "letter": "C",
                "desc": "provided fertile volcanic soil suitable for permanent agriculture."
              },
              {
                "letter": "D",
                "desc": "encouraged rapid inter-island warfare among local tribes."
              }
            ],
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn A & B: 'provided an indispensable safety net... forming a gigantic geographical net... returning voyagers would almost certainly strike one of the islands' -> B.",
            "evidence": "forming a gigantic geographical net across the ocean... safety net"
          }
        ],
        "vocabulary": [
          {
            "word": "archipelago",
            "meaning": "Quần đảo",
            "example": "Pacific island archipelago"
          },
          {
            "word": "safety net",
            "meaning": "Lưới an toàn bảo vệ",
            "example": "provided a geographical safety net"
          }
        ]
      }
    ]
  }
];

// Registry map for fast lookup by lesson id
const readingLessonsRegistry = {};
readingLessons.forEach(lesson => {
  readingLessonsRegistry[lesson.id] = lesson;
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    readingLessons,
    readingLessonsRegistry
  };
}
