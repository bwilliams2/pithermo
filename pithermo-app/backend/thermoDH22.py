from Adafruit_DHT import DHT22, read_retry

def get_temp_humdity():
    humidity, temp = read_retry(DHT22, 4)
    return {
        "humidity": humidity,
        "temp": temp
    }