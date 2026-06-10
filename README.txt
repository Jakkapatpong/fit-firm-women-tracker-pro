Fit & Firm Women Tracker Pro - V2 Sequential App

วิธีใช้งาน
1. แตกไฟล์ ZIP
2. เปิด index.html ด้วย Browser
3. เริ่มจากหน้า “วันนี้” แล้วกด “เริ่มฝึกวันนี้”
4. ทำ Readiness Check ก่อนเริ่มทุกครั้ง
5. ใช้ Workout Player ทำตามทีละท่า กดทำเสร็จ / ข้าม / พัก / +20 วินาที
6. เมื่อจบให้บันทึกสถานะ:
   - ทำครบ: ปลดล็อกวันถัดไป
   - ทำบางส่วน: ยังไม่ปลดล็อกวันถัดไป
   - ไม่ได้ทำ: ยังไม่ปลดล็อกวันถัดไป

โครงสร้างโปรแกรม
- 12 สัปดาห์ / 84 วัน
- Phase 1: Foundation & Fat Burn / Week 1-4
- Phase 2: Firm & Shape / Week 5-8
- Phase 3: Sculpt & Tone / Week 9-12

ตารางรายสัปดาห์
Day 1: Lower Body + Core
Day 2: Upper Body + Hula Hoop Cardio
Day 3: Full Body Fat Burn
Day 4: Recovery / Mobility
Day 5: Glute + Legs
Day 6: Full Body Sculpt
Day 7: Rest

ระบบสำคัญ
- Day Lock ตามลำดับวัน
- Overdue Counter: ค้าง Day X มา Y วัน
- Phase Unlock ตามเงื่อนไข 70% + Progress + ความปลอดภัย
- Readiness Check: Green / Yellow / Red
- Yellow Mode ลดจำนวนลงประมาณ 30%
- Red Mode เปลี่ยนเป็น Recovery Mode
- Progress Tracking: น้ำหนัก เอว สะโพก ต้นขา แขน รูป progress อาการเจ็บ หมายเหตุ
- Export JSON / CSV
- เก็บข้อมูลใน LocalStorage

ไฟล์ในโปรเจกต์
- index.html
- style.css
- script.js
- README.txt
- TEST_REPORT.txt
- images/exercises/*.svg

หมายเหตุด้านความปลอดภัย
โปรแกรมนี้เน้น Beginner ถึง Intermediate, Low Impact และความสม่ำเสมอ หากมีอาการปวดเข่า หลัง ไหล่ หรือไม่พร้อม ควรเลือก Red / Recovery และหยุดฝึกเมื่อมีอาการเจ็บชัดเจน


========================
V3 IMAGE UPDATE
========================
- เปลี่ยนภาพ placeholder แบบ stick figure ออกจากการแสดงผลหลักแล้ว
- เพิ่มภาพออกกำลังกายคุณภาพสูงสไตล์ผู้หญิง clean / pastel fitness app
- เพิ่มภาพจริงสำหรับท่าหลัก: March in Place, Goblet Squat, Glute Bridge, Romanian Deadlift, Dumbbell Row, Shoulder Press, Plank, Russian Twist, Hula Hoop, Reverse Lunge
- ท่าที่ใกล้เคียงกันถูก map ไปใช้ภาพหมวดเดียวกัน เพื่อให้ UI ดูสวยและไม่กลับไปใช้ placeholder เก่า
- ปรับ CSS thumbnail เป็นสี่เหลี่ยมจัตุรัส 78x78 เพื่อไม่ให้ภาพถูกบีบหรือถูกตัดผิดสัดส่วน
- ปรับภาพหน้า Exercise Detail / Workout Player ให้แสดงเต็มและอ่านท่าทางง่ายขึ้น


[Image Correction Update v4]
- Fixed duplicate thumbnails that were visually incorrect.
- Replaced Dead Bug, Standing Side Bend, Stretching & Mobility, and Breathing Reset with correct exercise-specific images.
- No script logic changes required because file paths already pointed to the correct filenames; only the image assets were replaced.


[Full Image Audit Update v5]
- Reviewed the full exercise image set in detail.
- Replaced every remaining duplicated/fallback thumbnail with dedicated exercise-specific artwork.
- Updated the following sets: sumo-squat, step-up, calf-raise, side-leg-raise, kickback, wall-pushup, bicep-curl, tricep-extension, lateral-raise, side-plank, standing-core-twist, knee-raise, step-touch, kettlebell-deadlift, kettlebell-swing, full-body-circuit, low-impact-circuit, rest-day, breathing, stretching.
- Cleared fallback mappings in IMAGE_MANIFEST.json because each exercise now has its own JPG asset.
- No JavaScript logic changes were required; asset correctness was fixed at the image-file level.


[Branding Update v6]
- Added Fit & Firm logo: images/branding/logo-fit-firm.svg
- Added favicon link in index.html
- Added logo lockup on Home and logo mark in top bars
- Added robust JPG->SVG image fallback for exercise cards, detail screens, and workout player


[Logo Fix Update v7]
- Fixed invalid SVG XML by escaping the ampersand in the logo aria-label.
- Added PNG logo fallback at images/branding/logo-fit-firm.png.
- Updated topbar/home logo images to use PNG first with SVG fallback on error.
- Updated favicon to use PNG for broader compatibility.


[Logo Refresh Update v8]
- Replaced the old logo with a new, more polished feminine fitness logo.
- Updated main branding asset: images/branding/logo-fit-firm.png
- Added a dedicated favicon: images/branding/favicon-fit-firm.png
- Existing app references continue working with the refreshed logo automatically.


[Minimal UI Icon Refresh v9]
- Refined UI icons to a cleaner modern minimal style using inline SVG icons.
- Updated bottom navigation, top bars, phase cards, and day cards.
- Replaced text-based arrows / symbols with consistent icon chips and status icons.
- Improved visual hierarchy for Program, Phase, and Day screens.


[Elegant Minimal Refinement v10]
- Softened the icon-heavy v9 design to better match the earlier cleaner aesthetic.
- Restored logo-based topbar titles for a more premium feminine look.
- Refined bottom navigation, phase cards, and day cards with subtler icon treatments.
- Reduced icon weight and card noise while keeping the modern minimal SVG system.


[Theme + Typography Update v11]
- Reduced bottom tab bar height and made icon/label sizing more compact.
- Upgraded typography to a cleaner Sarabun + Plus Jakarta Sans pairing.
- Added dark mode / original mode toggle in the top bar and Profile settings.
- Added persistent theme preference using LocalStorage.


[Bottom Nav Icon-Only Update v12]
- Converted the bottom tab bar to an icon-only layout for a cleaner look.
- Added aria-label and title attributes to keep navigation accessible.
- Reduced bottom navigation height again and tightened spacing.
- Added icon-chip active states for both light and dark modes.
