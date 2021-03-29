#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <ctype.h>

#define BFS (1024 * 1024)
#define MALLOC(x,y) x = malloc(sizeof(*(x)) * (y))

int		corresponding_bracket(char *s)
{
	s += sizeof "[_0xFF0A[" - 1;
	while (isdigit(*s))
		s++;
	if (s[0] == ']' && s[1] == ']')
		return (1);
	return (0);
}

void	replace(char **dst, char **src, int len)
{
	char *found;
	char **print;
	char **rplc;
	char *num;
	int	occur;

	MALLOC(print, len + 1);
	print[len] = NULL;
	for (int i = 0; dst[i]; i++)
	{
		occur = 0;
		found = strstr(dst[i], "_0xFF0A[");
		while (found)
		{
			found = strstr(found + 1, "_0xFF0A[");
			occur++;
		}
		MALLOC(rplc, occur + 1);
		rplc[occur] = NULL;
		found = strstr(dst[i], "_0xFF0A[");
		occur = 0;
		while (found)
		{
			num = found + 8;
			rplc[occur] = src[atoi(num)];
			found = strstr(found + 1, "_0xFF0A[");
			occur++;
		}
		occur = 0;
		for (int j = 0; dst[i][j]; j++)
		{
			if (strstr(&dst[i][j], "[_0xFF0A[") == &dst[i][j] && corresponding_bracket(&dst[i][j]) && dst[i][j - 1] != ' ')
			{
				printf(".%.*s", (int)strlen(rplc[occur]) - 2, &rplc[occur][1]);
				occur++;
				j += 9;
				while (dst[i][j] && isdigit(dst[i][j]))
					j++;
				j++;
			}
			else if (strstr(&dst[i][j], "_0xFF0A[") == &dst[i][j])
			{
				printf("%s", rplc[occur++]);
				j += 8;
				while (dst[i][j] && isdigit(dst[i][j]))
					j++;
			}
			else
				printf("%c", dst[i][j]);
		}
		printf("\n");
	}
}

char	*ft_strjoin(char *s1, char *s2)
{
	char	*ret;
	size_t	l1, l2;

	l1 = strlen(s1);
	l2 = strlen(s2);
	MALLOC(ret, l1 + l2 + 1);
	ret[l1 + l2] = '\0';
	strncpy(ret, s1, l1);
	strncpy(ret + l1, s2, l2);
	return (ret);
}

char	**split(char *join, char c)
{
	char	**ret, *src;
	int		i, cnt, len;

	i = 0;
	cnt = 1;
	while (join[i])
	{
		if (join[i] == c)
			cnt++;
		i++;
	}
	MALLOC(ret, cnt + 1);
	ret[cnt] = NULL;
	i = 0;
	len = 0;
	cnt = 0;
	src = join;
	while (join[i])
	{
		if (join[i] == c)
		{
			MALLOC(ret[cnt], len + 1);
			strncpy(ret[cnt], src, len);
			ret[cnt][len] = '\0';
			cnt++;
			len = 0;
			src = &join[i + 1];
		}
		else
			len++;
		i++;
	}
	return (ret);
}

char	*loadfile(char *file)
{
	char	*join, *tmp, *temp, *src;
	int		rd_ret;
	int		fd;
	int		cnt;
	int		len;
	int		i;

	fd = open(file, O_RDONLY);
	MALLOC(join, BFS + 1);
	memset(join, 0, BFS + 1);
	rd_ret = read(fd, join, BFS);
	while (rd_ret == BFS)
	{
		MALLOC(tmp, BFS + 1);
		memset(tmp, 0, BFS + 1);
		rd_ret = read(fd, tmp, BFS);
		temp = join;
		join = ft_strjoin(join, tmp);
		free(temp);
		free(tmp);
	}
	return (join);
}

int		main()
{
	char **strings = split(loadfile("strings.txt"), '\n');
	char **js = split(loadfile("unnamed_script_1.js"), '\n');
	int i;
	for (i = 0; strings[i]; i++);
	replace(js, strings, i);
	// int i;
	// for (i = 0; strings[i]; i++)
	// 	printf("%s\n", strings[i]);
	// printf("i = %d\n", i);
}
