import os
from docx2pdf import convert

def convertir_word_a_pdf(ruta_carpeta):
    if not os.path.exists(ruta_carpeta):
        print(f"La ruta '{ruta_carpeta}' no existe.")
        return

    print(f"Buscando archivos Word en: {ruta_carpeta}")
    
    # Busca todos los archivos .docx en la ruta
    archivos = [f for f in os.listdir(ruta_carpeta) if f.endswith('.docx') and not f.startswith('~$')]
    
    if not archivos:
        print("No se encontraron archivos .docx en esta carpeta.")
        return

    for archivo in archivos:
        ruta_word = os.path.join(ruta_carpeta, archivo)
        print(f"Convirtiendo: {archivo}...")
        try:
            convert(ruta_word)
        except Exception as e:
            print(f"Error al convertir {archivo}: {e}")
            
    print("¡Proceso de conversión finalizado!")

# DETECTA AUTOMÁTICAMENTE LA RUTA DONDE ESTÁ ESTE SCRIPT
ruta_mis_archivos = os.path.dirname(os.path.abspath(__file__))

# Ejecuta la función con la ruta dinámica
convertir_word_a_pdf(ruta_mis_archivos)
