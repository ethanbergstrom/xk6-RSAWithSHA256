package xk6_rsa

import (
	"github.com/Lyafei/go-rsa"
	"go.k6.io/k6/js/modules"
)

func init() {
	modules.Register("k6/x/rsa", new(Rsa))
}

type Rsa struct{}

func (r *Rsa) SignFromString(data, privateKey string) (string, error) {
	return gorsa.SignSha256WithRsa(data, privateKey)
}
