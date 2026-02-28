import sys
from PIL import Image

input_path = 'public/hero-cans.jpg'
crop_path = 'public/hero-cans-crop.png'

try:
    with Image.open(input_path) as img:
        width, height = img.size
        crop_top = int(height * 0.17)
        crop_bottom = int(height * 0.82)
        cropped_img = img.crop((0, crop_top, width, crop_bottom))
        cropped_img.save(crop_path)
    print(f"Successfully cropped image and saved to {crop_path}")
except Exception as e:
    print(f"Error cropping image: {e}")
    sys.exit(1)
