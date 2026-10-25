export const tool={
  "id": "E099",
  "slug": "eng-combined-length-uncertainty",
  "title": "독립 길이측정 합성불확도 계산기",
  "title_en": "Independent Length Uncertainty Calculator",
  "category": "측정",
  "category_en": "Measurement",
  "fields": [
    {
      "key": "u1",
      "label": "첫 길이 표준불확도 u₁",
      "label_en": "First length standard uncertainty u₁",
      "dimension": "length",
      "example": 0.003,
      "constraint": "nonnegative",
      "display_unit": "mm",
      "display_value": "3"
    },
    {
      "key": "u2",
      "label": "둘째 길이 표준불확도 u₂",
      "label_en": "Second length standard uncertainty u₂",
      "dimension": "length",
      "example": 0.004,
      "constraint": "nonnegative",
      "display_unit": "mm",
      "display_value": "4"
    },
    {
      "key": "c1",
      "label": "무차원 감도계수 c₁",
      "label_en": "Dimensionless sensitivity coefficient c₁",
      "dimension": "ratio",
      "example": 1,
      "constraint": "signed",
      "display_unit": "1",
      "display_value": "1"
    },
    {
      "key": "c2",
      "label": "무차원 감도계수 c₂",
      "label_en": "Dimensionless sensitivity coefficient c₂",
      "dimension": "ratio",
      "example": 1,
      "constraint": "signed",
      "display_unit": "1",
      "display_value": "1"
    }
  ],
  "result_label": "합성 표준불확도 u_c",
  "result_label_en": "Combined standard uncertainty u_c",
  "result_dimension": "length",
  "formula": "u_c = √((c₁u₁)²+(c₂u₂)²)",
  "purpose": "상관 없는 두 길이 성분의 선형 결합 표준불확도 계산",
  "purpose_en": "Combine independent length standard uncertainties for a linear model.",
  "assumptions": "u₁,u₂≥0. y=c₁x₁+c₂x₂에서 두 길이 입력의 공분산이 0이고 감도계수가 무차원인 경우다. 결과는 표준불확도이며 확장불확도·신뢰수준·상관·계통오차 보정은 별도다.",
  "assumptions_en": "Required: nonnegative length standard uncertainties, zero covariance and dimensionless coefficients for y=c₁x₁+c₂x₂. The result is standard uncertainty. Expanded uncertainty, confidence level, correlation and systematic corrections are separate.",
  "sources": [
    {
      "label": "NIST TN 1297 · Combined standard uncertainty",
      "url": "https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-5-combined-standard-uncertainty"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-combined-length-uncertainty/",
  "repository": "https://github.com/NaNaCompany/eng-combined-length-uncertainty",
  "output_unit": "m"
};
