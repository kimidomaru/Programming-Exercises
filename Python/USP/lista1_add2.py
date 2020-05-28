totalSegs = int(input("Por favor, entre com o número que deseja converter: "))
dias = totalSegs // (3600 * 24)
horasRestantes = totalSegs % (3600 * 24)
horas = horasRestantes // 3600
minutosRestantes = horasRestantes % 3600
minutos = minutosRestantes // 60
segundosRestantes = minutosRestantes % 60

print(dias,"dias,",horas,"horas,",minutos,"minutos e",segundosRestantes,"segundos.")

