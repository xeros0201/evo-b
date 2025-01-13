pub fn apply() -> String {
    r#"
        Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
        });

        if (!window.chrome) {
            Object.defineProperty(window, 'chrome', {
                writable: true,
                enumerable: false,
                configurable: true,
                value: {
                    runtime: {
                        PlatformOs: {
                            mac: false,
                            win: true,
                            android: false,
                            cros: false,
                            linux: false,
                            openbsd: false,
                        },
                        PlatformArch: {
                            arm: false,
                            arm64: false,
                            x86_32: false,
                            x86_64: true,
                        },
                        PlatformNaclArch: {
                            arm: false,
                            x86_32: false,
                            x86_64: true,
                        },
                        loadTimes: () => {},
                        getManifest: () => ({}),
                    },
                    webstore: {
                        onInstallStageChanged: {},
                        onDownloadProgress: {},
                    },
                    app: {
                        isInstalled: false,
                        InstallState: {
                            DISABLED: 'disabled',
                            INSTALLED: 'installed',
                            NOT_INSTALLED: 'not_installed'
                        },
                        RunningState: {
                            CANNOT_RUN: 'cannot_run',
                            READY_TO_RUN: 'ready_to_run',
                            RUNNING: 'running'
                        }
                    }
                },
            });
        }

        Object.defineProperty(navigator, 'plugins', {
            get: () => [
                { name: 'Chrome PDF Plugin', filename: 'internal-pdf-viewer' },
                { name: 'Chrome PDF Viewer', filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai' },
                { name: 'Native Client', filename: 'internal-nacl-plugin' },
            ],
        });
        Object.defineProperty(navigator, 'languages', {
            get: () => ['en-US', 'en'],
        });

        let realUA = navigator.userAgent.replace('HeadlessChrome', 'Chrome');
        Object.defineProperty(navigator, 'userAgent', {
            get: () => realUA,
        });

        const getParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(param) {
            // UNMASKED_VENDOR_WEBGL
            if (param === 37445) {
                return 'Intel Inc.';
            }
            // UNMASKED_RENDERER_WEBGL
            if (param === 37446) {
                return 'Intel Iris OpenGL Engine';
            }
            return getParameter.apply(this, [param]);
        };

        const originalQuery = window.navigator.permissions.query;
        window.navigator.permissions.query = (parameters) => {
            if (parameters.name === 'notifications') {
                return Promise.resolve({ state: 'granted' });
            }
            return originalQuery(parameters);
        };

        if ('selenium' in window) {
            delete window['selenium'];
        }
        if ('domAutomation' in window) {
            delete window['domAutomation'];
        }
        if ('domAutomationController' in window) {
            delete window['domAutomationController'];
        }

        // Thuộc tính ẩn danh bổ sung
        Object.defineProperty(navigator, 'deviceMemory', {
            get: () => 8,
        });

        Object.defineProperty(navigator, 'hardwareConcurrency', {
            get: () => 8,
        });

        Object.defineProperty(window, 'screen', {
            get: () => ({
                width: 1920,
                height: 1080,
                colorDepth: 24,
                pixelDepth: 24,
            }),
        });

        Object.defineProperty(navigator, 'connection', {
            get: () => ({
                effectiveType: '4g',
                downlink: 10,
                rtt: 50,
                saveData: false,
            }),
        });

        const originalToString = Function.prototype.toString;
        const fakeScript = /a^/;
        
        Function.prototype.toString = function() {
            if (this === navigator.webdriver) {
                return 'function () { [native code] }';
            }
            return originalToString.apply(this, arguments);
        };

        Object.defineProperty(navigator, 'maxTouchPoints', {
            get: () => 0,
        });
        
        Object.defineProperty(navigator, 'msMaxTouchPoints', {
            get: () => 0,
        });

        (function simulateMouseMovement() {
          
            let currentX = 0;
            let currentY = 0;
            
            function moveRandomly() {
                
                const docWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                const docHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                
             
                const targetX = Math.floor(Math.random() * docWidth);
                const targetY = Math.floor(Math.random() * docHeight);
                
              
                const stepCount = 20 + Math.floor(Math.random() * 10);
                let step = 0;
                
             
                const stepX = (targetX - currentX) / stepCount;
                const stepY = (targetY - currentY) / stepCount;
                
                 
                function animate() {
                    currentX += stepX;
                    currentY += stepY;

                  
                    const event = new MouseEvent("mousemove", {
                        clientX: currentX,
                        clientY: currentY,
                        movementX: stepX,
                        movementY: stepY,
                        bubbles: true,
                        cancelable: true
                    });
                    document.dispatchEvent(event);

                   
                    step++;
                    if (step < stepCount) {
                        requestAnimationFrame(animate);
                    }
                }

                
                animate();
            }

            
            setInterval(() => {
                moveRandomly();
                    }, 3000 + Math.random() * 4000);
                })();
        "#.to_string()
} 

 