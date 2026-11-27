---
name: "train-sentence-transformers"
description: "Skill chính thức của Hugging Face: huấn luyện hoặc fine-tune model sentence-transformers trên SentenceTransformer (bi-encoder; embedding dày hoặc static cho retrieval, similarity, clustering, classifi…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Huấn luyện và fine-tune model sentence-transformers cho retrieval, reranking và embedding"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/train-sentence-transformers/SKILL.md"
origin: "hunted"
market_id: 584
vault_id: 
status: live
has_content: false
---

# train-sentence-transformers

## Công việc

Huấn luyện và fine-tune model sentence-transformers cho retrieval, reranking và embedding

## Mô tả

Skill chính thức của Hugging Face: huấn luyện hoặc fine-tune model sentence-transformers trên SentenceTransformer (bi-encoder; embedding dày hoặc static cho retrieval, similarity, clustering, classification, paraphrase mining, dedup, multimodal), CrossEncoder (reranker; chấm điểm cặp cho two-stage retrieval/phân loại cặp), SparseEncoder (SPLADE, embedding thưa học được cho learned-sparse retrieval) và MultiVectorEncoder (ColBERT/late-interaction, embedding per-token chấm bằng MaxSim). Bao phủ chọn loss, hard-negative mining, evaluator, distillation, LoRA, Matryoshka và phát hành lên Hugging Face Hub. Lưu ý: SKILL.md này là router, không phải manual — nội dung thật (loss khuyên dùng, evaluator, cấu trúc script training, chọn model, troubleshooting) nằm trong references/ và scripts/; phải mở template script production theo từng loại (scripts/train_<type>_example.py) và copy làm điểm bắt đầu, không tự tổng hợp script từ file này. Repo gốc giấy phép Apache-2.0.

## Điểm mạnh

- Bao 4 họ model: bi-encoder, CrossEncoder reranker, SparseEncoder SPLADE và ColBERT late-interaction
- Có template script production sẵn theo từng loại model để copy làm điểm bắt đầu
- Bao trọn loss, hard-negative mining, distillation, LoRA, Matryoshka và phát hành lên Hub

## Từ khóa

sentence-transformers, embedding, reranker, ColBERT, SPLADE, fine-tune

## Đầu vào

Loại model cần train (bi-encoder/reranker/sparse/ColBERT) và dataset huấn luyện

## Đầu ra

Model sentence-transformers đã train/fine-tune, sẵn phát hành lên Hugging Face Hub

## Giới hạn

Thuộc hệ sinh thái Hugging Face; SKILL.md chỉ là router — phải đọc references/scripts kèm theo, không tự tổng hợp script; cần GPU và tài khoản Hub để phát hành. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/train-sentence-transformers/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
