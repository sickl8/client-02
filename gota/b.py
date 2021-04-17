import sys


# filename = sys.argv[1]
filename = "deproper_script.js"
f = open(filename)
stg = f.read()
i = 0
while i < len(stg):
	if stg[i:].find("['") == 0 and (stg[i - 1].isalnum() or stg[i - 1] == ']'):
		print('.', end='')
		i += 2
		while i < len(stg) and stg[i:].find("']") != 0:
			print(stg[i], end='')
			i += 1
		if i >= len(stg):
			break
		i += 1
	else:
		print(stg[i], end='')
	i += 1
