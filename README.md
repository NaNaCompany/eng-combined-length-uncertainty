# 독립 길이측정 합성불확도 계산기

상관 없는 두 길이 성분의 선형 결합 표준불확도 계산

- Plan ID: E099
- App: https://nanalab.kr/eng-combined-length-uncertainty/
- Repository: https://github.com/NaNaCompany/eng-combined-length-uncertainty
- Formula: `u_c = √((c₁u₁)²+(c₂u₂)²)`
- Output: 합성 표준불확도 u_c

## Model

u₁,u₂≥0. y=c₁x₁+c₂x₂에서 두 길이 입력의 공분산이 0이고 감도계수가 무차원인 경우다. 결과는 표준불확도이며 확장불확도·신뢰수준·상관·계통오차 보정은 별도다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `0.005`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
