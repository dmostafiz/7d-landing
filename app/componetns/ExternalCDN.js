export default function ExternalCDN() {
  return (
    <>
      <div id="teleports" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
                const marquee = document.querySelector('.marquee');
                const marqueeWrapper = document.querySelector('.marquee-wrapper');
                let lastScrollPosition = 0;

                function handleScroll() {
                const scrollPosition = window.scrollY;
                const scrollSpeed = 0.5;
                const marqueeWidth = marquee.scrollWidth / 2;
                let newScrollPosition = (scrollPosition * scrollSpeed) % marqueeWidth;
                marquee.style.transform = 'translateX(-' + newScrollPosition + 'px)';
                lastScrollPosition = scrollPosition;
                }

                const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                    } else {
                    window.removeEventListener('scroll', handleScroll);
                    }
                });
                }, {
                threshold: 0.1
                });

                if (marqueeWrapper) {
                observer.observe(marqueeWrapper);
                }
            });

            
        // Desktop slider functionality 
        let currentSlide = 0; 
        const slides = document.querySelectorAll('.slide'); 
        const slideCount = 4; 
        const slideInterval = 5000; // Interval between slides in milliseconds (5 seconds) 
        let slideTimer; 

        
        function showSlide(n) { 
        slides[currentSlide].style.display = 'none'; 
        currentSlide = (n + slideCount) % slideCount; 
        slides[currentSlide].style.display = 'block'; 
        } 
        
        function nextSlide() { 
        showSlide(currentSlide + 1); 
        } 
        
        function prevSlide() { 
        showSlide(currentSlide - 1); 
        } 
        
        function startSlider() { 
        slideTimer = setInterval(nextSlide, slideInterval); 
        } 
        
        // Stop slider to prevent conflicts during manual navigation 
        function stopSlider() { 
        clearInterval(slideTimer); 
        } 
        
        // Start the desktop slider when the page loads 
        //document.addEventListener('DOMContentLoaded', startSlider); 
        
        // Start the mobile slider immediately after defining the function 
        if (document.readyState === 'complete' || document.readyState === 'interactive') { 
            startSlider(); 
        } else { 
            window.addEventListener('load', startSlider); 
        } 
            
        // Previous and next button click events for desktop 
        document.querySelectorAll('.prevBtn').forEach(button => { 
        button.addEventListener('click', () => { 
            stopSlider(); 
            prevSlide(); 
            startSlider(); 
        }); 
        }); 
        
        document.querySelectorAll('.nextBtn').forEach(button => { 
        button.addEventListener('click', () => { 
            stopSlider(); 
            nextSlide(); 
            startSlider(); 
        }); 
        }); 
        
        var videoList, currentPlayer, closeButton, fullScreenIcon, inViewPortBol = !0, videoTagId = [], events = ["ended", "pause", "playing", "play"];
        for (i = 0,
        videoList = document.querySelectorAll("video.pip-scroll-video"); i < videoList.length; i++)
            videoTagId.push("videoPlayerId" + i),
            videoTagId[i] = document.getElementById(videoList[i].id);
        for (i = 0; i < videoTagId.length; i++)
            for (var j in events)
                videoTagId[i].addEventListener(events[j], videoTagPlayerhandler, !1, {
                    passive: !0
                });
        function videoTagPlayerhandler(e) {
            for (i = 0; i < videoTagId.length; i++)
                if (e.target == videoTagId[i] && "playing" == e.type) {
                    currentPlayer = videoTagId[i],
                    closeButton = document.getElementById(currentPlayer.id + "-video-js-close-button"),
                    videoTagId[i].classList.remove("is-paused"),
                    videoTagId[i].classList.add("is-playing");
                    break
                }
            for (i = 0; i < videoTagId.length; i++)
                currentPlayer != videoTagId[i] && (videoTagId[i].classList.remove("is-playing"),
                videoTagId[i].classList.add("is-paused"));
            for (i = 0; i < videoTagId.length; i++)
                e.target == videoTagId[i] && "pause" == e.type && (videoTagId[i].classList.add("is-paused"),
                videoTagId[i].classList.remove("is-playing"));
            for (i = 0; i < videoTagId.length; i++)
                videoTagId[i].classList.contains("is-sticky") && videoTagId[i].pause();
            for (i = 0; i < videoTagId.length; i++)
                e.target == videoTagId[i] && "ended" == e.type && (videoTagId[i].classList.remove("is-playing"),
                videoTagId[i].classList.remove("is-paused"));
            videohandler()
        }
        function onPlayerStateChange(e) {
            for (i = 0; i < videoTagId.length; i++)
                videoTagId[i].classList.contains("is-sticky") && videoTagId[i].pause();
            videohandler()
        }
        function videohandler() {
            currentPlayer && closeButton && closeButton.addEventListener("click", function(e) {
                if (currentPlayer.classList.contains("is-sticky"))
                    for (currentPlayer.classList.remove("is-sticky"),
                    closeFloatVideo(),
                    i = 0; i < videoTagId.length; i++)
                        currentPlayer == videoTagId[i] && videoTagId[i].pause();
                else
                    for (i = 0; i < videoTagId.length; i++)
                        currentPlayer != videoTagId[i] && (videoTagId[i].classList.remove("is-sticky"),
                        closeFloatVideo())
            }, {
                passive: !0
            })
        }
        function inViewPort() {
            if (currentPlayer) {
                var e = currentPlayer.parentElement.getBoundingClientRect();
                return e.bottom > 0 && e.right > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.top < (window.innerHeight || document.documentElement.clientHeight)
            }
        }
        function openFloatVideo() {
            closeButton.style.display = "block"
        }
        function closeFloatVideo() {
            for (let e of document.getElementsByClassName("close-button-pip-scroll"))
                e.style.display = "none";
            closeButton.style.display = "none"
        }
        window.addEventListener("scroll", function() {
            if (inViewPortBol = inViewPort(),
            currentPlayer) {
                if (!inViewPortBol && currentPlayer.classList.contains("is-playing") && null === document.pictureInPictureElement) {
                    for (i = 0; i < videoTagId.length; i++)
                        currentPlayer != videoTagId[i] && videoTagId[i].classList.remove("is-sticky");
                    currentPlayer.classList.add("is-sticky"),
                    openFloatVideo()
                } else
                    currentPlayer.classList.contains("is-sticky") && (currentPlayer.classList.remove("is-sticky"),
                    closeFloatVideo())
            }
        }, {
            passive: !0
        });


            `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
                const marqueeNew = document.querySelector('.marquee-new');
                const marqueeWrapperNew = document.querySelector('.marquee-wrapper-new');

                if (!marqueeNew || !marqueeWrapperNew) return;

                function handleScrollNew() {
                const scrollPositionNew = window.scrollY;
                const scrollSpeedNew = 0.5;
                const marqueeWidthNew = marqueeNew.scrollWidth / 2;

                const newScrollPositionNew = (scrollPositionNew * scrollSpeedNew) % marqueeWidthNew;
                marqueeNew.style.transform = \`translateX(-\${newScrollPositionNew}px)\`;
                }

                const observerNew = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScrollNew);
                    } else {
                    window.removeEventListener('scroll', handleScrollNew);
                    }
                });
                }, { threshold: 0.1 });

                observerNew.observe(marqueeWrapperNew);
            });
            `,
        }}
      />
    </>
  );
}
