// ============================================
// 填入你的 Supabase 專案資訊
// 位置:Supabase Dashboard → Settings → API
// ============================================

// Project URL,長得像 https://abcdefgh.supabase.co
// ⚠️ 只填到 .supabase.co 就好,後面「不要」加 /rest/v1/
//    createClient() 會自己補上 /rest/v1,多加會變成路徑重複而報
//    「Invalid path specified in request URL」
window.SUPA_URL = "https://lwkydgfihllgydtpxcqm.supabase.co";

// anon / public key(或新版的 sb_publishable_... 金鑰)
// 注意:不是 service_role!
window.SUPA_KEY = "sb_publishable_DyN4K_2_zXMaxf13nCjosw_7hPaJ36n";


// ============================================
// 防呆:就算不小心貼成 https://xxx.supabase.co/rest/v1/
// 也會自動修成正確的專案網址
// ============================================
(function () {
  if (typeof window.SUPA_URL !== "string") return;
  window.SUPA_URL = window.SUPA_URL
    .trim()
    .replace(/\/rest\/v1\/?$/i, "")  // 去掉誤加的 /rest/v1
    .replace(/\/+$/, "");            // 去掉結尾多餘的斜線
})();
