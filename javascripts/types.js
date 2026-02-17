/**
 * @typedef {"nhanh nhẹn" | "sức mạnh" | "ý chí" | "trí tuệ" | "năng lực chính"} MainAttribute
 */

/**
 * @typedef {
 *  "tấn công" |
 *  "st nhiệt" |
 *  "st điện" |
 *  "st băng" |
 *  "st tự nhiên" |
 *  "công phép" |
 *  "nhận tuyệt kỹ" |
 *  "st thuật pháp" |
 *  "st vật lý" |
 *  "tỷ lệ bạo kích" |
 *  "hp" |
 *  "hiệu quả điều trị"
 * } SubAttribute
 */

/**
 * @typedef {
 *  "đột kích" |
 *  "áp chế" |
 *  "truy kích" |
 *  "nghiền" |
 *  "hiếu chiến" |
 *  "kích nổ" |
 *  "uyển chuyển" |
 *  "hiệu lực" |
 *  "cảm hứng" |
 *  "nhiễm" |
 *  "chữa lành" |
 *  "rạn nứt" |
 *  "tàn bạo" |
 *  "chạng vạng"
 * } SkillAttribute
 */

/**
 * @typedef {Object} Attributes
 * @property {MainAttribute[]} main
 * @property {SubAttribute[]} sub
 * @property {SkillAttribute[]} skill
 */

/**
 * @typedef {Object} Item
 * @property {string} name
 * @property {MainAttribute} main
 * @property {SubAttribute} sub
 * @property {SkillAttribute} skill
 * @property {string} image
 */
