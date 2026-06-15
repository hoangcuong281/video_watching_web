Logic Auto Play/Pause

Sử dụng IntersectionObserver API để xử lý tính năng tự động phát/dừng video khi cuộn trang.

Mỗi video sẽ được theo dõi riêng. Khi một video xuất hiện trong vùng nhìn thấy của màn hình (viewport) và đạt ít nhất 80% diện tích hiển thị, video sẽ tự động phát. Khi người dùng cuộn sang video khác và video hiện tại không còn hiển thị đủ 80%, video sẽ tự động tạm dừng.

IntersectionObserver sẽ tối ưu hiệu năng hơn thay vì lắng nghe sự kiện scroll, giảm số lần xử lý không cần thiết và phù hợp với cách hoạt động của các ứng dụng video ngắn như TikTok hoặc Instagram Reels.
