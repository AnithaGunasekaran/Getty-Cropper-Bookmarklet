(function() {

			var head = document.getElementsByTagName('head')[0];

			var link = document.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = 'https://s3-ap-southeast-2.amazonaws.com/poc-mercerbell/cropper.css';
			head.appendChild(link);

			link = document.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = 'https://s3-ap-southeast-2.amazonaws.com/poc-mercerbell/main.css?v=1';
			head.appendChild(link);

			link = document.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css';
			head.appendChild(link);

			var loaded = false;
			var script = document.createElement('script');
			script.src = 'https://s3-ap-southeast-2.amazonaws.com/poc-mercerbell/cropper.js';
			head.appendChild(script);

			var script1 = document.createElement('script');
			script1.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js';
			head.appendChild(script1);

		
			var style = document.createElement('style');
			style.type = 'text/css';
			
			style.innerHTML = [
				'.container{width:1400px;margin:20px auto; transform: translateY(-50%); top:50%}.clearfix{display:block;clear:both}.modal-footer,.modal-header{border:none} #download,.docs-toggles .btn-primary{color:#FFFFFF !important;font-size:16px !important;padding:15px 30px;border:none}.docs-toggles .btn-primary{background:#45bebd}.docs-toggles .btn-primary:hover{background:#38a8a5}.docs-toggles .active{background:#248984}#download{background:#e94744}#download:hover{background:#d62b2b} label span{color:#FFFFFF !important;font-size:16px !important;}'
			].join('');

			head.appendChild(style);

		document.getElementsByTagName('head')[0].appendChild(style);


			script.onload = script.onreadystatechange = function() {

			if (!loaded && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {

				loaded = true;
				
				var script2 = document.createElement('script');
				script2.src = 'http://danml.com/js/download.js?v3.1';
				head.appendChild(script2);


				var imagePath = $('figure img').attr('src'); 

				var $e = $('<div style=\'background-color: rgba(0, 0, 0, 0.9); z-index: 99; \' id=\'overlay\'></div>');

				$('body').append($e);

				$e.css({
					position: 'absolute',
					top: '0',
					right: '0',
					width: '100%',					
					height: '100%'    
				});

				$e.append('<div class=\'container\'><div class=\'row\'><div class=\'col-md-9\'> <div class=\'img-container\'> <img src=\''+imagePath+'\' alt=\'Picture\'></div></div><div class=\'col-md-3\'><div class=\'docs-preview clearfix\'> <div class=\'img-preview preview-lg\'></div></div></div></div></div>');

		

				$('.container').append('<div class=\'row\'><div style=\'display: none\' class=\'docs-data\'> <div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataX\'>X</label><input type=\'text\' class=\'form-control\' id=\'dataX\' placeholder=\'x\'><span class=\'input-group-addon\'>px</span> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataY\'>Y</label><input type=\'text\' class=\'form-control\' id=\'dataY\' placeholder=\'y\'><span class=\'input-group-addon\'>px</span> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataWidth\'>Width</label><input type=\'text\' class=\'form-control\' id=\'dataWidth\' placeholder=\'width\'><span class=\'input-group-addon\'>px</span> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataHeight\'>Height</label><input type=\'text\' class=\'form-control\' id=\'dataHeight\' placeholder=\'height\'><span class=\'input-group-addon\'>px</span> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataRotate\'>Rotate</label><input type=\'text\' class=\'form-control\' id=\'dataRotate\' placeholder=\'rotate\'><span class=\'input-group-addon\'>deg</span> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataScaleX\'>ScaleX</label><input type=\'text\' class=\'form-control\' id=\'dataScaleX\' placeholder=\'scaleX\'> </div><div class=\'input-group input-group-sm\'><label class=\'input-group-addon\' for=\'dataScaleY\'>ScaleY</label><input type=\'text\' class=\'form-control\' id=\'dataScaleY\' placeholder=\'scaleY\'> </div></div></div>');

				$('.container').append('<div class=\'row\' id=\'actions\'> <div class=\'col-md-6 docs-toggles\'> <div class=\'btn-group docs-aspect-ratios\' data-toggle=\'buttons\'> <label class=\'btn btn-primary active\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio1\' name=\'aspectRatio\' value=\'0.71428571428\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 5 / 7\'> 5:7 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio2\' name=\'aspectRatio\' value=\'1.4\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 4 / 3\'>7:5 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio3\' name=\'aspectRatio\' value=\'1\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 1 / 1\'> 1:1 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio4\' name=\'aspectRatio\' value=\'2\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 2 / 1\'> 2:1 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio6\' name=\'aspectRatio\' value=\'4\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 4 / 1\'> 4:1 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio6\' name=\'aspectRatio\' value=\'3\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 3 / 1\'> 3:1 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio7\' name=\'aspectRatio\' value=\'0.66666666666\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 2 / 3\'> 2:3 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio8\' name=\'aspectRatio\' value=\'8\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 8 / 1\'> 8:1 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio9\' name=\'aspectRatio\' value=\'0.25\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 1 / 4\'> 1:4 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio9\' name=\'aspectRatio\' value=\'1.25\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 5 / 4\'> 5:4 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio9\' name=\'aspectRatio\' value=\'0.5\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: 1 / 2\'> 1:2 </span> </label> <label class=\'btn btn-primary\'> <input type=\'radio\' class=\'sr-only\' id=\'aspectRatio5\' name=\'aspectRatio\' value=\'NaN\'> <span class=\'docs-tooltip\' data-toggle=\'tooltip\' title=\'aspectRatio: NaN\'> Free </span> </label> </div></div><div class=\'col-md-9 docs-buttons\'><div class=\'docs-cropped\' id=\'getCroppedCanvasModal\' tabindex=\'-1\'><button class=\'btn-primary\' id=\'download\' data-method=\'download\' href=\'javascript:void(0);\' download=\'crop.jpg\'>Download</button></div></div></div>');
		

				
	
					var Cropper = window.Cropper;
					var URL = window.URL || window.webkitURL;
					var container = document.querySelector('.img-container');
					var image = container.getElementsByTagName('img').item(0);
					var downloadCrop = document.getElementById('download');
					var actions = document.getElementById('actions');
					var dataX = document.getElementById('dataX');
					var dataY = document.getElementById('dataY');
					var dataHeight = document.getElementById('dataHeight');
					var dataWidth = document.getElementById('dataWidth');
					var dataRotate = document.getElementById('dataRotate');
					var dataScaleX = document.getElementById('dataScaleX');
					var dataScaleY = document.getElementById('dataScaleY');
					var options = {
							aspectRatio: 4 / 3,
							preview: '.img-preview',
							ready: function (e) {
							console.log(e.type);
							},
							cropstart: function (e) {
							console.log(e.type, e.detail.action);
							},
							cropmove: function (e) {
							console.log(e.type, e.detail.action);
							},
							cropend: function (e) {
							console.log(e.type, e.detail.action);
							},
							crop: function (e) {
								var data = e.detail;					
								dataX.value = Math.round(data.x);
								dataY.value = Math.round(data.y);
								dataHeight.value = Math.round(data.height);
								dataWidth.value = Math.round(data.width);
								dataRotate.value = typeof data.rotate !== 'undefined' ? data.rotate : '';
								dataScaleX.value = typeof data.scaleX !== 'undefined' ? data.scaleX : '';
								dataScaleY.value = typeof data.scaleY !== 'undefined' ? data.scaleY : '';
							},
							zoom: function (e) {
							console.log(e.type, e.detail.ratio);
							}
						};

						var cropper = new Cropper(image, options);

						var originalImageURL = image.src;
						var uploadedImageURL;

						if (!document.createElement('canvas').getContext) {
							$('button[data-method=\'getCroppedCanvas\']').prop('disabled', true);
						}

						if (typeof document.createElement('cropper').style.transition === 'undefined') {
							$('button[data-method=\'rotate\']').prop('disabled', true);
							$('button[data-method=\'scale\']').prop('disabled', true);
						}


					
					

				
						actions.querySelector('.docs-toggles').onchange = function (event) {
							var e = event || window.event;
							var target = e.target || e.srcElement;
							var cropBoxData;
							var canvasData;
							var isCheckbox;
							var isRadio;

							if (!cropper) {
							return;
							}

							if (target.tagName.toLowerCase() === 'label') {
							target = target.querySelector('input');
							}

							isCheckbox = target.type === 'checkbox';
							isRadio = target.type === 'radio';

							if (isCheckbox || isRadio) {
							if (isCheckbox) {
								options[target.name] = target.checked;
								cropBoxData = cropper.getCropBoxData();
								canvasData = cropper.getCanvasData();

								options.ready = function () {
								console.log('ready');
								cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
								};
							} else {
								options[target.name] = target.value;
								options.ready = function () {
								console.log('ready');
								};
							}

						
							cropper.destroy();
							cropper = new Cropper(image, options);
							}
						};


					
							actions.querySelector('.docs-buttons').onclick = function (event) {
							var e = event || window.event;
							var target = e.target || e.srcElement;
							var result;
							var input;
							var data;

							if (!cropper) {
							return;
							}

							while (target !== this) {
							if (target.getAttribute('data-method')) {
								break;
							}

							target = target.parentNode;
							}

							if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
							return;
							}

							data = {
							method: target.getAttribute('data-method'),
							target: target.getAttribute('data-target'),
							option: target.getAttribute('data-option'),
							secondOption: target.getAttribute('data-second-option')
							};

							if (data.method) {
							if (typeof data.target !== 'undefined') {
								input = document.querySelector(data.target);

								if (!target.hasAttribute('data-option') && data.target && input) {
								try {
									data.option = JSON.parse(input.value);
								} catch (e) {
									console.log(e.message);
								}
								}
							}

							if(data.method == 'download'){		  
								result = cropper['getCroppedCanvas'](data.option, data.secondOption); 
							}
							else{
								result = cropper[data.method](data.option, data.secondOption);
							}
													

							switch (data.method) {
								case 'scaleX':
								case 'scaleY':
								target.setAttribute('data-option', -data.option);
								break;

								case 'getCroppedCanvas':
									if (result) {
										
									
										if (!downloadCrop.disabled) {
											downloadCrop.href = result.toDataURL('image/jpeg');
										}
									}

								break;

								 case 'download':
									if (result) {

									
									
										download(result.toDataURL('image/jpeg'),'crop.jpeg', 'image/jpeg');
										
									}

								break;

								case 'destroy':
								cropper = null;

								if (uploadedImageURL) {
									URL.revokeObjectURL(uploadedImageURL);
									uploadedImageURL = '';
									image.src = originalImageURL;
								}

								break;
							}

							if (typeof result === 'object' && result !== cropper && input) {
								try {
								input.value = JSON.stringify(result);
								} catch (e) {
								console.log(e.message);
								}
							}
							}
						};
							
						document.body.onkeydown = function (event) {
							var e = event || window.event;

							if (!cropper || this.scrollTop > 300) {
							return;
							}

							switch (e.keyCode) {
							case 37:
								e.preventDefault();
								cropper.move(-1, 0);
								break;

							case 38:
								e.preventDefault();
								cropper.move(0, -1);
								break;

							case 39:
								e.preventDefault();
								cropper.move(1, 0);
								break;

							case 40:
								e.preventDefault();
								cropper.move(0, 1);
								break;
							}
						};



				
				
			}

			head.appendChild(script);

		};

}());
