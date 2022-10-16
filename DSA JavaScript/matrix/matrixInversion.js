  /* Gabriel Giordano's implementation from C to JavaScript with some modifications*/
  function matrixInverse(a) {
      let pivot = 0
      for (let p = a.length; p-- > 0;) {
          pivot = a[p][p]

          if (Math.abs(pivot) < 1e-5)
              return 0

          for (let i = a.length; i-- > 0;)
              a[i][p] /= -pivot

          for (let i = a.length; i-- > 0;)
              if (i != p)
                  for (let j = a.length; j-- > 0;)
                      if (j != p)
                          a[i][j] += a[p][j] * a[i][p]

          for (let j = a.length; j-- > 0;)
              a[p][j] /= pivot

          a[p][p] = 1 / pivot
          console.log(a[p][p])

      }

      return a
  }


  let matrixA = [
      [1, 2, 3],
      [3, 1, 2],
      [2, 3, 2]
  ];
  matrixInverse(matrixA)
  //   console.log(matrixA[2][2])