---
name: "transformers-js"
description: "Skill chính thức của Hugging Face: dùng Transformers.js để chạy model machine learning hiện đại trực tiếp bằng JavaScript/TypeScript. Hỗ trợ NLP (phân loại văn bản, dịch, tóm tắt), thị giác máy tính (…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Chạy model ML hiện đại trực tiếp bằng JavaScript/TypeScript trên trình duyệt và Node.js"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/transformers-js/SKILL.md"
origin: "hunted"
market_id: 585
vault_id: 
status: live
has_content: false
---

# transformers-js

## Công việc

Chạy model ML hiện đại trực tiếp bằng JavaScript/TypeScript trên trình duyệt và Node.js

## Mô tả

Skill chính thức của Hugging Face: dùng Transformers.js để chạy model machine learning hiện đại trực tiếp bằng JavaScript/TypeScript. Hỗ trợ NLP (phân loại văn bản, dịch, tóm tắt), thị giác máy tính (phân loại ảnh, object detection), audio (nhận dạng giọng nói, phân loại âm thanh) và multimodal. Chạy được trên trình duyệt và runtime phía server (Node.js, Bun, Deno) với WebGPU/WASM, dùng model pre-trained từ Hugging Face Hub, không cần server Python. Cài đặt: npm install @huggingface/transformers, hoặc dùng qua CDN với ES module. Yêu cầu Node.js 18+ (hoặc Bun/Deno tương thích) hoặc trình duyệt hiện đại hỗ trợ ES module; WebGPU cần runtime và phần cứng hỗ trợ, WASM là fallback; cần Internet để tải model từ Hub (không bắt buộc nếu dùng model local). Giấy phép Apache-2.0.

## Điểm mạnh

- Chạy ML ngay trong trình duyệt, không cần backend Python
- Một thư viện cho đủ NLP, thị giác, audio và multimodal
- WebGPU tăng tốc, WASM làm fallback khi không có WebGPU

## Từ khóa

Transformers.js, JavaScript, WebGPU, WASM, browser ML, pipeline

## Đầu vào

Tác vụ ML cần chạy (NLP/thị giác/audio/multimodal) và môi trường JS (trình duyệt/Node.js/Bun/Deno)

## Đầu ra

Code JavaScript/TypeScript chạy model ML bằng pipeline Transformers.js

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần Node.js 18+ hoặc trình duyệt hiện đại; WebGPU cần phần cứng hỗ trợ; cần Internet để tải model từ Hub. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/transformers-js/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
