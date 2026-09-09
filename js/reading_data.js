/**
 * IELTS READING PRACTICE DATA - 100% COMPLETE BOOK AUDIT
 * Total Lessons: 13 (V02 to V15)
 * Total Passages / Sets: 39
 * Total Questions: 210
 * Source: TAI-LIEU-KHOA-IELTS-READING-ONLINE-VIDEO-B (All 84 Pages)
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
              "text": "10 câu hỏi bên dưới trích xuất trực tiếp từ các đề thi Cambridge IELTS. Hãy phân tích và tìm ra từ khóa quan trọng nhất trong từng câu."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "type": "keywords",
            "questionText": "1. Many seed banks are themselves under threat due to a lack of funds.\n(Từ khóa quan trọng nhất định vị bài đọc là gì?)",
            "acceptableAnswers": [
              "seed banks",
              "lack of funds",
              "funds",
              "threat"
            ],
            "explanation": "Từ khóa khó thay thế: 'seed banks' (ngân hàng hạt giống - thuật ngữ sinh học chuyên ngành). Từ khóa nội dung: 'lack of funds' (thiếu vốn), 'threat' (nguy cơ).",
            "evidence": "Many seed banks are themselves under threat due to a lack of funds.",
            "num": 1
          },
          {
            "id": 2,
            "type": "keywords",
            "questionText": "2. The charity raises money to pay for education and the daily needs of poor people.\n(Từ khóa quan trọng nhất là gì?)",
            "acceptableAnswers": [
              "charity",
              "education",
              "daily needs",
              "poor people",
              "raises money"
            ],
            "explanation": "Từ khóa: 'charity' (tổ chức từ thiện), 'education' (giáo dục), 'daily needs' (nhu cầu hàng ngày), 'poor people' (người nghèo).",
            "evidence": "The charity raises money to pay for education and the daily needs of poor people.",
            "num": 2
          },
          {
            "id": 3,
            "type": "keywords",
            "questionText": "3. Persuading people to use trains and buses will always be an uphill struggle.\n(Từ khóa phương tiện và tính chất là gì?)",
            "acceptableAnswers": [
              "trains and buses",
              "trains",
              "buses",
              "uphill struggle",
              "persuading"
            ],
            "explanation": "Từ khóa định vị: 'trains and buses' (xe buýt và tàu hỏa), 'uphill struggle' (thách thức khó khăn, gian khổ).",
            "evidence": "Persuading people to use trains and buses will always be an uphill struggle.",
            "num": 3
          },
          {
            "id": 4,
            "type": "keywords",
            "questionText": "4. The amount of open space in California has diminished over the last ten years.\n(Từ khóa tên riêng và thời gian là gì?)",
            "acceptableAnswers": [
              "california",
              "ten years",
              "open space",
              "last ten years",
              "diminished"
            ],
            "explanation": "Từ khóa bất biến: 'California' (tên riêng bang nước Mỹ), 'ten years' (số liệu thời gian 10 năm), 'open space' (không gian mở), 'diminished' (bị thu hẹp / giảm).",
            "evidence": "The amount of open space in California has diminished over the last ten years.",
            "num": 4
          },
          {
            "id": 5,
            "type": "keywords",
            "questionText": "5. The farmers of a tribe grow a wide range of plants.\n(Từ khóa chủ thể và hành động là gì?)",
            "acceptableAnswers": [
              "tribe",
              "farmers",
              "plants",
              "wide range of plants",
              "grow"
            ],
            "explanation": "Từ khóa: 'tribe' (bộ lạc / bộ tộc), 'farmers' (nông dân), 'plants' (cây trồng / thực vật).",
            "evidence": "The farmers of a tribe grow a wide range of plants.",
            "num": 5
          },
          {
            "id": 6,
            "type": "keywords",
            "questionText": "6. Who is the person that first used the word 'serendipity'?\n(Từ khóa thuật ngữ trong ngoặc kép là gì?)",
            "acceptableAnswers": [
              "serendipity",
              "'serendipity'",
              "first used"
            ],
            "explanation": "Từ khóa bất biến: 'serendipity' (sự tình cờ phát hiện ra điều may mắn / thú vị). Từ hỏi: 'Who' -> tìm tên người.",
            "evidence": "Who is the person that first used the word 'secrendipity'?",
            "num": 6
          },
          {
            "id": 7,
            "type": "keywords",
            "questionText": "7. What did eggs represent on the whole?\n(Từ khóa chủ thể và ý nghĩa là gì?)",
            "acceptableAnswers": [
              "eggs",
              "represent",
              "on the whole"
            ],
            "explanation": "Từ khóa: 'eggs' (trứng), 'represent' (đại diện / tượng trưng cho).",
            "evidence": "What did eggs represent on the whole?",
            "num": 7
          },
          {
            "id": 8,
            "type": "keywords",
            "questionText": "8. Who was the first non-Italian architect influenced by Palladio?\n(Từ khóa tên riêng và quốc tịch là gì?)",
            "acceptableAnswers": [
              "palladio",
              "non-italian architect",
              "non-italian",
              "architect"
            ],
            "explanation": "Từ khóa bất biến: 'Palladio' (tên kiến trúc sư), 'non-Italian' (không phải người Ý), 'architect' (kiến trúc sư).",
            "evidence": "Who was the first non-Italian architect influenced by Palladio?",
            "num": 8
          },
          {
            "id": 9,
            "type": "keywords",
            "questionText": "9. Who arranged Palladio’s architectural studies?\n(Từ khóa tên riêng và hoạt động là gì?)",
            "acceptableAnswers": [
              "palladio",
              "architectural studies",
              "arranged"
            ],
            "explanation": "Từ khóa: 'Palladio’s architectural studies' (quá trình học tập kiến trúc của Palladio).",
            "evidence": "Who arranged Palladio ’s architectural studies?",
            "num": 9
          },
          {
            "id": 10,
            "type": "keywords",
            "questionText": "10. Michael Eisenberg believes in giving children financial incentives to do certain tasks.\n(Từ khóa tên riêng và khái niệm tài chính là gì?)",
            "acceptableAnswers": [
              "michael eisenberg",
              "financial incentives",
              "children",
              "eisenberg"
            ],
            "explanation": "Từ khóa bất biến: 'Michael Eisenberg' (tên người). Từ khóa nội dung: 'financial incentives' (khích lệ/thưởng bằng tiền bạc), 'children'.",
            "evidence": "Michael Eisenberg believes in giving children financial incentives to do certain tasks.",
            "num": 10
          }
        ],
        "vocabulary": [
          {
            "word": "seed bank",
            "meaning": "Ngân hàng lưu trữ hạt giống cây trồng",
            "example": "Seed banks preserve crop diversity."
          },
          {
            "word": "uphill struggle",
            "meaning": "Cuộc đấu tranh/thử thách vô cùng gian khó",
            "example": "Quitting smoking is an uphill struggle."
          },
          {
            "word": "diminish",
            "meaning": "Giảm bớt, thu hẹp lại",
            "example": "The area of forest has diminished greatly."
          },
          {
            "word": "serendipity",
            "meaning": "Sự tình cờ phát hiện ra những điều kỳ diệu/may mắn",
            "example": "Finding this book was pure serendipity."
          },
          {
            "word": "financial incentive",
            "meaning": "Động lực tài chính, tiền thưởng khích lệ",
            "example": "Companies offer financial incentives for high performance."
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
    "description": "5 kỹ thuật đoán nghĩa từ vựng học thuật dựa vào ngữ cảnh: Mệnh đề quan hệ & đồng vị, Từ đồng nghĩa/Trái nghĩa, Từ chỉ ví dụ minh họa, Dấu câu đặc biệt (ngoặc đơn, gạch nối), và Logic câu.",
    "examplesCount": 1,
    "totalQuestions": 15,
    "examples": [
      {
        "id": "r2_ex1",
        "exampleNum": 1,
        "title": "Luyện Tập 15 Câu Đoán Nghĩa Ngữ Cảnh Chuẩn Đề Thi",
        "instructions": "Vận dụng các manh mối ngữ cảnh (dấu câu, từ nối, từ chỉ ví dụ, định nghĩa) để xác định nghĩa hoặc từ đồng nghĩa của từ/cụm từ in đậm trong 15 câu sau.",
        "passage": {
          "title": "5 Phương Pháp Suy Luận Nghĩa Từ Mới Trong Reading",
          "paragraphs": [
            {
              "label": "A",
              "text": "Trong bài thi IELTS Reading, bạn chắc chắn sẽ bắt gặp những từ vựng học thuật hoặc thuật ngữ chuyên ngành cực kỳ lạ lẫm. Đừng hoảng sợ! Tác giả bài đọc luôn cung cấp 'manh mối ngữ cảnh' (Context Clues) ngay xung quanh từ đó."
            },
            {
              "label": "B",
              "text": "1. Mệnh đề đồng vị & Dấu phẩy đôi (, ... ,): Giải thích ngay ý nghĩa của danh từ phía trước (ví dụ: 'Metaphor, a kind of symbol...').\n2. Cụm từ đưa ra ví dụ: 'such as', 'for example', 'e.g.,' giúp ta hiểu nhóm khái niệm của từ đó.\n3. Dấu ngoặc đơn (...), gạch nối (- ... -): Trực tiếp định nghĩa từ ngay bên trong.\n4. Mối quan hệ nguyên nhân - kết quả và logic mệnh đề: Suy luận dựa trên hành động kế tiếp (ví dụ: trà bị nguội nên bỏ vào lò vi sóng)."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "type": "vocab-clue",
            "questionText": "1. Metaphor, a kind of symbol, is an important analytical concept.\nNghĩa của từ 'Metaphor' dựa theo manh mối đồng vị là gì?",
            "acceptableAnswers": [
              "a kind of symbol",
              "symbol",
              "biểu tượng",
              "phép ẩn dụ",
              "một loại biểu tượng"
            ],
            "explanation": "Manh mối: Cụm đồng vị đứng giữa 2 dấu phẩy ', a kind of symbol,' định nghĩa trực tiếp Metaphor là một loại biểu tượng (phép ẩn dụ).",
            "evidence": "Metaphor, a kind of symbol, is an important analytical concept.",
            "num": 1
          },
          {
            "id": 2,
            "type": "vocab-clue",
            "questionText": "2. The deluge, a flood of rain, threatened to drown the little town.\nNghĩa của từ 'deluge' là gì?",
            "acceptableAnswers": [
              "a flood of rain",
              "flood of rain",
              "flood",
              "lũ lụt",
              "mưa lũ"
            ],
            "explanation": "Manh mối giữa 2 dấu phẩy ', a flood of rain,' giải thích deluge chính là trận mưa lũ xối xả.",
            "evidence": "The deluge, a flood of rain, threatened to drown the little town.",
            "num": 2
          },
          {
            "id": 3,
            "type": "vocab-clue",
            "questionText": "3. They buy real estate such as houses, office buildings, and land.\nTừ 'real estate' gồm những tài sản gì?",
            "acceptableAnswers": [
              "houses, office buildings, and land",
              "bất động sản",
              "nhà cửa, văn phòng, đất đai",
              "land"
            ],
            "explanation": "Manh mối 'such as' đưa ra các ví dụ: houses (nhà cửa), office buildings (tòa nhà văn phòng), land (đất đai) -> Bất động sản.",
            "evidence": "They buy real estate such as houses, office buildings, and land.",
            "num": 3
          },
          {
            "id": 4,
            "type": "vocab-clue",
            "questionText": "4. They bought luxury items – e.g., Rolls Royces and Rolex watches.\n'luxury items' là những mặt hàng thuộc phân khúc nào?",
            "acceptableAnswers": [
              "hàng xa xỉ",
              "xa xỉ",
              "expensive items",
              "luxury",
              "cao cấp"
            ],
            "explanation": "Manh mối 'e.g., Rolls Royces and Rolex watches' đưa ra ví dụ về xe siêu sang và đồng hồ đắt đỏ -> Hàng xa xỉ.",
            "evidence": "They bought luxury items – e.g., Rolls Royces and Rolex watches.",
            "num": 4
          },
          {
            "id": 5,
            "type": "vocab-clue",
            "questionText": "5. Black is the colour of mourning; at a funeral people wear black clothing.\n'mourning' chỉ trạng thái/dịp gì?",
            "acceptableAnswers": [
              "tang chế",
              "tang lễ",
              "tang",
              "funeral",
              "grief"
            ],
            "explanation": "Manh mối sau dấu chấm phẩy: 'at a funeral people wear black clothing' (trong đám tang mọi người mặc áo đen) -> Sự tang chế / tưởng niệm người đã mất.",
            "evidence": "Black is the colour of mourning; at a funeral people wear black clothing.",
            "num": 5
          },
          {
            "id": 6,
            "type": "vocab-clue",
            "questionText": "6. Her tea was tepid, so she put it in the microwave.\nNghĩa của từ 'tepid' đối với nước/trà là gì?",
            "acceptableAnswers": [
              "lukewarm",
              "slightly warm",
              "nguội",
              "âm ấm",
              "ấm ấm"
            ],
            "explanation": "Manh mối logic: Trà bị 'tepid' nên cô ấy phải cho vào lò vi sóng (microwave) để hâm nóng -> Trà bị nguội, âm ấm.",
            "evidence": "Her tea was tepid, so she put it in the microwave.",
            "num": 6
          },
          {
            "id": 7,
            "type": "vocab-clue",
            "questionText": "7. Sleet (half rain and half snow) can be very difficult to drive in due to poor visibility.\n'sleet' là loại thời tiết gì?",
            "acceptableAnswers": [
              "half rain and half snow",
              "mưa tuyết",
              "mưa lẫn tuyết",
              "rain and snow"
            ],
            "explanation": "Định nghĩa trực tiếp trong ngoặc đơn: '(half rain and half snow)' -> Mưa tuyết (nửa mưa nửa tuyết).",
            "evidence": "Sleet (half rain and half snow) can be very difficult to drive in",
            "num": 7
          },
          {
            "id": 8,
            "type": "vocab-clue",
            "questionText": "8. The podiatrist told the woman to take the medicine for 5 days and call him if she did not feel better.\n'podiatrist' làm nghề nghiệp gì?",
            "acceptableAnswers": [
              "doctor",
              "bác sĩ",
              "bác sĩ chân",
              "foot doctor",
              "chuyên gia bàn chân"
            ],
            "explanation": "Manh mối: 'told the woman to take the medicine... and call him if she did not feel better' -> Bác sĩ (chuyên khoa bàn chân).",
            "evidence": "The podiatrist told the woman to take the medicine for 5 days",
            "num": 8
          },
          {
            "id": 9,
            "type": "vocab-clue",
            "questionText": "9. A tornado (a violent storm of twisting wind) struck Edmonton and caused a lot of damage.\n'tornado' là hiện tượng thiên tai gì?",
            "acceptableAnswers": [
              "a violent storm of twisting wind",
              "lốc xoáy",
              "cơn lốc xoáy",
              "bão lốc xoáy"
            ],
            "explanation": "Định nghĩa trong ngoặc đơn: '(a violent storm of twisting wind)' -> Cơn lốc xoáy dữ dội.",
            "evidence": "A tornado (a violent storm of twisting wind) struck Edmonton",
            "num": 9
          },
          {
            "id": 10,
            "type": "vocab-clue",
            "questionText": "10. Giggling involves laughing in a silly way.\n'Giggling' nghĩa là gì?",
            "acceptableAnswers": [
              "laughing in a silly way",
              "cười khúc khích",
              "cười ngớ ngẩn",
              "laughing"
            ],
            "explanation": "Định nghĩa trực tiếp qua từ 'involves': 'laughing in a silly way' -> Cười khúc khích, cười rúc rích.",
            "evidence": "Giggling involves laughing in a silly way.",
            "num": 10
          },
          {
            "id": 11,
            "type": "vocab-clue",
            "questionText": "11. People have gotten lost 10 metres from their homes in blizzard – snowfalls that come down very quickly.\n'blizzard' là hiện tượng gì?",
            "acceptableAnswers": [
              "snowfalls that come down very quickly",
              "bão tuyết",
              "trận bão tuyết"
            ],
            "explanation": "Định nghĩa sau dấu gạch ngang: 'snowfalls that come down very quickly' -> Trận bão tuyết rơi dồn dập.",
            "evidence": "blizzard – snowfalls that come down very quickly.",
            "num": 11
          },
          {
            "id": 12,
            "type": "vocab-clue",
            "questionText": "12. Another dangerous form of weather is hail (falling balls of ice) which has been known to get so big that it can break a care windshield.\n'hail' nghĩa là gì?",
            "acceptableAnswers": [
              "falling balls of ice",
              "mưa đá",
              "cục băng rơi"
            ],
            "explanation": "Định nghĩa trong ngoặc đơn: '(falling balls of ice)' -> Mưa đá (những khối băng rơi từ trên trời xuống).",
            "evidence": "hail (falling balls of ice) which has been known to get so big",
            "num": 12
          },
          {
            "id": 13,
            "type": "vocab-clue",
            "questionText": "13. Breaking even involves making money to pay for business costs but no more.\nKhái niệm tài chính 'Breaking even' nghĩa là gì?",
            "acceptableAnswers": [
              "hòa vốn",
              "making money to pay for business costs but no more",
              "điểm hòa vốn"
            ],
            "explanation": "Định nghĩa qua 'involves': 'making money to pay for business costs but no more' -> Hòa vốn (doanh thu chỉ vừa đủ bù chi phí).",
            "evidence": "Breaking even involves making money to pay for business costs but no more.",
            "num": 13
          },
          {
            "id": 14,
            "type": "vocab-clue",
            "questionText": "14. Many new businesses go bankrupt, which means they lost everything.\n'bankrupt' mang ý nghĩa gì?",
            "acceptableAnswers": [
              "phá sản",
              "lost everything",
              "vỡ nợ"
            ],
            "explanation": "Manh mối qua mệnh đề 'which means': 'they lost everything' -> Phá sản, mất sạch vốn liếng.",
            "evidence": "Many new businesses go bankrupt, which means they lost everything.",
            "num": 14
          },
          {
            "id": 15,
            "type": "vocab-clue",
            "questionText": "15. The Big Three are designing radical new cars including vehicles that use radar and advanced computers.\n'radical' mang nét nghĩa gì đối với công nghệ mới?",
            "acceptableAnswers": [
              "đột phá",
              "mới mẻ",
              "tiên tiến",
              "cải tiến vượt bậc",
              "revolutionary"
            ],
            "explanation": "Manh mối qua 'including vehicles that use radar and advanced computers' -> Đột phá, mang tính cách mạng, mới mẻ hoàn toàn.",
            "evidence": "designing radical new cars including vehicles that use radar and advanced computers.",
            "num": 15
          }
        ],
        "vocabulary": [
          {
            "word": "deluge",
            "meaning": "Trận đại hồng thủy, mưa như trút nước",
            "example": "The deluge caused severe flooding in the city."
          },
          {
            "word": "tepid",
            "meaning": "Âm ấm, nguội (chất lỏng)",
            "example": "He drank a cup of tepid water."
          },
          {
            "word": "sleet",
            "meaning": "Mưa tuyết (nửa mưa nửa tuyết)",
            "example": "Driving in sleet requires extreme caution."
          },
          {
            "word": "break even",
            "meaning": "Hòa vốn (doanh thu bằng chi phí)",
            "example": "The company expects to break even by next quarter."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_3",
    "lessonNum": 3,
    "code": "V05",
    "title": "V05 – SHORT ANSWER QUESTIONS",
    "shortTitle": "Short Answer Questions",
    "category": "completion",
    "categoryLabel": "Điền Từ & Tóm Tắt",
    "badge": "Điền từ ngắn",
    "description": "Dạng bài trả lời câu hỏi ngắn với giới hạn số từ nghiêm ngặt (NO MORE THAN THREE WORDS / TWO WORDS / ONE WORD). Gồm 8 câu bài tập cơ bản và 2 bài đọc Cambridge hoàn chỉnh (Stepwells & Perkin Dyes).",
    "examplesCount": 3,
    "totalQuestions": 17,
    "examples": [
      {
        "id": "r3_ex1",
        "exampleNum": 1,
        "title": "Phần 1: Bài Tập Luyện Tập Cơ Bản (8 Đoạn Văn Ngắn)",
        "instructions": "Đọc các đoạn văn ngắn dưới đây và trả lời các câu hỏi 1–8. Chú ý giới hạn từ cho từng phần.",
        "passage": {
          "title": "8 Đoạn Văn Luyện Kỹ Năng Định Vị Câu Trả Lời Ngắn",
          "paragraphs": [
            {
              "label": "1",
              "text": "In addition to the reptiles, birds, mammals and insects which we see all around us, other groups that have succeeded out of water include scorpions, snails, crustaceans such as woodlice and land crabs, millipedes and centipedes, spiders and various worms. And we mustn’t forget the plants, without whose prior invasion of the land none of the other migrations could have happened."
            },
            {
              "label": "2",
              "text": "Moving from water to land involved a major redesign of every aspect of life, including breathing and reproduction."
            },
            {
              "label": "3",
              "text": "Whales (including the small whales we call dolphins) and dugongs, with their close cousins the manatees, ceased to be land creatures altogether and reverted to the full marine habits of their remote ancestors. They don’t even come ashore to breed. They do, however, still breathe air, having never developed anything equivalent to the gills of their earlier marine incarnation."
            },
            {
              "label": "4",
              "text": "Ichthyosaurs were reptilian contemporaries of the dinosaurs, with fins and streamlined bodies. The fossils look like dolphins and they surely lived like dolphins, in the water."
            },
            {
              "label": "5",
              "text": "The New Zealand Ministry of Health has found from research carried out over two decades that 6-10% of children in that country are affected by hearing loss."
            },
            {
              "label": "6",
              "text": "Autistic spectrum disorders often result in major difficulties in comprehending verbal information and speech processing. Those experiencing these disorders often find sounds such as crowd noise and the noise generated by machinery painful and distressing."
            },
            {
              "label": "7",
              "text": "It is probable that many undiagnosed children exist in the education system with 'invisible' disabilities."
            },
            {
              "label": "8",
              "text": "The New Zealand Government has developed a New Zealand Disability Strategy and has embarked on a wide-ranging consultation process. The strategy recognises that people experiencing disability face significant barriers in achieving a full quality of life in areas such as attitude, education, employment and access to services. Objective 3 of the New Zealand Disability Strategy is to 'Provide the Best Education for Disabled People' by improving education so that all children, youth learners and adult learners will have equal opportunities to learn and develop within their already existing local school."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "type": "short-answer",
            "questionText": "1. What had to transfer from sea to land before any animals could migrate? (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "plants",
              "the plants"
            ],
            "explanation": "Đoạn 1: 'And we mustn't forget the plants, without whose prior invasion of the land none of the other migrations could have happened' -> Thực vật (plants).",
            "evidence": "without whose prior invasion of the land none of the other migrations could have happened",
            "num": 1
          },
          {
            "id": 2,
            "type": "short-answer",
            "questionText": "2. Which TWO processes are mentioned as those in which animals had to make big changes as they moved onto land? (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "breathing and reproduction",
              "breathing, reproduction",
              "reproduction and breathing"
            ],
            "explanation": "Đoạn 2: 'involved a major redesign of every aspect of life, including breathing and reproduction'.",
            "evidence": "including breathing and reproduction",
            "num": 2
          },
          {
            "id": 3,
            "type": "short-answer",
            "questionText": "3. Which physical feature, possessed by their ancestors, do whales lack? (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "gills",
              "the gills"
            ],
            "explanation": "Đoạn 3: 'having never developed anything equivalent to the gills of their earlier marine incarnation' -> Cá voi không có mang (gills).",
            "evidence": "having never developed anything equivalent to the gills of their earlier marine incarnation",
            "num": 3
          },
          {
            "id": 4,
            "type": "short-answer",
            "questionText": "4. Which animals might ichthyosaurs have resembled? (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "dolphins"
            ],
            "explanation": "Đoạn 4: 'The fossils look like dolphins and they surely lived like dolphins' -> dolphins.",
            "evidence": "The fossils look like dolphins and they surely lived like dolphins",
            "num": 4
          },
          {
            "id": 5,
            "type": "short-answer",
            "questionText": "5. For what period of time has hearing loss in schoolchildren been studied in New Zealand? (NO MORE THAN TWO WORDS AND/OR A NUMBER)",
            "acceptableAnswers": [
              "two decades",
              "2 decades",
              "over two decades"
            ],
            "explanation": "Đoạn 5: 'research carried out over two decades' -> two decades.",
            "evidence": "from research carried out over two decades",
            "num": 5
          },
          {
            "id": 6,
            "type": "short-answer",
            "questionText": "6. In addition to machinery noise, what other type of noise can upset children with autism? (NO MORE THAN TWO WORDS AND/OR A NUMBER)",
            "acceptableAnswers": [
              "crowd noise",
              "crowd"
            ],
            "explanation": "Đoạn 6: 'sounds such as crowd noise and the noise generated by machinery' -> crowd noise.",
            "evidence": "sounds such as crowd noise and the noise generated by machinery painful and distressing",
            "num": 6
          },
          {
            "id": 7,
            "type": "short-answer",
            "questionText": "7. What term is used to describe the hearing problems of schoolchildren which have not been diagnosed? (NO MORE THAN TWO WORDS AND/OR A NUMBER)",
            "acceptableAnswers": [
              "invisible disabilities",
              "invisible",
              "'invisible' disabilities"
            ],
            "explanation": "Đoạn 7: 'many undiagnosed children exist in the education system with 'invisible' disabilities' -> invisible disabilities.",
            "evidence": "undiagnosed children exist in the education system with 'invisible' disabilities",
            "num": 7
          },
          {
            "id": 8,
            "type": "short-answer",
            "questionText": "8. What part of the New Zealand Disability Strategy aims to give schoolchildren equal opportunity? (NO MORE THAN TWO WORDS AND/OR A NUMBER)",
            "acceptableAnswers": [
              "Objective 3",
              "Objective three",
              "Objective 3."
            ],
            "explanation": "Đoạn 8: 'Objective 3 of the New Zealand Disability Strategy is to Provide the Best Education for Disabled People by improving education so that all children... will have equal opportunities' -> Objective 3.",
            "evidence": "Objective 3 of the New Zealand Disability Strategy is to 'Provide the Best Education for Disabled People'",
            "num": 8
          }
        ],
        "vocabulary": [
          {
            "word": "migration",
            "meaning": "Sự di cư",
            "example": "Animal migration is triggered by seasonal changes."
          },
          {
            "word": "gills",
            "meaning": "Mang (của cá/động vật dưới nước)",
            "example": "Fish use gills to absorb oxygen from water."
          },
          {
            "word": "decade",
            "meaning": "Thập kỷ (10 năm)",
            "example": "He has worked here for two decades."
          },
          {
            "word": "autistic",
            "meaning": "Tự kỷ",
            "example": "Children with autism may be sensitive to noise."
          }
        ]
      },
      {
        "id": "r3_ex2",
        "exampleNum": 2,
        "title": "Phần 2: Stepwells (Giếng Bậc Thang Cổ Ấn Độ)",
        "instructions": "Answer the questions below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 6–8.",
        "passage": {
          "title": "Stepwells of Northwestern India",
          "paragraphs": [
            {
              "label": "A",
              "text": "Some wells are vast, open craters with hundreds of steps paving each sloping side, often in tiers. Others are more elaborate, with long stepped passages leading to the water via several storeys built from stone and supported by pillars, they also included pavilions that sheltered visitors from the relentless heat. But perhaps the most impressive features are the intricate decorative sculptures that embellish many stepwells, showing activities from fighting and dancing to everyday acts such as women combing their hair and churning butter."
            },
            {
              "label": "B",
              "text": "Down the centuries, thousands of wells were constructed throughout northwestern India, but the majority have now fallen into disuse; many are derelict and dry, as groundwater has been diverted for industrial use and the wells no longer reach the water table. Their condition hasn’t been helped by recent dry spells: southern Rajasthan suffered an eight-year drought between 1996 and 2004."
            },
            {
              "label": "C",
              "text": "Today, following years of neglect, many of these monuments to medieval engineering have been saved by the Archaeological Survey of India, which has recognised the importance of preserving them as part of the country’s rich history. Tourists flock to wells in far-flung corners of northwestern India to gaze in wonder at these architectural marvels from 1,000 years ago, which serve as a reminder of both the ingenuity and artistry of ancient civilisations and of the value of water to human existence."
            }
          ]
        },
        "questions": [
          {
            "id": 6,
            "type": "short-answer",
            "questionText": "6. Which part of some stepwells provided shade for people? (ONE WORD ONLY)",
            "acceptableAnswers": [
              "pavilions",
              "pavilion"
            ],
            "explanation": "Đoạn A: 'they also included pavilions that sheltered visitors from the relentless heat' -> sheltered from the heat đồng nghĩa với provided shade -> Đáp án: pavilions.",
            "evidence": "included pavilions that sheltered visitors from the relentless heat",
            "num": 6
          },
          {
            "id": 7,
            "type": "short-answer",
            "questionText": "7. What type of serious climatic event, which took place in southern Rajasthan, is mentioned in the article? (ONE WORD ONLY)",
            "acceptableAnswers": [
              "drought"
            ],
            "explanation": "Đoạn B: 'southern Rajasthan suffered an eight-year drought between 1996 and 2004' -> Hiện tượng khí hậu nghiêm trọng kéo dài 8 năm là hạn hán (drought).",
            "evidence": "southern Rajasthan suffered an eight-year drought between 1996 and 2004",
            "num": 7
          },
          {
            "id": 8,
            "type": "short-answer",
            "questionText": "8. Who are frequent visitors to stepwells nowadays? (ONE WORD ONLY)",
            "acceptableAnswers": [
              "tourists",
              "tourist"
            ],
            "explanation": "Đoạn C: 'Tourists flock to wells in far-flung corners of northwestern India to gaze in wonder...' -> 'flock to' = đến rất đông / thường xuyên ghé thăm -> Đáp án: tourists.",
            "evidence": "Tourists flock to wells in far-flung corners of northwestern India",
            "num": 8
          }
        ],
        "vocabulary": [
          {
            "word": "pavilion",
            "meaning": "Gian đình, lều nghỉ chân có mái che",
            "example": "Visitors rested in the marble pavilion."
          },
          {
            "word": "drought",
            "meaning": "Hạn hán",
            "example": "The area experienced a severe drought for years."
          },
          {
            "word": "ingenuity",
            "meaning": "Sự khéo léo, tài tình",
            "example": "The ancient water system showed great ingenuity."
          }
        ]
      },
      {
        "id": "r3_ex3",
        "exampleNum": 3,
        "title": "Phần 3: William Henry Perkin (Nhà Phát Minh Thuốc Nhuộm Nhân Tạo)",
        "instructions": "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 8–13.",
        "passage": {
          "title": "William Henry Perkin - The Man Who Invented Synthetic Dyes",
          "paragraphs": [
            {
              "label": "A",
              "text": "Historically, textile dyes were made from such natural sources as plants and animal excretions. Some of these, such as the glandular mucus of snails, were difficult to obtain and outrageously expensive. Indeed, the purple colour extracted from a snail was once so costly that in society at the time only the rich could afford it. Further, natural dyes tended to be muddy in hue and fade quickly. It was against this backdrop that Perkin’s discovery was made."
            },
            {
              "label": "B",
              "text": "Perkin quickly grasped that his purple solution could be used to colour fabric, thus making it the world’s first synthetic dye. Realising the importance of this breakthrough, he lost no time in patenting it. But perhaps the most fascinating of all Perkin’s reactions to his find was his nearly instant recognition that the new dye had commercial possibilities."
            },
            {
              "label": "C",
              "text": "Perkin originally named his dye Tyrian Purple, but it later became commonly known as mauve (from the French for the plant used to make the colour violet). He asked advice of Scottish dye works owner Robert Pullar, who assured him that manufacturing the dye would be well worth it if the colour remained fast (i.e. would not fade) and the cost was relatively low. So, over the fierce objections of his mentor Hofmann, he left college to give birth to the modern chemical industry."
            },
            {
              "label": "D",
              "text": "With the help of his father and brother, Perkin set up a factory not far from London. Utilising the cheap and plentiful coal tar that was an almost unlimited by-product of London’s gas street lighting, the dye works began producing the world’s first synthetically dyed material in 1857. The company received a commercial boost from the Empress Eugenie of France, when she decided the new colour flattered her. Very soon, mauve was the necessary shade for all the fashionable ladies in that country."
            },
            {
              "label": "E",
              "text": "Not to be outdone, England’s Queen Victoria also appeared in public wearing a mauve gown, thus making it all the rage in England as well. The dye was bold and fast, and the public clamoured for more. Perkin went back to the drawing board."
            },
            {
              "label": "F",
              "text": "Although Perkin’s fame was achieved and fortune assured by his first discovery, the chemist continued his research. Among other dyes he developed and introduced were aniline red (1859) and aniline black (1863) and, in the late 1860s, Perkin’s green. It is important to note that Perkin’s synthetic dye discoveries had outcomes far beyond the merely decorative. The dyes also became vital to medical research in many ways. For instance, they were used to stain previously invisible microbes and bacteria, allowing researchers to identify such bacilli as tuberculosis, cholera, and anthrax. Artificial dyes continue to play a crucial role today. And, in what would have been particularly pleasing to Perkin, their current use is in the search for a vaccine against malaria."
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "type": "short-answer",
            "questionText": "8. Before Perkin’s discovery, with what group in society was the colour purple associated? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "the rich",
              "rich"
            ],
            "explanation": "Đoạn A: 'the purple colour extracted from a snail was once so costly that in society at the time only the rich could afford it' -> Tầng lớp người giàu (the rich).",
            "evidence": "only the rich could afford it",
            "num": 8
          },
          {
            "id": 9,
            "type": "short-answer",
            "questionText": "9. What potential did Perkin immediately understand that his new dye had? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "commercial possibilities"
            ],
            "explanation": "Đoạn B: 'his nearly instant recognition that the new dye had commercial possibilities' -> Tiềm năng thương mại (commercial possibilities).",
            "evidence": "his nearly instant recognition that the new dye had commercial possibilities",
            "num": 9
          },
          {
            "id": 10,
            "type": "short-answer",
            "questionText": "10. What was the name finally used to refer to the first colour Perkin invented? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "mauve"
            ],
            "explanation": "Đoạn C: 'Perkin originally named his dye Tyrian Purple, but it later became commonly known as mauve' -> Tên chính thức sau đó được dùng rộng rãi là mauve (màu hoa cà).",
            "evidence": "it later became commonly known as mauve",
            "num": 10
          },
          {
            "id": 11,
            "type": "short-answer",
            "questionText": "11. What was the name of the person Perkin consulted before setting up his own dye works? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "Robert Pullar"
            ],
            "explanation": "Đoạn C: 'He asked advice of Scottish dye works owner Robert Pullar' -> 'asked advice of' = consulted -> Robert Pullar.",
            "evidence": "He asked advice of Scottish dye works owner Robert Pullar",
            "num": 11
          },
          {
            "id": 12,
            "type": "short-answer",
            "questionText": "12. In what country did Perkin’s newly invented colour first become fashionable? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "France"
            ],
            "explanation": "Đoạn D: 'The company received a commercial boost from the Empress Eugenie of France... Very soon, mauve was the necessary shade for all the fashionable ladies in that country' -> France.",
            "evidence": "The company received a commercial boost from the Empress Eugenie of France",
            "num": 12
          },
          {
            "id": 13,
            "type": "short-answer",
            "questionText": "13. According to the passage, which disease is now being targeted by researchers using synthetic dyes? (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "malaria"
            ],
            "explanation": "Đoạn F: 'their current use is in the search for a vaccine against malaria' -> Căn bệnh sốt rét (malaria).",
            "evidence": "their current use is in the search for a vaccine against malaria",
            "num": 13
          }
        ],
        "vocabulary": [
          {
            "word": "synthetic dye",
            "meaning": "Thuốc nhuộm nhân tạo / tổng hợp",
            "example": "Synthetic dyes transformed the garment industry."
          },
          {
            "word": "patent",
            "meaning": "Đăng ký bằng sáng chế",
            "example": "He decided to patent his invention immediately."
          },
          {
            "word": "malaria",
            "meaning": "Bệnh sốt rét",
            "example": "Synthetic dyes helped research vaccines against malaria."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_4",
    "lessonNum": 4,
    "code": "V06",
    "title": "V06 – SENTENCE COMPLETION",
    "shortTitle": "Sentence Completion",
    "category": "completion",
    "categoryLabel": "Điền Từ & Tóm Tắt",
    "badge": "Hoàn thành câu",
    "description": "Chiến thuật hoàn thành câu văn học thuật với trọn bộ bài tập cơ bản (10 câu về khứu giác, tia laser, radar ở loài dơi) và 3 bài đọc chuyên sâu Cambridge: Tourism, Autumn Leaves, Gifted Children.",
    "examplesCount": 4,
    "totalQuestions": 21,
    "examples": [
      {
        "id": "r4_ex1",
        "exampleNum": 1,
        "title": "Phần 1: Bài Tập Luyện Tập Hoàn Thành Câu Cơ Bản (10 Câu)",
        "instructions": "Đọc các đoạn văn và hoàn thành các câu sau. Câu 1–4 điền ONE WORD, câu 5–10 điền NO MORE THAN TWO WORDS.",
        "passage": {
          "title": "10 Đoạn Trích Luyện Hoàn Thành Câu (Smell, Lasers & Bats)",
          "paragraphs": [
            {
              "label": "1",
              "text": "In one well-known test, women and men were able to distinguish by smell alone clothing worn by their marriage partners from similar clothing worn by other people."
            },
            {
              "label": "2",
              "text": "Odours, unlike colours, for instance, cannot be named in many languages because the specific vocabulary simply doesn’t exist. ‘It smells like . . . ,’ we have to say when describing an odour, struggling to express our olfactory experience."
            },
            {
              "label": "3",
              "text": "Researchers have still to decide whether smell is one sense or two - one responding to odours proper and the other registering odourless chemicals in the air."
            },
            {
              "label": "4",
              "text": "Odours are invested with cultural values: smells that are considered to be offensive in some cultures may be perfectly acceptable in others."
            },
            {
              "label": "5",
              "text": "The technique survives to this day at a test site in Florida run by the University of Florida, with support from the Electrical Power Research Institute (EPRI), based in California. EPRI, which is funded by power companies, is looking at ways to protect the United States’ power grid from lightning strikes."
            },
            {
              "label": "6",
              "text": "However, there is still a big stumbling block. The laser is no nifty portable: it’s a monster that takes up a whole room. Diels is trying to cut down the size and says that a laser around the size of a small table is in the offing."
            },
            {
              "label": "7",
              "text": "The Sonar and Radar pioneers didn't know it then, but all the world now knows that bats, or rather natural selection working on bats, had perfected the system tens of millions of years earlier; and their radar' achieves feats of detection and navigation that would strike an engineer dumb with admiration."
            },
            {
              "label": "8",
              "text": "It is technically incorrect to talk about bat 'radar', since they do not use radio waves. It is sonar."
            },
            {
              "label": "9",
              "text": "The underlying mathematical theories of radar and sonar are very similar; and much of our scientific understanding of the details of what bats are doing has come from applying radar theory to them."
            },
            {
              "label": "10",
              "text": "The American zoologist Donald Griffin, who was largely responsible for the discovery of sonar in bats, coined the term 'echolocation' to cover both sonar and radar, whether used by animals or by human instruments."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "type": "gap-fill",
            "questionText": "1. Tests have shown that odours can help people recognise the …………… belonging to their husbands and wives. (ONE WORD)",
            "acceptableAnswers": [
              "clothing"
            ],
            "explanation": "Đoạn 1: 'distinguish by smell alone clothing worn by their marriage partners' -> clothing.",
            "evidence": "distinguish by smell alone clothing worn by their marriage partners",
            "num": 1
          },
          {
            "id": 2,
            "type": "gap-fill",
            "questionText": "2. Certain linguistic groups may have difficulty describing smell because they lack the appropriate …………… (ONE WORD)",
            "acceptableAnswers": [
              "vocabulary"
            ],
            "explanation": "Đoạn 2: 'cannot be named in many languages because the specific vocabulary simply doesn't exist' -> vocabulary.",
            "evidence": "specific vocabulary simply doesn’t exist",
            "num": 2
          },
          {
            "id": 3,
            "type": "gap-fill",
            "questionText": "3. The sense of smell may involve response to ……………… which do not smell, in addition to obvious odours. (ONE WORD)",
            "acceptableAnswers": [
              "chemicals"
            ],
            "explanation": "Đoạn 3: 'the other registering odourless chemicals in the air' -> chemicals.",
            "evidence": "the other registering odourless chemicals in the air",
            "num": 3
          },
          {
            "id": 4,
            "type": "gap-fill",
            "questionText": "4. Odours regarded as unpleasant in certain ……………… are not regarded as unpleasant in others. (ONE WORD)",
            "acceptableAnswers": [
              "cultures"
            ],
            "explanation": "Đoạn 4: 'smells that are considered to be offensive in some cultures may be perfectly acceptable in others' -> cultures.",
            "evidence": "smells that are considered to be offensive in some cultures",
            "num": 4
          },
          {
            "id": 5,
            "type": "gap-fill",
            "questionText": "5. EPRI receives financial support from ……………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "power companies"
            ],
            "explanation": "Đoạn 5: 'EPRI, which is funded by power companies' -> power companies.",
            "evidence": "EPRI, which is funded by power companies",
            "num": 5
          },
          {
            "id": 6,
            "type": "gap-fill",
            "questionText": "6. The main difficulty associated with using the laser equipment is related to its ……………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "size"
            ],
            "explanation": "Đoạn 6: 'The laser is no nifty portable: it’s a monster that takes up a whole room. Diels is trying to cut down the size' -> size.",
            "evidence": "Diels is trying to cut down the size",
            "num": 6
          },
          {
            "id": 7,
            "type": "gap-fill",
            "questionText": "7. Long before the invention of radar, ……………… had resulted in a sophisticated radar-like system in bats. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "natural selection"
            ],
            "explanation": "Đoạn 7: 'natural selection working on bats, had perfected the system tens of millions of years earlier' -> natural selection.",
            "evidence": "natural selection working on bats, had perfected the system",
            "num": 7
          },
          {
            "id": 8,
            "type": "gap-fill",
            "questionText": "8. Radar is an inaccurate term when referring to bats because ……………… are not used in their navigation system. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "radio waves"
            ],
            "explanation": "Đoạn 8: 'incorrect to talk about bat radar, since they do not use radio waves' -> radio waves.",
            "evidence": "since they do not use radio waves. It is sonar.",
            "num": 8
          },
          {
            "id": 9,
            "type": "gap-fill",
            "questionText": "9. Radar and sonar are based on similar ……………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "mathematical theories"
            ],
            "explanation": "Đoạn 9: 'The underlying mathematical theories of radar and sonar are very similar' -> mathematical theories.",
            "evidence": "The underlying mathematical theories of radar and sonar are very similar",
            "num": 9
          },
          {
            "id": 10,
            "type": "gap-fill",
            "questionText": "10. The word ‘echolocation’ was first used by someone working as a ……………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "zoologist"
            ],
            "explanation": "Đoạn 10: 'The American zoologist Donald Griffin... coined the term 'echolocation'' -> zoologist.",
            "evidence": "The American zoologist Donald Griffin, who was largely responsible for the discovery of sonar in bats, coined the term 'echolocation'",
            "num": 10
          }
        ],
        "vocabulary": [
          {
            "word": "odour",
            "meaning": "Mùi hương, mùi vị",
            "example": "Odours trigger powerful emotional memories."
          },
          {
            "word": "natural selection",
            "meaning": "Chọn lọc tự nhiên",
            "example": "Darwin formulated the principle of natural selection."
          },
          {
            "word": "echolocation",
            "meaning": "Định vị bằng tiếng vang",
            "example": "Bats use echolocation to navigate in the dark."
          }
        ]
      },
      {
        "id": "r4_ex2",
        "exampleNum": 2,
        "title": "Phần 2: The Context, Meaning and Scope of Tourism",
        "instructions": "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 11–13.",
        "passage": {
          "title": "The Context, Meaning and Scope of Tourism",
          "paragraphs": [
            {
              "label": "A",
              "text": "Once the exclusive province of the wealthy, travel and tourism have become an institutionalised way of life for most of the population. In fact, McIntosh and Goeldner (1990) suggest that tourism has become the largest commodity in international trade for many nations and, for a significant number of other countries, it ranks second or third. For example, tourism is the major source of income in Bermuda, Greece, Italy, Spain, Switzerland and most Caribbean countries."
            },
            {
              "label": "B",
              "text": "In addition, Hawkins and Ritchie, quoting from data published by the American Express Company, suggest that the travel and tourism industry is the number one ranked employer in the Bahamas, Brazil, Canada, France, (the former) West Germany, Hong Kong, Italy, Jamaica, Japan, Singapore, the United Kingdom and the United States."
            },
            {
              "label": "C",
              "text": "However, because of problems of definition, which directly affect statistical measurement, it is not possible with any degree of certainty to provide precise, valid or reliable data about the extent of world-wide tourism participation or its economic impact. In many cases, similar difficulties arise when attempts are made to measure domestic tourism."
            }
          ]
        },
        "questions": [
          {
            "id": 11,
            "type": "gap-fill",
            "questionText": "11. In Greece, tourism is the most important ………………………………….. (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "source of income"
            ],
            "explanation": "Đoạn A: 'tourism is the major source of income in Bermuda, Greece, Italy, Spain...' -> 'most important' = major -> source of income.",
            "evidence": "tourism is the major source of income in Bermuda, Greece, Italy",
            "num": 11
          },
          {
            "id": 12,
            "type": "gap-fill",
            "questionText": "12. The travel and tourism industry in Jamaica is the major ………………………………….. (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "employer"
            ],
            "explanation": "Đoạn B: 'travel and tourism industry is the number one ranked employer in the Bahamas... Jamaica, Japan...' -> employer.",
            "evidence": "number one ranked employer in the Bahamas, Brazil, Canada, France... Jamaica",
            "num": 12
          },
          {
            "id": 13,
            "type": "gap-fill",
            "questionText": "13. The problems associated with measuring international tourism are often reflected in the measurement of ………………………………….. (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "domestic tourism"
            ],
            "explanation": "Đoạn C: 'In many cases, similar difficulties arise when attempts are made to measure domestic tourism' -> domestic tourism.",
            "evidence": "similar difficulties arise when attempts are made to measure domestic tourism",
            "num": 13
          }
        ],
        "vocabulary": [
          {
            "word": "source of income",
            "meaning": "Nguồn thu nhập",
            "example": "Tourism is a primary source of income for island nations."
          },
          {
            "word": "domestic tourism",
            "meaning": "Du lịch nội địa",
            "example": "Domestic tourism increased rapidly during the holidays."
          }
        ]
      },
      {
        "id": "r4_ex3",
        "exampleNum": 3,
        "title": "Phần 3: Autumn Leaves (Bí Ẩn Lá Đổi Màu Trong Mùa Thu)",
        "instructions": "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 19–22.",
        "passage": {
          "title": "Autumn Leaves - Why Leaves Turn Red in Fall",
          "paragraphs": [
            {
              "label": "A",
              "text": "Chlorophyll, although exquisitely evolved to capture the energy of sunlight, can sometimes be overwhelmed by it, especially in situations of drought, low temperatures, or nutrient deficiency. Moreover, the problem of oversensitivity to light is even more acute in the fall, when the leaf is busy preparing for winter by dismantling its internal machinery. The energy absorbed by the chlorophyll molecules of the unstable autumn leaf is not immediately channelled into useful products and processes, as it would be in an intact summer leaf. The weakened fall leaf then becomes vulnerable to the highly destructive effects of the oxygen created by the excited chlorophyll molecules."
            },
            {
              "label": "B",
              "text": "Even if you had never suspected that this is what was going on when leaves turn red, there are clues out there. One is straightforward: on many trees, the leaves that are the reddest are those on the side of the tree which gets most sun. Not only that, but the red is brighter on the upper side of the leaf. It has also been recognised for decades that the best conditions for intense red colours are dry, sunny days and cool nights, conditions that nicely match those that make leaves susceptible to excess light. And finally, trees such as maples usually get much redder the more north you travel in the northern hemisphere. It’s colder there, they’re more stressed, their chlorophyll is more sensitive and it needs more sunblock."
            },
            {
              "label": "C",
              "text": "What is still not fully understood, however, is why some trees resort to producing red pigments while others don’t bother, and simply reveal their orange or yellow hues. Do these trees have other means at their disposal to prevent overexposure to light in autumn? Their story, though not as spectacular to the eye, will surely turn out to be as subtle and as complex."
            }
          ]
        },
        "questions": [
          {
            "id": 19,
            "type": "gap-fill",
            "questionText": "19. The most vividly coloured red leaves are found on the side of the tree facing the ……………. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "sun"
            ],
            "explanation": "Đoạn B: 'the leaves that are the reddest are those on the side of the tree which gets most sun' -> sun.",
            "evidence": "the leaves that are the reddest are those on the side of the tree which gets most sun",
            "num": 19
          },
          {
            "id": 20,
            "type": "gap-fill",
            "questionText": "20. The ……………. surfaces of leaves contain the most red pigment. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "upper"
            ],
            "explanation": "Đoạn B: 'Not only that, but the red is brighter on the upper side of the leaf' -> upper.",
            "evidence": "the red is brighter on the upper side of the leaf",
            "num": 20
          },
          {
            "id": 21,
            "type": "gap-fill",
            "questionText": "21. Red leaves are most abundant when daytime weather conditions are ……………. and sunny. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "dry"
            ],
            "explanation": "Đoạn B: 'best conditions for intense red colours are dry, sunny days and cool nights' -> dry.",
            "evidence": "the best conditions for intense red colours are dry , sunny days and coo nights",
            "num": 21
          },
          {
            "id": 22,
            "type": "gap-fill",
            "questionText": "22. The intensity of the red colour of leaves increases as you go further ……………. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "north"
            ],
            "explanation": "Đoạn B: 'maples usually get much redder the more north you travel in the northern hemisphere' -> north.",
            "evidence": "maples usually get much redder the more north you travel in the northern hemisphere",
            "num": 22
          }
        ],
        "vocabulary": [
          {
            "word": "chlorophyll",
            "meaning": "Chất diệp lục",
            "example": "Chlorophyll absorbs sunlight during photosynthesis."
          },
          {
            "word": "pigment",
            "meaning": "Sắc tố",
            "example": "Anthocyanin is the red pigment in autumn leaves."
          },
          {
            "word": "susceptible",
            "meaning": "Dễ bị tổn thương, dễ bị ảnh hưởng",
            "example": "Trees become susceptible to frost in winter."
          }
        ]
      },
      {
        "id": "r4_ex4",
        "exampleNum": 4,
        "title": "Phần 4: Gifted Children and Learning",
        "instructions": "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 23–26.",
        "passage": {
          "title": "Gifted Children and Learning",
          "paragraphs": [
            {
              "label": "A",
              "text": "Internationally, ‘giftedness’ is most frequently determined by a score on a general intelligence test, known as an IQ test, which is above a chosen cutoff point, usually at around the top 2-5%. Children’s educational environment contributes to the IQ score and the way intelligence is used. For example, a very close positive relationship was found when children’s IQ scores were compared with their home educational provision (Freeman, 2010). The higher the children’s IQ scores, especially over IQ 130, the better the quality of their educational backup, measured in terms of reported verbal interactions with parents, number of books and activities in their home etc. Because IQ tests are decidedly influenced by what the child has learned, they are to some extent measures of current achievement based on age-norms; that is, how well the children have learned to manipulate their knowledge and know-how within the terms of the test. The vocabulary aspect, for example, is dependent on having heard those words. But IQ tests can neither identify the processes of learning and thinking nor predict creativity."
            },
            {
              "label": "B",
              "text": "Excellence does not emerge without appropriate help. To reach an exceptionally high standard in any area very able children need the means to learn, which includes material to work with and focused challenging tuition -and the encouragement to follow their dream. There appears to be a qualitative difference in the way the intellectually highly able think, compared with more average-ability or older pupils, for whom external regulation by the teacher often compensates for lack of internal regulation. To be at their most effective in their self-regulation, all children can be helped to identify their own ways of learning – metacognition – which will include strategies of planning, monitoring, evaluation, and choice of what to learn. Emotional awareness is also part of metacognition, so children should be helped to be aware of their feelings around the area to be learned, feelings of curiosity or confidence, for example."
            },
            {
              "label": "C",
              "text": "Yet in order to learn by themselves, the gifted do need some support from their teachers. Conversely, teachers who have a tendency to ‘overdirect’ can diminish their gifted pupils’ learning autonomy. Although ‘spoon-feeding’ can produce extremely high examination results, these are not always followed by equally impressive life successes. Too much dependence on the teachers risks loss of autonomy and motivation to discover. However, when teachers urge pupils to reflect on their own learning and thinking activities, they increase their pupils’ self-regulation. For a young child, it may be just the simple question ‘What have you learned today?’ which helps them to recognise what they are doing. Given that a fundamental goal of education is to transfer the control of learning from teachers to pupils, improving pupils’ learning to learn techniques should be a major outcome of the school experience, especially for the highly competent."
            }
          ]
        },
        "questions": [
          {
            "id": 23,
            "type": "gap-fill",
            "questionText": "23. One study found a strong connection between children’s IQ and the availability of ………………………………….. at home. (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "educational backup",
              "books and activities",
              "educational provision"
            ],
            "explanation": "Đoạn A: 'close positive relationship was found when children’s IQ scores were compared with their home educational provision... the better the quality of their educational backup' -> educational backup / educational provision.",
            "evidence": "the better the quality of their educational backup, measured in terms of reported verbal interactions with parents, number of books and activities in their home",
            "num": 23
          },
          {
            "id": 24,
            "type": "gap-fill",
            "questionText": "24. Children of average ability seem to need more direction from teachers because they do not have …………………………………... (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "internal regulation",
              "self-regulation"
            ],
            "explanation": "Đoạn B: 'for whom external regulation by the teacher often compensates for lack of internal regulation' -> thiếu khả năng tự điều chỉnh -> lack of internal regulation.",
            "evidence": "external regulation by the teacher often compensates for lack of internal regulation",
            "num": 24
          },
          {
            "id": 25,
            "type": "gap-fill",
            "questionText": "25. Meta-cognition involves children understanding their own learning strategies, as well as developing …………………………………... (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "emotional awareness"
            ],
            "explanation": "Đoạn B: 'Emotional awareness is also part of metacognition, so children should be helped to be aware of their feelings' -> emotional awareness.",
            "evidence": "Emotional awareness is also part of metacognition",
            "num": 25
          },
          {
            "id": 26,
            "type": "gap-fill",
            "questionText": "26. Teachers who rely on what is known as ………………………………….. often produce sets of impressive grades in class tests. (NO MORE THAN THREE WORDS)",
            "acceptableAnswers": [
              "spoon-feeding",
              "spoon feeding",
              "spoon-feeding "
            ],
            "explanation": "Đoạn C: 'Although ‘spoon-feeding’ can produce extremely high examination results' -> spoon-feeding (cách dạy nhồi sọ, mớm sẵn kiến thức).",
            "evidence": "Although ‘ spoon-feeding ’ can produce extremely high examination results",
            "num": 26
          }
        ],
        "vocabulary": [
          {
            "word": "metacognition",
            "meaning": "Nhận thức về quá trình tư duy (siêu nhận thức)",
            "example": "Metacognition helps students improve their learning strategies."
          },
          {
            "word": "spoon-feeding",
            "meaning": "Phương pháp dạy học mớm sẵn, nhồi sọ",
            "example": "Spoon-feeding reduces students' critical thinking ability."
          },
          {
            "word": "autonomy",
            "meaning": "Sự tự chủ, độc lập",
            "example": "Encouraging learner autonomy is vital for long-term success."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_5",
    "lessonNum": 5,
    "code": "V07",
    "title": "V07 – SUMMARY COMPLETION",
    "shortTitle": "Hoàn Thành Tóm Tắt",
    "category": "completion",
    "categoryLabel": "Điền Từ Vào Chỗ Trống",
    "badge": "Dạng bài phổ biến",
    "description": "Chiến thuật hoàn thành đoạn văn tóm tắt: xác định từ loại, từ khóa xung quanh chỗ trống, và phân biệt giữa điền từ trực tiếp từ bài (Direct) và chọn từ trong ô cho sẵn (Word Box with synonyms).",
    "examplesCount": 4,
    "totalQuestions": 18,
    "examples": [
      {
        "id": "r5_ex1",
        "exampleNum": 1,
        "title": "Example 1: Young Children’s Sense of Identity",
        "instructions": "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer. (Questions 24-25, Page 21)",
        "passage": {
          "title": "How Children Acquire a Sense of Identity",
          "paragraphs": [
            {
              "label": "A",
              "text": "Lewis and Brooks-Gunn (1979) suggest that infants' developing understanding that the movements they see in the mirror are contingent on their own, leads to a growing awareness that they are distinct from other people. This is because they, and only they, can change the reflection in the mirror."
            },
            {
              "label": "B",
              "text": "This understanding that children gain of themselves as active agents continues to develop in their attempts to co-operate with others in play. Dunn (1988) points out that it is in such day-to-day relationships and interactions that the child's understanding of his- or herself emerges. Empirical investigations of the self-as-subject in young children are, however, rather scarce because of difficulties of communication: even if young infants can reflect on their experience, they certainly cannot express this aspect of the self directly."
            }
          ]
        },
        "questions": [
          {
            "id": 24,
            "num": 24,
            "type": "gap-fill",
            "questionText": "24. First, children come to realise that they can have an effect on the world around them, for example by handling objects, or causing the image to move when they face a ……………………… (ONE WORD ONLY)",
            "acceptableAnswers": [
              "mirror"
            ],
            "explanation": "Đoạn A: 'the movements they see in the mirror are contingent on their own... they, and only they, can change the reflection in the mirror' -> facing a mirror.",
            "evidence": "the movements they see in the mirror are contingent on their own, leads to a growing awareness that they are distinct from other people"
          },
          {
            "id": 25,
            "num": 25,
            "type": "gap-fill",
            "questionText": "25. This aspect of self-awareness is difficult to research directly, because of ……………………… problems. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "communication"
            ],
            "explanation": "Đoạn B: 'Empirical investigations... are, however, rather scarce because of difficulties of communication' -> communication problems.",
            "evidence": "Empirical investigations of the self-as-subject in young children are, however, rather scarce because of difficulties of communication"
          }
        ],
        "vocabulary": [
          {
            "word": "contingent on",
            "meaning": "Phụ thuộc vào, gắn liền với",
            "example": "A child's reflection in a mirror is contingent on their own movements."
          },
          {
            "word": "empirical",
            "meaning": "Thực nghiệm, dựa trên quan sát thực tế",
            "example": "Empirical evidence is vital for scientific theories."
          },
          {
            "word": "self-awareness",
            "meaning": "Ý thức về bản thân",
            "example": "Self-awareness emerges early in human childhood."
          }
        ]
      },
      {
        "id": "r5_ex2",
        "exampleNum": 2,
        "title": "Example 2: Pulling Strings to Build Pyramids",
        "instructions": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer. (Questions 8-13, Page 22)",
        "passage": {
          "title": "Pulling Strings to Build Pyramids",
          "paragraphs": [
            {
              "label": "A",
              "text": "Others feel there is more of a case for the theory. Harnessing the wind would not have been a problem for accomplished sailors like the Egyptians. And they are known to have used wooden pulleys, which could have been made strong enough to bear the weight of massive blocks of stone. In addition, there is some physical evidence that the ancient Egyptians were interested in flight."
            },
            {
              "label": "B",
              "text": "A wooden artefact found on the step pyramid at Saqqara looks uncannily like a modern glider. Although it dates from several hundred years after the building of the pyramids, its sophistication suggests that the Egyptians might have been developing ideas of flight for a long time. And other ancient civilisations certainly knew about kites; as early as 1250 BC, the Chinese were using them to deliver messages and dump flaming debris on their foes."
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "num": 8,
            "type": "gap-fill",
            "questionText": "8. The Egyptians had ………………………………….. which could lift large pieces of... (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "wooden pulleys",
              "pulleys"
            ],
            "explanation": "Đoạn A: 'And they are known to have used wooden pulleys, which could have been made strong enough to bear the weight of massive blocks of stone.'",
            "evidence": "And they are known to have used wooden pulleys, which could have been made strong enough to bear the weight of massive blocks of stone."
          },
          {
            "id": 9,
            "num": 9,
            "type": "gap-fill",
            "questionText": "9. ...which could lift large pieces of ………………………………….. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "stone"
            ],
            "explanation": "Đoạn A: 'to bear the weight of massive blocks of stone' -> large pieces of stone.",
            "evidence": "bear the weight of massive blocks of stone"
          },
          {
            "id": 10,
            "num": 10,
            "type": "gap-fill",
            "questionText": "10. ...and they knew how to use the energy of the wind from their skill as ………………………………….. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "sailors",
              "accomplished sailors"
            ],
            "explanation": "Đoạn A: 'Harnessing the wind would not have been a problem for accomplished sailors like the Egyptians.'",
            "evidence": "Harnessing the wind would not have been a problem for accomplished sailors like the Egyptians."
          },
          {
            "id": 11,
            "num": 11,
            "type": "gap-fill",
            "questionText": "11. The discovery on one pyramid of an object which resembled a ………………………………….. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "modern glider",
              "glider"
            ],
            "explanation": "Đoạn B: 'A wooden artefact found on the step pyramid at Saqqara looks uncannily like a modern glider.'",
            "evidence": "A wooden artefact found on the step pyramid at Saqqara looks uncannily like a modern glider."
          },
          {
            "id": 12,
            "num": 12,
            "type": "gap-fill",
            "questionText": "12. ...suggests they may have experimented with ………………………………….. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "flight",
              "ideas of flight"
            ],
            "explanation": "Đoạn B: 'its sophistication suggests that the Egyptians might have been developing ideas of flight for a long time.'",
            "evidence": "suggests that the Egyptians might have been developing ideas of flight for a long time"
          },
          {
            "id": 13,
            "num": 13,
            "type": "gap-fill",
            "questionText": "13. In addition, over two thousand years ago kites were used in China as weapons, as well as for sending ………………………………….. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "messages"
            ],
            "explanation": "Đoạn B: 'the Chinese were using them to deliver messages and dump flaming debris on their foes.' -> sending messages.",
            "evidence": "the Chinese were using them to deliver messages and dump flaming debris on their foes"
          }
        ],
        "vocabulary": [
          {
            "word": "harness",
            "meaning": "Khai thác (năng lượng gió, nước)",
            "example": "Harnessing wind power enabled long sea voyages."
          },
          {
            "word": "pulley",
            "meaning": "Ròng rọc",
            "example": "Pulleys reduce the effort needed to lift heavy weights."
          },
          {
            "word": "artefact",
            "meaning": "Cổ vật khảo cổ",
            "example": "Ancient artefacts provide clues to early technology."
          }
        ]
      },
      {
        "id": "r5_ex3",
        "exampleNum": 3,
        "title": "Example 3: The Efate Burial Site (Summary with Box A-J)",
        "instructions": "Complete the summary using the list of words and phrases, A-J, below. Write the correct letter, A-J, in boxes 27-31. (Questions 27-31, Pages 23-24)\n\nWord Box: A proof | B plantation | C harbour | D bones | E data | F archaeological discovery | G burial urn | H source | I animals | J maps",
        "passage": {
          "title": "Beyond the Blue Horizon: The Efate Discovery",
          "paragraphs": [
            {
              "label": "A",
              "text": "An important archaeological discovery on the island of Efate in the Pacific archipelago of Vanuatu has revealed traces of an ancient seafaring people, the distant ancestors of today's Polynesians. The site came to light only by chance. An agricultural worker, digging in the grounds of a derelict plantation, scraped open a grave – the first of dozens in a burial ground some 3,000 years old. It is the oldest cemetery ever found in the Pacific islands, and it harbors the remains of an ancient people archaeologists call the Lapita."
            },
            {
              "label": "B",
              "text": "They were daring blue-water adventurers who used basic canoes to rove across the ocean. But they were not just explorers. They were also pioneers who carried with them everything they would need to build new lives – their livestock, taro seedlings and stone tools. Within the span of several centuries, the Lapita stretched the boundaries of their world from the jungle-clad volcanoes of Papua New Guinea to the loneliest coral outliers of Tonga."
            },
            {
              "label": "C",
              "text": "The Lapita left precious few clues about themselves, but Efate expands the volume of data available to researchers dramatically. The remains of 62 individuals have been uncovered so far, and archaeologists were also thrilled to find six complete Lapita pots. Other items included a Lapita burial urn with modeled birds arranged on the rim as though peering down at the human remains sealed inside. ‘It’s an important discovery,’ says Matthew Spriggs, professor of archaeology at the Australian National University and head of the international team digging up the site, ‘for it conclusively identifies the remains as Lapita.’"
            }
          ]
        },
        "questions": [
          {
            "id": 27,
            "num": 27,
            "type": "summary",
            "options": [
              "A proof",
              "B plantation",
              "C harbour",
              "D bones",
              "E data",
              "F archaeological discovery",
              "G burial urn",
              "H source",
              "I animals",
              "J maps"
            ],
            "questionText": "27. A 3,000-year-old burial ground of a seafaring people called the Lapita has been found on an abandoned [ 27 ] on the Pacific island of Efate.",
            "acceptableAnswers": [
              "B",
              "plantation",
              "B plantation"
            ],
            "explanation": "Đoạn A: 'digging in the grounds of a derelict plantation' -> derelict = abandoned -> B (plantation).",
            "evidence": "An agricultural worker, digging in the grounds of a derelict plantation, scraped open a grave"
          },
          {
            "id": 28,
            "num": 28,
            "type": "summary",
            "options": [
              "A proof",
              "B plantation",
              "C harbour",
              "D bones",
              "E data",
              "F archaeological discovery",
              "G burial urn",
              "H source",
              "I animals",
              "J maps"
            ],
            "questionText": "28. The cemetery, which is a significant [ 28 ], was uncovered accidentally by an agricultural worker.",
            "acceptableAnswers": [
              "F",
              "archaeological discovery",
              "F archaeological discovery"
            ],
            "explanation": "Đoạn A: 'An important archaeological discovery on the island of Efate... came to light only by chance' -> significant archaeological discovery -> F.",
            "evidence": "An important archaeological discovery on the island of Efate in the Pacific archipelago of Vanuatu"
          },
          {
            "id": 29,
            "num": 29,
            "type": "summary",
            "options": [
              "A proof",
              "B plantation",
              "C harbour",
              "D bones",
              "E data",
              "F archaeological discovery",
              "G burial urn",
              "H source",
              "I animals",
              "J maps"
            ],
            "questionText": "29. They took many things with them on their voyages including [ 29 ] and tools.",
            "acceptableAnswers": [
              "I",
              "animals",
              "I animals"
            ],
            "explanation": "Đoạn B: 'carried with them everything they would need to build new lives – their livestock, taro seedlings and stone tools.' -> livestock = animals -> I.",
            "evidence": "carried with them everything they would need to build new lives – their livestock , taro seedlings and stone tools"
          },
          {
            "id": 30,
            "num": 30,
            "type": "summary",
            "options": [
              "A proof",
              "B plantation",
              "C harbour",
              "D bones",
              "E data",
              "F archaeological discovery",
              "G burial urn",
              "H source",
              "I animals",
              "J maps"
            ],
            "questionText": "30. Spriggs believes the [ 30 ] which was found at the site is very important...",
            "acceptableAnswers": [
              "G",
              "burial urn",
              "G burial urn"
            ],
            "explanation": "Đoạn C: 'Other items included a Lapita burial urn... ‘It’s an important discovery,’ says Matthew Spriggs... ‘for it conclusively identifies the remains as Lapita.’' -> G (burial urn).",
            "evidence": "Other items included a Lapita burial urn with modeled birds arranged on the rim"
          },
          {
            "id": 31,
            "num": 31,
            "type": "summary",
            "options": [
              "A proof",
              "B plantation",
              "C harbour",
              "D bones",
              "E data",
              "F archaeological discovery",
              "G burial urn",
              "H source",
              "I animals",
              "J maps"
            ],
            "questionText": "31. ...since it confirms that the [ 31 ] found inside are Lapita.",
            "acceptableAnswers": [
              "D",
              "bones",
              "D bones"
            ],
            "explanation": "Đoạn C: 'peering down at the human remains sealed inside... conclusively identifies the remains as Lapita' -> human remains = bones -> D.",
            "evidence": "peering down at the human remains sealed inside. ‘It’s an important discovery,’ says Matthew Spriggs... ‘for it conclusively identifies the remains as Lapita.’"
          }
        ],
        "vocabulary": [
          {
            "word": "derelict",
            "meaning": "Bị bỏ hoang, không ai chăm sóc",
            "example": "The ruins stood in a derelict plantation."
          },
          {
            "word": "livestock",
            "meaning": "Gia súc, vật nuôi",
            "example": "The voyagers brought livestock and crops to seed new islands."
          },
          {
            "word": "burial urn",
            "meaning": "Hũ đựng tro cốt / di cốt",
            "example": "A burial urn was uncovered containing ancient remains."
          }
        ]
      },
      {
        "id": "r5_ex4",
        "exampleNum": 4,
        "title": "Example 4: The Little Ice Age (Summary with Box A-I)",
        "instructions": "Complete the summary using the list of words, A-I, below. Write the correct letter, A-I, in boxes 18-22. (Questions 18-22, Pages 25-26)\n\nWord Box: A climatic shifts | B ice cores | C tree rings | D glaciers | E interactions | F weather observations | G heat waves | H storms | I written accounts",
        "passage": {
          "title": "Weather During the Little Ice Age",
          "paragraphs": [
            {
              "label": "A",
              "text": "This book will provide a detailed examination of the Little Ice Age and other climatic shifts, but, before I embark on that, let me provide a historical context. We tend to think of climate - as opposed to weather - as something unchanging, yet humanity has been at the mercy of climate change for its entire existence, with at least eight glacial episodes in the past 730,000 years. Our ancestors adapted to the universal but irregular global warming since the end of the last great Ice Age, around 10,000 years ago, with dazzling opportunism."
            },
            {
              "label": "B",
              "text": "The Little Ice Age lasted from roughly 1300 until the middle of the nineteenth century. Only two centuries ago, Europe experienced a cycle of bitterly cold winters; mountain glaciers in the Swiss Alps were the lowest in recorded memory, and pack ice surrounded Iceland for much of the year. The climatic events of the Little Ice Age did more than help shape the modern world. They are the deeply important context for the current unprecedented global warming. The Little Ice Age was far from a deep freeze, however; rather an irregular seesaw of rapid climatic shifts, few lasting more than a quarter-century, driven by complex and still little understood interactions between the atmosphere and the ocean. The seesaw brought cycles of intensely cold winters and easterly winds, then switched abruptly to years of heavy spring and early summer rains, mild winters, and frequent Atlantic storms, or to periods of droughts, light northeasterly winds, and summer heat waves."
            },
            {
              "label": "C",
              "text": "Reconstructing the climate changes of the past is extremely difficult, because systematic weather observations began only a few centuries ago, in Europe and North America. Records from India and tropical Africa are even more recent. For the time before records began, we have only ‘proxy records’ reconstructed largely from tree rings and ice cores, supplemented by a few incomplete written accounts. We now have hundreds of tree-ring records from throughout the northern hemisphere, and many from south of the equator, too, amplified with a growing body of temperature data from ice cores drilled in Antarctica, Greenland, the Peruvian Andes, and other locations."
            }
          ]
        },
        "questions": [
          {
            "id": 18,
            "num": 18,
            "type": "summary",
            "options": [
              "A climatic shifts",
              "B ice cores",
              "C tree rings",
              "D glaciers",
              "E interactions",
              "F weather observations",
              "G heat waves",
              "H storms",
              "I written accounts"
            ],
            "questionText": "18. Documentation of past weather conditions is limited: our main sources of knowledge of conditions in the distant past are [ 18 ]...",
            "acceptableAnswers": [
              "C",
              "B",
              "tree rings",
              "ice cores",
              "C tree rings",
              "B ice cores"
            ],
            "explanation": "Đoạn C: 'proxy records reconstructed largely from tree rings and ice cores' -> 18 có thể là C (tree rings) hoặc B (ice cores).",
            "evidence": "we have only ‘proxy records’ reconstructed largely from tree rings and ice cores"
          },
          {
            "id": 19,
            "num": 19,
            "type": "summary",
            "options": [
              "A climatic shifts",
              "B ice cores",
              "C tree rings",
              "D glaciers",
              "E interactions",
              "F weather observations",
              "G heat waves",
              "H storms",
              "I written accounts"
            ],
            "questionText": "19. ...and [ 19 ]. (Điền từ còn lại giữa C và B)",
            "acceptableAnswers": [
              "B",
              "C",
              "ice cores",
              "tree rings",
              "B ice cores",
              "C tree rings"
            ],
            "explanation": "Đoạn C: 'reconstructed largely from tree rings and ice cores' -> 19 là B (nếu 18 chọn C) hoặc C (nếu 18 chọn B).",
            "evidence": "reconstructed largely from tree rings and ice cores, supplemented by a few incomplete written accounts"
          },
          {
            "id": 20,
            "num": 20,
            "type": "summary",
            "options": [
              "A climatic shifts",
              "B ice cores",
              "C tree rings",
              "D glaciers",
              "E interactions",
              "F weather observations",
              "G heat waves",
              "H storms",
              "I written accounts"
            ],
            "questionText": "20. We can deduce that the Little Ice Age was a time of [ 20 ] rather than of consistent freezing.",
            "acceptableAnswers": [
              "A",
              "climatic shifts",
              "A climatic shifts"
            ],
            "explanation": "Đoạn B: 'The Little Ice Age was far from a deep freeze, however; rather an irregular seesaw of rapid climatic shifts' -> A (climatic shifts).",
            "evidence": "The Little Ice Age was far from a deep freeze, however; rather an irregular seesaw of rapid climatic shifts"
          },
          {
            "id": 21,
            "num": 21,
            "type": "summary",
            "options": [
              "A climatic shifts",
              "B ice cores",
              "C tree rings",
              "D glaciers",
              "E interactions",
              "F weather observations",
              "G heat waves",
              "H storms",
              "I written accounts"
            ],
            "questionText": "21. Within it there were some periods of very cold winters, others of [ 21 ] and heavy rain...",
            "acceptableAnswers": [
              "H",
              "storms",
              "H storms"
            ],
            "explanation": "Đoạn B: 'years of heavy spring and early summer rains, mild winters, and frequent Atlantic storms' -> H (storms).",
            "evidence": "switched abruptly to years of heavy spring and early summer rains, mild winters, and frequent Atlantic storms"
          },
          {
            "id": 22,
            "num": 22,
            "type": "summary",
            "options": [
              "A climatic shifts",
              "B ice cores",
              "C tree rings",
              "D glaciers",
              "E interactions",
              "F weather observations",
              "G heat waves",
              "H storms",
              "I written accounts"
            ],
            "questionText": "22. ...and yet others that saw [ 22 ] with no rain at all.",
            "acceptableAnswers": [
              "G",
              "heat waves",
              "G heat waves"
            ],
            "explanation": "Đoạn B: 'or to periods of droughts, light northeasterly winds, and summer heat waves.' -> droughts = no rain at all -> G (heat waves).",
            "evidence": "periods of droughts, light northeasterly winds, and summer heat waves"
          }
        ],
        "vocabulary": [
          {
            "word": "proxy records",
            "meaning": "Dữ liệu đại diện gián tiếp (vòng cây, lõi băng)",
            "example": "Scientists use proxy records to study climates of the past."
          },
          {
            "word": "seesaw",
            "meaning": "Sự dao động bấp bênh, biến thiên liên tục",
            "example": "The weather was an irregular seesaw of hot and cold periods."
          },
          {
            "word": "drought",
            "meaning": "Hạn hán kéo dài",
            "example": "Severe droughts destroyed crops during the warm cycles."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_6",
    "lessonNum": 6,
    "code": "V08",
    "title": "V08 – TABLE / FLOW CHART COMPLETION",
    "shortTitle": "Bảng Biểu & Sơ Đồ Quy Trình",
    "category": "completion",
    "categoryLabel": "Điền Từ Vào Chỗ Trống",
    "badge": "Quy trình & Số liệu",
    "description": "Chiến thuật bám theo luồng thông tin tuần tự (trên xuống dưới, trái qua phải) của bảng biểu và sơ đồ quy trình khoa học / lịch sử.",
    "examplesCount": 3,
    "totalQuestions": 17,
    "examples": [
      {
        "id": "r6_ex1",
        "exampleNum": 1,
        "title": "Example 1: Sheet Glass Manufacture (Table & Diagram)",
        "instructions": "Complete the table and diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer. (Questions 1-8, Page 27)",
        "passage": {
          "title": "Sheet Glass Manufacture: The Float Process",
          "paragraphs": [
            {
              "label": "A",
              "text": "Glass, which has been made since the time of the Mesopotamians and Egyptians, is little more than a mixture of sand, soda ash and lime. When heated to about 1500 degrees Celsius (°C) this becomes a molten mass that hardens when slowly cooled. The first successful method for making clear, flat glass involved spinning. This method was very effective as the glass had not touched any surfaces between being soft and becoming hard, so it stayed perfectly unblemished, with a 'fire finish'. However, the process took a long time and was labour intensive."
            },
            {
              "label": "B",
              "text": "Nevertheless, demand for flat glass was very high and glassmakers across the world were looking for a method of making it continuously. The first continuous ribbon process involved squeezing molten glass through two hot rollers, similar to an old mangle. This allowed glass of virtually any thickness to be made non-stop, but the rollers would leave both sides of the glass marked, and these would then need to be ground and polished. This part of the process rubbed away around 20 per cent of the glass, and the machines were very expensive."
            },
            {
              "label": "C",
              "text": "In 1952, Alastair Pilkington patented the float process. Molten glass flows from the furnace onto the surface of a bath of molten tin at 1000°C. Because glass is less dense than tin, it floats, forming a level ribbon of uniform thickness. As it moves down the bath, it cools gradually until it is rigid enough to enter the rollers of an annealing lehr, where it cools without internal stresses."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "table",
            "questionText": "1. Early Method 1 (Name of method): ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "spinning",
              "Spinning"
            ],
            "explanation": "Đoạn A: 'The first successful method for making clear, flat glass involved spinning.'",
            "evidence": "The first successful method for making clear, flat glass involved spinning ."
          },
          {
            "id": 2,
            "num": 2,
            "type": "table",
            "questionText": "2. Method Spinning - Advantages: Glass remained ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "unblemished",
              "perfectly unblemished"
            ],
            "explanation": "Đoạn A: 'so it stayed perfectly unblemished, with a fire finish.'",
            "evidence": "so it stayed perfectly  unblemished , with a 'fire finish'."
          },
          {
            "id": 3,
            "num": 3,
            "type": "table",
            "questionText": "3. Method Spinning - Disadvantages: Slow and ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "labour intensive",
              "labor intensive"
            ],
            "explanation": "Đoạn A: 'However, the process took a long time and was labour intensive.'",
            "evidence": "However, the process took a long time and was labour intensive ."
          },
          {
            "id": 4,
            "num": 4,
            "type": "table",
            "questionText": "4. Method Ribbon - Advantages: Could produce glass sheets of varying ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "thickness"
            ],
            "explanation": "Đoạn B: 'This allowed glass of virtually any thickness to be made non-stop'",
            "evidence": "This allowed glass of virtually any thickness to be made non-stop"
          },
          {
            "id": 5,
            "num": 5,
            "type": "table",
            "questionText": "5. Method Ribbon - Disadvantages: Glass was ……………………. (both sides marked) (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "marked"
            ],
            "explanation": "Đoạn B: 'but the rollers would leave both sides of the glass marked, and these would then need to be ground and polished.'",
            "evidence": "rollers would leave both sides of the glass  marked"
          },
          {
            "id": 6,
            "num": 6,
            "type": "diagram",
            "questionText": "6. Float Process Diagram: Inflow of liquid raw material: ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "molten glass",
              "liquid glass"
            ],
            "explanation": "Đoạn C: 'Molten glass flows from the furnace onto the surface of a bath of molten tin'",
            "evidence": "Molten glass flows from the furnace onto the surface of a bath of molten tin"
          },
          {
            "id": 7,
            "num": 7,
            "type": "diagram",
            "questionText": "7. Float Process Diagram: Bath of liquid metal: ……………………. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "molten tin",
              "tin"
            ],
            "explanation": "Đoạn C: 'surface of a bath of molten tin at 1000°C. Because glass is less dense than tin, it floats'",
            "evidence": "surface of a bath of molten tin at 1000°C"
          },
          {
            "id": 8,
            "num": 8,
            "type": "diagram",
            "questionText": "8. Float Process Diagram: Glass enters motorized ……………………. of the annealing lehr. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "rollers",
              "hot rollers"
            ],
            "explanation": "Đoạn C: 'it cools gradually until it is rigid enough to enter the rollers of an annealing lehr'",
            "evidence": "until it is rigid enough to enter the rollers of an annealing lehr"
          }
        ],
        "vocabulary": [
          {
            "word": "unblemished",
            "meaning": "Không tì vết, hoàn hảo",
            "example": "The glass surface remained unblemished after spinning."
          },
          {
            "word": "labour intensive",
            "meaning": "Cần nhiều nhân công",
            "example": "Handmade crafts are highly labour intensive."
          },
          {
            "word": "molten",
            "meaning": "Nấu chảy ở nhiệt độ cao",
            "example": "Molten glass floats evenly on liquid tin."
          }
        ]
      },
      {
        "id": "r6_ex2",
        "exampleNum": 2,
        "title": "Example 2: Secrets of the Swarm (Flow-Chart)",
        "instructions": "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the text for each answer. (Questions 10-13, Page 28)",
        "passage": {
          "title": "Secrets of the Swarm: Honeybee Decision Making",
          "paragraphs": [
            {
              "label": "A",
              "text": "Miller explains that he first really understood the impact that swarm behaviour could have on humans when he read a study of honeybees by Tom Seeley, a biologist at Cornell University. The honeybees choose a group which new nest to move to. First, scouts fly off to investigate multiple sites. When they return they do a ‘waggle dance’ for their spot, and other scouts will then fly off and investigate it."
            },
            {
              "label": "B",
              "text": "Many bees go out, but none tries to compare all sites. Each reports back on just one. The more they liked their nest, the more vigorous and lengthy their waggle dance and the more bees will choose to visit it. Gradually the volume of bees builds up towards one site; it’s a system that ensures that support for the best site snowballs and the decision is made in the most democratic way."
            }
          ]
        },
        "questions": [
          {
            "id": 10,
            "num": 10,
            "type": "flow-chart",
            "questionText": "10. Honeybee ……………………. explore possible nest sites. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "scouts"
            ],
            "explanation": "Đoạn A: 'First, scouts fly off to investigate multiple sites.' -> Honeybee scouts.",
            "evidence": "First, scouts fly off to investigate multiple sites."
          },
          {
            "id": 11,
            "num": 11,
            "type": "flow-chart",
            "questionText": "11. They perform what is known as a ……………………. on their return. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "waggle dance",
              "‘waggle dance’"
            ],
            "explanation": "Đoạn A: 'When they return they do a ‘waggle dance’ for their spot'",
            "evidence": "When they return they do a ‘waggle dance’ for their spot"
          },
          {
            "id": 12,
            "num": 12,
            "type": "flow-chart",
            "questionText": "12. Enthusiasm and ……………………. increase for one particular site. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "volume",
              "the volume"
            ],
            "explanation": "Đoạn B: 'Gradually the volume of bees builds up towards one site; it’s a system that ensures that support for the best site snowballs'",
            "evidence": "Gradually the volume of bees builds up towards one site"
          },
          {
            "id": 13,
            "num": 13,
            "type": "flow-chart",
            "questionText": "13. A final choice is reached using a ……………………. process. (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "democratic"
            ],
            "explanation": "Đoạn B: 'and the decision is made in the most democratic way.' -> democratic process.",
            "evidence": "and the decision is made in the most democratic way."
          }
        ],
        "vocabulary": [
          {
            "word": "scout",
            "meaning": "Trinh sát, ong thám thính",
            "example": "Scout bees locate promising new hollow trees for nesting."
          },
          {
            "word": "waggle dance",
            "meaning": "Điệu múa lắc bụng truyền tin",
            "example": "Bees use the waggle dance to communicate distance and direction."
          },
          {
            "word": "democratic",
            "meaning": "Dân chủ, dựa trên sự đồng thuận số đông",
            "example": "Swarm decisions follow remarkably democratic principles."
          }
        ]
      },
      {
        "id": "r6_ex3",
        "exampleNum": 3,
        "title": "Example 3: The Dover Bronze-Age Boat (Flow Chart: Key Events)",
        "instructions": "Complete the flow chart below. Choose ONE WORD ONLY from the text for each answer. (Questions 1-5, Pages 29-31)",
        "passage": {
          "title": "The Dover Bronze-Age Boat",
          "paragraphs": [
            {
              "label": "A",
              "text": "It was 1992. In England, workmen were building a new road through the heart of Dover, to connect the ancient port and the Channel Tunnel, which, when it opened just two years later, was to be the first land link between Britain and Europe for over 10,000 years. A small team from the Canterbury Archaeological Trust (CAT) worked alongside the workmen, recording new discoveries brought to light by the machines."
            },
            {
              "label": "B",
              "text": "At the base of a deep shaft six metres below the modern streets a wooden structure was revealed. Cleaning away the waterlogged site overlying the timbers, archeologists realized its true nature. They had found a prehistoric boat, preserved by the type of sediment in which it was buried. It was then named the Dover Bronze-Age Boat."
            },
            {
              "label": "C",
              "text": "In 2002, on the tenth anniversary of the discovery, the Dover Bronze-Age Boat Trust hosted a conference, where this meeting of different traditions became apparent. Alongside technical papers about the boat, other speakers explored its social and economic contexts, and the religious perceptions of boats in Bronze-Age societies."
            },
            {
              "label": "D",
              "text": "Detailed proposals to reconstruct the boat were drawn up in 2004. Archaeological evidence was beginning to suggest a Bronze-Age community straddling the Channel, brought together by the sea, rather than separated by it."
            },
            {
              "label": "E",
              "text": "Discussions began early in 2005 with archaeological bodies, universities and heritage organizations either side of the Channel. There was much enthusiasm and support, and an official launch of the project was held at an international seminar in France in 2007. Financial support was confirmed in 2008 and the project then named BOAT 1550BC got under way in June 2011."
            },
            {
              "label": "F",
              "text": "Meanwhile, the exhibition was being prepared ready for opening in July 2012 at the Castle Museum in Boulogne-sur-Mer. Entitled ‘Beyond the Horizon: Societies of the Channel & North Sea 3,500 years ago’, it brought together for the first time a remarkable collection of Bronze-Age objects. The reconstructed boat was the centerpiece."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "flow-chart",
            "questionText": "1. 1992 – the boat was discovered during the construction of a …………………… (ONE WORD ONLY)",
            "acceptableAnswers": [
              "road"
            ],
            "explanation": "Đoạn A: 'workmen were building a new road through the heart of Dover... brought to light by the machines' -> road.",
            "evidence": "workmen were building a new road through the heart of Dover"
          },
          {
            "id": 2,
            "num": 2,
            "type": "flow-chart",
            "questionText": "2. 2002 – an international …………………… was held to gather information (ONE WORD ONLY)",
            "acceptableAnswers": [
              "conference"
            ],
            "explanation": "Đoạn C: 'In 2002, on the tenth anniversary of the discovery, the Dover Bronze-Age Boat Trust hosted a conference' -> conference.",
            "evidence": "the Dover Bronze-Age Boat Trust hosted a conference"
          },
          {
            "id": 3,
            "num": 3,
            "type": "flow-chart",
            "questionText": "3. 2004 – …………………… for the construction were produced (ONE WORD ONLY)",
            "acceptableAnswers": [
              "proposals"
            ],
            "explanation": "Đoạn D: 'Detailed proposals to reconstruct the boat were drawn up in 2004.' -> proposals.",
            "evidence": "Detailed proposals to reconstruct the boat were drawn up in 2004."
          },
          {
            "id": 4,
            "num": 4,
            "type": "flow-chart",
            "questionText": "4. 2007 – the …………………… of BOAT 1550BC took place (ONE WORD ONLY)",
            "acceptableAnswers": [
              "launch"
            ],
            "explanation": "Đoạn E: 'an official launch of the project was held at an international seminar in France in 2007' -> launch.",
            "evidence": "an official launch of the project was held at an international seminar in France in 2007"
          },
          {
            "id": 5,
            "num": 5,
            "type": "flow-chart",
            "questionText": "5. 2012 – the Bronze Age …………………… featured the boat and other objects. (ONE WORD ONLY)",
            "acceptableAnswers": [
              "exhibition"
            ],
            "explanation": "Đoạn F: 'the exhibition was being prepared ready for opening in July 2012 at the Castle Museum... The reconstructed boat was the centerpiece.' -> exhibition.",
            "evidence": "the exhibition was being prepared ready for opening in July 2012 at the Castle Museum in Boulogne-sur-Mer"
          }
        ],
        "vocabulary": [
          {
            "word": "prehistoric",
            "meaning": "Tiền sử (trước khi có sử liệu thành văn)",
            "example": "Prehistoric vessels reveal ancient seafaring prowess."
          },
          {
            "word": "straddle",
            "meaning": "Bắc qua hai bờ, trải dài hai bên",
            "example": "A single community straddled both sides of the English Channel."
          },
          {
            "word": "outreach",
            "meaning": "Hoạt động kết nối cộng đồng",
            "example": "Museum outreach programmes bring archaeology to schools."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_7",
    "lessonNum": 7,
    "code": "V09",
    "title": "V09 – PLAN / MAP / DIAGRAM LABELLING",
    "shortTitle": "Dán Nhãn Bản Đồ & Sơ Đồ",
    "category": "diagram",
    "categoryLabel": "Sơ Đồ & Bản Đồ",
    "badge": "Cấu tạo & Vị trí",
    "description": "Chiến thuật dán nhãn sơ đồ kỹ thuật và cấu tạo máy móc: phân tích hình dạng, chuyển động cơ học và vị trí không gian của các bộ phận.",
    "examplesCount": 3,
    "totalQuestions": 13,
    "examples": [
      {
        "id": "r7_ex1",
        "exampleNum": 1,
        "title": "Example 1: The Anchor Escapement (How the 1670 device worked)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer. (Questions 9-13, Pages 32-33)",
        "passage": {
          "title": "A Chronicle of Timekeeping: The Anchor Escapement",
          "paragraphs": [
            {
              "label": "A",
              "text": "To address this, a variation on the original escapement was invented in 1670, in England. It was called the anchor escapement, which was a lever-based device shaped like a ship's anchor. The motion of a pendulum rocks this device so that it catches and then releases each tooth of the escape wheel, in turn allowing it to turn a precise amount."
            },
            {
              "label": "B",
              "text": "Unlike the original form used in early pendulum clocks, the anchor escapement permitted the pendulum to travel in a very small arc. Moreover, this invention allowed the use of a long pendulum which could beat once a second and thus led to the development of a new floor-standing case design, which became known as the grandfather clock."
            }
          ]
        },
        "questions": [
          {
            "id": 9,
            "num": 9,
            "type": "diagram",
            "questionText": "9. Label 9: Rocking lever device resembling a ship's …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "anchor",
              "ship's anchor"
            ],
            "explanation": "Đoạn A: 'It was called the anchor escapement, which was a lever-based device shaped like a ship's anchor.'",
            "evidence": "It was called the anchor escapement, which was a lever-based device shaped like a ship's anchor."
          },
          {
            "id": 10,
            "num": 10,
            "type": "diagram",
            "questionText": "10. Label 10: Cogged gear component: the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "escape wheel",
              "wheel"
            ],
            "explanation": "Đoạn A: 'catches and then releases each tooth of the escape wheel, in turn allowing it to turn a precise amount.'",
            "evidence": "releases each tooth of the escape wheel , in turn allowing it to turn a precise amount"
          },
          {
            "id": 11,
            "num": 11,
            "type": "diagram",
            "questionText": "11. Label 11: Individual projections on the wheel: each …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "tooth",
              "teeth"
            ],
            "explanation": "Đoạn A: 'catches and then releases each tooth of the escape wheel' -> tooth.",
            "evidence": "catches and then releases each tooth of the escape wheel"
          },
          {
            "id": 12,
            "num": 12,
            "type": "diagram",
            "questionText": "12. Label 12: Oscillating drive mechanism: the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "pendulum",
              "long pendulum"
            ],
            "explanation": "Đoạn A & B: 'The motion of a pendulum rocks this device... allowed the use of a long pendulum which could beat once a second' -> pendulum.",
            "evidence": "The motion of a pendulum rocks this device so that it catches and then releases"
          },
          {
            "id": 13,
            "num": 13,
            "type": "diagram",
            "questionText": "13. Label 13: Floor-standing case clock developed from this: the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "grandfather clock",
              "floor-standing case"
            ],
            "explanation": "Đoạn B: 'led to the development of a new floor-standing case design, which became known as the grandfather clock.'",
            "evidence": "became known as the grandfather clock."
          }
        ],
        "vocabulary": [
          {
            "word": "escapement",
            "meaning": "Bộ hồi (cơ cấu truyền xung lực nhịp nhàng trong đồng hồ)",
            "example": "The anchor escapement revolutionized clock accuracy."
          },
          {
            "word": "pendulum",
            "meaning": "Con lắc dao động",
            "example": "A one-meter pendulum has a period of approximately two seconds."
          },
          {
            "word": "grandfather clock",
            "meaning": "Đồng hồ quả lắc dáng đứng cao",
            "example": "Grandfather clocks became iconic Victorian household fixtures."
          }
        ]
      },
      {
        "id": "r7_ex2",
        "exampleNum": 2,
        "title": "Example 2: An Undersea Turbine (Diagram)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer. (Questions 23-26, Pages 34-35)",
        "passage": {
          "title": "Tidal Power: Undersea Turbine",
          "paragraphs": [
            {
              "label": "A",
              "text": "A marine turbine blade needs to be only one third of the size of a wind generator to produce three times as much power. The blades will be about 20 metres in diameter, so around 30 metres of water is required. Unlike wind power, there are unlikely to be environmental objections. Fish and other creatures are thought unlikely to be at risk from the relatively slow-turning blades. Each turbine will be mounted on a tower which will connect to the national power supply grid via underwater cables. The towers will stick out of the water and be lit, to warn shipping, and also be designed to be lifted out of the water for maintenance and to clean seaweed from the blades."
            },
            {
              "label": "B",
              "text": "Dr Bahaj has done most work on the Alderney site, where there are powerful currents. The single undersea turbine farm would produce far more power than needed for the Channel Islands and most would be fed into the French Grid and be re-imported into Britain via the cable under the Channel."
            },
            {
              "label": "C",
              "text": "One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles. These can cause vibration and damage the blades of the turbines. Dr Bahaj said: ‘We have to test a number of blade types to avoid this happening or at least make sure it does not damage the turbines or reduce performance.’"
            }
          ]
        },
        "questions": [
          {
            "id": 23,
            "num": 23,
            "type": "diagram",
            "questionText": "23. Label 23: Vertical mounting column: the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "tower",
              "support tower"
            ],
            "explanation": "Đoạn A: 'Each turbine will be mounted on a tower which will connect to the national power supply grid'",
            "evidence": "Each turbine will be mounted on a tower which will connect to the national power supply grid"
          },
          {
            "id": 24,
            "num": 24,
            "type": "diagram",
            "questionText": "24. Label 24: Seabed power grid connection conduits: the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "underwater cables",
              "cables"
            ],
            "explanation": "Đoạn A: 'connect to the national power supply grid via underwater cables.'",
            "evidence": "connect to the national power supply grid via underwater cables."
          },
          {
            "id": 25,
            "num": 25,
            "type": "diagram",
            "questionText": "25. Label 25: Rotating drive surfaces (20 metres in diameter): the …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "blades",
              "turbine blades",
              "marine turbine blade"
            ],
            "explanation": "Đoạn A: 'The blades will be about 20 metres in diameter... relatively slow-turning blades.'",
            "evidence": "The blades will be about 20 metres in diameter"
          },
          {
            "id": 26,
            "num": 26,
            "type": "diagram",
            "questionText": "26. Label 26: Risk of low pressure air bubbles behind blades: …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "cavitation"
            ],
            "explanation": "Đoạn C: 'One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles.'",
            "evidence": "One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles."
          }
        ],
        "vocabulary": [
          {
            "word": "cavitation",
            "meaning": "Hiện tượng xâm thực bọt khí",
            "example": "Cavitation can pit and erode underwater propeller blades."
          },
          {
            "word": "currents",
            "meaning": "Hải lưu, dòng chảy xiết",
            "example": "Powerful tidal currents supply continuous renewable power."
          },
          {
            "word": "debris",
            "meaning": "Rác rưởi, mảnh vỡ trôi nổi",
            "example": "Floating marine debris could pose risks to spinning turbines."
          }
        ]
      },
      {
        "id": "r7_ex3",
        "exampleNum": 3,
        "title": "Example 3: Collecting Ant Specimens (Diagram: Winkler Extractor / Funnel)",
        "instructions": "Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer. (Questions 37-40, Pages 36-37)",
        "passage": {
          "title": "Collecting Ant Specimens",
          "paragraphs": [
            {
              "label": "A",
              "text": "Baits can be used to attract and concentrate foragers. This often increases the number of individuals collected and attracts species that are otherwise elusive. Sugars and meats or oils will attract different species and a range should be utilised. These baits can be placed either on the ground or on the trunks of trees or large shrubs. When placed on the ground, baits should be situated on small paper cards or other flat, light-coloured surfaces, or in test-tubes or vials. This makes it easier to spot ants and to capture them before they can escape into the surrounding leaf litter."
            },
            {
              "label": "B",
              "text": "Many ants are small and forage primarily in the layer of leaves and other debris on the ground. Collecting these species by hand can be difficult. One of the most successful ways to collect them is to gather the leaf litter in which they are foraging and extract the ants from it. This is most commonly done by placing leaf litter on a screen over a large funnel, often under some heat. As the leaf litter dries from above, ants move downward and eventually fall out the bottom and are collected in alcohol placed below the funnel."
            },
            {
              "label": "C",
              "text": "A method of improving the catch when using a funnel is to sift the leaf litter through a coarse screen before placing it above the funnel. This will concentrate the litter and remove larger leaves and twigs. It will also allow more litter to be sampled when using a limited number of funnels."
            }
          ]
        },
        "questions": [
          {
            "id": 37,
            "num": 37,
            "type": "diagram",
            "questionText": "37. Label 37: Heat source applied above: …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "heat",
              "some heat"
            ],
            "explanation": "Đoạn B: 'placing leaf litter on a screen over a large funnel, often under some heat. As the leaf litter dries from above...'",
            "evidence": "often under some heat . As the leaf litter dries from above"
          },
          {
            "id": 38,
            "num": 38,
            "type": "diagram",
            "questionText": "38. Label 38: Forest ground material holding ants: …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "leaf litter",
              "litter"
            ],
            "explanation": "Đoạn B: 'placing leaf litter on a screen over a large funnel' -> leaf litter.",
            "evidence": "placing leaf litter on a screen over a large funnel"
          },
          {
            "id": 39,
            "num": 39,
            "type": "diagram",
            "questionText": "39. Label 39: Mesh separating debris: …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "screen",
              "coarse screen"
            ],
            "explanation": "Đoạn B & C: 'on a screen over a large funnel... sift the leaf litter through a coarse screen' -> screen / coarse screen.",
            "evidence": "sift the leaf litter through a coarse screen before placing it above the funnel"
          },
          {
            "id": 40,
            "num": 40,
            "type": "diagram",
            "questionText": "40. Label 40: Preservative liquid in bottom jar: …………………… (NO MORE THAN TWO WORDS)",
            "acceptableAnswers": [
              "alcohol"
            ],
            "explanation": "Đoạn B: 'eventually fall out the bottom and are collected in alcohol placed below the funnel.'",
            "evidence": "eventually fall out the bottom and are collected in alcohol placed below the funnel."
          }
        ],
        "vocabulary": [
          {
            "word": "leaf litter",
            "meaning": "Lớp mùn lá khô mục rụng trên mặt đất rừng",
            "example": "Ants dwell abundantly inside moist forest leaf litter."
          },
          {
            "word": "coarse screen",
            "meaning": "Màng lưới lọc thô",
            "example": "A coarse screen sifts out big sticks and stones."
          },
          {
            "word": "specimen",
            "meaning": "Mẫu vật sinh học",
            "example": "The scientists catalogued over 200 ant specimens."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_8",
    "lessonNum": 8,
    "code": "V10",
    "title": "V10 – TRUE / FALSE / NOT GIVEN & YES / NO / NOT GIVEN",
    "shortTitle": "Đúng / Sai / Không Có Thông Tin",
    "category": "validation",
    "categoryLabel": "Xác Minh Tính Đúng Sai",
    "badge": "Dạng bài cốt lõi",
    "description": "Chiến thuật đối chiếu thông tin câu hỏi với bài đọc: TRUE/YES khi thông tin khớp nghĩa hoàn toàn; FALSE/NO khi thông tin mâu thuẫn trực tiếp; NOT GIVEN khi bài đọc không đề cập hoặc thiếu cơ sở khẳng định.",
    "examplesCount": 5,
    "totalQuestions": 33,
    "examples": [
      {
        "id": "r8_ex1",
        "exampleNum": 1,
        "title": "Phần 1: Luyện Tập Nền Tảng – True / False / Not Given",
        "instructions": "Do the following statements agree with the information given in the reading passage? Write TRUE, FALSE, or NOT GIVEN for questions 1-10. (Pages 38-39)",
        "passage": {
          "title": "Foundational Practice: T/F/NG Short Passages",
          "paragraphs": [
            {
              "label": "1",
              "text": "It was only after the creation of the FAA that full-scale regulation of America’s airspace took place, and this was fortuitous, for the advent of the jet engine suddenly resulted in a large number of very fast planes, reducing pilots’ margin of error and practically demanding some set of rules to keep everyone well separated and operating safely in the air."
            },
            {
              "label": "2",
              "text": "As a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution."
            },
            {
              "label": "3",
              "text": "Perkin’s scientific gifts soon caught Hofmann’s attention and, within two years, he became Hofmann’s youngest assistant."
            },
            {
              "label": "4",
              "text": "At the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply."
            },
            {
              "label": "5",
              "text": "During his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family’s house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product."
            },
            {
              "label": "6",
              "text": "Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry."
            },
            {
              "label": "7",
              "text": "Based on the results of this research, Marie Curie received her Doctorate of Science, and in 1903 Marie and Pierre shared with Becquerel the Nobel Prize for Physics for the discovery of radioactivity. The births of Marie's two daughters, Irène and Eve, in 1897 and 1904 failed to interrupt her scientific work."
            },
            {
              "label": "8",
              "text": "The sudden death of her husband in 1906 was a bitter blow to Marie Curie, but was also a turning point in her career: henceforth she was to devote all her energy to completing alone the scientific work that they had undertaken. On May 13, 1906, she was appointed to the professorship that had been left vacant on her husband's death, becoming the first woman to teach at the Sorbonne."
            },
            {
              "label": "9",
              "text": "Many experts give California high marks for making progress on preparedness in recent years, after some of the largest fires in state history scorched thousands of acres, burned thousands of homes, and killed numerous people."
            },
            {
              "label": "10",
              "text": "Stung in the past by criticism of bungling that allowed fires to spread when they might have been contained, personnel are meeting the peculiar challenges of neighborhood- and canyon-hopping fires better than previously, observers say."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "tfng",
            "questionText": "1. The FAA was created as a result of the introduction of the jet engine.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 1: Bài viết nêu 'It was only after the creation of the FAA... and this was fortuitous, for the advent of the jet engine suddenly resulted...' Nghĩa là FAA đã được lập ra trước đó và sự kiện này rất may mắn vì ngay sau đó động cơ phản lực mới xuất hiện. Động cơ phản lực KHÔNG phải nguyên nhân dẫn đến việc tạo ra FAA -> FALSE.",
            "evidence": "It was only after the creation of the FAA that full- scale regulation of America’s airspace took place, and this was fortuitous , for the advent of the jet engine suddenly resulted"
          },
          {
            "id": 2,
            "num": 2,
            "type": "tfng",
            "questionText": "2. Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 2: Người đầu tiên nhận ra tài năng của Perkin là giáo viên của ông, Thomas Hall ('His talent and devotion to the subject were perceived by his teacher, Thomas Hall'). Faraday chỉ là người giảng bài mà Hall khuyến khích Perkin đi nghe -> FALSE.",
            "evidence": "His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday"
          },
          {
            "id": 3,
            "num": 3,
            "type": "tfng",
            "questionText": "3. Perkin employed August Wilhelm Hofmann as his assistant.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 3: 'he became Hofmann’s youngest assistant' nghĩa là Perkin là trợ lý cho Hofmann, chứ không phải Perkin thuê Hofmann làm trợ lý -> FALSE.",
            "evidence": "Perkin’s scientific gifts soon caught Hofmann’s attention and, within two years, he became Hofmann’s youngest assistant"
          },
          {
            "id": 4,
            "num": 4,
            "type": "tfng",
            "questionText": "4. The trees from which quinine is derived grow only in South America.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn 4: Bài chỉ nêu cây cinchona 'native to South America' (có nguồn gốc bản địa từ Nam Mỹ), không có từ nào khẳng định loài cây này 'chỉ mọc duy nhất' ở Nam Mỹ -> NOT GIVEN.",
            "evidence": "The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply."
          },
          {
            "id": 5,
            "num": 5,
            "type": "tfng",
            "questionText": "5. Perkin hoped to manufacture a drug from a coal tar waste product.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn 5: 'He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product.' Quinine là thuốc chữa sốt rét (a drug), aniline là phế phẩm từ than đá -> TRUE.",
            "evidence": "He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product ."
          },
          {
            "id": 6,
            "num": 6,
            "type": "tfng",
            "questionText": "6. Marie Curie’s husband was a joint winner of both Marie’s Nobel Prizes.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 6: Người chồng Pierre Curie chỉ đồng nhận giải năm 1903 (Vật lý), còn giải năm 1911 (Hóa học) Marie là 'sole winner' (người duy nhất nhận giải) -> FALSE.",
            "evidence": "With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry ."
          },
          {
            "id": 7,
            "num": 7,
            "type": "tfng",
            "questionText": "7. Marie stopped doing research for several years when her children were born.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 7: 'The births of Marie's two daughters, Irène and Eve, in 1897 and 1904 failed to interrupt her scientific work.' (không hề làm gián đoạn công việc nghiên cứu) -> Mâu thuẫn với 'stopped doing research' -> FALSE.",
            "evidence": "The births of Marie's two daughters, Irène and Eve, in 1897 and 1904 failed to interrupt her scientific work."
          },
          {
            "id": 8,
            "num": 8,
            "type": "tfng",
            "questionText": "8. Marie took over the teaching position her husband had held.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn 8: 'appointed to the professorship that had been left vacant on her husband's death, becoming the first woman to teach at the Sorbonne.' -> Tiếp quản vị trí giảng dạy của chồng -> TRUE.",
            "evidence": "she was appointed to the professorship that had been left vacant on her husband's death , becoming the first woman to teach at the Sorbonne."
          },
          {
            "id": 9,
            "num": 9,
            "type": "tfng",
            "questionText": "9. Many experts believe California has made little progress in readying itself to fight fires.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn 9: 'Many experts give California high marks for making progress on preparedness in recent years' (chấm điểm cao vì tiến bộ vượt bậc), trái ngược với 'made little progress' -> FALSE.",
            "evidence": "Many experts give California high marks for making progress on preparedness in recent years"
          },
          {
            "id": 10,
            "num": 10,
            "type": "tfng",
            "questionText": "10. Personnel in the past have been criticised for mishandling fire containment.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn 10: 'Stung in the past by criticism of bungling that allowed fires to spread when they might have been contained' (bungling = sai sót lóng ngóng / xử lý vụng về = mishandling) -> TRUE.",
            "evidence": "Stung in the past by criticism of bungling that allowed fires to spread when they might have been contained"
          }
        ],
        "vocabulary": [
          {
            "word": "fortuitous",
            "meaning": "May mắn, tình cờ đúng lúc",
            "example": "The timing was fortuitous, arriving just before the storm hit."
          },
          {
            "word": "bungling",
            "meaning": "Sự tắc trách, làm ăn cẩu thả lóng ngóng",
            "example": "Officials admitted the disastrous spread resulted from emergency bungling."
          },
          {
            "word": "preparedness",
            "meaning": "Tình trạng sẵn sàng ứng phó",
            "example": "California invested millions in disaster preparedness."
          }
        ]
      },
      {
        "id": "r8_ex2",
        "exampleNum": 2,
        "title": "Phần 2: Luyện Tập Nền Tảng – Yes / No / Not Given",
        "instructions": "Do the following statements agree with the views/claims of the writer in the passage? Write YES, NO, or NOT GIVEN for questions 1-7. (Pages 40-41)",
        "passage": {
          "title": "Foundational Practice: Y/N/NG Passages",
          "paragraphs": [
            {
              "label": "1",
              "text": "It’s not important, then, if there’s a delay of a few years, or decades, while the human race debates the question of whether to reply, and perhaps carefully drafts a reply, if a signal from the universe is received."
            },
            {
              "label": "2",
              "text": "Bernstein says that Diels’s system is attracting lots of interest from the power companies. But they have not yet come up with the $5 million that EPRI says will be needed to develop a commercial system, by making the lasers yet smaller and cheaper."
            },
            {
              "label": "3",
              "text": "One glaring disadvantage of pesticides’ application is that, while destroying harmful pests, they also wipe out many useful non-targeted organisms, which keep the growth of the pest population in check. This results in what agro-ecologists call the ‘treadmill syndrome’. Because of their tremendous breeding potential and genetic diversity, many pests are known to withstand synthetic chemicals and bear offspring with a built-in resistance to pesticides."
            },
            {
              "label": "4",
              "text": "When handled by experts, bio-control is safe, non-polluting and self-dispersing."
            },
            {
              "label": "5",
              "text": "According to Wagner’s analysis of the Bachia family tree, the toed species re-evolved toes from toeless ancestors and, what is more, digit loss and gain has occurred on more than one occasion over tens of millions of years."
            },
            {
              "label": "6",
              "text": "More recently, however, examples have been reported that break the time limit, suggesting that silent genes may not be the whole story. In a paper published last year, biologist Gunter Wagner of Yale University reported some work on the evolutionary history of a group of South American lizards called Bachia."
            },
            {
              "label": "7",
              "text": "Nasa notes that a lot of time is spent wondering about and searching for proof of liquid water on Mars, which would be a signal of life. But the new pictures show that the planet itself was once far more alive than it is today – made up of flowing molten lava that spread across its surface."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "ynng",
            "questionText": "1. If a signal from outer space is received, it will be important to respond promptly.",
            "acceptableAnswers": [
              "NO",
              "N"
            ],
            "explanation": "Đoạn 1: Bài viết nêu 'It’s not important, then, if there’s a delay of a few years, or decades...'. Tác giả khẳng định việc trì hoãn không hề quan trọng, trái ngược hoàn toàn với nhận định 'it will be important to respond promptly' -> NO.",
            "evidence": "It’s not important, then, if there’s a delay of a few years, or decades, while the human race debates the question of whether to reply"
          },
          {
            "id": 2,
            "num": 2,
            "type": "ynng",
            "questionText": "2. Power companies have given Diels enough money to develop his laser.",
            "acceptableAnswers": [
              "NO",
              "N"
            ],
            "explanation": "Đoạn 2: 'they have not yet come up with the $5 million that EPRI says will be needed to develop a commercial system' -> Các công ty vẫn CHƯA chi trả số tiền 5 triệu đô cần thiết -> NO.",
            "evidence": "But they have not yet come up with the $5 million that EPRI says will be needed to develop a commercial system"
          },
          {
            "id": 3,
            "num": 3,
            "type": "ynng",
            "questionText": "3. A number of pests are now born with an innate immunity to some pesticides.",
            "acceptableAnswers": [
              "YES",
              "Y"
            ],
            "explanation": "Đoạn 3: 'bear offspring with a built-in resistance to pesticides' (sinh ra con non có khả năng kháng thuốc sẵn có = innate immunity) -> YES.",
            "evidence": "many pests are known to withstand synthetic chemicals and bear offspring with a built-in resistance to pesticides ."
          },
          {
            "id": 4,
            "num": 4,
            "type": "ynng",
            "questionText": "4. Bio-control is free from danger under certain circumstances.",
            "acceptableAnswers": [
              "YES",
              "Y"
            ],
            "explanation": "Đoạn 4: 'When handled by experts, bio-control is safe, non-polluting and self-dispersing.' Safe = free from danger; When handled by experts = under certain circumstances -> YES.",
            "evidence": "When handled by experts, bio-control is safe, non-polluting and self-dispersing."
          },
          {
            "id": 5,
            "num": 5,
            "type": "ynng",
            "questionText": "5. Wagner believes that Bachia lizards with toes had toeless ancestors.",
            "acceptableAnswers": [
              "YES",
              "Y"
            ],
            "explanation": "Đoạn 5: 'According to Wagner’s analysis of the Bachia family tree, the toed species re-evolved toes from toeless ancestors' -> Khớp hoàn toàn -> YES.",
            "evidence": "According to Wagner’s analysis of the Bachia family tree, the toed species re-evolved toes from toeless ancestors"
          },
          {
            "id": 6,
            "num": 6,
            "type": "ynng",
            "questionText": "6. Wagner was the first person to do research on South American lizards.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn 6: Đoạn văn chỉ nói Wagner 'reported some work on the evolutionary history of a group of South American lizards', không hề khẳng định ông là 'người đầu tiên' (the first person) -> NOT GIVEN.",
            "evidence": "In a paper published last year, biologist Gunter Wagner of Yale University reported some work on the evolutionary history of a group of South American lizards called Bachia."
          },
          {
            "id": 7,
            "num": 7,
            "type": "ynng",
            "questionText": "7. The photos show that the surface of Mars is more active than ever.",
            "acceptableAnswers": [
              "NO",
              "N"
            ],
            "explanation": "Đoạn 7: 'the new pictures show that the planet itself was once far more alive than it is today' (trong quá khứ Sao Hỏa sống động hơn ngày nay rất nhiều). Điều này mâu thuẫn với nhận định bề mặt Sao Hỏa 'more active than ever' (hoạt động mạnh mẽ hơn bao giờ hết) -> NO.",
            "evidence": "the new pictures show that the planet itself was once far more alive than it is today – made up of flowing molten lava that spread across its surface."
          }
        ],
        "vocabulary": [
          {
            "word": "innate immunity",
            "meaning": "Khả năng miễn dịch bẩm sinh",
            "example": "Some organisms develop innate immunity against poisons."
          },
          {
            "word": "bio-control",
            "meaning": "Biện pháp kiểm soát sinh học (dùng thiên địch)",
            "example": "Bio-control avoids harmful agricultural chemical residues."
          },
          {
            "word": "re-evolve",
            "meaning": "Tiến hóa tái xuất hiện một tính trạng đã mất",
            "example": "Traits may occasionally re-evolve after millions of years."
          }
        ]
      },
      {
        "id": "r8_ex3",
        "exampleNum": 3,
        "title": "Example 1: Stepwells (Kiến trúc giếng cổ bậc thang)",
        "instructions": "Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN for questions 1-5. (Pages 42-43)",
        "passage": {
          "title": "Stepwells: Monuments of Ancient India",
          "paragraphs": [
            {
              "label": "A",
              "text": "A millennium ago, stepwells were fundamental to life in the driest parts of India. Although many have been neglected, recent restoration has returned them to their former glory. Richard Cox travelled to north-western India to document these spectacular monuments from a bygone era."
            },
            {
              "label": "B",
              "text": "During the sixth and seventh centuries, the inhabitants of the modern-day states of Gujarat and Rajasthan in North-western India developed a method of gaining access to clean, fresh groundwater during the dry season for drinking, bathing, watering animals and irrigation. However, the significance of this invention – the stepwell – goes beyond its utilitarian application."
            },
            {
              "label": "C",
              "text": "Unique to the region, stepwells are often architecturally complex and vary widely in size and shape. During their heyday, they were places of gathering, of leisure, of relaxation and of worship for villagers of all but the lowest castes. Most stepwells are found dotted around the desert areas of Gujarat (where they are called vav) and Rajasthan (where they are known as baori), while a few also survive in Delhi. Some were located in or near villages as public spaces for the community; others were positioned beside roads as resting places for travellers."
            },
            {
              "label": "D",
              "text": "As their name suggests, stepwells comprise a series of stone steps descending from ground level to the water source (normally an underground aquifer) as it recedes following the rains. When the water level was high, the user needed only to descend a few steps to reach it; when it was low, several levels would have to be negotiated."
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
            "explanation": "Đoạn C: Bài viết khẳng định giếng bậc thang là 'Unique to the region' (chỉ có ở vùng này - Tây Bắc Ấn Độ), không phải có ở khắp nơi trên thế giới -> FALSE.",
            "evidence": "Unique to the region, stepwells are often architecturally complex and vary widely in size and shape."
          },
          {
            "id": 2,
            "num": 2,
            "type": "tfng",
            "questionText": "2. Stepwells had a range of functions, in addition to those related to water collection.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn B & C: 'significance... goes beyond its utilitarian application... they were places of gathering, of leisure, of relaxation and of worship' -> Phục vụ nhiều mục đích ngoài việc lấy nước -> TRUE.",
            "evidence": "During their heyday, they were places of gathering, of leisure, of relaxation and of worship for villagers"
          },
          {
            "id": 3,
            "num": 3,
            "type": "tfng",
            "questionText": "3. The few existing stepwells in Delhi are more attractive than those found elsewhere.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn C: Chỉ nói 'while a few also survive in Delhi', không hề so sánh mức độ thu hút / đẹp hơn với các nơi khác -> NOT GIVEN.",
            "evidence": "while a few also survive in Delhi ."
          },
          {
            "id": 4,
            "num": 4,
            "type": "tfng",
            "questionText": "4. It took workers many years to build the stone steps characteristic of stepwells.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn D miêu tả cấu tạo bậc đá nhưng hoàn toàn không đề cập đến việc thợ xây mất bao nhiêu năm để hoàn thành -> NOT GIVEN.",
            "evidence": "stepwells comprise a series of stone steps descending from ground level to the water source"
          },
          {
            "id": 5,
            "num": 5,
            "type": "tfng",
            "questionText": "5. The number of steps above the water level in a stepwell altered during the course of a year.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn D: Khi mực nước cao (mùa mưa), người dùng chỉ cần bước vài bậc; khi mực nước rút xuống thấp vào mùa khô, người ta phải bước xuống nhiều tầng bậc đá -> số bậc nằm trên mặt nước thay đổi theo các mùa trong năm -> TRUE.",
            "evidence": "When the water level was high, the user needed only to descend a few steps to reach it; when it was low, several levels would have to be negotiated."
          }
        ],
        "vocabulary": [
          {
            "word": "aquifer",
            "meaning": "Tầng ngậm nước ngầm",
            "example": "Stepwells tapped into deep underground aquifers."
          },
          {
            "word": "heyday",
            "meaning": "Thời kỳ hoàng kim, cực thịnh",
            "example": "During their heyday, stepwells were vibrant social centers."
          },
          {
            "word": "utilitarian",
            "meaning": "Thực dụng, thuần túy vì chức năng",
            "example": "Their design was artistic rather than merely utilitarian."
          }
        ]
      },
      {
        "id": "r8_ex4",
        "exampleNum": 4,
        "title": "Example 2: European Transport Systems 1990-2010",
        "instructions": "Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN for questions 22-26. (Pages 44-45)",
        "passage": {
          "title": "European Transport Systems 1990–2010",
          "paragraphs": [
            {
              "label": "A",
              "text": "It is difficult to conceive of vigorous economic growth without an efficient transport system. Although modern information technologies can reduce the demand for physical transport by facilitating teleworking and teleservices, the requirement for transport continues to increase. There are two key factors behind this trend. For passenger transport, the determining factor is the spectacular growth in car use. The number of cars on European Union (EU) roads saw an increase of three million cars each year from 1990 to 2010, and in the next decade the EU will see a further substantial increase in its fleet."
            },
            {
              "label": "B",
              "text": "As far as goods transport is concerned, growth is due to a large extent to changes in the European economy and its system of production. In the last 20 years, as internal frontiers have been abolished, the EU has moved from a 'stock' economy to a 'flow' economy. This phenomenon has been emphasised by the relocation of some industries, particularly those which are labour intensive, to reduce production costs, even though the production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users."
            },
            {
              "label": "C",
              "text": "The strong economic growth expected in countries which are candidates for entry to the EU will also increase transport flows, in particular road haulage traffic. In 1998, some of these countries already exported more than twice their 1990 volumes and imported more than five times their 1990 volumes. And although many candidate countries inherited a transport system which encourages rail, the distribution between modes has tipped sharply in favour of road transport since the 1990s. Between 1990 and 1998, road haulage increased by 19.4%, while during the same period rail haulage decreased by 43.5%."
            },
            {
              "label": "D",
              "text": "However, a new imperative-sustainable development – offers an opportunity for adapting the EU's common transport policy. This objective, agreed by the Gothenburg European Council, has to be achieved by integrating environmental considerations into Community policies, and shifting the balance between modes of transport lies at the heart of its strategy. The ambitious objective can only be fully achieved by 2020, but proposed measures are nonetheless a first essential step towards a sustainable transport system which will ideally be in place in 30 years' time, that is by 2040."
            },
            {
              "label": "E",
              "text": "In 1998, energy consumption in the transport sector was to blame for 28% of emissions of CO2, the leading greenhouse gas. According to the latest estimates, if nothing is done to reverse the traffic growth trend, CO2 emissions from transport can be expected to increase by around 50% to 1,113 billion tonnes by 2020, compared with the 739 billion tonnes recorded in 1990. Once again, road transport is the main culprit since it alone accounts for 84% of the CO2 emissions attributable to transport."
            }
          ]
        },
        "questions": [
          {
            "id": 22,
            "num": 22,
            "type": "tfng",
            "questionText": "22. The need for transport is growing, despite technological developments.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn A: 'Although modern information technologies can reduce the demand for physical transport... the requirement for transport continues to increase.' -> Khớp hoàn toàn -> TRUE.",
            "evidence": "Although modern information technologies can reduce the demand for physical transport by facilitating teleworking and teleservices, the requirement for transport continues to increase ."
          },
          {
            "id": 23,
            "num": 23,
            "type": "tfng",
            "questionText": "23. To reduce production costs, some industries have been moved closer to their relevant consumers.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn B: 'to reduce production costs, even though the production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users' -> Di dời ra xa hàng ngàn km, chứ KHÔNG phải chuyển lại gần người tiêu dùng (closer) -> FALSE.",
            "evidence": "particularly those which are labour intensive, to reduce production costs, even though the production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users"
          },
          {
            "id": 24,
            "num": 24,
            "type": "tfng",
            "questionText": "24. Cars are prohibitively expensive in some EU candidate countries.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn C đề cập đến lưu lượng xe tải đường bộ và thương mại xuất nhập khẩu của các nước ứng viên EU, nhưng không hề nhắc đến giá xe hơi đắt đỏ -> NOT GIVEN.",
            "evidence": "The strong economic growth expected in countries which are candidates for entry to the EU will also increase transport flows"
          },
          {
            "id": 25,
            "num": 25,
            "type": "tfng",
            "questionText": "25. The Gothenburg European Council was set up 30 years ago.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn D nêu mục tiêu 'ideally be in place in 30 years' time' (sẽ hoàn thiện trong 30 năm tới), không hề nói hội đồng Gothenburg được thành lập từ 30 năm trước -> NOT GIVEN.",
            "evidence": "This objective, agreed by the Gothenburg European Council... a sustainable transport system which will ideally be in place in 30 years' time"
          },
          {
            "id": 26,
            "num": 26,
            "type": "tfng",
            "questionText": "26. By the end of this decade, CO2 emissions from transport are predicted to reach 739 billion tonnes.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn E: '739 billion tonnes recorded in 1990' (đây là số liệu năm 1990). Đến năm 2020 lượng khí thải dự kiến tăng lên 1,113 tỷ tấn, chứ không phải 739 tỷ tấn -> FALSE.",
            "evidence": "increase by around 50% to 1,113 billion tonnes by 2020，compared with the 739 billion tonnes recorded in 1990 ."
          }
        ],
        "vocabulary": [
          {
            "word": "haulage",
            "meaning": "Vận tải hàng hóa bằng đường bộ",
            "evidence": "Road haulage accounted for the vast majority of goods transport."
          },
          {
            "word": "culprit",
            "meaning": "Thủ phạm, nguyên nhân chính gây hại",
            "example": "Road transport is the chief culprit for carbon emissions."
          },
          {
            "word": "fleet",
            "meaning": "Đội xe, toàn bộ lượng phương tiện",
            "example": "The EU passenger car fleet expanded by millions each year."
          }
        ]
      },
      {
        "id": "r8_ex5",
        "exampleNum": 5,
        "title": "Example 3: Tea and the Industrial Revolution",
        "instructions": "Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN for questions 8-13. (Pages 46-47)",
        "passage": {
          "title": "Tea and the Industrial Revolution",
          "paragraphs": [
            {
              "label": "A",
              "text": "Macfarlane compares the puzzle to a combination lock. ‘There are about 20 different factors and all of them need to be present before the revolution can happen,’ he says. For industry to take off, there needs to be the technology and power to drive factories, large urban populations to provide cheap labour, easy transport to move goods around, an affluent middle-class willing to buy mass-produced objects, a market-driven economy and a political system that allows this to happen. While this was the case for England, other nations, such as Japan, the Netherlands and France also met some of these criteria but were not industrialising. ‘After all, Holland had everything except coal while China also had many of these factors. Most historians are convinced there are one or two missing factors that you need to open the lock.’"
            },
            {
              "label": "B",
              "text": "The missing factors, he proposes, are to be found in almost every kitchen cupboard. Tea and beer, two of the nation’s favourite drinks, fuelled the revolution. The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer – plus the fact that both are made with boiled water – allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery. The theory sounds eccentric but once he starts to explain the detective work that went into his deduction, the scepticism gives way to wary admiration. Macfarlane's case has been strengthened by support from notable quarters – Roy Porter, the distinguished medical historian, recently wrote a favourable appraisal of his research."
            },
            {
              "label": "C",
              "text": "Macfarlane had wondered for a long time how the Industrial Revolution came about. Historians had alighted on one interesting factor around the mid-18th century that required explanation. Between about 1650 and 1740, the population in Britain was static. But then there was a burst in population growth. Macfarlane says: ‘The infant mortality rate halved in the space of 20 years, and this happened in both rural areas and cities, and across all classes. Efforts to explain this sudden reduction in child deaths appeared to draw a blank.’"
            },
            {
              "label": "D",
              "text": "This population burst seemed to happen at just the right time to provide labour for the Industrial Revolution. ‘When you start moving towards an industrial revolution, it is economically efficient to have people living close together,’ says Macfarlane. ‘But then you get disease, particularly from human waste.’ Some digging around in historical records revealed that there was a change in the incidence of water-borne disease at that time, especially dysentery. Macfarlane deduced that whatever the British were drinking must have been important in regulating disease. He says, ‘We drank beer. For a long time, the English were protected by the strong antibacterial agent in hops, which were added to help preserve the beer. But in the late 17th century a tax was introduced on malt, the basic ingredient of beer. The poor turned to water and gin and in the 1720s the mortality rate began to rise again. Then it suddenly dropped again. What caused this?’"
            }
          ]
        },
        "questions": [
          {
            "id": 8,
            "num": 8,
            "type": "tfng",
            "questionText": "8. China’s transport system was not suitable for industry in the 18th century.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn A: Bài viết chỉ nêu 'China also had many of these factors', hoàn toàn không đề cập cụ thể hệ thống giao thông của Trung Quốc có phù hợp cho công nghiệp hay không -> NOT GIVEN.",
            "evidence": "while China also had many of these factors. Most historians are convinced there are one or two missing factors"
          },
          {
            "id": 9,
            "num": 9,
            "type": "tfng",
            "questionText": "9. Tea and beer both helped to prevent dysentery in Britain.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn B: 'The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer... allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery' -> Cả hai loại đồ uống đều giúp ngăn ngừa bệnh kiết lỵ -> TRUE.",
            "evidence": "The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer... allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery ."
          },
          {
            "id": 10,
            "num": 10,
            "type": "tfng",
            "questionText": "10. Roy Porter disagrees with Professor Macfarlane’s findings.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn B: 'Roy Porter, the distinguished medical historian, recently wrote a favourable appraisal of his research' (đánh giá ủng hộ, thuận lợi), trái ngược hoàn toàn với 'disagrees' -> FALSE.",
            "evidence": "Roy Porter, the distinguished medical historian, recently wrote a favourable appraisal of his research ."
          },
          {
            "id": 11,
            "num": 11,
            "type": "tfng",
            "questionText": "11. After 1740, there was a reduction in population in Britain.",
            "acceptableAnswers": [
              "FALSE",
              "F"
            ],
            "explanation": "Đoạn C: 'Between about 1650 and 1740, the population in Britain was static. But then there was a burst in population growth.' (Sau 1740 dân số bùng nổ tăng vọt, không phải giảm sút) -> FALSE.",
            "evidence": "Between about 1650 and 1740，the population in Britain was static. But then there was a burst in population growth ."
          },
          {
            "id": 12,
            "num": 12,
            "type": "tfng",
            "questionText": "12. People in Britain used to make beer at home.",
            "acceptableAnswers": [
              "NOT GIVEN",
              "NG"
            ],
            "explanation": "Đoạn D nói người Anh uống nhiều bia và thuế mạch nha được áp đặt, nhưng không hề đề cập đến việc người dân tự nấu bia tại nhà -> NOT GIVEN.",
            "evidence": "We drank beer. For a long time, the English were protected by the strong antibacterial agent in hops"
          },
          {
            "id": 13,
            "num": 13,
            "type": "tfng",
            "questionText": "13. The tax on malt indirectly caused a rise in the death rate.",
            "acceptableAnswers": [
              "TRUE",
              "T"
            ],
            "explanation": "Đoạn D: Thuế đánh vào mạch nha khiến người nghèo chuyển sang uống nước lã và rượu gin, dẫn đến tỷ lệ tử vong bắt đầu tăng trở lại vào những năm 1720 ('in the 1720s the mortality rate began to rise again') -> TRUE.",
            "evidence": "tax was introduced on malt, the basic ingredient of beer. The poor turned to water and gin and in the 1720s the mortality rate began to rise again."
          }
        ],
        "vocabulary": [
          {
            "word": "antiseptic",
            "meaning": "Kháng khuẩn, khử trùng",
            "example": "Tannin in tea acts as an effective natural antiseptic."
          },
          {
            "word": "dysentery",
            "meaning": "Bệnh kiết lỵ (nhiễm trùng đường ruột)",
            "example": "Dysentery was a major cause of infant mortality in crowded cities."
          },
          {
            "word": "static",
            "meaning": "Bất biến, đứng yên không đổi",
            "example": "Population levels remained static for nearly a century."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_9",
    "lessonNum": 9,
    "code": "V11",
    "title": "V11 – MATCHING FEATURES",
    "shortTitle": "Nối Đặc Điểm & Tác Giả",
    "category": "matching",
    "categoryLabel": "Dạng Bài Nối Thông Tin",
    "badge": "Chiến lược scan tên riêng",
    "description": "Chiến thuật định vị danh sách đối tượng (tên nhà khoa học, tổ chức, thành phố) bằng cách scan Hard Keywords, đọc đoạn trích dẫn quan điểm và đối chiếu nhận định.",
    "examplesCount": 3,
    "totalQuestions": 11,
    "examples": [
      {
        "id": "r9_ex1",
        "exampleNum": 1,
        "title": "Example 1: Educating the Gifted (Matching People)",
        "instructions": "Match each statement with the correct person or people, A-D. Write the correct letter, A-D, in boxes 18-21. (Questions 18-21, Pages 48-49)\n\nList of People:\nA Shore and Kanevsky | B Elshout | C Simonton | D Boekaerts",
        "passage": {
          "title": "Educating the Gifted: Research and Perspectives",
          "paragraphs": [
            {
              "label": "A",
              "text": "Shore and Kanevsky's (1993) review of research on the thinking process of high achievers concludes that they demonstrate a great capacity to manage their own learning. However, exceptional ability is not only a matter of intellectual skills, but also involves personality factors like high motivation and independence."
            },
            {
              "label": "B",
              "text": "Conversely, teachers often spend unnecessary time providing exercises for gifted students who already produce highly accurate work without needing further drill. Elshout (1995) noted that once children demonstrate mastery, further practice yields diminishing returns."
            },
            {
              "label": "C",
              "text": "Simonton (1988) investigated creative geniuses and concluded that self-reliance and the capacity to persist independently seemed to contribute more to reaching the highest levels of expertise than raw talent. He also showed that really successful individuals have acquired an immense body of knowledge about their discipline over thousands of hours of immersion."
            },
            {
              "label": "D",
              "text": "In Boekaerts' (1991) review of the learning of very high IQ and highly achieving children, she found emotional forces in harness. Positive emotions facilitate learning, whereas fear inhibits it. Gifted children often have a strong desire to channel their curiosity and feelings to improve their learning efficiency and increase their own learning resources."
            }
          ]
        },
        "questions": [
          {
            "id": 18,
            "num": 18,
            "type": "matching-features",
            "options": [
              "A Shore and Kanevsky",
              "B Elshout",
              "C Simonton",
              "D Boekaerts"
            ],
            "questionText": "18. Less time can be spent on exercises with gifted pupils who produce accurate work.",
            "acceptableAnswers": [
              "B",
              "B Elshout",
              "Elshout"
            ],
            "explanation": "Đoạn B: 'Elshout (1995) noted that once children demonstrate mastery, further practice yields diminishing returns' -> B (Elshout).",
            "evidence": "Elshout (1995) noted that once children demonstrate mastery, further practice yields diminishing returns."
          },
          {
            "id": 19,
            "num": 19,
            "type": "matching-features",
            "options": [
              "A Shore and Kanevsky",
              "B Elshout",
              "C Simonton",
              "D Boekaerts"
            ],
            "questionText": "19. Self-reliance is a valuable tool that helps gifted students reach their goals.",
            "acceptableAnswers": [
              "C",
              "C Simonton",
              "Simonton"
            ],
            "explanation": "Đoạn C: 'Simonton (1988) investigated creative geniuses and concluded that self-reliance and the capacity to persist independently seemed to contribute more to reaching the highest levels of expertise' -> C (Simonton).",
            "evidence": "such as independence seemed to contribute more to reaching the highest levels of expertise than intellectual skills"
          },
          {
            "id": 20,
            "num": 20,
            "type": "matching-features",
            "options": [
              "A Shore and Kanevsky",
              "B Elshout",
              "C Simonton",
              "D Boekaerts"
            ],
            "questionText": "20. Gifted children know how to channel their feelings to assist their learning.",
            "acceptableAnswers": [
              "D",
              "D Boekaerts",
              "Boekaerts"
            ],
            "explanation": "Đoạn D: 'In Boekaerts’ (1991) review... she found emotional forces in harness... strong desire to control their environment, improve their learning efficiency' -> D (Boekaerts).",
            "evidence": "In Boekaerts ’ (1991) review of emotion the learning of very high IQ and highly achieving children, she found emotional forces in harness."
          },
          {
            "id": 21,
            "num": 21,
            "type": "matching-features",
            "options": [
              "A Shore and Kanevsky",
              "B Elshout",
              "C Simonton",
              "D Boekaerts"
            ],
            "questionText": "21. Really successful students have learnt a considerable amount about their subject.",
            "acceptableAnswers": [
              "C",
              "C Simonton",
              "Simonton"
            ],
            "explanation": "Đoạn C: Simonton khẳng định 'great demands of effort and time needed for learning and practice' dẫn đến việc tích lũy lượng kiến thức khổng lồ về chuyên ngành -> C (Simonton).",
            "evidence": "due to the great demands of effort and time needed for learning and practice. Creativity in all forms can be seen as expertise"
          }
        ],
        "vocabulary": [
          {
            "word": "self-reliance",
            "meaning": "Sự tự lực, tự chủ",
            "example": "Self-reliance allows gifted learners to explore complex problems alone."
          },
          {
            "word": "diminishing returns",
            "meaning": "Hiệu suất giảm dần theo quy luật biên",
            "example": "Excessive repetitive drills produce diminishing returns."
          },
          {
            "word": "in harness",
            "meaning": "Được kiểm soát và đưa vào sử dụng hiệu quả",
            "example": "Emotional energy was put in harness to fuel academic drive."
          }
        ]
      },
      {
        "id": "r9_ex2",
        "exampleNum": 2,
        "title": "Example 2: Second Nature (Personality Transformation)",
        "instructions": "Match each statement with the correct person, A-G. Write the correct letter, A-G, in boxes 19-22. (Questions 19-22, Pages 50-51)\n\nList of People:\nA Christopher Peterson | B David Fajgenbaum | C Suzanne Segerstrom | D Tanya Streeter | E Todd Kashdan | F Kenneth Pedeleose | G Cynthia Pury",
        "passage": {
          "title": "Second Nature: Can Personality Be Changed?",
          "paragraphs": [
            {
              "label": "A",
              "text": "Psychologists have discovered that deliberate practice can reshape habitual personality traits. Todd Kashdan, an expert on human curiosity at George Mason University, stresses that developing an open mind requires accepting initial discomfort: 'People must accept that they do not know much when first trying something new,' he observes."
            },
            {
              "label": "B",
              "text": "Optimism can also be cultivated. Christopher Peterson, a professor at the University of Michigan, suggests that training oneself to actively notice and document positive everyday events produces measurable long-term enhancements in emotional resilience and optimism."
            },
            {
              "label": "C",
              "text": "Courage is another trait that can be developed. Cynthia Pury, a psychologist at Clemson University, found that courage is rarely reckless bravado; rather, courage can be learned once people understand its roots in personal duty and a sense of responsibility towards others."
            },
            {
              "label": "D",
              "text": "Overcoming chronic fear is possible through behavioral exposure. Kenneth Pedeleose, an aerospace engineer who suffered from acute public-speaking dread, successfully retrained his nervous system by treating speaking engagements as technical challenges, showing that it is possible to conquer crippling shyness."
            }
          ]
        },
        "questions": [
          {
            "id": 19,
            "num": 19,
            "type": "matching-features",
            "options": [
              "A Christopher Peterson",
              "B David Fajgenbaum",
              "C Suzanne Segerstrom",
              "D Tanya Streeter",
              "E Todd Kashdan",
              "F Kenneth Pedeleose",
              "G Cynthia Pury"
            ],
            "questionText": "19. People must accept that they do not know much when first trying something new.",
            "acceptableAnswers": [
              "E",
              "E Todd Kashdan",
              "Todd Kashdan"
            ],
            "explanation": "Đoạn A: Todd Kashdan nêu rõ 'People must accept that they do not know much when first trying something new' -> E.",
            "evidence": "Todd Kashdan, an expert on human curiosity... 'People must accept that they do not know much when first trying something new'"
          },
          {
            "id": 20,
            "num": 20,
            "type": "matching-features",
            "options": [
              "A Christopher Peterson",
              "B David Fajgenbaum",
              "C Suzanne Segerstrom",
              "D Tanya Streeter",
              "E Todd Kashdan",
              "F Kenneth Pedeleose",
              "G Cynthia Pury"
            ],
            "questionText": "20. It is important for people to actively notice when good things happen.",
            "acceptableAnswers": [
              "A",
              "A Christopher Peterson",
              "Christopher Peterson"
            ],
            "explanation": "Đoạn B: Christopher Peterson đề xuất 'actively notice and document positive everyday events' -> A.",
            "evidence": "Christopher Peterson... suggests that training oneself to actively notice and document positive everyday events"
          },
          {
            "id": 21,
            "num": 21,
            "type": "matching-features",
            "options": [
              "A Christopher Peterson",
              "B David Fajgenbaum",
              "C Suzanne Segerstrom",
              "D Tanya Streeter",
              "E Todd Kashdan",
              "F Kenneth Pedeleose",
              "G Cynthia Pury"
            ],
            "questionText": "21. Courage can be learned once its origins in a sense of responsibility are understood.",
            "acceptableAnswers": [
              "G",
              "G Cynthia Pury",
              "Cynthia Pury"
            ],
            "explanation": "Đoạn C: Cynthia Pury phát hiện 'courage can be learned once people understand its roots in personal duty and a sense of responsibility towards others' -> G.",
            "evidence": "Cynthia Pury... found that... courage can be learned once people understand its roots in personal duty and a sense of responsibility"
          },
          {
            "id": 22,
            "num": 22,
            "type": "matching-features",
            "options": [
              "A Christopher Peterson",
              "B David Fajgenbaum",
              "C Suzanne Segerstrom",
              "D Tanya Streeter",
              "E Todd Kashdan",
              "F Kenneth Pedeleose",
              "G Cynthia Pury"
            ],
            "questionText": "22. It is possible to overcome shyness when faced with the need to speak in public.",
            "acceptableAnswers": [
              "F",
              "F Kenneth Pedeleose",
              "Kenneth Pedeleose"
            ],
            "explanation": "Đoạn D: Kenneth Pedeleose vượt qua nỗi sợ nói trước công chúng, chứng minh 'it is possible to conquer crippling shyness' -> F.",
            "evidence": "Kenneth Pedeleose, an aerospace engineer who suffered from acute public-speaking dread... conquer crippling shyness."
          }
        ],
        "vocabulary": [
          {
            "word": "bravado",
            "meaning": "Sự làm bộ can đảm, liều lĩnh mù quáng",
            "example": "True courage is grounded in responsibility, not reckless bravado."
          },
          {
            "word": "resilience",
            "meaning": "Khả năng kiên cường phục hồi tinh thần",
            "example": "Noticing daily positives builds emotional resilience."
          },
          {
            "word": "crippling shyness",
            "meaning": "Sự nhút nhát tê liệt, nghiêm trọng",
            "example": "Exposure therapy helped him overcome crippling shyness."
          }
        ]
      },
      {
        "id": "r9_ex3",
        "exampleNum": 3,
        "title": "Example 3: Advantages of Public Transport (Matching Cities)",
        "instructions": "Look at the following cities (Questions 11-13) and the list of descriptions below. Match each city with the correct description, A-F. (Questions 11-13, Pages 52-53)\n\nList of Descriptions:\nA successfully uses a light rail transport system in hilly environment\nB successful public transport system despite cold winters\nC profitably moved from road to light rail transport system\nD hilly and inappropriate for rail transport system\nE heavily dependent on cars despite widespread poverty\nF inefficient due to a limited public transport system",
        "passage": {
          "title": "Urban Transit: Comparing World Cities",
          "paragraphs": [
            {
              "label": "A",
              "text": "Some urban planners argue that geography or climate dictate transport choices. For instance, in hilly Auckland, officials claimed the steep terrain made rail impractical, leaving the city heavily dependent on roads and buses (Description D)."
            },
            {
              "label": "B",
              "text": "Meanwhile, Australian cities like Perth invested predominantly in highway networks and sprawling freeways, creating an inefficient, car-dependent urban layout with minimal public transit options (Description F)."
            },
            {
              "label": "C",
              "text": "In sharp contrast, Portland, Oregon, redirected highway expansion funding into an integrated light rail transit network. The move stimulated immense downtown development, proved highly lucrative, and dramatically cut inner-city congestion (Description C)."
            }
          ]
        },
        "questions": [
          {
            "id": 11,
            "num": 11,
            "type": "matching-features",
            "options": [
              "A successfully uses a light rail in hilly environment",
              "B successful system despite cold winters",
              "C profitably moved from road to light rail",
              "D hilly and inappropriate for rail",
              "E heavily dependent on cars despite poverty",
              "F inefficient due to a limited public transport system"
            ],
            "questionText": "11. Perth",
            "acceptableAnswers": [
              "F",
              "F inefficient due to a limited public transport system"
            ],
            "explanation": "Đoạn B: Perth đầu tư vào xa lộ cao tốc, tạo ra hệ thống giao thông kém hiệu quả do phương tiện công cộng quá hạn chế -> F.",
            "evidence": "invested predominantly in highway networks... creating an inefficient, car-dependent urban layout with minimal public transit options"
          },
          {
            "id": 12,
            "num": 12,
            "type": "matching-features",
            "options": [
              "A successfully uses a light rail in hilly environment",
              "B successful system despite cold winters",
              "C profitably moved from road to light rail",
              "D hilly and inappropriate for rail",
              "E heavily dependent on cars despite poverty",
              "F inefficient due to a limited public transport system"
            ],
            "questionText": "12. Auckland",
            "acceptableAnswers": [
              "D",
              "D hilly and inappropriate for rail transport system"
            ],
            "explanation": "Đoạn A: Địa hình đồi dốc của Auckland khiến người ta cho rằng đường sắt không phù hợp -> D.",
            "evidence": "hilly Auckland, officials claimed the steep terrain made rail impractical"
          },
          {
            "id": 13,
            "num": 13,
            "type": "matching-features",
            "options": [
              "A successfully uses a light rail in hilly environment",
              "B successful system despite cold winters",
              "C profitably moved from road to light rail",
              "D hilly and inappropriate for rail",
              "E heavily dependent on cars despite poverty",
              "F inefficient due to a limited public transport system"
            ],
            "questionText": "13. Portland",
            "acceptableAnswers": [
              "C",
              "C profitably moved from road to light rail transport system"
            ],
            "explanation": "Đoạn C: Portland chuyển tiền từ đường bộ sang đường sắt nhẹ một cách sinh lời và thành công rực rỡ -> C.",
            "evidence": "Portland, Oregon, redirected highway expansion funding into an integrated light rail transit network... proved highly lucrative"
          }
        ],
        "vocabulary": [
          {
            "word": "light rail",
            "meaning": "Hệ thống đường sắt nhẹ / tàu điện nội đô",
            "example": "Light rail reduced highway traffic and carbon emissions."
          },
          {
            "word": "terrain",
            "meaning": "Địa hình địa thế",
            "example": "Rugged terrain complicates transportation infrastructure."
          },
          {
            "word": "lucrative",
            "meaning": "Sinh lời cao, mang lại nhiều lợi nhuận",
            "example": "Urban transit investments proved commercially lucrative."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_10",
    "lessonNum": 10,
    "code": "V12",
    "title": "V12 – MATCHING SENTENCE ENDINGS",
    "shortTitle": "Nối Nửa Câu Hoàn Chỉnh",
    "category": "matching",
    "categoryLabel": "Dạng Bài Nối Thông Tin",
    "badge": "Ngữ pháp & Logic",
    "description": "Chiến thuật ghép vế đầu với phần kết thúc phù hợp (A-G): kết hợp quy tắc ngữ pháp (chia động từ, liên từ) và ý nghĩa logic mạch lạc.",
    "examplesCount": 3,
    "totalQuestions": 13,
    "examples": [
      {
        "id": "r10_ex1",
        "exampleNum": 1,
        "title": "Example 1: What’s So Funny? (The Science of Humour)",
        "instructions": "Complete each sentence with the correct ending, A-G, below. Write the correct letter, A-G, in boxes 24-27. (Questions 24-27, Pages 54-55)\n\nEndings:\nA react to their own thoughts.\nB helped create language in humans.\nC respond instantly to whatever is happening.\nD may provide valuable information about the operation of the brain.\nE cope with difficult situations.\nF relate to a person’s subjective views.\nG led our ancestors to smile and then laugh.",
        "passage": {
          "title": "What’s So Funny? Research on Humour",
          "paragraphs": [
            {
              "label": "A",
              "text": "Making a rapid emotional assessment of the events of the moment is an extremely demanding job for the brain, animal or human. Energy and arousal levels may need to be retuned in the blink of an eye. These abrupt changes will produce either positive or negative feelings. The orbital cortex, the region that becomes active in Goel's experiment, seems the best candidate for the site that feeds such feelings into higher-level thought processes."
            },
            {
              "label": "B",
              "text": "All warm-blooded animals make constant tiny adjustments in arousal in response to external events, but humans, who have developed a much more complicated internal life as a result of language, respond emotionally not only to their surroundings, but to their own thoughts. Whenever a sought-for answer snaps into place, there is a shudder of pleased recognition. Creative discovery being pleasurable, humans have learned to find ways of milking this natural response. The fact that jokes tap into our general evaluative machinery explains why the line between funny and disgusting, or funny and frightening, can be so fine. Whether a joke gives pleasure or pain depends on a person's outlook."
            },
            {
              "label": "C",
              "text": "Humour may be a luxury, but the mechanism behind it is no evolutionary accident. As Peter Derks, a psychologist at William and Mary College in Virginia, says: 'I like to think of humour as the distorted mirror of the mind. It's creative, perceptual, analytical and lingual.'"
            }
          ]
        },
        "questions": [
          {
            "id": 24,
            "num": 24,
            "type": "matching-endings",
            "options": [
              "A react to their own thoughts.",
              "B helped create language in humans.",
              "C respond instantly to whatever is happening.",
              "D may provide valuable information about the brain.",
              "E cope with difficult situations.",
              "F relate to a person’s subjective views.",
              "G led our ancestors to smile and laugh."
            ],
            "questionText": "24. One of the brain’s most difficult tasks is to",
            "acceptableAnswers": [
              "C",
              "C respond instantly to whatever is happening."
            ],
            "explanation": "Đoạn A: 'Making a rapid emotional assessment of the events of the moment is an extremely demanding job for the brain... retuned in the blink of an eye' -> respond instantly to whatever is happening -> C.",
            "evidence": "Making a rapid emotional assessment of the events of the moment is an extremely demanding job for the brain"
          },
          {
            "id": 25,
            "num": 25,
            "type": "matching-endings",
            "options": [
              "A react to their own thoughts.",
              "B helped create language in humans.",
              "C respond instantly to whatever is happening.",
              "D may provide valuable information about the brain.",
              "E cope with difficult situations.",
              "F relate to a person’s subjective views.",
              "G led our ancestors to smile and laugh."
            ],
            "questionText": "25. Because of the language they have developed, humans",
            "acceptableAnswers": [
              "A",
              "A react to their own thoughts."
            ],
            "explanation": "Đoạn B: 'humans, who have developed a much more complicated internal life as a result of language, respond emotionally not only to their surroundings, but to their own thoughts.' -> A.",
            "evidence": "humans, who have developed a much more complicated internal life as a result of language, respond emotionally not only to their surroundings, but to their own thoughts."
          },
          {
            "id": 26,
            "num": 26,
            "type": "matching-endings",
            "options": [
              "A react to their own thoughts.",
              "B helped create language in humans.",
              "C respond instantly to whatever is happening.",
              "D may provide valuable information about the brain.",
              "E cope with difficult situations.",
              "F relate to a person’s subjective views.",
              "G led our ancestors to smile and laugh."
            ],
            "questionText": "26. Individual responses to humour",
            "acceptableAnswers": [
              "F",
              "F relate to a person’s subjective views."
            ],
            "explanation": "Đoạn B: 'Whether a joke gives pleasure or pain depends on a person's outlook.' (outlook = subjective views) -> F.",
            "evidence": "Whether a joke gives pleasure or pain depends on a person's outlook."
          },
          {
            "id": 27,
            "num": 27,
            "type": "matching-endings",
            "options": [
              "A react to their own thoughts.",
              "B helped create language in humans.",
              "C respond instantly to whatever is happening.",
              "D may provide valuable information about the brain.",
              "E cope with difficult situations.",
              "F relate to a person’s subjective views.",
              "G led our ancestors to smile and laugh."
            ],
            "questionText": "27. Peter Derks believes that humour",
            "acceptableAnswers": [
              "D",
              "D may provide valuable information about the operation of the brain."
            ],
            "explanation": "Đoạn C: Derks coi khiếu hài hước như 'distorted mirror of the mind' phản ánh các cơ chế tư duy sáng tạo, phân tích ngôn ngữ của não bộ -> D.",
            "evidence": "I like to think of humour as the distorted mirror of the mind. It's creative, perceptual, analytical and lingual."
          }
        ],
        "vocabulary": [
          {
            "word": "arousal",
            "meaning": "Mức độ kích thích, cảnh giác sinh học",
            "example": "Tiny shifts in arousal prepare animals for flight or fight."
          },
          {
            "word": "outlook",
            "meaning": "Nhãn quan, cái nhìn chủ quan của mỗi người",
            "example": "Humour interpretation depends heavily on personal outlook."
          },
          {
            "word": "distorted mirror",
            "meaning": "Tấm gương phản chiếu méo mó nhưng chân thực",
            "example": "Humour acts as a distorted mirror of human cognitive quirks."
          }
        ]
      },
      {
        "id": "r10_ex2",
        "exampleNum": 2,
        "title": "Example 2: The Greying Population (Exercise and Ageing)",
        "instructions": "Complete each sentence with the correct ending, A-H, below. Write the correct letter, A-H, in boxes 23-26. (Questions 23-26, Pages 56-57)\n\nEndings:\nA may cause heart disease.\nB can be helped by hormone treatment.\nC may cause rises in levels of stress hormones.\nD have cost the United States government more than $200 billion.\nE may help prevent mental decline.\nF may get stronger at night.\nG allow old people to be more independent.\nH can reduce stress in difficult situations.",
        "passage": {
          "title": "The Greying Population Stays Active",
          "paragraphs": [
            {
              "label": "A",
              "text": "Simple technological innovations and home medical aids – from walking frames to raised toilet seats – have dramatically transformed geriatric care, allowing old people to manage their daily routines without constant institutional reliance (Endings G)."
            },
            {
              "label": "B",
              "text": "Physical activity also yields profound neurological dividends. Laboratory experiments demonstrate that regular aerobic exercise elevates levels of brain-derived neurotrophic factor, fostering synaptic plasticity and guarding against cognitive and mental decline in later life (Endings E)."
            },
            {
              "label": "C",
              "text": "Furthermore, psychological autonomy is essential. Elderly people who retain feelings of control over their living environment demonstrate lower blood pressure and reduced stress when confronted with demanding situations (Endings H)."
            },
            {
              "label": "D",
              "text": "In contrast, loneliness poses acute biological hazards. Epidemiologist Teresa Seeman found that elderly individuals suffering from social and emotional isolation exhibit significantly elevated levels of circulating stress hormones, even during sleep (Endings C)."
            }
          ]
        },
        "questions": [
          {
            "id": 23,
            "num": 23,
            "type": "matching-endings",
            "options": [
              "A may cause heart disease.",
              "B can be helped by hormone treatment.",
              "C may cause rises in levels of stress hormones.",
              "D have cost US government billions.",
              "E may help prevent mental decline.",
              "F may get stronger at night.",
              "G allow old people to be more independent.",
              "H can reduce stress in difficult situations."
            ],
            "questionText": "23. Home medical aids",
            "acceptableAnswers": [
              "G",
              "G allow old people to be more independent."
            ],
            "explanation": "Đoạn A: Thiết bị y tế gia đình giúp người già tự chủ, độc lập hơn trong sinh hoạt hàng ngày -> G.",
            "evidence": "allowing old people to manage their daily routines without constant institutional reliance"
          },
          {
            "id": 24,
            "num": 24,
            "type": "matching-endings",
            "options": [
              "A may cause heart disease.",
              "B can be helped by hormone treatment.",
              "C may cause rises in levels of stress hormones.",
              "D have cost US government billions.",
              "E may help prevent mental decline.",
              "F may get stronger at night.",
              "G allow old people to be more independent.",
              "H can reduce stress in difficult situations."
            ],
            "questionText": "24. Regular amounts of exercise",
            "acceptableAnswers": [
              "E",
              "E may help prevent mental decline."
            ],
            "explanation": "Đoạn B: Tập thể dục thường xuyên kích thích yếu tố dinh dưỡng thần kinh não, ngăn ngừa suy giảm nhận thức / tinh thần -> E.",
            "evidence": "fostering synaptic plasticity and guarding against cognitive and mental decline in later life"
          },
          {
            "id": 25,
            "num": 25,
            "type": "matching-endings",
            "options": [
              "A may cause heart disease.",
              "B can be helped by hormone treatment.",
              "C may cause rises in levels of stress hormones.",
              "D have cost US government billions.",
              "E may help prevent mental decline.",
              "F may get stronger at night.",
              "G allow old people to be more independent.",
              "H can reduce stress in difficult situations."
            ],
            "questionText": "25. Feelings of control over life",
            "acceptableAnswers": [
              "H",
              "H can reduce stress in difficult situations."
            ],
            "explanation": "Đoạn C: Cảm giác làm chủ cuộc sống giúp giảm căng thẳng khi đối mặt với những hoàn cảnh khó khăn -> H.",
            "evidence": "demonstrate lower blood pressure and reduced stress when confronted with demanding situations"
          },
          {
            "id": 26,
            "num": 26,
            "type": "matching-endings",
            "options": [
              "A may cause heart disease.",
              "B can be helped by hormone treatment.",
              "C may cause rises in levels of stress hormones.",
              "D have cost US government billions.",
              "E may help prevent mental decline.",
              "F may get stronger at night.",
              "G allow old people to be more independent.",
              "H can reduce stress in difficult situations."
            ],
            "questionText": "26. Feelings of loneliness",
            "acceptableAnswers": [
              "C",
              "C may cause rises in levels of stress hormones."
            ],
            "explanation": "Đoạn D: Cảm giác cô đơn và cô lập xã hội khiến nồng độ hormone gây căng thẳng tăng cao, ngay cả khi ngủ -> C.",
            "evidence": "elderly individuals suffering from social and emotional isolation exhibit significantly elevated levels of circulating stress hormones, even during sleep"
          }
        ],
        "vocabulary": [
          {
            "word": "geriatric",
            "meaning": "Thuộc về y khoa người cao tuổi",
            "example": "Geriatric care increasingly emphasizes independent living."
          },
          {
            "word": "neurotrophic",
            "meaning": "Dinh dưỡng thần kinh",
            "example": "Exercise releases neurotrophic factors that protect brain synapses."
          },
          {
            "word": "autonomy",
            "meaning": "Khả năng tự quyết, độc lập",
            "example": "Preserving psychological autonomy enhances longevity."
          }
        ]
      },
      {
        "id": "r10_ex3",
        "exampleNum": 3,
        "title": "Example 3: The Psychology of Innovation",
        "instructions": "Complete each sentence with the correct ending, A-G, below. Write the correct letter, A-G, in boxes 31-35. (Questions 31-35, Pages 58-59)\n\nEndings:\nA take chances.\nB share their ideas.\nC become competitive.\nD get promotion.\nE avoid risk.\nF ignore their duties.\nG remain in their jobs.",
        "passage": {
          "title": "The Psychology of Innovation",
          "paragraphs": [
            {
              "label": "A",
              "text": "For Robert B. Cialdini, Professor of Psychology at Arizona State University, one reason that companies don’t succeed as often as they should is that innovation starts with recruitment. Research shows that the fit between an employee’s values and a company’s values makes a difference to what contribution they make and whether, two years after they join, they’re still at the company."
            },
            {
              "label": "B",
              "text": "The value fit matters, says Cialdini, because innovation is, in part, a process of change, and under that pressure we, as a species, behave differently: ‘When things change, we are hard-wired to play it safe.’ Managers should therefore adopt an approach that appears counterintuitive – they should explain what stands to be lost if the company fails to seize a particular opportunity. Studies show that we invariably take more gambles when threatened with a loss than when offered a reward."
            },
            {
              "label": "C",
              "text": "Authority doesn’t have to inhibit innovation but it often does. The wrong kind of leadership will lead to what Cialdini calls 'captainitis, the regrettable tendency of team members to opt out of team responsibilities that are properly theirs'. Crew members exhibit deadly passivity when an overbearing leader dominates."
            },
            {
              "label": "D",
              "text": "At the other end of the scale is the 1980s Memphis design collective, a group of young designers for whom 'the only rule was that there were no rules'. This environment encouraged a free interchange of ideas, which led to more creativity with form, function, colour and materials that revolutionised attitudes to furniture design."
            }
          ]
        },
        "questions": [
          {
            "id": 31,
            "num": 31,
            "type": "matching-endings",
            "options": [
              "A take chances.",
              "B share their ideas.",
              "C become competitive.",
              "D get promotion.",
              "E avoid risk.",
              "F ignore their duties.",
              "G remain in their jobs."
            ],
            "questionText": "31. Employees whose values match those of their employers are more likely to",
            "acceptableAnswers": [
              "G",
              "G remain in their jobs."
            ],
            "explanation": "Đoạn A: 'fit between an employee’s values and a company’s values makes a difference to... whether, two years after they join, they’re still at the company' -> G (remain in their jobs).",
            "evidence": "whether, two years after they join, they’re still at the company"
          },
          {
            "id": 32,
            "num": 32,
            "type": "matching-endings",
            "options": [
              "A take chances.",
              "B share their ideas.",
              "C become competitive.",
              "D get promotion.",
              "E avoid risk.",
              "F ignore their duties.",
              "G remain in their jobs."
            ],
            "questionText": "32. At times of change, people tend to",
            "acceptableAnswers": [
              "E",
              "E avoid risk."
            ],
            "explanation": "Đoạn B: 'When things change, we are hard-wired to play it safe.' (play it safe = avoid risk) -> E.",
            "evidence": "When things change, we are hard-wired to play it safe ."
          },
          {
            "id": 33,
            "num": 33,
            "type": "matching-endings",
            "options": [
              "A take chances.",
              "B share their ideas.",
              "C become competitive.",
              "D get promotion.",
              "E avoid risk.",
              "F ignore their duties.",
              "G remain in their jobs."
            ],
            "questionText": "33. If people are aware of what they might lose, they will often",
            "acceptableAnswers": [
              "A",
              "A take chances."
            ],
            "explanation": "Đoạn B: 'Studies show that we invariably take more gambles when threatened with a loss' (take more gambles = take chances) -> A.",
            "evidence": "Studies show that we invariably take more gambles when threatened with a loss than when offered a reward."
          },
          {
            "id": 34,
            "num": 34,
            "type": "matching-endings",
            "options": [
              "A take chances.",
              "B share their ideas.",
              "C become competitive.",
              "D get promotion.",
              "E avoid risk.",
              "F ignore their duties.",
              "G remain in their jobs."
            ],
            "questionText": "34. People working under a dominant boss are liable to",
            "acceptableAnswers": [
              "F",
              "F ignore their duties."
            ],
            "explanation": "Đoạn C: 'captainitis, the regrettable tendency of team members to opt out of team responsibilities that are properly theirs' (opt out of responsibilities = ignore their duties) -> F.",
            "evidence": "tendency of team members to opt out of team responsibilities that are properly their"
          },
          {
            "id": 35,
            "num": 35,
            "type": "matching-endings",
            "options": [
              "A take chances.",
              "B share their ideas.",
              "C become competitive.",
              "D get promotion.",
              "E avoid risk.",
              "F ignore their duties.",
              "G remain in their jobs."
            ],
            "questionText": "35. Employees working in organisations with few rules are more likely to",
            "acceptableAnswers": [
              "B",
              "B share their ideas."
            ],
            "explanation": "Đoạn D: 'there were no rules... This environment encouraged a free interchange of ideas' (free interchange of ideas = share their ideas) -> B.",
            "evidence": "This environment encouraged a free interchange of ideas , which led to more creativity"
          }
        ],
        "vocabulary": [
          {
            "word": "captainitis",
            "meaning": "Hội chứng phục tùng mù quáng người lãnh đạo độc đoán",
            "example": "Captainitis prevents crew members from questioning dangerous mistakes."
          },
          {
            "word": "counterintuitive",
            "meaning": "Đi ngược lại trực giác thông thường",
            "example": "Focusing on potential losses sounds counterintuitive but works."
          },
          {
            "word": "interchange",
            "meaning": "Sự trao đổi qua lại tự do",
            "example": "Open desks foster a dynamic interchange of creative solutions."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_11",
    "lessonNum": 11,
    "code": "V13",
    "title": "V13 – MATCHING HEADINGS",
    "shortTitle": "Nối Tiêu Đề Đoạn Văn",
    "category": "matching",
    "categoryLabel": "Dạng Bài Nối Thông Tin",
    "badge": "Toàn cảnh đoạn văn",
    "description": "Chiến thuật tìm ý chính (Main Idea) của đoạn văn, phân biệt giữa tiểu tiết (details/examples) và chủ đề cốt lõi (heading). 3 bài đọc Cambridge IELTS trọn vẹn.",
    "examplesCount": 3,
    "totalQuestions": 19,
    "examples": [
      {
        "id": "r11_ex1",
        "exampleNum": 1,
        "title": "Example 1: Tea and the Industrial Revolution (Headings i-ix)",
        "instructions": "Reading Passage 1 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below. (Questions 1-7, Pages 60-63)\n\nList of Headings:\ni The search for the reasons for an increase in population\nii Industrialisation and the fear of unemployment\niii The development of cities in Japan\niv The time and place of the Industrial Revolution\nv The cases of Holland, France and China\nvi Changes in drinking habits in Britain\nvii Two keys to Britain’s industrial revolution\nviii Conditions required for industrialisation\nix Comparisons with Japan lead to the answer",
        "passage": {
          "title": "Tea and the Industrial Revolution",
          "paragraphs": [
            {
              "label": "A",
              "text": "Alan Macfarlane, professor of anthropological science at King’s College, Cambridge, has spent 15 years looking into the enigma of the Industrial Revolution. Why did this particular Big Bang – the world-changing event that heralded the modern era – occur in Britain, and why did it strike at the precise moment it did around the mid-18th century?"
            },
            {
              "label": "B",
              "text": "Macfarlane compares the puzzle to a combination lock. ‘There are about 20 different factors and all of them need to be present before the revolution can happen,’ he says. For industry to take off, there needs to be the technology and power to drive factories, large urban populations to provide cheap labour, easy transport to move goods around, an affluent middle-class willing to buy mass-produced objects, a market-driven economy and a political system that allows this to happen. All these factors must have been necessary but not sufficient to open the lock."
            },
            {
              "label": "C",
              "text": "The missing factors, he proposes, are to be found in almost every kitchen cupboard. Tea and beer, two of the nation’s favourite drinks, fuelled the revolution. The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer – plus the fact that both are made with boiled water – allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery."
            },
            {
              "label": "D",
              "text": "Macfarlane had wondered for a long time how the Industrial Revolution came about. Between about 1650 and 1740, the population in Britain was static. But then there was a burst in population growth: the infant mortality rate halved in the space of 20 years. Historians tried to explain this sudden surge: Was it medical science? No. Environmental sanitation? No. Better food? The statistics show food actually got worse. Efforts to explain this sudden reduction in child deaths appeared to draw a blank."
            },
            {
              "label": "E",
              "text": "This population burst provided labour for the Industrial Revolution. What the British were drinking was key. For a long time, the English were protected by the antibacterial agent in hops in beer. But in the late 17th century a tax was introduced on malt. The poor turned to water and gin, and in the 1720s mortality rose again. Then, in the late 1730s, tea arrived from China, becoming cheap and widely consumed, replacing gin and restoring health."
            },
            {
              "label": "F",
              "text": "Macfarlane looked to Japan for confirmation. Japan was also developing large cities and had high literacy and flourishing markets, but it did not have an industrial revolution. However, Japan also drank green tea extensively, which protected against water-borne disease even without keeping livestock or drinking milk. Comparing Britain to Japan helped solve the puzzle."
            },
            {
              "label": "G",
              "text": "Why then did Britain industrialise while Japan did not? Britain had plenty of labour and abandoned manual labour in favour of machines. Japan, which had a dense population and limited land, avoided labour-saving machinery because of a fear of unemployment, putting all its energy into intensive agriculture instead."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "1. Paragraph A",
            "acceptableAnswers": [
              "iv",
              "Heading iv",
              "iv The time and place of the Industrial Revolution"
            ],
            "explanation": "Đoạn A đặt vấn đề tại sao Cách mạng Công nghiệp lại xảy ra ở Anh và đúng thời điểm giữa thế kỷ 18 -> Heading iv (The time and place of the Industrial Revolution).",
            "evidence": "Why did this particular Big Bang... occur in Britain, and why did it strike at the precise moment it did"
          },
          {
            "id": 2,
            "num": 2,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "2. Paragraph B",
            "acceptableAnswers": [
              "viii",
              "Heading viii",
              "viii Conditions required for industrialisation"
            ],
            "explanation": "Đoạn B liệt kê 20 yếu tố và điều kiện tiên quyết cần thiết để công nghiệp hóa có thể cất cánh -> Heading viii (Conditions required for industrialisation).",
            "evidence": "There are about 20 different factors and all of them need to be present before the revolution can happen"
          },
          {
            "id": 3,
            "num": 3,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "3. Paragraph C",
            "acceptableAnswers": [
              "vii",
              "Heading vii",
              "vii Two keys to Britain’s industrial revolution"
            ],
            "explanation": "Đoạn C giới thiệu hai chìa khóa bất ngờ: trà và bia (hai thức uống hàng đầu giúp ngăn ngừa bệnh tật) -> Heading vii (Two keys to Britain’s industrial revolution).",
            "evidence": "Tea and beer, two of the nation’s favourite drinks, fuelled the revolution ."
          },
          {
            "id": 4,
            "num": 4,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "4. Paragraph D",
            "acceptableAnswers": [
              "i",
              "Heading i",
              "i The search for the reasons for an increase in population"
            ],
            "explanation": "Đoạn D mô tả nỗ lực của các nhà sử học trong việc đi tìm lý do cho sự bùng nổ dân số và giảm tỷ lệ tử vong ở trẻ sơ sinh -> Heading i (The search for the reasons for an increase in population).",
            "evidence": "Efforts to explain this sudden reduction in child deaths appeared to draw a blank ."
          },
          {
            "id": 5,
            "num": 5,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "5. Paragraph E",
            "acceptableAnswers": [
              "vi",
              "Heading vi",
              "vi Changes in drinking habits in Britain"
            ],
            "explanation": "Đoạn E phân tích sự thay đổi thói quen uống của người Anh từ bia sang nước/rượu gin rồi sang trà -> Heading vi (Changes in drinking habits in Britain).",
            "evidence": "The poor turned to water and gin... Then it suddenly dropped again. What caused this?"
          },
          {
            "id": 6,
            "num": 6,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "6. Paragraph F",
            "acceptableAnswers": [
              "ix",
              "Heading ix",
              "ix Comparisons with Japan lead to the answer"
            ],
            "explanation": "Đoạn F so sánh nước Anh với trường hợp của Nhật Bản để khẳng định vai trò của trà -> Heading ix (Comparisons with Japan lead to the answer).",
            "evidence": "Macfarlane looked to Japan for confirmation... Comparing Britain to Japan helped solve the puzzle."
          },
          {
            "id": 7,
            "num": 7,
            "type": "matching-headings",
            "options": [
              "i The search for reasons for population increase",
              "ii Industrialisation and the fear of unemployment",
              "iii Development of cities in Japan",
              "iv The time and place of the Industrial Revolution",
              "v The cases of Holland, France and China",
              "vi Changes in drinking habits in Britain",
              "vii Two keys to Britain’s industrial revolution",
              "viii Conditions required for industrialisation",
              "ix Comparisons with Japan lead to the answer"
            ],
            "questionText": "7. Paragraph G",
            "acceptableAnswers": [
              "ii",
              "Heading ii",
              "ii Industrialisation and the fear of unemployment"
            ],
            "explanation": "Đoạn G giải thích Nhật Bản tránh dùng máy móc vì lo ngại thất nghiệp của người dân -> Heading ii (Industrialisation and the fear of unemployment).",
            "evidence": "avoided labour-saving machinery because of a fear of unemployment"
          }
        ],
        "vocabulary": [
          {
            "word": "herald",
            "meaning": "Báo hiệu sự mở đầu của một kỷ nguyên mới",
            "example": "The steam engine heralded the modern industrial era."
          },
          {
            "word": "combination lock",
            "meaning": "Khóa số nhiều tầng bảo mật",
            "example": "History is like a combination lock where all wheels must align."
          },
          {
            "word": "mortality rate",
            "meaning": "Tỷ lệ tử vong",
            "example": "Boiled beverages halved the infant mortality rate."
          }
        ]
      },
      {
        "id": "r11_ex2",
        "exampleNum": 2,
        "title": "Example 2: The Context, Meaning and Scope of Tourism (Headings i-viii)",
        "instructions": "Choose the correct heading for paragraphs B-E from the list of headings below. (Questions 1-4, Pages 64-67)\n(Paragraph A is Example: heading viii 'The history of travel')\n\nList of Headings:\ni Economic and social significance of tourism\nii The development of mass tourism\niii Travel for the wealthy\niv Earning foreign exchange through tourism\nv Difficulty in recognising the economic effects of tourism\nvi The contribution of air travel to tourism\nvii The world impact of tourism\nviii The history of travel",
        "passage": {
          "title": "The Context, Meaning and Scope of Tourism",
          "paragraphs": [
            {
              "label": "A",
              "text": "Travel has existed since the earliest human civilisations. In ancient Greece and Rome, people traveled for trade, religious pilgrimages, or health cures at mineral spas. During the Middle Ages, religious pilgrimages became the dominant form of journeying, while the Grand Tour of the 17th and 18th centuries provided an aristocratic education for the wealthy young elite."
            },
            {
              "label": "B",
              "text": "However, the advent of the industrial revolution, railway networks, and later commercial aviation completely transformed leisure travel from an elite luxury into a mass global phenomenon. Packaged holidays, pioneered by Thomas Cook in the mid-19th century, made travel affordable and accessible to millions of middle- and working-class families across Europe and America."
            },
            {
              "label": "C",
              "text": "Today, tourism has become one of the world's greatest economic juggernauts. It produces over 6 percent of global gross domestic product, generates millions of jobs, and represents the foremost export earner for dozens of developing nations. Its footprint spans every continent, influencing global infrastructure, communication, and international diplomacy."
            },
            {
              "label": "D",
              "text": "Yet measuring tourism's true macroeconomic impact is notoriously challenging. Because tourists spend money across multiple fragmented sectors – from taxicabs and grocery stores to hotels and souvenir stalls – official statistics often fail to capture the full ripple effect of tourism expenditures throughout an economy."
            },
            {
              "label": "E",
              "text": "Beyond pure economics, tourism exerts profound socio-cultural consequences. It promotes cross-cultural understanding, revives traditional folk crafts, and justifies the preservation of natural wilderness areas. Conversely, unchecked overtourism can strain municipal resources, commodify heritage, and displace local residents."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "matching-headings",
            "options": [
              "i Economic and social significance of tourism",
              "ii The development of mass tourism",
              "iii Travel for the wealthy",
              "iv Earning foreign exchange through tourism",
              "v Difficulty in recognising economic effects",
              "vi Contribution of air travel",
              "vii The world impact of tourism",
              "viii The history of travel"
            ],
            "questionText": "1. Paragraph B",
            "acceptableAnswers": [
              "ii",
              "Heading ii",
              "ii The development of mass tourism"
            ],
            "explanation": "Đoạn B mô tả sự chuyển biến từ du lịch quý tộc sang du lịch đại chúng cho hàng triệu người nhờ đường sắt và Thomas Cook -> Heading ii (The development of mass tourism).",
            "evidence": "transformed leisure travel from an elite luxury into a mass global phenomenon. Packaged holidays... made travel affordable and accessible to millions"
          },
          {
            "id": 2,
            "num": 2,
            "type": "matching-headings",
            "options": [
              "i Economic and social significance of tourism",
              "ii The development of mass tourism",
              "iii Travel for the wealthy",
              "iv Earning foreign exchange through tourism",
              "v Difficulty in recognising economic effects",
              "vi Contribution of air travel",
              "vii The world impact of tourism",
              "viii The history of travel"
            ],
            "questionText": "2. Paragraph C",
            "acceptableAnswers": [
              "vii",
              "Heading vii",
              "vii The world impact of tourism"
            ],
            "explanation": "Đoạn C trình bày quy mô và tác động to lớn của ngành du lịch trên phạm vi toàn thế giới (chiếm hơn 6% GDP toàn cầu) -> Heading vii (The world impact of tourism).",
            "evidence": "tourism has become one of the world's greatest economic juggernauts. It produces over 6 percent of global gross domestic product"
          },
          {
            "id": 3,
            "num": 3,
            "type": "matching-headings",
            "options": [
              "i Economic and social significance of tourism",
              "ii The development of mass tourism",
              "iii Travel for the wealthy",
              "iv Earning foreign exchange through tourism",
              "v Difficulty in recognising economic effects",
              "vi Contribution of air travel",
              "vii The world impact of tourism",
              "viii The history of travel"
            ],
            "questionText": "3. Paragraph D",
            "acceptableAnswers": [
              "v",
              "Heading v",
              "v Difficulty in recognising the economic effects of tourism"
            ],
            "explanation": "Đoạn D giải thích sự khó khăn trong việc đo lường và nhận diện chính xác các tác động kinh tế của du lịch -> Heading v (Difficulty in recognising the economic effects of tourism).",
            "evidence": "measuring tourism's true macroeconomic impact is notoriously challenging... official statistics often fail to capture"
          },
          {
            "id": 4,
            "num": 4,
            "type": "matching-headings",
            "options": [
              "i Economic and social significance of tourism",
              "ii The development of mass tourism",
              "iii Travel for the wealthy",
              "iv Earning foreign exchange through tourism",
              "v Difficulty in recognising economic effects",
              "vi Contribution of air travel",
              "vii The world impact of tourism",
              "viii The history of travel"
            ],
            "questionText": "4. Paragraph E",
            "acceptableAnswers": [
              "i",
              "Heading i",
              "i Economic and social significance of tourism"
            ],
            "explanation": "Đoạn E phân tích ý nghĩa văn hóa - xã hội sâu rộng của du lịch ngoài khía cạnh kinh tế thuần túy -> Heading i (Economic and social significance of tourism).",
            "evidence": "Beyond pure economics, tourism exerts profound socio-cultural consequences. It promotes cross-cultural understanding"
          }
        ],
        "vocabulary": [
          {
            "word": "juggernaut",
            "meaning": "Thế lực khổng lồ, lực lượng không thể ngăn cản",
            "example": "Global tourism has evolved into an economic juggernaut."
          },
          {
            "word": "fragmented",
            "meaning": "Rời rạc, phân mảnh thành nhiều mảng nhỏ",
            "example": "Tourist expenditures flow through fragmented service businesses."
          },
          {
            "word": "commodify",
            "meaning": "Thương mại hóa, biến văn hóa thành hàng hóa",
            "example": "Overtourism can commodify sacred cultural rituals."
          }
        ]
      },
      {
        "id": "r11_ex3",
        "exampleNum": 3,
        "title": "Example 3: European Transport Systems 1990–2010 (Headings i-xi)",
        "instructions": "Reading Passage 2 has nine paragraphs, A-I. Choose the correct heading for paragraphs A-E and G-I from the list of headings below. (Questions 14-21, Pages 68-71)\n\nList of Headings:\ni A fresh and important long-term goal\nii Charging for roads and improving other transport methods\niii Changes affecting the distances goods may be transported\niv Taking all the steps necessary to change transport patterns\nv The environmental costs of road transport\nvi The escalating cost of rail transport\nvii The need to achieve transport rebalance\nviii The rapid growth of private transport\nix Plans to develop major road networks\nx Restricting road use through charging policies alone\nxi Transport trends in countries awaiting EU admission",
        "passage": {
          "title": "European Transport Systems 1990–2010",
          "paragraphs": [
            {
              "label": "A",
              "text": "It is difficult to conceive of vigorous economic growth without an efficient transport system. Although modern information technologies can reduce the demand for physical transport, passenger car usage has seen spectacular expansion. The number of cars on EU roads surged by 3 million each year between 1990 and 2010."
            },
            {
              "label": "B",
              "text": "For goods transport, growth is largely due to shifts to a 'flow' economy and the relocation of manufacturing. Labour-intensive factories have moved to distant regions to trim production costs, increasing the distances components and finished goods must travel to assembly plants and consumers."
            },
            {
              "label": "C",
              "text": "Strong economic expansion in countries applying for EU candidate status is rapidly altering transport patterns. While these nations inherited freight networks historically oriented toward rail, road haulage has surged by 19.4% while rail dropped 43.5% between 1990 and 1998."
            },
            {
              "label": "D",
              "text": "Sustainable development has prompted a complete rethinking of EU transport policy. The Gothenburg European Council set ambitious environmental objectives to achieve a durable, balanced transport model across member states looking forward to 2020 and 2040."
            },
            {
              "label": "E",
              "text": "Transport energy use accounts for 28% of EU greenhouse gas emissions. If trends persist, CO2 output will rise 50% to over 1.1 billion tonnes by 2020, with road transport accounting for an overwhelming 84% of transport-related pollution."
            },
            {
              "label": "G",
              "text": "Achieving modal rebalancing requires shifting freight and passenger volumes away from saturated highways toward greener modes such as rail, short-sea shipping, and inland waterways."
            },
            {
              "label": "H",
              "text": "The first approach couples targeted user toll charges on congested road corridors with strategic infrastructure investments in modern rail links and intermodal transshipment terminals."
            },
            {
              "label": "I",
              "text": "The second approach involves comprehensive regulatory and fiscal intervention, integrating road tolls, fuel taxation, mandatory driver rest hours, and synchronized investments across all modes to permanently shift traffic habits."
            }
          ]
        },
        "questions": [
          {
            "id": 14,
            "num": 14,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "14. Paragraph A",
            "acceptableAnswers": [
              "viii",
              "Heading viii",
              "viii The rapid growth of private transport"
            ],
            "explanation": "Đoạn A tập trung vào sự bùng nổ của việc sử dụng xe hơi cá nhân (tăng 3 triệu xe mỗi năm) -> Heading viii (The rapid growth of private transport).",
            "evidence": "determining factor is the spectacular growth in car use . The number of cars on European Union (EU) roads saw an increase of three million cars each year"
          },
          {
            "id": 15,
            "num": 15,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "15. Paragraph B",
            "acceptableAnswers": [
              "iii",
              "Heading iii",
              "iii Changes affecting the distances goods may be transported"
            ],
            "explanation": "Đoạn B nói về việc di dời nhà máy ra xa hàng ngàn cây số khiến quãng đường vận chuyển hàng hóa kéo dài -> Heading iii (Changes affecting the distances goods may be transported).",
            "evidence": "production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users"
          },
          {
            "id": 16,
            "num": 16,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "16. Paragraph C",
            "acceptableAnswers": [
              "xi",
              "Heading xi",
              "xi Transport trends in countries awaiting EU admission"
            ],
            "explanation": "Đoạn C phân tích xu hướng vận tải ở các quốc gia ứng viên chờ gia nhập EU -> Heading xi (Transport trends in countries awaiting EU admission).",
            "evidence": "growth expected in countries which are candidates for entry to the EU will also increase transport flows"
          },
          {
            "id": 17,
            "num": 17,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "17. Paragraph D",
            "acceptableAnswers": [
              "i",
              "Heading i",
              "i A fresh and important long-term goal"
            ],
            "explanation": "Đoạn D đưa ra mục tiêu phát triển bền vững dài hạn cho 20-30 năm tới của hội đồng Gothenburg -> Heading i (A fresh and important long-term goal).",
            "evidence": "This objective, agreed by the Gothenburg European Council... sustainable transport system which will ideally be in place in 30 years' time"
          },
          {
            "id": 18,
            "num": 18,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "18. Paragraph E",
            "acceptableAnswers": [
              "v",
              "Heading v",
              "v The environmental costs of road transport"
            ],
            "explanation": "Đoạn E đưa ra thiệt hại môi trường do khí thải CO2 của vận tải đường bộ (chiếm 84% khí thải ngành) -> Heading v (The environmental costs of road transport).",
            "evidence": "transport sector was to blame for 28% of emissions of CO2... road transport is the main culprit since it alone accounts for 84%"
          },
          {
            "id": 19,
            "num": 19,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "19. Paragraph G",
            "acceptableAnswers": [
              "vii",
              "Heading vii",
              "vii The need to achieve transport rebalance"
            ],
            "explanation": "Đoạn G nhấn mạnh việc tái cân bằng tỷ trọng giữa các phương thức giao thông (chuyển sang đường sắt và đường thủy) -> Heading vii (The need to achieve transport rebalance).",
            "evidence": "shifting the balance between modes of transport lies at the heart of its strategy"
          },
          {
            "id": 20,
            "num": 20,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "20. Paragraph H",
            "acceptableAnswers": [
              "ii",
              "Heading ii",
              "ii Charging for roads and improving other transport methods"
            ],
            "explanation": "Đoạn H đề cập đến biện pháp thu phí đường bộ kết hợp nâng cấp đường sắt -> Heading ii (Charging for roads and improving other transport methods).",
            "evidence": "targeted user toll charges on congested road corridors with strategic infrastructure investments in modern rail links"
          },
          {
            "id": 21,
            "num": 21,
            "type": "matching-headings",
            "options": [
              "i A fresh long-term goal",
              "ii Charging for roads and improving other methods",
              "iii Changes affecting distances goods transported",
              "iv Taking all steps to change transport patterns",
              "v Environmental costs of road transport",
              "vi Escalating cost of rail",
              "vii Need to achieve transport rebalance",
              "viii Rapid growth of private transport",
              "ix Plans for road networks",
              "x Restricting road use through charging alone",
              "xi Trends in countries awaiting EU admission"
            ],
            "questionText": "21. Paragraph I",
            "acceptableAnswers": [
              "iv",
              "Heading iv",
              "iv Taking all the steps necessary to change transport patterns"
            ],
            "explanation": "Đoạn I tổng kết giải pháp đồng bộ đa tầng nấc để thay đổi hoàn toàn tập quán giao thông -> Heading iv (Taking all the steps necessary to change transport patterns).",
            "evidence": "comprehensive regulatory and fiscal intervention, integrating road tolls, fuel taxation, mandatory driver rest hours"
          }
        ],
        "vocabulary": [
          {
            "word": "rebalance",
            "meaning": "Tái lập sự cân bằng giữa các lĩnh vực",
            "example": "Modal rebalancing diverts heavy trucks to electrified rail."
          },
          {
            "word": "intermodal",
            "meaning": "Vận tải kết hợp đa phương thức",
            "example": "Intermodal terminals seamlessly transfer containers between rail and ship."
          },
          {
            "word": "saturated",
            "meaning": "Quá tải, bão hòa lưu lượng",
            "example": "Motorways become saturated during morning peak hours."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_12",
    "lessonNum": 12,
    "code": "V14",
    "title": "V14 – WHICH PARAGRAPH CONTAINS?",
    "shortTitle": "Đoạn Văn Nào Chứa Thông Tin?",
    "category": "matching",
    "categoryLabel": "Dạng Bài Nối Thông Tin",
    "badge": "Scanning chi tiết",
    "description": "Chiến thuật định vị vị trí chứa thông tin cụ thể (định nghĩa, ví dụ, nguyên nhân, số liệu). Chú ý quy tắc NB: You may use any letter more than once. 3 bài đọc Cambridge IELTS trọn vẹn.",
    "examplesCount": 3,
    "totalQuestions": 13,
    "examples": [
      {
        "id": "r12_ex1",
        "exampleNum": 1,
        "title": "Example 1: Early Modern Policing (Paragraphs A-C)",
        "instructions": "Which paragraph contains the following information? (Questions 1-4, Pages 72-73)\nNB You may use any letter more than once.",
        "passage": {
          "title": "Early Modern Policing",
          "paragraphs": [
            {
              "label": "A",
              "text": "The first centrally organised police force was created by the government of King Louis XIV in 1667 to police the city of Paris, then the largest city in Europe. The task of the police was defined as 'ensuring the peace and quiet of the public and of private individuals, purging the city of what may cause disturbances, procuring abundance, and having each and everyone live according to their station and their duties'. The word 'police' was borrowed from French into the English language in the 18th century."
            },
            {
              "label": "B",
              "text": "In 1797, Patrick Colquhoun, a Scottish merchant, was able to persuade the West Indies merchants who operated at the Pool of London on the River Thames, to establish a police force at the docks to prevent rampant theft that was causing annual estimated losses of £500,000 worth of cargo. The idea of a police, as it then existed in France, was considered as a potentially undesirable foreign import. However, Colquhoun used economic indicators to show that a police dedicated to crime prevention was 'perfectly congenial to the principle of the British constitution'."
            },
            {
              "label": "C",
              "text": "With an initial investment of £4,200, the new trial force of the Thames River Police began with about 50 men charged with policing 33,000 workers in the river trades. The force was a success after its first year, and Colquhoun’s men had 'established their worth by saving £122,000 worth of cargo and by the rescuing of several lives'. Word of this success spread quickly, and the government passed the Marine Police Bill on 28 July 1800, transforming it from a private to public police agency; now the oldest police force in the world."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C"
            ],
            "questionText": "1. positive news that led to a new government policy",
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn C: 'Word of this success spread quickly, and the government passed the Marine Police Bill on 28 July 1800, transforming it from a private to public police agency' -> C.",
            "evidence": "Word of this success spread quickly, and the government passed the Marine Police Bill on 28 July 1800, transforming it from a private to public police agency"
          },
          {
            "id": 2,
            "num": 2,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C"
            ],
            "questionText": "2. the origin of an English word",
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: 'The word \"police\" was borrowed from French into the English language in the 18th century.' -> A.",
            "evidence": "The word \"police\" was borrowed from French into the English language in the 18th century."
          },
          {
            "id": 3,
            "num": 3,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C"
            ],
            "questionText": "3. people’s reluctance to accept a foreign idea",
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: 'The idea of a police, as it then existed in France, was considered as a potentially undesirable foreign import.' -> B.",
            "evidence": "The idea of a police, as it then existed in France, was considered as a potentially undesirable foreign import."
          },
          {
            "id": 4,
            "num": 4,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C"
            ],
            "questionText": "4. a specific problem that needed to be solved",
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: 'rampant theft that was causing annual estimated losses of £500,000 worth of cargo' -> B.",
            "evidence": "to establish a police force at the docks to prevent rampant theft that was causing annual estimated losses of £500,000 worth of cargo."
          }
        ],
        "vocabulary": [
          {
            "word": "rampant",
            "meaning": "Tràn lan, không thể kiểm soát",
            "example": "Rampant theft at the port severely disrupted trade."
          },
          {
            "word": "undesirable",
            "meaning": "Không mong muốn, gây phản cảm",
            "example": "Foreign concepts were initially treated as undesirable imports."
          },
          {
            "word": "congenial",
            "meaning": "Phù hợp, tương thích hài hòa",
            "example": "The law was congenial to constitutional principles."
          }
        ]
      },
      {
        "id": "r12_ex2",
        "exampleNum": 2,
        "title": "Example 2: Educating the Gifted (Paragraphs A-F)",
        "instructions": "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information? (Questions 14-17, Pages 73-75)\nNB You may use any letter more than once.",
        "passage": {
          "title": "Educating the Gifted: Classroom Strategies",
          "paragraphs": [
            {
              "label": "A",
              "text": "A close positive relationship was found when children’s IQ scores were compared with their home educational provision. The higher the children’s IQ scores, the better the quality of their educational backup, measured in terms of reported verbal interactions with parents, number of books and activities in their home. Because IQ tests are influenced by such factors, we can see how domestic stimulus nurtures high academic potential."
            },
            {
              "label": "B",
              "text": "However, over-direction can backfire. Although 'spoon-feeding' can produce extremely high examination results, these are not always followed by equally impressive life successes. Too much guidance deprives learners of autonomy and reduces their ability to solve novel problems independently."
            },
            {
              "label": "C",
              "text": "Teachers often mistakenly assume gifted children are completely problem-free. In reality, exceptionally talented pupils frequently experience boredom, isolation from peers, and perfectionistic pressures."
            },
            {
              "label": "D",
              "text": "Furthermore, learning is strongly affected by emotions. Fear and anxiety can severely damage intellectual curiosity, paralyzing a student's willingness to take creative risks and explore new disciplines."
            },
            {
              "label": "E",
              "text": "Metacognition allows students to monitor their own cognitive processing, adjusting their learning strategies to suit the demands of the task."
            },
            {
              "label": "F",
              "text": "In mixed-ability classrooms, structured cooperative techniques and explicit scaffolding especially benefit disadvantaged pupils who lack academic support at home, bridging the attainment gap without hampering gifted peers."
            }
          ]
        },
        "questions": [
          {
            "id": 14,
            "num": 14,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "questionText": "14. a reference to the influence of the domestic background on the gifted child.",
            "acceptableAnswers": [
              "A"
            ],
            "explanation": "Đoạn A: 'close positive relationship was found when children’s IQ scores were compared with their home educational provision' -> A.",
            "evidence": "A close positive relationship was found when children’s IQ scores were compared with their home educational provision."
          },
          {
            "id": 15,
            "num": 15,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "questionText": "15. reference to what can be lost if learners are given too much guidance.",
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B: 'Too much guidance deprives learners of autonomy and reduces their ability to solve novel problems independently.' -> B.",
            "evidence": "Too much guidance deprives learners of autonomy and reduces their ability to solve novel problems independently."
          },
          {
            "id": 16,
            "num": 16,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "questionText": "16. a reference to the damaging effects of anxiety.",
            "acceptableAnswers": [
              "D"
            ],
            "explanation": "Đoạn D: 'Fear and anxiety can severely damage intellectual curiosity, paralyzing a student's willingness to take creative risks' -> D.",
            "evidence": "Fear and anxiety can severely damage intellectual curiosity, paralyzing a student's willingness to take creative risks"
          },
          {
            "id": 17,
            "num": 17,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "questionText": "17. examples of classroom techniques which favour socially-disadvantaged children.",
            "acceptableAnswers": [
              "F"
            ],
            "explanation": "Đoạn F: 'structured cooperative techniques and explicit scaffolding especially benefit disadvantaged pupils who lack academic support at home' -> F.",
            "evidence": "structured cooperative techniques and explicit scaffolding especially benefit disadvantaged pupils who lack academic support at home"
          }
        ],
        "vocabulary": [
          {
            "word": "scaffolding",
            "meaning": "Kỹ thuật hỗ trợ sư phạm từng bước",
            "example": "Instructional scaffolding helps disadvantaged learners gain confidence."
          },
          {
            "word": "domestic backup",
            "meaning": "Sự hỗ trợ giáo dục từ gia đình",
            "example": "Strong domestic backup reinforces classroom achievements."
          },
          {
            "word": "attainment gap",
            "meaning": "Khoảng cách thành tích học tập",
            "example": "Targeted programs aim to close the socio-economic attainment gap."
          }
        ]
      },
      {
        "id": "r12_ex3",
        "exampleNum": 3,
        "title": "Example 3: Why Leaves Turn Red (Paragraphs A-I)",
        "instructions": "Reading Passage 2 has nine paragraphs, A-I. Which paragraph contains the following information? (Questions 14-18, Pages 76-78)\nNB You may use any letter more than once.",
        "passage": {
          "title": "Autumn Leaves: Why Leaves Turn Red",
          "paragraphs": [
            {
              "label": "A",
              "text": "Autumn is celebrated for the glorious blaze of scarlet, russet, and gold that transforms temperate deciduous forests. But why do trees invest precious energy into manufacturing vivid red pigments just before shedding their foliage?"
            },
            {
              "label": "B",
              "text": "Chlorophyll, the green chemical molecule responsible for photosynthesis, captures sunlight to convert water and carbon dioxide into sugars. As autumn approaches and daylight wanes, freezing temperatures threaten cellular structures. Trees dismantle their chlorophyll, resorbing vital nitrogen and nutrients into twigs and roots for winter storage, leaving deciduous leaves to detach and drop to the forest floor."
            },
            {
              "label": "C",
              "text": "While yellow and orange carotenoids have been present inside the leaf all summer, masked by green chlorophyll, red colouration is entirely different. Red foliage is created by water-soluble flavonoid compounds called anthocyanins, newly synthesized in autumn via complex chemical cascades."
            },
            {
              "label": "D",
              "text": "Why do trees produce anthocyanins at the eleventh hour? Some scientists hypothesized that red pigments act as a natural botanical sunscreen, shielding vulnerable chloroplasts from excess light while nutrients are retrieved."
            },
            {
              "label": "E",
              "text": "Another prominent theory, advanced by evolutionary biologist W.D. Hamilton, suggests that intense red colouration functions as a visual warning signal (aposematism) to herbivorous insects such as aphids, broadcasting that the tree possesses formidable chemical defences."
            },
            {
              "label": "F",
              "text": "Aphids landing on red leaves produce fewer viable eggs and suffer higher mortality, providing initial ecological support for the warning hypothesis."
            },
            {
              "label": "G",
              "text": "However, field tests in mountain forests revealed that trees deficient in anthocyanins suffered photodamage during cold, bright autumn mornings."
            },
            {
              "label": "H",
              "text": "Empirical confirmation for the photoprotection hypothesis came from studies showing that leaves exposed to intense sun produced significantly higher concentrations of anthocyanins than shaded foliage on the exact same tree branch."
            },
            {
              "label": "I",
              "text": "Ultimately, anthocyanins may serve dual roles: insulating leaves against photo-oxidative stress while simultaneously deterring autumn insect pests."
            }
          ]
        },
        "questions": [
          {
            "id": 14,
            "num": 14,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "questionText": "14. a description of the substance responsible for the red colouration of leaves",
            "acceptableAnswers": [
              "C"
            ],
            "explanation": "Đoạn C mô tả chất anthocyanins – sắc tố tạo màu đỏ trong lá cây mùa thu -> C.",
            "evidence": "Red foliage is created by water-soluble flavonoid compounds called anthocyanins, newly synthesized in autumn"
          },
          {
            "id": 15,
            "num": 15,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "questionText": "15. the reason why trees drop their leaves in autumn",
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B giải thích tại sao cây rụng lá: nhiệt độ đóng băng đe dọa tế bào nên cây thu hồi chất dinh dưỡng và rụng lá để sống sót qua mùa đông -> B.",
            "evidence": "freezing temperatures threaten cellular structures. Trees dismantle their chlorophyll, resorbing vital nitrogen... leaving deciduous leaves to detach and drop"
          },
          {
            "id": 16,
            "num": 16,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "questionText": "16. some evidence to confirm a theory about the purpose of the red leaves",
            "acceptableAnswers": [
              "H"
            ],
            "explanation": "Đoạn H cung cấp bằng chứng thực nghiệm (lá tiếp xúc ánh nắng sản sinh nhiều anthocyanins hơn lá râm) xác nhận giả thuyết bảo vệ quang học -> H.",
            "evidence": "Empirical confirmation for the photoprotection hypothesis came from studies showing that leaves exposed to intense sun produced significantly higher concentrations"
          },
          {
            "id": 17,
            "num": 17,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "questionText": "17. an explanation of the function of chlorophyll",
            "acceptableAnswers": [
              "B"
            ],
            "explanation": "Đoạn B giải thích chức năng của chất diệp lục: thu nhận ánh sáng mặt trời để chuyển đổi nước và CO2 thành đường nuôi cây -> B.",
            "evidence": "Chlorophyll, the green chemical molecule responsible for photosynthesis, captures sunlight to convert water and carbon dioxide into sugars."
          },
          {
            "id": 18,
            "num": 18,
            "type": "which-paragraph",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I"
            ],
            "questionText": "18. a suggestion that the red colouration in leaves could serve as a warning signal",
            "acceptableAnswers": [
              "E"
            ],
            "explanation": "Đoạn E đưa ra giả thuyết của W.D. Hamilton rằng màu đỏ đóng vai trò tín hiệu cảnh báo thị giác gửi đến côn trùng ăn hại -> E.",
            "evidence": "intense red colouration functions as a visual warning signal (aposematism) to herbivorous insects such as aphids"
          }
        ],
        "vocabulary": [
          {
            "word": "anthocyanin",
            "meaning": "Sắc tố đỏ tự nhiên trong thực vật",
            "example": "Anthocyanins protect delicate leaf structures from bright light."
          },
          {
            "word": "resorb",
            "meaning": "Tái hấp thu dinh dưỡng",
            "example": "Deciduous trees resorb valuable nitrogen before leaves drop."
          },
          {
            "word": "aposematism",
            "meaning": "Hiện tượng cảnh báo xua đuổi kẻ thù qua màu sắc rực rỡ",
            "example": "Vivid autumn hues may serve as an aposematic signal."
          }
        ]
      }
    ]
  },
  {
    "id": "reading_13",
    "lessonNum": 13,
    "code": "V15",
    "title": "V15 – MULTIPLE CHOICE",
    "shortTitle": "Trắc Nghiệm Nhiều Lựa Chọn",
    "category": "multiple-choice",
    "categoryLabel": "Trắc Nghiệm",
    "badge": "Phân tích bẫy nhiễu",
    "description": "Chiến thuật loại trừ phương án sai (bẫy thái quá, bẫy ngược nghĩa, bẫy thiếu thông tin) và tìm dẫn chứng tương đương nghĩa. 3 bài đọc Cambridge IELTS trọn vẹn.",
    "examplesCount": 3,
    "totalQuestions": 10,
    "examples": [
      {
        "id": "r13_ex1",
        "exampleNum": 1,
        "title": "Example 1: Richard Feynman’s Philosophy of Physics",
        "instructions": "Choose the correct letter, A, B, C or D. (Questions 1-2, Page 79)",
        "passage": {
          "title": "Richard Feynman: The First Principles Approach",
          "paragraphs": [
            {
              "label": "A",
              "text": "Physicist Richard Feynman returned over and over to an idea that drove his groundbreaking discoveries. His approach was documented by his Caltech colleague David Goodstein in the book Feynman’s Lost Lecture about physics classes Feynman taught in the 1960s:\nOnce, I said to him, 'Dick, explain to me, so that I can understand it, why spin one-half particles obey Fermi-Dirac statistics.' Sizing up his audience perfectly, Feynman said, 'I’ll prepare a freshman lecture on it.' But he came back a few days later to say, 'I couldn’t do it. I couldn’t reduce it to the freshman level. That means we don’t really understand it.'"
            },
            {
              "label": "B",
              "text": "Feynman didn’t mean all human knowledge must be distilled into an introductory college course. His point was that we need to build our grasp of science and technology from the ground up if we are to master it, not to mention reimagine how it works. Feynman was famous as a student for redoing many of physics’ early experiments himself to build a foundational understanding of the field. By mastering these first principles, Feynman often saw things that others did not in quantum mechanics, computing, and nuclear physics, earning him the Nobel Prize in 1965."
            }
          ]
        },
        "questions": [
          {
            "id": 1,
            "num": 1,
            "type": "mcq",
            "options": [
              "A  immediately replied that he could not",
              "B  replied that he had already prepared a lecture on it",
              "C  said that he did not understand the concept either",
              "D  promised to give his answer in an introductory lesson"
            ],
            "questionText": "1. When asked to explain a difficult concept, physicist Richard Feynman",
            "acceptableAnswers": [
              "D",
              "D  promised to give his answer in an introductory lesson"
            ],
            "explanation": "Đoạn A: 'Sizing up his audience perfectly, Feynman said, 'I’ll prepare a freshman lecture on it.'' (freshman lecture = bài giảng nhập môn / introductory lesson) -> D.",
            "evidence": "Sizing up his audience perfectly, Feynman said, “I’ll prepare a freshman lecture on it.”"
          },
          {
            "id": 2,
            "num": 2,
            "type": "mcq",
            "options": [
              "A  scientists should master basic scientific principles first",
              "B  early physics experiments need to be redone",
              "C  most science students do not have a good foundation in physics",
              "D  his knowledge of first principles earned him a Nobel Prize"
            ],
            "questionText": "2. Feynman believed that",
            "acceptableAnswers": [
              "A",
              "A  scientists should master basic scientific principles first"
            ],
            "explanation": "Đoạn B: 'His point was that we need to build our grasp of science and technology from the ground up if we are to master it' -> các nhà khoa học cần nắm vững các nguyên lý nền tảng trước tiên -> A.",
            "evidence": "His point was that we need to build our grasp of science and technology from the ground up if we are to master it"
          }
        ],
        "vocabulary": [
          {
            "word": "first principles",
            "meaning": "Các nguyên lý cơ bản khởi thủy",
            "example": "Reasoning from first principles strips away preconceptions."
          },
          {
            "word": "freshman",
            "meaning": "Sinh viên năm thứ nhất",
            "example": "Freshman lectures require absolute clarity without jargon."
          },
          {
            "word": "reimagine",
            "meaning": "Tái tư duy, hình dung lại theo góc nhìn mới",
            "example": "Mastering the fundamentals allows scientists to reimagine theories."
          }
        ]
      },
      {
        "id": "r13_ex2",
        "exampleNum": 2,
        "title": "Example 2: Museums of Fine Art and Their Public",
        "instructions": "Choose the correct letter, A, B, C or D. (Questions 32-35, Pages 80-81)",
        "passage": {
          "title": "Museum of Fine Art and Their Public",
          "paragraphs": [
            {
              "label": "A",
              "text": "One limitation is related to the way the museum presents its exhibits. As repositories of unique historical objects, art museums are often called 'treasure houses'. We are reminded of this even before we view a collection by the presence of security guards, attendants, ropes and display cases to keep us away from the exhibits. In addition, a major collection like that of London’s National Gallery is housed in numerous rooms, each with dozens of works, any one of which is likely to be worth more than all the average visitor possesses. In a society that judges the personal status of the individual so much by their material worth, it is therefore difficult not to be impressed by one’s own relative 'worthlessness' in such an environment."
            },
            {
              "label": "B",
              "text": "Furthermore, consideration of the 'value' of the original work in its treasure house setting impresses upon the viewer that, since these works were originally produced, they have been assigned a huge monetary value by some person or institution more powerful than themselves. Evidently, nothing the viewer thinks about the work is going to alter that value, and so today’s viewer is deterred from trying to extend that spontaneous, immediate, self-reliant kind of reading which would originally have met the work."
            },
            {
              "label": "C",
              "text": "The visitor may then be struck by the strangeness of seeing such diverse paintings, drawings and sculptures brought together in an environment for which they were not originally created. This 'displacement effect' is further heightened by the sheer volume of exhibits. In the case of a major collection, there are probably more works on display than we could realistically view in weeks or even months."
            },
            {
              "label": "D",
              "text": "This is particularly distressing because time seems to be a vital factor in the appreciation of all art forms. A fundamental difference between paintings and other art forms is that there is no prescribed time over which a painting is viewed. By contrast, the audience experiences an opera or a play over a specific time, which is the duration of the performance. Similarly novels and poems are read in a prescribed temporal sequence, whereas a picture has no clear place at which to start viewing, or at which to finish."
            }
          ]
        },
        "questions": [
          {
            "id": 32,
            "num": 32,
            "type": "mcq",
            "options": [
              "A  the undesirable cost to a nation of maintaining a huge collection of art.",
              "B  the conflict that may arise in society between financial and artistic values.",
              "C  the negative effect a museum can have on visitors’ opinions of themselves.",
              "D  the need to put individual well-being above large-scale artistic schemes."
            ],
            "questionText": "32. The writer mentions London’s National Gallery to illustrate",
            "acceptableAnswers": [
              "C",
              "C  the negative effect a museum can have on visitors’ opinions of themselves."
            ],
            "explanation": "Đoạn A: Tác giả nêu bất kỳ tác phẩm nào cũng đắt hơn toàn bộ tài sản của khách tham quan, khiến người xem cảm thấy sự 'vô giá trị tương đối' của chính mình ('impressed by one’s own relative worthlessness') -> C.",
            "evidence": "difficult not to be impressed by one’s own relative 'worthlessness' in such an environment."
          },
          {
            "id": 33,
            "num": 33,
            "type": "mcq",
            "options": [
              "A  they lack the knowledge needed to support an opinion.",
              "B  they fear it may have financial implications.",
              "C  they have no real concept of the work’s value.",
              "D  they feel their personal reaction is of no significance."
            ],
            "questionText": "33. The writer says that today, viewers may be unwilling to criticise because",
            "acceptableAnswers": [
              "D",
              "D  they feel their personal reaction is of no significance."
            ],
            "explanation": "Đoạn B: Người xem thấy giá trị tác phẩm đã được các tổ chức quyền lực ấn định bằng tiền tỉ, 'nothing the viewer thinks about the work is going to alter that value' -> cảm thấy phản ứng cá nhân của mình chẳng có nghĩa lý gì -> D.",
            "evidence": "nothing the viewer thinks about the work is going to alter that value, and so today’s viewer is deterred from trying to extend that spontaneous, immediate, self- reliant kind of reading"
          },
          {
            "id": 34,
            "num": 34,
            "type": "mcq",
            "options": [
              "A  the variety of works on display and the way they are arranged.",
              "B  the impossibility of viewing particular works of art over a long period.",
              "C  the similar nature of the paintings and the lack of great works.",
              "D  the inappropriate nature of the individual works selected for exhibition."
            ],
            "questionText": "34. According to the writer, the ‘displacement effect’ on the visitor is caused by",
            "acceptableAnswers": [
              "A",
              "A  the variety of works on display and the way they are arranged."
            ],
            "explanation": "Đoạn C: Hiệu ứng chuyển dời bắt nguồn từ việc nhìn thấy sự đa dạng của các bức tranh bị gom vào một không gian không nguyên bản ('seeing such diverse paintings, drawings and sculptures brought together in an environment...') -> A.",
            "evidence": "strangeness of seeing such diverse paintings, drawings and sculptures brought together in an environment for which they were not originally created. This 'displacement effect' is further heightened by the sheer volume of exhibits"
          },
          {
            "id": 35,
            "num": 35,
            "type": "mcq",
            "options": [
              "A  involve direct contact with an audience.",
              "B  require a specific location for a performance.",
              "C  need the involvement of other professionals.",
              "D  have a specific beginning or end."
            ],
            "questionText": "35. The writer says that unlike other forms of art, a painting does not",
            "acceptableAnswers": [
              "D",
              "D  have a specific beginning or end."
            ],
            "explanation": "Đoạn D: Khác với kịch hay tiểu thuyết diễn ra theo thời gian xác định, bức tranh 'has no clear place at which to start viewing, or at which to finish' (không có điểm bắt đầu hoặc kết thúc xác định) -> D.",
            "evidence": "whereas a picture has no clear place at which to start viewing, or at which to finish."
          }
        ],
        "vocabulary": [
          {
            "word": "repository",
            "meaning": "Kho lưu trữ, nơi cất giữ bảo vật",
            "example": "Art museums serve as repositories of national cultural patrimony."
          },
          {
            "word": "displacement effect",
            "meaning": "Hiệu ứng tách rời khỏi bối cảnh gốc",
            "example": "Viewing altarpieces inside stark galleries creates a displacement effect."
          },
          {
            "word": "prescribed sequence",
            "meaning": "Trình tự quy định sẵn theo thời gian",
            "example": "Musical compositions follow a strictly prescribed temporal sequence."
          }
        ]
      },
      {
        "id": "r13_ex3",
        "exampleNum": 3,
        "title": "Example 3: Beyond the Blue Horizon (Lapita Seafarers)",
        "instructions": "Choose the correct letter, A, B, C or D. (Questions 32-35, Pages 82-84)",
        "passage": {
          "title": "Beyond the Blue Horizon: The Lapita Voyages",
          "paragraphs": [
            {
              "label": "A",
              "text": "There is one stubborn question for which archaeology has yet to provide any answers: how did the Lapita accomplish the ancient equivalent of a moon landing, many times over? No-one has found one of their canoes or any rigging, which could reveal how the canoes were sailed. Nor do the oral histories and traditions of later Polynesians offer any insights, for they turn into myths long before they reach as far back in time as the Lapita."
            },
            {
              "label": "B",
              "text": "‘All we can say for certain is that the Lapita had canoes that were capable of ocean voyages, and they had the ability to sail them,’ says Geoff Irwin, a professor of archaeology at the University of Auckland. Those sailing skills, he says, were developed and passed down over thousands of years by earlier mariners who worked their way through the archipelagoes of the western Pacific, making short crossings to nearby islands. The real adventure didn’t begin, however, until their Lapita descendants sailed out of sight of land, with empty horizons on every side. This must have been as difficult for them as landing on the moon is for us today. Certainly it distinguished them from their ancestors, but what gave them the courage to launch out on such risky voyages?"
            },
            {
              "label": "C",
              "text": "The Lapita thrust into the Pacific was eastward, against the prevailing trade winds, Irwin notes. Those nagging headwinds, he argues, may have been the key to their success. ‘They could sail out for days into the unknown and assess the area, secure in the knowledge that if they didn’t find anything, they could turn about and catch a swift ride back on the trade winds. This is what would have made the whole thing work.’ Once out there, skilled seafarers would have detected abundant leads to follow to land: seabirds, coconuts and twigs carried out to sea by the tides, and the afternoon pile-up of clouds on the horizon which often indicates an island in the distance."
            },
            {
              "label": "D",
              "text": "For returning explorers, successful or not, the geography of their own archipelagoes would have provided a safety net. Without this to go by, overshooting their home ports, getting lost and sailing off into eternity would have been all too easy. Vanuatu, for example, stretches more than 500 miles in a northwest-southeast trend, its scores of intervisible islands forming a backstop for mariners riding the trade winds home."
            }
          ]
        },
        "questions": [
          {
            "id": 32,
            "num": 32,
            "type": "mcq",
            "options": [
              "A  the canoes that have been discovered offer relatively few clues.",
              "B  archaeologists have shown limited interest in this area of research.",
              "C  little information relating to this period can be relied upon for accuracy.",
              "D  technological advances have altered the way such achievements are viewed."
            ],
            "questionText": "32. According to the writer, there are difficulties explaining how the Lapita accomplished their journeys because",
            "acceptableAnswers": [
              "C",
              "C  little information relating to this period can be relied upon for accuracy."
            ],
            "explanation": "Đoạn A: Không ai tìm thấy chiếc thuyền hay dây buồm nào của người Lapita, và truyền thuyết dân gian sau này đã trở thành huyền thoại hoang đường -> có rất ít thông tin đáng tin cậy về thời kỳ này -> C.",
            "evidence": "No-one has found one of their canoes or any rigging... Nor do the oral histories and traditions of later Polynesians offer any insights, for they turn into myths"
          },
          {
            "id": 33,
            "num": 33,
            "type": "mcq",
            "options": [
              "A  They sailed beyond the point where land was visible.",
              "B  Their cultural heritage discouraged the expression of fear.",
              "C  They were able to build canoes that withstood ocean voyages.",
              "D  Their navigational skills were passed on from one generation to the next."
            ],
            "questionText": "33. According to the second paragraph, what was extraordinary about the Lapita?",
            "acceptableAnswers": [
              "A",
              "A  They sailed beyond the point where land was visible."
            ],
            "explanation": "Đoạn B: Điểm phi thường khiến họ khác biệt với tổ tiên chính là việc dám giương buồm vượt ra khỏi tầm nhìn thấy đất liền ('sailed out of sight of land, with empty horizons on every side') -> A.",
            "evidence": "The real adventure didn’t begin, however, until their Lapita descendants sailed out of sight of land, with empty horizons on every side."
          },
          {
            "id": 34,
            "num": 34,
            "type": "mcq",
            "options": [
              "A  the Lapita’s seafaring talent",
              "B  the Lapita’s ability to detect signs of land",
              "C  the Lapita’s extensive knowledge of the region",
              "D  the Lapita’s belief they would be able to return home"
            ],
            "questionText": "34. What does ‘This’ refer to in the third paragraph?",
            "acceptableAnswers": [
              "D",
              "D  the Lapita’s belief they would be able to return home"
            ],
            "explanation": "Đoạn C: 'secure in the knowledge that if they didn’t find anything, they could turn about and catch a swift ride back on the trade winds. This is what would have made the whole thing work.' -> 'This' quy chiếu về việc họ tin chắc rằng mình luôn có thể xuôi theo gió mậu dịch để trở về an toàn -> D.",
            "evidence": "secure in the knowledge that if they didn’t find anything, they could turn about and catch a swift ride back on the trade winds. This is what would have made the whole thing work ."
          },
          {
            "id": 35,
            "num": 35,
            "type": "mcq",
            "options": [
              "A  It played an important role in Lapita culture.",
              "B  It meant there were relatively few storms at sea.",
              "C  It provided a navigational aid for the Lapita.",
              "D  It made a large number of islands habitable."
            ],
            "questionText": "35. According to the fourth paragraph, how was the geography of the region significant?",
            "acceptableAnswers": [
              "C",
              "C  It provided a navigational aid for the Lapita."
            ],
            "explanation": "Đoạn D: Địa lý các chuỗi đảo trải dài đóng vai trò như 'safety net' (lưới an toàn) và 'backstop' chặn đường về, giúp các thủy thủ định hướng không bị trôi dạt vào cõi vĩnh hằng -> C (navigational aid).",
            "evidence": "the geography of their own archipelagoes would have provided a safety net . Without this to go by, overshooting their home ports, getting lost... Vanuatu... its scores of intervisible islands forming a backstop"
          }
        ],
        "vocabulary": [
          {
            "word": "headwinds",
            "meaning": "Gió ngược chiều thuyền di chuyển",
            "example": "Sailing against headwinds ensured an easy downwind return trip."
          },
          {
            "word": "intervisible",
            "meaning": "Nhìn thấy nhau được bằng mắt thường giữa các đảo",
            "example": "A chain of intervisible islands acts as an unsinkable navigational safety net."
          },
          {
            "word": "backstop",
            "meaning": "Tấm rào chắn bảo vệ, lưới an toàn",
            "example": "The archipelago formed a broad backstop catching returning voyagers."
          }
        ]
      }
    ]
  }
];

// Map for O(1) lesson lookup
const readingLessonsRegistry = {};
readingLessons.forEach(l => {
  readingLessonsRegistry[l.id] = l;
});

// Export to window if in browser environment
if (typeof window !== 'undefined') {
  window.readingLessons = readingLessons;
  window.readingLessonsRegistry = readingLessonsRegistry;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { readingLessons, readingLessonsRegistry };
}
