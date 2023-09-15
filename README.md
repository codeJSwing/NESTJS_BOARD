<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Installation

```bash
# nest client install
$ npm i -g @nest/cli

# install to current location
$ nest new ./

# check nest version
$ nest --version
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Use nest command
```bash
# use nestcli
$ nest

# generate
$ g

# controller schematic + controller name
$ controller + (name)

# do not make test code 
$ --no-spec
```

## Use Prettier in webstorm
```bash
# Languages & Frameworks -> Javascript -> Prettier
$ On 'Reformat Code' action [check]
```

## Prettier Setting
```bash
# 탭 간격
$ "tabWidth": 4

# 작은 따옴표 사용
$ "singleQuote": true

# 마지막 요소 뒤에 쉼표 사용
# (요소를 추가하거나 삭제할 때 코드 변경이 더 쉬워진다.)
$ "trailingComma": "all"

# 객체 리터럴에서 중괄호 사이에 공백 삽입
$ "bracketSpacing": true

# 객체 리터럴의 대괄호 {}를 같은 줄에 표시할지 여부를 지정
$ "bracketSameLine": true

# 문장 끝에 세미콜론을 삽입
$ "semi": true