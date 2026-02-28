import sys
import subprocess
import os

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    install('rembg')
    install('Pillow')
    from rembg import remove
    from PIL import Image

input_path = 'public/hero-cans.jpg'
output_path = 'public/hero-cans-transparent.png'

if not os.path.exists(input_path):
    print(f"Input file not found: {input_path}")
    sys.exit(1)

print("Processing image...")
try:
    with Image.open(input_path) as img:
        width, height = img.size
        # Crop 17% from top and 20% from bottom
        crop_top = int(height * 0.17)
        crop_bottom = int(height * 0.82)
        cropped_img = img.crop((0, crop_top, width, crop_bottom))
        
        # Remove background with alpha matting to remove soft shadows
        output_img = remove(cropped_img, alpha_matting=True, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10, alpha_matting_erode_size=10)
        output_img.save(output_path)
    print(f"Successfully processed image and saved to {output_path}")
except Exception as e:
    print(f"Error processing image: {e}")
    sys.exit(1)
