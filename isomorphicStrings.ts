function isIsomorphic(s: string, t: string): boolean {
  let maps: boolean = true;
  let letterMappingForS: any = {};
  let letterMappingForT: any = {};
  let i: number = 0;

  for (i; i < s.length; i++) {
    if (!letterMappingForS[s[i]]) {
      letterMappingForS[s[i]] = t[i];
    } else if (letterMappingForS[s[i]] !== t[i]) {
      maps = false;
      break;
    }
  }
  for (i = 0; i < t.length; i++) {
    if (!letterMappingForT[t[i]]) {
      letterMappingForT[t[i]] = s[i];
    } else if (letterMappingForT[t[i]] !== s[i]) {
      maps = false;
      break;
    }
  }

  return maps;
}
