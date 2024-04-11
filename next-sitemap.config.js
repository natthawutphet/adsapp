module.exports = {
    siteUrl: 'https://myfbad.com',
    generateRobotsTxt: true, // (optional)
    // อื่นๆ การตั้งค่าของคุณ
    transform: async (config, path) => {
      // กำหนดค่า priority สำหรับเส้นทางเฉพาะ
      if (path === '/') {
        return {
          loc: path, // Link of the page
          changefreq: 'daily',
          priority: 1.0, // ค่าความสำคัญที่คุณต้องการกำหนด
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
      }
  
      // สำหรับเส้นทางอื่น ๆ ใช้ค่า default
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7, // หรือค่าอื่นที่คุณต้องการใช้เป็น default
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };
  