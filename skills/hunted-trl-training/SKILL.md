---
name: "trl-training"
description: "Skill chính thức của Hugging Face: post-train LLM bằng TRL (Transformers Reinforcement Learning) — SFT, DPO, GRPO, KTO và reward-model training. Dùng khi viết hoặc debug code training với TRL Python A…"
group: "Kỹ thuật & Code"
field: "Công cụ lập trình"
job: "Post-train LLM bằng TRL: SFT, DPO, GRPO, KTO và reward-model training"
region: "Toàn cầu"
language: "en"
source_url: "https://github.com/huggingface/skills/blob/main/skills/trl-training/SKILL.md"
origin: "hunted"
market_id: 586
vault_id: 
status: live
has_content: false
---

# trl-training

## Công việc

Post-train LLM bằng TRL: SFT, DPO, GRPO, KTO và reward-model training

## Mô tả

Skill chính thức của Hugging Face: post-train LLM bằng TRL (Transformers Reinforcement Learning) — SFT, DPO, GRPO, KTO và reward-model training. Dùng khi viết hoặc debug code training với TRL Python API hoặc trl CLI. Mỗi phương pháp ghép một *Trainer với một *Config dataclass: SFTTrainer (language modeling hoặc prompt-completion), DPOTrainer (preference, cặp chosen/rejected), GRPOTrainer (prompt-only + hàm reward), DistillationTrainer (prompt-only + teacher model, on-policy distillation), KTOTrainer (preference không ghép cặp, nhãn bool từng mẫu), RewardTrainer (preference chosen/rejected; train reward model dạng scalar, không phải policy). Config kế thừa transformers.TrainingArguments nên mọi tham số của nó dùng được trong mọi trainer config. Nhiều trainer khác (OnlineDPO, ORPO, CPO, GKD…) nằm trong trl.experimental với API chưa ổn định. Tài liệu: https://huggingface.co/docs/trl. Giấy phép Apache-2.0.

## Điểm mạnh

- Một skill cho đủ SFT, DPO, GRPO, KTO, distillation và reward-model training
- Bảng tra rõ trainer nào dùng dataset dạng nào
- Config kế thừa TrainingArguments nên dùng được mọi tham số quen thuộc

## Từ khóa

TRL, SFT, DPO, GRPO, KTO, post-training LLM

## Đầu vào

Phương pháp post-training (SFT/DPO/GRPO/KTO/reward) và dataset huấn luyện

## Đầu ra

Code training TRL hoàn chỉnh (Trainer + Config) sẵn chạy

## Giới hạn

Thuộc hệ sinh thái Hugging Face; cần GPU và thư viện TRL/transformers; trainer trong trl.experimental có API chưa ổn định. Giấy phép Apache-2.0.

## Nguồn

https://github.com/huggingface/skills/blob/main/skills/trl-training/SKILL.md

## Ghi chú

- Tình trạng link: Link nguồn mở được ở lần kiểm khi kéo về.
